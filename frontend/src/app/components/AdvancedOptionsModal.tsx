import { useState } from "react";
import { X, HelpCircle, ChevronUp, ChevronDown } from "lucide-react";

interface AdvancedOptionsModalProps {
  onClose: () => void;
}

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
          readOnly ? "bg-transparent" : "bg-[#3a3a3a] border border-[#555]"
        }`}
      >
        <span className="text-white text-[15px] font-medium">{value}</span>
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

export function AdvancedOptionsModal({ onClose }: AdvancedOptionsModalProps) {
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

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal */}
      <div
        className="relative bg-[#2e2e2e] rounded-[20px] w-[520px] max-h-[90vh] overflow-y-auto p-8"
        style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#4a4a4a] hover:bg-[#5a5a5a] flex items-center justify-center transition-colors"
        >
          <X size={14} color="#E9E9E9" />
        </button>

        {/* Title */}
        <h2 className="text-white text-[20px] font-bold mb-5">Word Count</h2>

        {/* Word count row */}
        <div className="flex items-end gap-6 mb-7">
          <NumberField label="Minimum" value={minWords} onChange={setMinWords} />
          <NumberField label="Current" value={currentWords} readOnly />
          <NumberField label="Maximum" value={maxWords} onChange={setMaxWords} />
        </div>

        {/* Include section */}
        <p className="text-white text-[16px] font-bold mb-3">Include:</p>
        <div className="flex flex-col gap-2 mb-7">
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
              className="w-full bg-[#3a3a3a] text-white text-[13px] placeholder-[#898989] px-4 py-3 rounded-[8px] outline-none border border-transparent focus:border-[#8149EC]/60 transition-colors"
            />
          ))}
        </div>

        {/* Temperature */}
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-3">
            <p className="text-white text-[16px] font-bold">Temperature</p>
            <button className="hover:opacity-70 transition-opacity">
              <HelpCircle size={16} color="#898989" />
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
              className="w-full h-[3px] rounded-full appearance-none cursor-pointer mb-1"
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
          <p className="text-white text-[16px] font-bold">
            Use document spelling and grammar
          </p>
          <button
            onClick={() => setUseSpelling(!useSpelling)}
            className={`w-6 h-6 rounded-[4px] border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
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

      {/* Slider thumb style */}
      <style>{`
        .adv-modal input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #E9E9E9;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0,0,0,0.5);
        }
        .adv-modal input[type='range']::-moz-range-thumb {
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
  );
}
