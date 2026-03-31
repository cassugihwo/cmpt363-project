"use strict";
/* This file contains prompts for the AI text refinement functionality */
exports.__esModule = true;
exports.promptPrompt = exports.sliderPrompt = exports.testPrompt = void 0;
exports.testPrompt = "Write a haiku about Hu Tao from Genshin Impact.";
exports.sliderPrompt = [
    "I want some text to be rewritten.\nI am going to give you an array of 'sliders' describing the requirements of the rewritten text.\nHere is an example of a slider: {\"label\":\"Tone\",\"level0\":\"Casual\",\"level100\":\"Professional\",\"value\":40}. What this slider means: if tone was a scale of 0 to 100, with Casual (\"level0\") at 0 and Professional (\"level100\") at 100, I would want the rewritten text to be rewritten at level 40 (\"value\")\u2014in between Casual and Professional but leaning slightly towards Casual. Keep in mind this is just an example. Use the actual sliders I will provide later.\n\nHere is the text I want you to rewrite:",
    "\nHere is the array of sliders describing the requirements of the rewritten text:",
    "\nIf you see any html tags in the text I provided, just ignore it, and only look at the text. \nPlease rewrite the text according to the sliders. Apply all sliders when rewriting text.\nOnly output the rewritten text.",
];
exports.promptPrompt = [
    "I want some text to be rewritten.\nI am going to give you an array of prompts I have for the rewritten text. The array contains 'userPrompt's.\nEach userPrompt relates to how I want the text to be rewritten. \nFor example, a userPrompt could be \"Make the text more formal\". This means that I want the rewritten text to be more formal than the original text. It could also be \"This is for a class assignment\". This means I am providing you the context of the text (in this case, the text is for a class assignment). Try to understand each userPrompt accordingly. \n\nHere is the text I want you to rewrite:",
    "\nHere is the array of prompts:",
    "\nIf you see any html tags in the text I provided, just ignore it, and only look at the text. \nPlease rewrite the text according to the prompts. Apply all prompts.\nOnly output the rewritten text.",
];
