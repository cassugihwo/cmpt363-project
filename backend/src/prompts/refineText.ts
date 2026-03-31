/* This file contains prompts for the AI text refinement functionality */

export const testPrompt = "Write a haiku about Hu Tao from Genshin Impact.";

export const startPrompt = `# Rewrite Text
I want some text to be rewritten.
`;

export const sliderPrompt = [
  `## Slider Requirements
I am going to give you an array of 'sliders' describing the requirements of the rewritten text.
Here is an example of a slider: {"label":"Tone","level0":"Casual","level100":"Professional","value":40}. What this slider means: if tone was a scale of 0 to 100, with Casual ("level0") at 0 and Professional ("level100") at 100, I would want the rewritten text to be rewritten at level 40 ("value")—in between Casual and Professional but leaning slightly towards Casual. Keep in mind this is just an example. Use the actual sliders I will provide later.

Here is the array of sliders:
`,
`
## Text to rewrite
Finally, here is the text I want you to rewrite:
`,
`
If you see any html tags in the text I provided, just ignore it, and only look at the text. 
Apply all requirements when rewriting text. Apply all sliders.
Only output the rewritten text.`,
];

export const promptPrompt = [
  `## Array of Prompts
I am going to give you an array of prompts I have for the rewritten text. The array contains 'userPrompt's.
Each userPrompt relates to how I want the text to be rewritten. 
For example, a userPrompt could be "Make the text more formal". This means that I want the rewritten text to be more formal than the original text. It could also be "This is for a class assignment". This means I am providing you the context of the text (in this case, the text is for a class assignment). Try to understand each userPrompt accordingly. 

Here is the array of prompts:
`,
`
## Text to rewrite
Finally, here is the text I want you to rewrite:
`,
`
If you see any html tags in the text I provided, just ignore it, and only look at the text. 
Apply all requirements when rewriting text. Apply all prompts.
Only output the rewritten text.`,
];

export const additionalConfigPrompt =
  `
## Additional requirements
Additionally, I also have some additional requirements for the rewritten text. If the values of minWords and maxWords are null, just ignore them. Ignore any other empty values.
Here are the additional requirements:
`;