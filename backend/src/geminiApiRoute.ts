import { Router, Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";
import {testPrompt} from "./prompts/refineText";

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

export default router;