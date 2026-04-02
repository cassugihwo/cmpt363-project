import { Router, Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";
import {
  testPrompt,
  startPrompt,
  createStartPrompt,
  sliderPrompt,
  promptPrompt,
  createPrompt,
  additionalConfigPrompt,
  buildAdvancedConfigText,
  createBuildAdvancedConfigText,
} from "./prompts/refineText";

const geminiApiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: geminiApiKey,
});

const model_flash = "gemini-2.5-flash";
const model_flash_lite = "gemini-2.5-flash-lite";

const router = Router();

/* Test route */
router.get("/test-ai", async (req: Request, res: Response) => {
  try {
    /* Message sent to Gemini AI */
    const response = await ai.models.generateContent({
      model: model_flash_lite,
      contents: "Explain how AI works in a few words",
    });
    /* Response given by Gemini AI */
    res.json({ message: response.text });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/test-ai-cringe", async (req: Request, res: Response) => {
  try {
    const response = await ai.models.generateContent({
      model: model_flash_lite,
      contents: testPrompt,
    });
    res.json({ message: response.text });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/generate-slider", async (req: Request, res: Response) => {
  const {text, sliders, includeAdvancedOptions, advancedOptions} = req.body;
  let sliderText = "";
  if (Array.isArray(sliders)) {
    sliderText = sliders
      .map(
        (slider: any, index: number) =>
          `- ${slider.label} at ${slider.value} on the scale`,
      )
      .join("\n");
  }

  const advancedConfigText = buildAdvancedConfigText(advancedOptions, includeAdvancedOptions);

  const prompt =
    `${startPrompt}\n${sliderPrompt[0]}` +
    sliderText +
    `\n${advancedConfigText}\n${sliderPrompt[1]}\n${text}\n${sliderPrompt[2]}`;

  try {
    const response = await ai.models.generateContent({
      model: model_flash_lite,
      contents: prompt,
    });
    res.json({ message: response.text, prompt: prompt });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error", prompt: "-"});
  }
});

router.post("/generate-prompt", async (req: Request, res: Response) => {
  const { text, prompts, includeAdvancedOptions, advancedOptions } = req.body;

  let promptText = "";
  if (Array.isArray(prompts)) {
    promptText = prompts
      .map((prompt: any, index: number) => `- "${prompt.userPrompt}"`)
      .join("\n");
  }

  const advancedConfigText = buildAdvancedConfigText(
    advancedOptions,
    includeAdvancedOptions,
  );

  const prompt =
    `${startPrompt}\n${promptPrompt[0]}` +
    promptText +
    `\n${advancedConfigText}\n${promptPrompt[1]}\n${text}\n${promptPrompt[2]}`;

  
  try {
    const response = await ai.models.generateContent({
      model: model_flash_lite,
      contents: prompt,
    });
    res.json({ message: response.text, prompt: prompt });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error", prompt: "-" });
  }
});

router.post("/generate-create", async (req: Request, res: Response) => {
  const {
    prompts,
    advancedOptions,
    insertedCharCount,
    includeAdvancedOptions,
    toggleSelectInsertion,
  } = req.body;

  let promptText = "";
  if (Array.isArray(prompts)) {
    promptText = prompts
      .map((prompt: any, index: number) => `- "${prompt.userPrompt}"`)
      .join("\n");
  }

  const advancedConfigText = createBuildAdvancedConfigText(
    insertedCharCount,
    toggleSelectInsertion,
    advancedOptions,
    includeAdvancedOptions,
  );

  const prompt =
    `${createStartPrompt}\n${createPrompt[0]}` +
    promptText +
    `\n${advancedConfigText}\n${createPrompt[1]}`;

  try {
    const response = await ai.models.generateContent({
      model: model_flash_lite,
      contents: prompt,
    });
    res.json({ message: response.text, prompt: prompt });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error", prompt: "-" });
  }
});

export default router;