"use strict";
/* This file contains prompts for the AI text refinement functionality */
exports.__esModule = true;
exports.createBuildAdvancedConfigText = exports.buildAdvancedConfigText = exports.additionalConfigPrompt = exports.createPrompt = exports.promptPrompt = exports.sliderPrompt = exports.createStartPrompt = exports.startPrompt = exports.testPrompt = void 0;
exports.testPrompt = "Write a haiku about Hu Tao from Genshin Impact.";
exports.startPrompt = "# Rewrite Text\nI want some text to be rewritten.\n";
exports.createStartPrompt = "# Write some text\nI want you to help me write some text. I will give you some requirements, and I want you to write text based on those requirements.\n";
exports.sliderPrompt = [
    "## Slider Requirements\nI am going to give you a list of 'sliders' describing the requirements of the rewritten text.\nOn a scale of 0-100, rewrite the text with:\n",
    "\n## Text to rewrite\nFinally, here is the text I want you to rewrite:\n",
    "-- (end of text) --\n\nIf you see any html tags in the text I provided, just ignore it, and only look at the text. \nApply all requirements when rewriting text. Apply all sliders. Do not include text styling (bold, italics, etc.) in the rewritten text.\nOnly output the rewritten text.",
];
exports.promptPrompt = [
    "## List of Prompts\nI am going to give you a list of prompts. Each prompt relates to how I want the text to be rewritten. \nFor example: a prompt could be \"Make the text more formal\". This means that I want the rewritten text to be more formal than the original text. It could also be \"This is for a class assignment\". This means I am providing you the context of the text (in this case, the text is for a class assignment). These are just examples, the actual prompts I give you can be anything. Just understand that each prompt is a requirement for how I want the text to be rewritten.\n\nHere is the list of prompts:\n",
    "\n## Text to rewrite\nFinally, here is the text I want you to rewrite:\n",
    "-- (end of text) --\n\nIf you see any html tags in the text I provided, just ignore it, and only look at the text. \nApply all requirements when rewriting text. Apply all prompts. Do not include text styling (bold, italics, etc.) in the rewritten text.\nOnly output the rewritten text.",
];
exports.createPrompt = [
    "## List of Prompts\nI am going to give you a list of prompts. Each prompt relates to how I want the text to be written. \n\nHere is my list of prompts:\n",
    "\nApply all requirements when writing text. Apply all prompts. Do not include text styling (bold, italics, etc.) in the text.\nOnly output the written text.",
];
exports.additionalConfigPrompt = "\n## Additional requirements\nAdditionally, here are some additional requirements for the text. \n";
function buildAdvancedConfigText(advancedOptions, includeAdvancedOptions) {
    var minWords = advancedOptions && advancedOptions.minWords != null
        ? "- Minimum words: " + advancedOptions.minWords + "\n"
        : "";
    var maxWords = advancedOptions && advancedOptions.maxWords != null
        ? "- Maximum words: " + advancedOptions.maxWords + "\n"
        : "";
    var includeAll = advancedOptions && advancedOptions.includeAllWords != ""
        ? "- Include all these words: " + advancedOptions.includeAllWords + "\n"
        : "";
    var includeExactPhrases = advancedOptions && advancedOptions.includeExactPhrases != ""
        ? "- Include these exact phrases (separated by commas): " + advancedOptions.includeExactPhrases + "\n"
        : "";
    var includeAny = advancedOptions && advancedOptions.includeAnyWords != ""
        ? "- Include any of these words: " + advancedOptions.includeAnyWords + "\n"
        : "";
    var includeNone = advancedOptions && advancedOptions.includeNoneWords != ""
        ? "- Include none of these words: " + advancedOptions.includeNoneWords + "\n"
        : "";
    var advancedConfigText = includeAdvancedOptions
        ? "" + exports.additionalConfigPrompt +
            minWords +
            maxWords +
            includeAll +
            includeExactPhrases +
            includeAny +
            includeNone
        : "";
    return advancedConfigText;
}
exports.buildAdvancedConfigText = buildAdvancedConfigText;
function createBuildAdvancedConfigText(insertedCharacterCount, toggleSelectInsertion, advancedOptions, includeAdvancedOptions) {
    var charCount = toggleSelectInsertion && insertedCharacterCount > 5
        ? "- Write around this many words: " + Math.round(insertedCharacterCount / 5) + " words\n"
        : "";
    var minWords = advancedOptions &&
        advancedOptions.minWords != null &&
        !toggleSelectInsertion
        ? "- Minimum words: " + advancedOptions.minWords + "\n"
        : "";
    var maxWords = advancedOptions &&
        advancedOptions.maxWords != null &&
        !toggleSelectInsertion
        ? "- Maximum words: " + advancedOptions.maxWords + "\n"
        : "";
    var includeAll = advancedOptions && advancedOptions.includeAllWords != ""
        ? "- Include all these words: " + advancedOptions.includeAllWords + "\n"
        : "";
    var includeExactPhrases = advancedOptions && advancedOptions.includeExactPhrases != ""
        ? "- Include these exact phrases (separated by commas): " + advancedOptions.includeExactPhrases + "\n"
        : "";
    var includeAny = advancedOptions && advancedOptions.includeAnyWords != ""
        ? "- Include any of these words: " + advancedOptions.includeAnyWords + "\n"
        : "";
    var includeNone = advancedOptions && advancedOptions.includeNoneWords != ""
        ? "- Include none of these words: " + advancedOptions.includeNoneWords + "\n"
        : "";
    var advancedConfigText = includeAdvancedOptions
        ? "" + exports.additionalConfigPrompt +
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
exports.createBuildAdvancedConfigText = createBuildAdvancedConfigText;
