import React, { useState } from "react";
import {
  X,
  Send,
  MoreVertical,
  ChevronDown,
  Sliders,
  MessageSquare,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Trash2,
  Pencil,
  Wand2,
  HelpCircle,
  ChevronUp,
  Plus,
} from "lucide-react";


export function DebugFunctions(debugMode: number) {
  const [response, setResponse] = useState<string>("debug text");

  const fetchTestData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/gemini/test-ai");
      const text = await res.text();
      setResponse(text);
    } catch (error) {
      setResponse("Error fetching data (frontend side)");
    }
  };

  const getHtml = () => {
    switch (debugMode) {
      case 1:
        return (
          <div>
            <h1 className="text-white">Debug Mode 1</h1>
            <p className="text-white">{response || "Loading..."}</p>
            <button onClick={fetchTestData}>(click to test API)</button>
          </div>
        );
      default:
        return (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#262626] flex items-center justify-center">
              <Wand2 size={24} color="#8149EC" />
            </div>
            <p className="text-white text-[15px] font-medium">Create</p>
            <p className="text-[#898989] text-[13px] leading-[1.6]">
              This feature is coming soon. You'll be able to generate new
              content from scratch using AI.
            </p>
          </div>
        );
    }
  };

  return getHtml();
}


export interface SliderConfig {
  id: string;
  label: string;
  level0: string;
  level100: string;
  value: number;
}

export interface Prompt {
  id: string;
  label: string;
  userPrompt: string;
}

/**
 * TestSliderFunction --- prints current text and slider configurations
 * @param text -> current text in output text area
 * @param sliders -> array of current SliderConfig objects
 */
export function TestSliderFunction(text: string, sliders: SliderConfig[]): void {
  console.log("---- TestSliderFunction Output ----");
  console.log("Text:", text);
  console.log("Slider Configurations:", sliders);
  
  // print individual slider details
  sliders.forEach((slider) => {
    console.log(`Slider - ID: ${slider.id}, Label: ${slider.label}, Level0: ${slider.level0}, Level100: ${slider.level100}, Value: ${slider.value}`);
  });

  console.log(
    "aaaaaaa",
    JSON.stringify({
      text,
      sliders: sliders.map(({ id, ...rest }) => rest), // Exclude id from each slider
    }),
  );
}

/**
 * SliderGenerate --- sends slider data to API
 * @param text -> current text in output text area
 * @param sliders -> array of current SliderConfig objects
 */
export async function SliderGenerate(text: string, sliders: SliderConfig[]): Promise<string> {
  // Send API request
  try {
    const response = await fetch("http://localhost:5000/api/gemini/generate-slider", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        sliders: sliders.map(({ id, ...rest }) => rest), // Exclude id from each slider
      }),
    });
    
    const result = await response.json();
    console.log("API Response (Slider) -----");
    console.log(result.message);
    console.log(result.prompt);
    return Promise.resolve(result.message);
  } catch (error) {
    console.error("API Error (Slider):", error);
    return Promise.reject(-1);
  }
}

/**
 * TestPromptFunction --- prints current text and prompt configurations
 * @param text -> current text in output text area
 * @param prompts -> array of current Prompt objects
 */
export function TestPromptFunction(text: string, prompts: Prompt[]): void {
  console.log("---- TestPromptFunction Output ----");
  console.log("Text:", text);
  console.log("Prompt Configurations:", prompts);
  
  //print individual prompt details
  prompts.forEach((prompt) => {
    console.log(`Prompt - ID: ${prompt.id}, Label: ${prompt.label}, UserPrompt: ${prompt.userPrompt}`);
  });

  console.log(
    "aaaaaaa",
    JSON.stringify({
      text,
      prompts: prompts.map(({ id, label, userPrompt }) => ({ userPrompt })), // Only include userPrompt
    }),
  );
}

/**
 * PromptGenerate --- sends prompt data to API
 * @param text -> current text in output text area
 * @param prompts -> array of current Prompt objects
 */
export async function PromptGenerate(text: string, prompts: Prompt[]): Promise<string> {
  // Send API request
  try {
    const response = await fetch("http://localhost:5000/api/gemini/generate-prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        prompts: prompts.map(({ id, label, userPrompt }) => ({ userPrompt })), // Only include userPrompt
      }),
    });
    
    const result = await response.json();
    console.log("API Response (Prompt) -----");
    console.log(result.message);
    console.log(result.prompt);
    return Promise.resolve(result.message);
  } catch (error) {
    console.error("API Error (Prompt):", error);
    return Promise.reject(-1);
  }
}






