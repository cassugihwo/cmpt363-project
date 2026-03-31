import React, { useState, useRef, KeyboardEvent, useEffect } from 'react';
import { X, Send, MoreVertical, ChevronDown, Sliders, MessageSquare, RotateCcw, ChevronLeft, ChevronRight, Trash2, Pencil, Wand2, HelpCircle, ChevronUp, Plus } from 'lucide-react';
import { AdvancedOptionsModal } from "./AdvancedOptionsModal";
import { DebugFunctions, SliderGenerate, PromptGenerate, TestSliderFunction, TestPromptFunction, type SliderConfig, type Prompt } from "./ApiFunctions";



// TEST CODE FOR API /////////////////////////////////////////////////////////

// 0 = no debug; 1 = debug mode 1; 2 = debug mode 2; etc...
const debugMode: number = 1;

function CreateTab() {

  /* const [response, setResponse] = useState<string>("debug text");

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/gemini/test-ai");
      const text = await res.text();
      setResponse(text);
    } catch (error) {
      setResponse("Error fetching data");
    }
  }; */

  const getHtml = () => {
    switch (debugMode) {
      case 1:
        return DebugFunctions(1);
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


  return <>{getHtml()}</>;
}

// END TEST CODE FOR API /////////////////////////////////////////////////////




interface AiToolPanelProps {
  onClose: () => void;
  selectedText?: string;
  onFinish: (text: string) => void;
}

const INITIAL_SLIDERS: SliderConfig[] = [
  {
    id: "tone",
    label: "Tone",
    level0: "Casual",
    level100: "Professional",
    value: 0,
  },
  {
    id: "detail",
    label: "Detail",
    level0: "Concise",
    level100: "Detailed",
    value: 0,
  },
  {
    id: "clarity",
    label: "Clarity",
    level0: "Natural",
    level100: "Very Clear",
    value: 0,
  },
];

const INITIAL_PROMPTS: Prompt[] = [
  {
    id: "1",
    label: "Prompt 1",
    userPrompt: "Make the tone more professional and concise.",
  },
  {
    id: "2",
    label: "Prompt 2",
    userPrompt: "Make the content more engaging and interesting.",
  },
];

/* ─── AI icon (pen + star) ─── */
function AiIcon({ size = 26 }: { size?: number }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 17.5 17.5"
        fill="none"
        style={{ position: "absolute", inset: 0, width: size * 0.69, height: size * 0.69 }}
      >
        <path
          d="M1.94444 15.5556H3.32986L12.8333 6.05208L11.4479 4.66667L1.94444 14.1701V15.5556ZM0 17.5V13.3681L12.8333 0.559028C13.0278 0.380787 13.2425 0.243056 13.4774 0.145833C13.7124 0.0486111 13.9595 0 14.2188 0C14.478 0 14.7292 0.0486111 14.9722 0.145833C15.2153 0.243056 15.4259 0.388889 15.6042 0.583333L16.941 1.94444C17.1354 2.12269 17.2772 2.33333 17.3663 2.57639C17.4554 2.81944 17.5 3.0625 17.5 3.30556C17.5 3.56481 17.4554 3.81192 17.3663 4.04688C17.2772 4.28183 17.1354 4.49653 16.941 4.69097L4.13194 17.5H0Z"
          fill="#E9E9E9"
        />
      </svg>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: size * 0.42,
          height: size * 0.46,
        }}
      >
        <svg viewBox="0 0 10.38 11.44" fill="none" className="w-full h-full">
          <path
            d="M5.04404 0.116448C5.07897 -0.0388164 5.30022 -0.0388156 5.33516 0.116449L5.47808 0.751671C6.01834 3.15282 7.88355 5.03389 10.28 5.59447C10.4123 5.6254 10.4123 5.81363 10.28 5.84456C7.88355 6.40514 6.01834 8.28621 5.47808 10.6874L5.33516 11.3226C5.30022 11.4778 5.07897 11.4778 5.04404 11.3226L4.90111 10.6874C4.36086 8.28621 2.49565 6.40514 0.0991709 5.84456C-0.0330572 5.81363 -0.0330569 5.6254 0.0991712 5.59447C2.49565 5.03389 4.36086 3.15282 4.90111 0.75167L5.04404 0.116448Z"
            fill="#8149EC"
          />
        </svg>
      </div>
    </div>
  );
}

