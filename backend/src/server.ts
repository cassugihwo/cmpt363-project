import {
  testPrompt,
  startPrompt,
  sliderPrompt,
  promptPrompt,
  additionalConfigPrompt,
  buildAdvancedConfigText,
} from "./prompts/refineText";

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import geminiApiRoute from "./geminiApiRoute";

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// this says "for all requests starting with /api/gemini, use geminiApiRoute router to handle it"
app.use("/api/gemini", geminiApiRoute);

// test route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// test route
app.post("/api/debugSlider", (req, res) => {
  res.json({ message: "Hello from backend!" });
  const { text, sliders, includeAdvancedOptions, advancedOptions } = req.body;
  
  console.log("Debug Slider API -----");

  let sliderText = "";
  if (Array.isArray(sliders)) {
    sliderText = sliders
      .map((slider: any, index: number) =>
        `- ${slider.label} at ${slider.value} on the scale`
      )
      .join("\n");
  }

  const advancedConfigText = buildAdvancedConfigText(advancedOptions, includeAdvancedOptions);

  const prompt =
    `${startPrompt}\n${sliderPrompt[0]}` +
    sliderText +
    `\n${advancedConfigText}\n${sliderPrompt[1]}\n${text}\n${sliderPrompt[2]}`;

  console.log("Constructed Prompt:");
  console.log(prompt);

});

// test route
app.post("/api/debugPrompts", (req, res) => {
  res.json({ message: "Hello from backend!" });
  const { text, prompts, includeAdvancedOptions, advancedOptions } = req.body;

  
  console.log("Debug Prompt API -----");

  let promptText = "";
  if(Array.isArray(prompts)) {
    promptText = prompts
    .map((prompt: any, index: number) =>`- "${prompt.userPrompt}"`)
    .join("\n");
  }

  const advancedConfigText = buildAdvancedConfigText(advancedOptions, includeAdvancedOptions);

  const prompt =
    `${startPrompt}\n${promptPrompt[0]}` +
    promptText +
    `\n${advancedConfigText}\n${promptPrompt[1]}\n${text}\n${promptPrompt[2]}`;

  console.log("Constructed Prompt:");
  console.log(prompt);

});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
