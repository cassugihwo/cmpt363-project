/* This file contains prompts for the AI text refinement functionality */

export const testPrompt = "Write a haiku about Hu Tao from Genshin Impact.";

export const startPrompt = `# Rewrite Text
I want some text to be rewritten.
`;

export const createStartPrompt = `# Write some text
I want you to help me write some text. I will give you some requirements, and I want you to write text based on those requirements.
`;

export const sliderPrompt = [
  `## Slider Requirements
I am going to give you a list of 'sliders' describing the requirements of the rewritten text.
On a scale of 0-100, rewrite the text with:
`,
  `
## Text to rewrite
Finally, here is the text I want you to rewrite:
`,
  `-- (end of text) --

If you see any html tags in the text I provided, just ignore it, and only look at the text. 
Apply all requirements when rewriting text. Apply all sliders. Do not include text styling (bold, italics, etc.) in the rewritten text.
Only output the rewritten text.`,
];

export const promptPrompt = [
  `## List of Prompts
I am going to give you a list of prompts. Each prompt relates to how I want the text to be rewritten. 
For example: a prompt could be "Make the text more formal". This means that I want the rewritten text to be more formal than the original text. It could also be "This is for a class assignment". This means I am providing you the context of the text (in this case, the text is for a class assignment). These are just examples, the actual prompts I give you can be anything. Just understand that each prompt is a requirement for how I want the text to be rewritten.

Here is the list of prompts:
`,
  `
## Text to rewrite
Finally, here is the text I want you to rewrite:
`,
  `-- (end of text) --

If you see any html tags in the text I provided, just ignore it, and only look at the text. 
Apply all requirements when rewriting text. Apply all prompts. Do not include text styling (bold, italics, etc.) in the rewritten text.
Only output the rewritten text.`,
];

export const createPrompt = [
  `## List of Prompts
I am going to give you a list of prompts. Each prompt relates to how I want the text to be written. 

Here is my list of prompts:
`,
  `
Apply all requirements when writing text. Apply all prompts. Do not include text styling (bold, italics, etc.) in the text.
Only output the written text.`,
];

export const additionalConfigPrompt = `
## Additional requirements
Additionally, here are some additional requirements for the text. 
`;
export function buildAdvancedConfigText(
  advancedOptions: any, 
  includeAdvancedOptions: boolean): string {
  const minWords =
    advancedOptions && advancedOptions.minWords != null
      ? `- Minimum words: ${advancedOptions.minWords}\n`
      : "";
  const maxWords =
    advancedOptions && advancedOptions.maxWords != null
      ? `- Maximum words: ${advancedOptions.maxWords}\n`
      : "";
  const includeAll =
    advancedOptions && advancedOptions.includeAllWords != ""
      ? `- Include all these words: ${advancedOptions.includeAllWords}\n`
      : "";

  const includeExactPhrases =
    advancedOptions && advancedOptions.includeExactPhrases != ""
      ? `- Include these exact phrases (separated by commas): ${advancedOptions.includeExactPhrases}\n`
      : "";
  const includeAny =
    advancedOptions && advancedOptions.includeAnyWords != ""
      ? `- Include any of these words: ${advancedOptions.includeAnyWords}\n`
      : "";
  const includeNone =
    advancedOptions && advancedOptions.includeNoneWords != ""
      ? `- Include none of these words: ${advancedOptions.includeNoneWords}\n`
      : "";
  
  const advancedConfigText = includeAdvancedOptions
    ? `${additionalConfigPrompt}` +
      minWords +
      maxWords +
      includeAll +
      includeExactPhrases +
      includeAny +
      includeNone
    : "";

  return advancedConfigText;
}

export function createBuildAdvancedConfigText(
  insertedCharacterCount: number,
  toggleSelectInsertion: boolean,
  advancedOptions: any,
  includeAdvancedOptions: boolean,
): string {

  const charCount = toggleSelectInsertion && insertedCharacterCount > 5    
  ? `- Write around this many words: ${Math.round(insertedCharacterCount / 5)} words\n`
    : "";

  const minWords =
    advancedOptions &&
    advancedOptions.minWords != null &&
    !toggleSelectInsertion
      ? `- Minimum words: ${advancedOptions.minWords}\n`
      : "";
  const maxWords =
    advancedOptions &&
    advancedOptions.maxWords != null &&
    !toggleSelectInsertion
      ? `- Maximum words: ${advancedOptions.maxWords}\n`
      : "";
  const includeAll =
    advancedOptions && advancedOptions.includeAllWords != ""
      ? `- Include all these words: ${advancedOptions.includeAllWords}\n`
      : "";

  const includeExactPhrases =
    advancedOptions && advancedOptions.includeExactPhrases != ""
      ? `- Include these exact phrases (separated by commas): ${advancedOptions.includeExactPhrases}\n`
      : "";
  const includeAny =
    advancedOptions && advancedOptions.includeAnyWords != ""
      ? `- Include any of these words: ${advancedOptions.includeAnyWords}\n`
      : "";
  const includeNone =
    advancedOptions && advancedOptions.includeNoneWords != ""
      ? `- Include none of these words: ${advancedOptions.includeNoneWords}\n`
      : "";

  const advancedConfigText = includeAdvancedOptions
    ? `${additionalConfigPrompt}` +
      charCount +
      minWords +
      maxWords +
      includeAll +
      includeExactPhrases +
      includeAny +
      includeNone
    : "";

  return advancedConfigText;
}