/* ─── NumberField helper ─── */
function NumberField({
  label,
  value,
  onChange,
  readOnly = false,
}: {
  label: string;
  value: number;
  onChange?: (v: number) => void;
  readOnly?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[#A6A6A6] text-[11px]">{label}</span>
      <div
        className={`flex items-center justify-between px-3 py-2 rounded-[6px] min-w-[90px] ${
          readOnly ? "bg-transparent" : "bg-[#2A2A2A] border border-[#555]"
        }`}
      >
        <span className="text-white text-[13px] font-medium">{value}</span>
        {!readOnly && (
          <div className="flex flex-col gap-0.5 ml-2">
            <button
              onClick={() => onChange?.(value + 1)}
              className="hover:opacity-70 transition-opacity leading-none"
            >
              <ChevronUp size={12} color="#A6A6A6" />
            </button>
            <button
              onClick={() => onChange?.(Math.max(0, value - 1))}
              className="hover:opacity-70 transition-opacity leading-none"
            >
              <ChevronDown size={12} color="#A6A6A6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function AiToolPanel({ onClose, selectedText, onFinish }: AiToolPanelProps) {

  const [activeTab, setActiveTab] = useState<"rewrite" | "create">("rewrite");
  const [mode, setMode] = useState<"slider" | "prompt">("slider");
  const [sliders, setSliders] = useState<SliderConfig[]>(INITIAL_SLIDERS);
  const [prompts, setPrompts] = useState<Prompt[]>(INITIAL_PROMPTS);
  const [promptInput, setPromptInput] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [advancedExpanded, setAdvancedExpanded] = useState(false);
  const [editingLabelId, setEditingLabelId] = useState<string | null>(null);
  const [tempLabelValue, setTempLabelValue] = useState("");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const labelInputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Advanced options state
  const [minWords, setMinWords] = useState(0);
  const [maxWords, setMaxWords] = useState(300);
  const currentWords = 250;
  const [allWords, setAllWords] = useState("");
  const [exactPhrase, setExactPhrase] = useState("");
  const [anyWords, setAnyWords] = useState("");
  const [noneWords, setNoneWords] = useState("");
  const [temperature, setTemperature] = useState(5);
  const [useSpelling, setUseSpelling] = useState(false);

  const TICK_COUNT = 11; // 0 through 10

  const updateSlider = (id: string, value: number) => {
    setSliders((prev) => prev.map((s) => (s.id === id ? { ...s, value } : s)));
  };

  const updateSliderLabel = (id: string, label: string) => {
    setSliders((prev) => prev.map((s) => (s.id === id ? { ...s, label } : s)));
  };

  const deleteSlider = (id: string) => {
    setSliders((prev) => prev.filter((s) => s.id !== id));
  };

  const addNewSlider = () => {
    const newSlider: SliderConfig = {
      id: `slider-${Date.now()}`,
      label: "",
      level0: "Low",
      level100: "High",
      value: 0,
    };
    setSliders((prev) => [...prev, newSlider]);
    setEditingLabelId(newSlider.id);
    setTempLabelValue("");
    // Focus the input after render
    setTimeout(() => labelInputRef.current?.focus(), 0);
  };

  const finalizeLabelEdit = () => {
    if (editingLabelId) {
      const finalLabel = tempLabelValue.trim() || "Tone";
      updateSliderLabel(editingLabelId, finalLabel);
      setEditingLabelId(null);
      setTempLabelValue("");
    }
  };

  const handleLabelKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      finalizeLabelEdit();
    }
  };

  const deletePrompt = (id: string) => {
    setPrompts((prev) => prev.filter((p) => p.id !== id));
  };

  const sendPrompt = () => {
    if (!promptInput.trim()) return;
    const newPrompt: Prompt = {
      id: Date.now().toString(),
      label: `Prompt ${prompts.length + 1}`,
      userPrompt: promptInput.trim(),
    };
    setPrompts((prev) => [...prev, newPrompt]);
    setPromptInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendPrompt();
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };

    if (openMenuId) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openMenuId]);
  
  // Set selected text in output when provided and output is empty
  useEffect(() => {
    //Problem found: selectedText will not change as long as menu is open
    // const handleClick = (event: MouseEvent) => {
    //   if (selectedText && outputRef.current) {
    //     outputRef.current.innerHTML = selectedText;
    //   }
    // }
    // document.addEventListener('mousedown', handleClick);
    if (selectedText && outputRef.current) {
      outputRef.current.innerHTML = selectedText;
        
        //return () => document.removeEventListener('mousedown', handleClick);
    }
  }, [selectedText]);

  return (
    <>
      {/* Advanced Options Modal */}
      {showAdvanced && (
        <AdvancedOptionsModal onClose={() => setShowAdvanced(false)} />
      )}

      <div className="flex flex-col bg-[#303030] w-[370px] flex-shrink-0 h-full border-l border-[#898989]/20 relative">
        {/* Header */}
        <div className="px-4 pt-4 pb-3 flex-shrink-0">
          {/* Title row */}
          <div className="flex items-center gap-3 mb-3">
            <AiIcon size={26} />
            <button
              onClick={() => setActiveTab("rewrite")}
              className={`px-3 py-1 rounded-full text-[13px] transition-colors ${
                activeTab === "rewrite"
                  ? "bg-[#3a3a3a] text-[#E9E9E9]"
                  : "text-[#898989] hover:text-[#A6A6A6]"
              }`}
            >
              Rewrite
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className={`px-3 py-1 rounded-full text-[13px] transition-colors ${
                activeTab === "create"
                  ? "bg-[#3a3a3a] text-[#E9E9E9]"
                  : "text-[#898989] hover:text-[#A6A6A6]"
              }`}
            >
              Create
            </button>
          </div>

          {/* Separator */}
          <div className="h-px bg-[#898989]/40 mb-3" />

          {/* Mode switcher + undo/redo — only for Rewrite */}
          {activeTab === "rewrite" && (
            <div className="flex items-center justify-between">
              <div className="bg-[#262626] flex items-center p-0.5 rounded-[15px]">
                <button
                  onClick={() => setMode("slider")}
                  className={`flex items-center justify-center px-3 py-1 rounded-[12px] transition-colors ${
                    mode === "slider" ? "bg-[#303030]" : "hover:bg-[#303030]/50"
                  }`}
                >
                  <Sliders size={16} color={mode === "slider" ? "#E9E9E9" : "#898989"} />
                </button>
                <button
                  onClick={() => setMode("prompt")}
                  className={`flex items-center justify-center px-3 py-1 rounded-[12px] transition-colors ${
                    mode === "prompt" ? "bg-[#303030]" : "hover:bg-[#303030]/50"
                  }`}
                >
                  <MessageSquare size={16} color={mode === "prompt" ? "#E9E9E9" : "#898989"} />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <button className="hover:opacity-70 transition-opacity">
                  <svg viewBox="0 0 16 15" fill="none" className="w-5 h-5">
                    <path
                      d="M3 15V13H10.1C11.15 13 12.0625 12.6667 12.8375 12C13.6125 11.3333 14 10.5 14 9.5C14 8.5 13.6125 7.66667 12.8375 7C12.0625 6.33333 11.15 6 10.1 6H3.8L6.4 8.6L5 10L0 5L5 0L6.4 1.4L3.8 4H10.1C11.7167 4 13.1042 4.525 14.2625 5.575C15.4208 6.625 16 7.93333 16 9.5C16 11.0667 15.4208 12.375 14.2625 13.425C13.1042 14.475 11.7167 15 10.1 15H3Z"
                      fill="#898989"
                    />
                  </svg>
                </button>
                <button className="hover:opacity-70 transition-opacity">
                  <svg viewBox="0 0 16 15" fill="none" className="w-5 h-5">
                    <path
                      d="M5.9 15C4.28333 15 2.89583 14.475 1.7375 13.425C0.579167 12.375 0 11.0667 0 9.5C0 7.93333 0.579167 6.625 1.7375 5.575C2.89583 4.525 4.28333 4 5.9 4H12.2L9.6 1.4L11 0L16 5L11 10L9.6 8.6L12.2 6H5.9C4.85 6 3.9375 6.33333 3.1625 7C2.3875 7.66667 2 8.5 2 9.5C2 10.5 2.3875 11.3333 3.1625 12C3.9375 12.6667 4.85 13 5.9 13H13V15H5.9Z"
                      fill="#898989"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── REWRITE TAB ── */}
        {activeTab === "rewrite" && (
          <>
            {/* Output area */}
            <div className="mx-4 mb-3 flex-shrink-0">
              <div className="relative bg-white rounded-[6px] h-[168px] overflow-y-auto">
                <div
                  ref={outputRef}
                  contentEditable
                  suppressContentEditableWarning
                  data-placeholder="Select some text to rewrite"
                  className="ai-output-editable w-full min-h-[144px] outline-none text-[#1a1a1a] text-[13px] leading-[1.6] px-3 py-3"
                />
              </div>
              <div className="flex items-center justify-between mt-2 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#8149EC]" />
                  <span className="text-[#a6a6a6] text-[10px]">Generating</span>
                </div>
                <div className="flex items-center gap-1">
                  <button className="hover:opacity-70 transition-opacity">
                    <RotateCcw size={15} color="#898989" />
                  </button>
                  <button className="hover:opacity-70 transition-opacity p-1">
                    <ChevronLeft size={15} color="#898989" />
                  </button>
                  <span className="text-[#a6a6a6] text-[10px] mx-1">1/1</span>
                  <button className="hover:opacity-70 transition-opacity p-1">
                    <ChevronRight size={15} color="#898989" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mx-4 h-px bg-[#898989]/30 mb-2 flex-shrink-0" />

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-4 min-h-0">
              {mode === "slider" ? (
                <div className="flex flex-col gap-5 py-2">
                  {sliders.map((slider) => (
                    <div key={slider.id} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#E9E9E9] text-[13px] font-medium">
                          {editingLabelId === slider.id ? (
                            <input
                              ref={labelInputRef}
                              type="text"
                              value={tempLabelValue}
                              onChange={(e) => setTempLabelValue(e.target.value)}
                              onKeyDown={handleLabelKeyDown}
                              onBlur={finalizeLabelEdit}
                              className="bg-[#262626] text-[#E9E9E9] text-[13px] font-medium px-2 py-1 rounded-[4px] outline-none border border-[#555] focus:border-[#8149EC]/60 transition-colors"
                            />
                          ) : (
                            <span
                              className="cursor-pointer"
                              onClick={() => {
                                setEditingLabelId(slider.id);
                                setTempLabelValue(slider.label);
                                // Focus the input after render
                                setTimeout(() => labelInputRef.current?.focus(), 0);
                              }}
                            >
                              {slider.label}
                            </span>
                          )}
                        </span>
                        <div className="relative">
                          <button
                            onClick={() => setOpenMenuId(openMenuId === slider.id ? null : slider.id)}
                            className="hover:opacity-70 transition-opacity"
                          >
                            <MoreVertical size={14} color="#898989" />
                          </button>
                          
                          {/* Dropdown Menu */}
                          {openMenuId === slider.id && (
                            <div
                              ref={menuRef}
                              className="absolute right-0 top-full mt-1 bg-[#262626] rounded-[6px] shadow-lg border border-[#555] py-1 z-10 min-w-[120px]"
                            >
                              <button
                                onClick={() => {
                                  deleteSlider(slider.id);
                                  setOpenMenuId(null);
                                }}
                                className="w-full px-3 py-2 text-left text-[#E03030] text-[12px] hover:bg-[#303030] transition-colors flex items-center gap-2"
                              >
                                <Trash2 size={13} />
                                <span>Delete</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#898989] mb-1">
                        <span>{slider.level0}</span>
                        <span>{slider.level100}</span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={slider.value}
                        onChange={(e) => updateSlider(slider.id, Number(e.target.value))}
                        className="w-full h-[3px] rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #8149EC 0%, #8149EC ${slider.value}%, #555 ${slider.value}%, #555 100%)`,
                          WebkitAppearance: "none",
                        }}
                      />
                    </div>
                  ))}
                  
                  {/* Add New Slider Button */}
                  <button
                    onClick={addNewSlider}
                    className="flex items-center justify-center px-3 py-1 rounded-[12px] bg-[#303030] hover:bg-[#4a4a4a] transition-colors"
                  >
                    <Plus size={16} color="#E9E9E9" />
                  </button>

                  {/* Advanced Options Expandable Section */}
                  <div className="border-t border-[#555] pt-4 mt-1">
                    <button
                      onClick={() => setAdvancedExpanded(!advancedExpanded)}
                      className="flex items-center justify-between w-full hover:opacity-70 transition-opacity"
                    >
                      <span className="text-[#E9E9E9] text-[14px] font-semibold">
                        Advanced Options
                      </span>
                      <ChevronDown
                        size={16}
                        color="#898989"
                        className={`transition-transform duration-200 ${
                          advancedExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {advancedExpanded && (
                      <div className="mt-4 flex flex-col gap-5 pb-4">
                        {/* Word Count section */}
                        <div>
                          <h3 className="text-[#E9E9E9] text-[13px] font-medium mb-3">Word Count</h3>
                          <div className="flex items-end gap-3">
                            <NumberField label="Minimum" value={minWords} onChange={setMinWords} />
                            <NumberField label="Current" value={currentWords} readOnly />
                            <NumberField label="Maximum" value={maxWords} onChange={setMaxWords} />
                          </div>
                        </div>

                        {/* Include section */}
                        <div>
                          <p className="text-[#E9E9E9] text-[13px] font-medium mb-3">Include:</p>
                          <div className="flex flex-col gap-2">
                            {[
                              { ph: "All of these words...", val: allWords, set: setAllWords },
                              { ph: "This exact phrase...", val: exactPhrase, set: setExactPhrase },
                              { ph: "Any of these words...", val: anyWords, set: setAnyWords },
                              { ph: "None of these words...", val: noneWords, set: setNoneWords },
                            ].map(({ ph, val, set }) => (
                              <input
                                key={ph}
                                type="text"
                                placeholder={ph}
                                value={val}
                                onChange={(e) => set(e.target.value)}
                                className="w-full bg-[#2A2A2A] text-white text-[12px] placeholder-[#898989] px-3 py-2 rounded-[6px] outline-none border border-transparent focus:border-[#8149EC]/60 transition-colors"
                              />
                            ))}
                          </div>
                        </div>

                        {/* Temperature */}
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <p className="text-[#E9E9E9] text-[13px] font-medium">Temperature</p>
                            <button className="hover:opacity-70 transition-opacity">
                              <HelpCircle size={14} color="#898989" />
                            </button>
                          </div>

                          {/* Slider */}
                          <div className="relative">
                            <input
                              type="range"
                              min={0}
                              max={10}
                              step={1}
                              value={temperature}
                              onChange={(e) => setTemperature(Number(e.target.value))}
                              className="adv-temp-slider w-full h-[3px] rounded-full appearance-none cursor-pointer mb-1"
                              style={{
                                background: `linear-gradient(to right, #E9E9E9 0%, #E9E9E9 ${temperature * 10}%, #555 ${temperature * 10}%, #555 100%)`,
                                WebkitAppearance: "none",
                              }}
                            />
                            {/* Tick marks */}
                            <div className="flex justify-between px-0 mt-1">
                              {Array.from({ length: TICK_COUNT }).map((_, i) => (
                                <div key={i} className="flex flex-col items-center">
                                  <div className="w-px h-[6px] bg-[#555]" />
                                </div>
                              ))}
                            </div>
                            {/* Labels */}
                            <div className="flex justify-between mt-0.5">
                              <span className="text-[#898989] text-[10px]">0</span>
                              <span className="text-[#898989] text-[10px]">10</span>
                            </div>
                          </div>
                        </div>

                        {/* Spelling and grammar */}
                        <div className="flex items-center justify-between">
                          <p className="text-[#E9E9E9] text-[13px] font-medium">
                            Use document spelling and grammar
                          </p>
                          <button
                            onClick={() => setUseSpelling(!useSpelling)}
                            className={`w-5 h-5 rounded-[4px] border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                              useSpelling
                                ? "bg-[#8149EC] border-[#8149EC]"
                                : "bg-transparent border-[#898989] hover:border-[#A6A6A6]"
                            }`}
                          >
                            {useSpelling && (
                              <svg viewBox="0 0 12 9" fill="none" className="w-3 h-3">
                                <path
                                  d="M1 4L4.5 7.5L11 1"
                                  stroke="white"
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3 py-2">
                  {prompts.map((prompt) => (
                    <div key={prompt.id} className="bg-[#262626] rounded-[8px] p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#A6A6A6] text-[11px] font-medium">
                          {prompt.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => deletePrompt(prompt.id)}
                            className="hover:opacity-70 transition-opacity"
                          >
                            <Trash2 size={13} color="#E03030" />
                          </button>
                          <button className="hover:opacity-70 transition-opacity">
                            <Pencil size={13} color="#898989" />
                          </button>
                        </div>
                      </div>
                      <p className="text-[#E9E9E9] text-[12px] leading-[1.5]">
                        {prompt.userPrompt}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Prompt input — prompt mode only */}
            {mode === "prompt" && (
              <div className="px-4 py-3 flex-shrink-0">
                <div className="flex items-center bg-[#262626] rounded-full px-4 py-2 gap-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="How do you want to rewrite this?"
                    className="flex-1 bg-transparent text-[#E9E9E9] text-[12px] placeholder-[#898989] outline-none"
                  />
                  <button
                    onClick={sendPrompt}
                    className="w-7 h-7 rounded-full bg-[#3a3a3a] hover:bg-[#4a4a4a] flex items-center justify-center flex-shrink-0 transition-colors"
                  >
                    <Send size={13} color="#E9E9E9" />
                  </button>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex-shrink-0">
              <div className="h-px bg-[#898989]/30 mx-4" />
              <div className="flex items-center justify-between px-4 py-3">
                <button 
                  onClick={() => onFinish(outputRef.current?.innerHTML || '')}
                  className="bg-white text-[#484848] text-[13px] font-medium px-4 py-[5px] rounded-[6px] hover:bg-[#f0f0f0] transition-colors"
                >
                  Finish
                </button>
                <div className="flex items-center gap-3">
                  {mode === "slider" && (
                    <button
                      onClick={() => setShowAdvanced(true)}
                      className="text-[#8149EC] text-[12px] font-medium hover:opacity-80 transition-opacity"
                    >
                      Advanced options
                    </button>
                  )}
                  <button 
                    onClick={async () => {
                      if (mode === "slider") {
                        await SliderGenerate(outputRef.current?.innerHTML || '', sliders);
                      } else if (mode === "prompt") {
                        await PromptGenerate(outputRef.current?.innerHTML || '', prompts);
                      }
                    }}
                    className="bg-[#8149EC] text-[#E9E9E9] text-[13px] font-medium px-4 py-[5px] rounded-[6px] hover:bg-[#7040db] transition-colors"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── CREATE TAB — placeholder ── */}
        {activeTab === "create" && (
          <CreateTab/>
        )}

        {/* Slider thumb styling */}
        <style>{`
          .ai-output-editable:empty::before {
            content: attr(data-placeholder);
            color: #A6A6A6;
            display: block;
            text-align: center;
            padding-top: 54px;
            pointer-events: none;
          }
          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            box-shadow: 0 1px 4px rgba(0,0,0,0.4);
          }
          input[type='range']::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            border: none;
            box-shadow: 0 1px 4px rgba(0,0,0,0.4);
          }
          .adv-temp-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #E9E9E9;
            cursor: pointer;
            box-shadow: 0 1px 4px rgba(0,0,0,0.5);
          }
          .adv-temp-slider::-moz-range-thumb {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #E9E9E9;
            cursor: pointer;
            border: none;
            box-shadow: 0 1px 4px rgba(0,0,0,0.5);
          }
        `}</style>
      </div>
    </>
  );
}