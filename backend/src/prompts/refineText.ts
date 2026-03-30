/* This file contains prompts for the AI text refinement functionality */

export const testPrompt = "Write a haiku about Hu Tao from Genshin Impact.";

export const sliderPrompt = [
  `I want some text to be rewritten.
I am going to give you an array of 'sliders' describing the requirements of the rewritten text.
Here is an example of a slider: {"label":"Tone","level0":"Casual","level100":"Professional","value":40}. What this slider means: if tone was a scale of 0 to 100, with Casual ("level0") at 0 and Professional ("level100") at 100, I would want the rewritten text to be rewritten at level 40 ("value")—in between Casual and Professional but leaning slightly towards Casual.

Here is the text I want you to rewrite:`,

  `
Here is the array of sliders describing the requirements of the rewritten text:`,

  `
If you see any html tags in the text I provided, just ignore it, and only look at the text. 
Please rewrite the text according to the sliders. Apply all sliders when rewriting text.
Only output the rewritten text.`,
];

export const promptPrompt = [
  `I want some text to be rewritten.
I am going to give you an array of prompts I have for the rewritten text. The array contains 'userPrompt's.
Each userPrompt relates to how I want the text to be rewritten. 
For example, a userPrompt could be "Make the text more formal". This means that I want the rewritten text to be more formal than the original text. It could also be "This is for a class assignment". This means I am providing you the context of the text (in this case, the text is for a class assignment). Try to understand each userPrompt accordingly. 

Here is the text I want you to rewrite:`,

  `
Here is the array of prompts:`,

  `
If you see any html tags in the text I provided, just ignore it, and only look at the text. 
Please rewrite the text according to the prompts. Apply all prompts.
Only output the rewritten text.`,
];