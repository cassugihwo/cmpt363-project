"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.AiToolPanel = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var AdvancedOptionsModal_1 = require("./AdvancedOptionsModal");
var ApiFunctions_1 = require("./ApiFunctions");
// TEST CODE FOR API /////////////////////////////////////////////////////////
// 0 = no debug; 1 = debug mode 1; 2 = debug mode 2; etc...
var debugMode = 1;
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
    var getHtml = function () {
        switch (debugMode) {
            case 1:
                return ApiFunctions_1.DebugFunctions(1);
            default:
                return (react_1["default"].createElement("div", { className: "flex-1 flex flex-col items-center justify-center gap-4 px-8 text-center" },
                    react_1["default"].createElement("div", { className: "w-14 h-14 rounded-full bg-[#262626] flex items-center justify-center" },
                        react_1["default"].createElement(lucide_react_1.Wand2, { size: 24, color: "#8149EC" })),
                    react_1["default"].createElement("p", { className: "text-white text-[15px] font-medium" }, "Create"),
                    react_1["default"].createElement("p", { className: "text-[#898989] text-[13px] leading-[1.6]" }, "This feature is coming soon. You'll be able to generate new content from scratch using AI.")));
        }
    };
    return react_1["default"].createElement(react_1["default"].Fragment, null, getHtml());
}
var INITIAL_SLIDERS = [
    {
        id: "tone",
        label: "Professionalism",
        level0: "Low",
        level100: "High",
        value: 0
    },
    {
        id: "detail",
        label: "Complexity",
        level0: "Low",
        level100: "High",
        value: 0
    },
    {
        id: "emotion",
        label: "Emotion",
        level0: "Low",
        level100: "High",
        value: 0
    },
];
var INITIAL_PROMPTS = [
    {
        id: "1",
        label: "Prompt 1",
        userPrompt: "Make the tone more professional and concise."
    },
    {
        id: "2",
        label: "Prompt 2",
        userPrompt: "Make the content more engaging and interesting."
    },
];
var INITIAL_ADVANCED_OPTIONS = {
    minWords: 0,
    maxWords: 300,
    includeAllWords: "",
    includeExactPhrases: "",
    includeAnyWords: "",
    includeNoneWords: "",
    temperature: 5,
    useSpelling: false
};
/* ─── AI icon (pen + star) ─── */
function AiIcon(_a) {
    var _b = _a.size, size = _b === void 0 ? 26 : _b;
    return (react_1["default"].createElement("div", { className: "relative flex-shrink-0", style: { width: size, height: size } },
        react_1["default"].createElement("svg", { viewBox: "0 0 17.5 17.5", fill: "none", style: { position: "absolute", inset: 0, width: size * 0.69, height: size * 0.69 } },
            react_1["default"].createElement("path", { d: "M1.94444 15.5556H3.32986L12.8333 6.05208L11.4479 4.66667L1.94444 14.1701V15.5556ZM0 17.5V13.3681L12.8333 0.559028C13.0278 0.380787 13.2425 0.243056 13.4774 0.145833C13.7124 0.0486111 13.9595 0 14.2188 0C14.478 0 14.7292 0.0486111 14.9722 0.145833C15.2153 0.243056 15.4259 0.388889 15.6042 0.583333L16.941 1.94444C17.1354 2.12269 17.2772 2.33333 17.3663 2.57639C17.4554 2.81944 17.5 3.0625 17.5 3.30556C17.5 3.56481 17.4554 3.81192 17.3663 4.04688C17.2772 4.28183 17.1354 4.49653 16.941 4.69097L4.13194 17.5H0Z", fill: "#E9E9E9" })),
        react_1["default"].createElement("div", { style: {
                position: "absolute",
                bottom: 0,
                right: 0,
                width: size * 0.42,
                height: size * 0.46
            } },
            react_1["default"].createElement("svg", { viewBox: "0 0 10.38 11.44", fill: "none", className: "w-full h-full" },
                react_1["default"].createElement("path", { d: "M5.04404 0.116448C5.07897 -0.0388164 5.30022 -0.0388156 5.33516 0.116449L5.47808 0.751671C6.01834 3.15282 7.88355 5.03389 10.28 5.59447C10.4123 5.6254 10.4123 5.81363 10.28 5.84456C7.88355 6.40514 6.01834 8.28621 5.47808 10.6874L5.33516 11.3226C5.30022 11.4778 5.07897 11.4778 5.04404 11.3226L4.90111 10.6874C4.36086 8.28621 2.49565 6.40514 0.0991709 5.84456C-0.0330572 5.81363 -0.0330569 5.6254 0.0991712 5.59447C2.49565 5.03389 4.36086 3.15282 4.90111 0.75167L5.04404 0.116448Z", fill: "#8149EC" })))));
}
/* ─── NumberField helper ─── */
function NumberField(_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange, _b = _a.readOnly, readOnly = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c;
    var displayValue = value === null || value === undefined ? "" : String(value);
    return (react_1["default"].createElement("div", { className: "flex flex-col gap-1" },
        react_1["default"].createElement("span", { className: "text-[#A6A6A6] text-[11px]" }, label),
        react_1["default"].createElement("div", { className: "flex items-center justify-between px-3 py-2 rounded-[6px] min-w-[90px] " + (readOnly ? "bg-transparent" : "bg-[#2A2A2A] border border-[#555]") + " " + (disabled ? "opacity-50" : "") },
            readOnly ? (react_1["default"].createElement("span", { className: "text-white text-[13px] font-medium" }, displayValue)) : (react_1["default"].createElement("input", { type: "number", value: displayValue, disabled: disabled, onChange: function (e) {
                    var next = e.target.value;
                    if (next === "") {
                        onChange === null || onChange === void 0 ? void 0 : onChange(null);
                    }
                    else {
                        var parsed = Number(next);
                        if (!Number.isNaN(parsed)) {
                            onChange === null || onChange === void 0 ? void 0 : onChange(parsed);
                        }
                    }
                }, className: "bg-transparent text-white text-[13px] outline-none w-[45px]" })),
            !readOnly && (react_1["default"].createElement("div", { className: "flex flex-col gap-0.5 ml-2" },
                react_1["default"].createElement("button", { disabled: disabled, onClick: function () { return onChange === null || onChange === void 0 ? void 0 : onChange(value === null || value === undefined ? 1 : value + 1); }, className: "hover:opacity-70 transition-opacity leading-none disabled:opacity-50 disabled:cursor-not-allowed" },
                    react_1["default"].createElement(lucide_react_1.ChevronUp, { size: 12, color: "#A6A6A6" })),
                react_1["default"].createElement("button", { disabled: disabled, onClick: function () { return onChange === null || onChange === void 0 ? void 0 : onChange(value === null || value === undefined ? null : Math.max(0, value - 1)); }, className: "hover:opacity-70 transition-opacity leading-none disabled:opacity-50 disabled:cursor-not-allowed" },
                    react_1["default"].createElement(lucide_react_1.ChevronDown, { size: 12, color: "#A6A6A6" })))))));
}
function AiToolPanel(_a) {
    var _this = this;
    var onClose = _a.onClose, selectedText = _a.selectedText, onFinish = _a.onFinish;
    var _b = react_1.useState("rewrite"), activeTab = _b[0], setActiveTab = _b[1];
    var _c = react_1.useState("slider"), mode = _c[0], setMode = _c[1];
    var _d = react_1.useState(INITIAL_SLIDERS), sliders = _d[0], setSliders = _d[1];
    var _e = react_1.useState(INITIAL_PROMPTS), prompts = _e[0], setPrompts = _e[1];
    var _f = react_1.useState(""), promptInput = _f[0], setPromptInput = _f[1];
    var _g = react_1.useState(false), showAdvanced = _g[0], setShowAdvanced = _g[1];
    var _h = react_1.useState(false), advancedExpanded = _h[0], setAdvancedExpanded = _h[1];
    var _j = react_1.useState(null), editingLabelId = _j[0], setEditingLabelId = _j[1];
    var _k = react_1.useState(""), tempLabelValue = _k[0], setTempLabelValue = _k[1];
    var _l = react_1.useState(""), generatedText = _l[0], setGeneratedText = _l[1];
    var _m = react_1.useState(null), openMenuId = _m[0], setOpenMenuId = _m[1];
    var inputRef = react_1.useRef(null);
    var outputRef = react_1.useRef(null);
    var labelInputRef = react_1.useRef(null);
    var menuRef = react_1.useRef(null);
    // Advanced options state
    var _o = react_1.useState(250), currentWords = _o[0], setCurrentWords = _o[1];
    var _p = react_1.useState(INITIAL_ADVANCED_OPTIONS), advancedOptionsConfig = _p[0], setAdvancedOptionsConfig = _p[1];
    var _q = react_1.useState(false), includeAdvancedOptions = _q[0], setIncludeAdvancedOptions = _q[1];
    var TICK_COUNT = 11; // 0 through 10
    function AdvancedOptionsSection() {
        return (react_1["default"].createElement("div", { className: "border-t border-[#555] pt-4 mt-1" },
            react_1["default"].createElement("button", { onClick: function () { return setAdvancedExpanded(!advancedExpanded); }, className: "flex items-center justify-between w-full hover:opacity-70 transition-opacity" },
                react_1["default"].createElement("span", { className: "text-[#E9E9E9] text-[14px] font-semibold" }, "Advanced Options"),
                react_1["default"].createElement(lucide_react_1.ChevronDown, { size: 16, color: "#898989", className: "transition-transform duration-200 " + (advancedExpanded ? "rotate-180" : "") })),
            advancedExpanded && (react_1["default"].createElement("div", { className: "mt-4 flex flex-col gap-5 pb-4 " + (!includeAdvancedOptions ? "opacity-50" : "") },
                react_1["default"].createElement("div", { className: "flex items-center" },
                    react_1["default"].createElement("input", { type: "checkbox", id: "includeAdvancedOptions", checked: includeAdvancedOptions, onChange: function (e) { return setIncludeAdvancedOptions(e.target.checked); }, className: "mr-2" }),
                    react_1["default"].createElement("label", { htmlFor: "includeAdvancedOptions", className: "text-[#E9E9E9] text-[13px]" }, "Include Advanced Options")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", { className: "text-[#E9E9E9] text-[13px] font-medium mb-3" }, "Word Count"),
                    react_1["default"].createElement("div", { className: "flex items-end gap-3" },
                        react_1["default"].createElement(NumberField, { label: "Minimum", value: advancedOptionsConfig.minWords, disabled: !includeAdvancedOptions, onChange: function (value) {
                                return setAdvancedOptionsConfig(function (prev) { return (__assign(__assign({}, prev), { minWords: value })); });
                            } }),
                        react_1["default"].createElement(NumberField, { label: "Current", value: currentWords, readOnly: true }),
                        react_1["default"].createElement(NumberField, { label: "Maximum", value: advancedOptionsConfig.maxWords, disabled: !includeAdvancedOptions, onChange: function (value) {
                                return setAdvancedOptionsConfig(function (prev) { return (__assign(__assign({}, prev), { maxWords: value })); });
                            } }))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: "text-[#E9E9E9] text-[13px] font-medium mb-3" }, "Include:"),
                    react_1["default"].createElement("div", { className: "flex flex-col gap-2" }, [
                        {
                            ph: "All of these words...",
                            val: advancedOptionsConfig.includeAllWords,
                            field: "includeAllWords"
                        },
                        {
                            ph: "This exact phrase...",
                            val: advancedOptionsConfig.includeExactPhrases,
                            field: "includeExactPhrases"
                        },
                        {
                            ph: "Any of these words...",
                            val: advancedOptionsConfig.includeAnyWords,
                            field: "includeAnyWords"
                        },
                        {
                            ph: "None of these words...",
                            val: advancedOptionsConfig.includeNoneWords,
                            field: "includeNoneWords"
                        },
                    ].map(function (_a) {
                        var ph = _a.ph, val = _a.val, field = _a.field;
                        return (react_1["default"].createElement("input", { key: ph, type: "text", placeholder: ph, value: val, disabled: !includeAdvancedOptions, onChange: function (e) {
                                return setAdvancedOptionsConfig(function (prev) {
                                    var _a;
                                    return (__assign(__assign({}, prev), (_a = {}, _a[field] = e.target.value, _a)));
                                });
                            }, className: "w-full bg-[#2A2A2A] text-white text-[12px] placeholder-[#898989] px-3 py-2 rounded-[6px] outline-none border border-transparent focus:border-[#8149EC]/60 transition-colors disabled:opacity-50" }));
                    }))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "flex items-center gap-2 mb-3" },
                        react_1["default"].createElement("p", { className: "text-[#E9E9E9] text-[13px] font-medium" }, "Temperature"),
                        react_1["default"].createElement("button", { disabled: !includeAdvancedOptions, className: "hover:opacity-70 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed" },
                            react_1["default"].createElement(lucide_react_1.HelpCircle, { size: 14, color: "#898989" }))),
                    react_1["default"].createElement("div", { className: "relative" },
                        react_1["default"].createElement("input", { type: "range", min: 0, max: 10, step: 1, value: advancedOptionsConfig.temperature, disabled: !includeAdvancedOptions, onChange: function (e) {
                                return setAdvancedOptionsConfig(function (prev) { return (__assign(__assign({}, prev), { temperature: Number(e.target.value) })); });
                            }, className: "adv-temp-slider w-full h-[3px] rounded-full appearance-none cursor-pointer mb-1 disabled:opacity-50 disabled:cursor-not-allowed", style: {
                                background: "linear-gradient(to right, #E9E9E9 0%, #E9E9E9 " + advancedOptionsConfig.temperature * 10 + "%, #555 " + advancedOptionsConfig.temperature * 10 + "%, #555 100%)",
                                WebkitAppearance: "none"
                            } }),
                        react_1["default"].createElement("div", { className: "flex justify-between px-0 mt-1" }, Array.from({ length: TICK_COUNT }).map(function (_, i) { return (react_1["default"].createElement("div", { key: i, className: "flex flex-col items-center" },
                            react_1["default"].createElement("div", { className: "w-px h-[6px] bg-[#555]" }))); })),
                        react_1["default"].createElement("div", { className: "flex justify-between mt-0.5" },
                            react_1["default"].createElement("span", { className: "text-[#898989] text-[10px]" }, "0"),
                            react_1["default"].createElement("span", { className: "text-[#898989] text-[10px]" }, "10")))),
                react_1["default"].createElement("div", { className: "flex items-center justify-between" },
                    react_1["default"].createElement("p", { className: "text-[#E9E9E9] text-[13px] font-medium" }, "Use document spelling and grammar"),
                    react_1["default"].createElement("button", { disabled: !includeAdvancedOptions, onClick: function () {
                            return setAdvancedOptionsConfig(function (prev) { return (__assign(__assign({}, prev), { useSpelling: !prev.useSpelling })); });
                        }, className: "w-5 h-5 rounded-[4px] border-2 flex items-center justify-center flex-shrink-0 transition-colors disabled:opacity-50 disabled:cursor-not-allowed " + (advancedOptionsConfig.useSpelling
                            ? "bg-[#8149EC] border-[#8149EC]"
                            : "bg-transparent border-[#898989] hover:border-[#A6A6A6]") }, advancedOptionsConfig.useSpelling && (react_1["default"].createElement("svg", { viewBox: "0 0 12 9", fill: "none", className: "w-3 h-3" },
                        react_1["default"].createElement("path", { d: "M1 4L4.5 7.5L11 1", stroke: "white", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" })))))))));
    }
    ;
    var updateSlider = function (id, value) {
        setSliders(function (prev) { return prev.map(function (s) { return (s.id === id ? __assign(__assign({}, s), { value: value }) : s); }); });
    };
    var updateSliderLabel = function (id, label) {
        setSliders(function (prev) { return prev.map(function (s) { return (s.id === id ? __assign(__assign({}, s), { label: label }) : s); }); });
    };
    var deleteSlider = function (id) {
        setSliders(function (prev) { return prev.filter(function (s) { return s.id !== id; }); });
    };
    var addNewSlider = function () {
        var newSlider = {
            id: "slider-" + Date.now(),
            label: "",
            level0: "Low",
            level100: "High",
            value: 0
        };
        setSliders(function (prev) { return __spreadArrays(prev, [newSlider]); });
        setEditingLabelId(newSlider.id);
        setTempLabelValue("");
        // Focus the input after render
        setTimeout(function () { var _a; return (_a = labelInputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, 0);
    };
    var finalizeLabelEdit = function () {
        if (editingLabelId) {
            var finalLabel = tempLabelValue.trim() || "Tone";
            updateSliderLabel(editingLabelId, finalLabel);
            setEditingLabelId(null);
            setTempLabelValue("");
        }
    };
    var handleLabelKeyDown = function (e) {
        if (e.key === "Enter") {
            finalizeLabelEdit();
        }
    };
    var deletePrompt = function (id) {
        setPrompts(function (prev) { return prev.filter(function (p) { return p.id !== id; }); });
    };
    var sendPrompt = function () {
        if (!promptInput.trim())
            return;
        var newPrompt = {
            id: Date.now().toString(),
            label: "Prompt " + (prompts.length + 1),
            userPrompt: promptInput.trim()
        };
        setPrompts(function (prev) { return __spreadArrays(prev, [newPrompt]); });
        setPromptInput("");
    };
    var handleKeyDown = function (e) {
        if (e.key === "Enter")
            sendPrompt();
    };
    // Close menu when clicking outside
    react_1["default"].useEffect(function () {
        var handleClickOutside = function (event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenuId(null);
            }
        };
        if (openMenuId) {
            document.addEventListener('mousedown', handleClickOutside);
            return function () { return document.removeEventListener('mousedown', handleClickOutside); };
        }
    }, [openMenuId]);
    // Set selected text in output when provided and output is empty
    react_1.useEffect(function () {
        if (selectedText && outputRef.current && generatedText === '') {
            outputRef.current.innerHTML = selectedText;
        }
    }, [selectedText]);
    react_1.useEffect(function () {
        if (outputRef.current && !(generatedText === '')) {
            outputRef.current.innerHTML = generatedText;
        }
    }, [generatedText]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        showAdvanced && (react_1["default"].createElement(AdvancedOptionsModal_1.AdvancedOptionsModal, { onClose: function () { return setShowAdvanced(false); } })),
        react_1["default"].createElement("div", { className: "flex flex-col bg-[#303030] w-[370px] flex-shrink-0 h-full border-l border-[#898989]/20 relative" },
            react_1["default"].createElement("div", { className: "px-4 pt-4 pb-3 flex-shrink-0" },
                react_1["default"].createElement("div", { className: "flex items-center gap-3 mb-3" },
                    react_1["default"].createElement(AiIcon, { size: 26 }),
                    react_1["default"].createElement("button", { onClick: function () { return setActiveTab("rewrite"); }, className: "px-3 py-1 rounded-full text-[13px] transition-colors " + (activeTab === "rewrite"
                            ? "bg-[#3a3a3a] text-[#E9E9E9]"
                            : "text-[#898989] hover:text-[#A6A6A6]") }, "Rewrite"),
                    react_1["default"].createElement("button", { onClick: function () { return setActiveTab("create"); }, className: "px-3 py-1 rounded-full text-[13px] transition-colors " + (activeTab === "create"
                            ? "bg-[#3a3a3a] text-[#E9E9E9]"
                            : "text-[#898989] hover:text-[#A6A6A6]") }, "Create")),
                react_1["default"].createElement("div", { className: "h-px bg-[#898989]/40 mb-3" }),
                activeTab === "rewrite" && (react_1["default"].createElement("div", { className: "flex items-center justify-between" },
                    react_1["default"].createElement("div", { className: "bg-[#262626] flex items-center p-0.5 rounded-[15px]" },
                        react_1["default"].createElement("button", { onClick: function () { return setMode("slider"); }, className: "flex items-center justify-center px-3 py-1 rounded-[12px] transition-colors " + (mode === "slider" ? "bg-[#303030]" : "hover:bg-[#303030]/50") },
                            react_1["default"].createElement(lucide_react_1.Sliders, { size: 16, color: mode === "slider" ? "#E9E9E9" : "#898989" })),
                        react_1["default"].createElement("button", { onClick: function () { return setMode("prompt"); }, className: "flex items-center justify-center px-3 py-1 rounded-[12px] transition-colors " + (mode === "prompt" ? "bg-[#303030]" : "hover:bg-[#303030]/50") },
                            react_1["default"].createElement(lucide_react_1.MessageSquare, { size: 16, color: mode === "prompt" ? "#E9E9E9" : "#898989" }))),
                    react_1["default"].createElement("div", { className: "flex items-center gap-3" },
                        react_1["default"].createElement("button", { className: "hover:opacity-70 transition-opacity" },
                            react_1["default"].createElement("svg", { viewBox: "0 0 16 15", fill: "none", className: "w-5 h-5" },
                                react_1["default"].createElement("path", { d: "M3 15V13H10.1C11.15 13 12.0625 12.6667 12.8375 12C13.6125 11.3333 14 10.5 14 9.5C14 8.5 13.6125 7.66667 12.8375 7C12.0625 6.33333 11.15 6 10.1 6H3.8L6.4 8.6L5 10L0 5L5 0L6.4 1.4L3.8 4H10.1C11.7167 4 13.1042 4.525 14.2625 5.575C15.4208 6.625 16 7.93333 16 9.5C16 11.0667 15.4208 12.375 14.2625 13.425C13.1042 14.475 11.7167 15 10.1 15H3Z", fill: "#898989" }))),
                        react_1["default"].createElement("button", { className: "hover:opacity-70 transition-opacity" },
                            react_1["default"].createElement("svg", { viewBox: "0 0 16 15", fill: "none", className: "w-5 h-5" },
                                react_1["default"].createElement("path", { d: "M5.9 15C4.28333 15 2.89583 14.475 1.7375 13.425C0.579167 12.375 0 11.0667 0 9.5C0 7.93333 0.579167 6.625 1.7375 5.575C2.89583 4.525 4.28333 4 5.9 4H12.2L9.6 1.4L11 0L16 5L11 10L9.6 8.6L12.2 6H5.9C4.85 6 3.9375 6.33333 3.1625 7C2.3875 7.66667 2 8.5 2 9.5C2 10.5 2.3875 11.3333 3.1625 12C3.9375 12.6667 4.85 13 5.9 13H13V15H5.9Z", fill: "#898989" }))))))),
            activeTab === "rewrite" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("div", { className: "mx-4 mb-3 flex-shrink-0" },
                    react_1["default"].createElement("div", { className: "relative bg-white rounded-[6px] h-[168px] overflow-y-auto" },
                        react_1["default"].createElement("div", { ref: outputRef, contentEditable: true, suppressContentEditableWarning: true, "data-placeholder": "Select some text to rewrite", className: "ai-output-editable w-full min-h-[144px] outline-none text-[#1a1a1a] text-[13px] leading-[1.6] px-3 py-3" })),
                    react_1["default"].createElement("div", { className: "flex items-center justify-between mt-2 px-1" },
                        react_1["default"].createElement("div", { className: "flex items-center gap-2" },
                            react_1["default"].createElement("div", { className: "w-2 h-2 rounded-full bg-[#8149EC]" }),
                            react_1["default"].createElement("span", { className: "text-[#a6a6a6] text-[10px]" }, "Generating")),
                        react_1["default"].createElement("div", { className: "flex items-center gap-1" },
                            react_1["default"].createElement("button", { className: "hover:opacity-70 transition-opacity" },
                                react_1["default"].createElement(lucide_react_1.RotateCcw, { size: 15, color: "#898989" })),
                            react_1["default"].createElement("button", { className: "hover:opacity-70 transition-opacity p-1" },
                                react_1["default"].createElement(lucide_react_1.ChevronLeft, { size: 15, color: "#898989" })),
                            react_1["default"].createElement("span", { className: "text-[#a6a6a6] text-[10px] mx-1" }, "1/1"),
                            react_1["default"].createElement("button", { className: "hover:opacity-70 transition-opacity p-1" },
                                react_1["default"].createElement(lucide_react_1.ChevronRight, { size: 15, color: "#898989" }))))),
                react_1["default"].createElement("div", { className: "mx-4 h-px bg-[#898989]/30 mb-2 flex-shrink-0" }),
                react_1["default"].createElement("div", { className: "flex-1 overflow-y-auto px-4 min-h-0" }, mode === "slider" ? (react_1["default"].createElement("div", { className: "flex flex-col gap-5 py-2" },
                    sliders.map(function (slider) { return (react_1["default"].createElement("div", { key: slider.id, className: "relative" },
                        react_1["default"].createElement("div", { className: "flex items-center justify-between mb-2" },
                            react_1["default"].createElement("span", { className: "text-[#E9E9E9] text-[13px] font-medium" }, editingLabelId === slider.id ? (react_1["default"].createElement("input", { ref: labelInputRef, type: "text", value: tempLabelValue, onChange: function (e) {
                                    return setTempLabelValue(e.target.value);
                                }, onKeyDown: handleLabelKeyDown, onBlur: finalizeLabelEdit, className: "bg-[#262626] text-[#E9E9E9] text-[13px] font-medium px-2 py-1 rounded-[4px] outline-none border border-[#555] focus:border-[#8149EC]/60 transition-colors" })) : (react_1["default"].createElement("span", { className: "cursor-pointer", onClick: function () {
                                    setEditingLabelId(slider.id);
                                    setTempLabelValue(slider.label);
                                    // Focus the input after render
                                    setTimeout(function () { var _a; return (_a = labelInputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, 0);
                                } }, slider.label))),
                            react_1["default"].createElement("div", { className: "relative" },
                                react_1["default"].createElement("button", { onClick: function () {
                                        return setOpenMenuId(openMenuId === slider.id ? null : slider.id);
                                    }, className: "hover:opacity-70 transition-opacity" },
                                    react_1["default"].createElement(lucide_react_1.MoreVertical, { size: 14, color: "#898989" })),
                                openMenuId === slider.id && (react_1["default"].createElement("div", { ref: menuRef, className: "absolute right-0 top-full mt-1 bg-[#262626] rounded-[6px] shadow-lg border border-[#555] py-1 z-10 min-w-[120px]" },
                                    react_1["default"].createElement("button", { onClick: function () {
                                            deleteSlider(slider.id);
                                            setOpenMenuId(null);
                                        }, className: "w-full px-3 py-2 text-left text-[#E03030] text-[12px] hover:bg-[#303030] transition-colors flex items-center gap-2" },
                                        react_1["default"].createElement(lucide_react_1.Trash2, { size: 13 }),
                                        react_1["default"].createElement("span", null, "Delete")))))),
                        react_1["default"].createElement("div", { className: "flex items-center justify-between text-[10px] text-[#898989] mb-1" },
                            react_1["default"].createElement("span", null, slider.level0),
                            react_1["default"].createElement("span", null, slider.level100)),
                        react_1["default"].createElement("input", { type: "range", min: 0, max: 100, value: slider.value, onChange: function (e) {
                                return updateSlider(slider.id, Number(e.target.value));
                            }, className: "w-full h-[3px] rounded-full appearance-none cursor-pointer", style: {
                                background: "linear-gradient(to right, #8149EC 0%, #8149EC " + slider.value + "%, #555 " + slider.value + "%, #555 100%)",
                                WebkitAppearance: "none"
                            } }))); }),
                    react_1["default"].createElement("button", { onClick: addNewSlider, className: "flex items-center justify-center px-3 py-1 rounded-[12px] bg-[#303030] hover:bg-[#4a4a4a] transition-colors" },
                        react_1["default"].createElement(lucide_react_1.Plus, { size: 16, color: "#E9E9E9" })),
                    AdvancedOptionsSection())) : (react_1["default"].createElement("div", { className: "flex flex-col gap-3 py-2" },
                    prompts.map(function (prompt) { return (react_1["default"].createElement("div", { key: prompt.id, className: "bg-[#262626] rounded-[8px] p-3" },
                        react_1["default"].createElement("div", { className: "flex items-center justify-between mb-1" },
                            react_1["default"].createElement("span", { className: "text-[#A6A6A6] text-[11px] font-medium" }, prompt.label),
                            react_1["default"].createElement("div", { className: "flex items-center gap-2" },
                                react_1["default"].createElement("button", { onClick: function () { return deletePrompt(prompt.id); }, className: "hover:opacity-70 transition-opacity" },
                                    react_1["default"].createElement(lucide_react_1.Trash2, { size: 13, color: "#E03030" })),
                                react_1["default"].createElement("button", { className: "hover:opacity-70 transition-opacity" },
                                    react_1["default"].createElement(lucide_react_1.Pencil, { size: 13, color: "#3b3939" })))),
                        react_1["default"].createElement("p", { className: "text-[#E9E9E9] text-[12px] leading-[1.5]" }, prompt.userPrompt))); }),
                    AdvancedOptionsSection()))),
                mode === "prompt" && (react_1["default"].createElement("div", { className: "px-4 py-3 flex-shrink-0" },
                    react_1["default"].createElement("div", { className: "flex items-center bg-[#262626] rounded-full px-4 py-2 gap-3" },
                        react_1["default"].createElement("input", { ref: inputRef, type: "text", value: promptInput, onChange: function (e) { return setPromptInput(e.target.value); }, onKeyDown: handleKeyDown, placeholder: "How do you want to rewrite this?", className: "flex-1 bg-transparent text-[#E9E9E9] text-[12px] placeholder-[#898989] outline-none" }),
                        react_1["default"].createElement("button", { onClick: sendPrompt, className: "w-7 h-7 rounded-full bg-[#3a3a3a] hover:bg-[#4a4a4a] flex items-center justify-center flex-shrink-0 transition-colors" },
                            react_1["default"].createElement(lucide_react_1.Send, { size: 13, color: "#E9E9E9" }))))),
                react_1["default"].createElement("div", { className: "flex-shrink-0" },
                    react_1["default"].createElement("div", { className: "h-px bg-[#898989]/30 mx-4" }),
                    react_1["default"].createElement("div", { className: "flex items-center justify-between px-4 py-3" },
                        react_1["default"].createElement("button", { onClick: function () {
                                var _a;
                                setGeneratedText("");
                                onFinish(((_a = outputRef.current) === null || _a === void 0 ? void 0 : _a.innerHTML) || '');
                            }, className: "bg-white text-[#484848] text-[13px] font-medium px-4 py-[5px] rounded-[6px] hover:bg-[#f0f0f0] transition-colors" }, "Finish"),
                        react_1["default"].createElement("div", { className: "flex items-center gap-3" },
                            react_1["default"].createElement("button", { onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _a, _b;
                                    var _c, _d;
                                    return __generator(this, function (_e) {
                                        switch (_e.label) {
                                            case 0:
                                                if (!(mode === "slider")) return [3 /*break*/, 2];
                                                _a = setGeneratedText;
                                                return [4 /*yield*/, ApiFunctions_1.SliderGenerate(((_c = outputRef.current) === null || _c === void 0 ? void 0 : _c.innerHTML) || '', sliders, advancedOptionsConfig, includeAdvancedOptions)];
                                            case 1:
                                                _a.apply(void 0, [_e.sent()]);
                                                return [3 /*break*/, 4];
                                            case 2:
                                                if (!(mode === "prompt")) return [3 /*break*/, 4];
                                                _b = setGeneratedText;
                                                return [4 /*yield*/, ApiFunctions_1.PromptGenerate(((_d = outputRef.current) === null || _d === void 0 ? void 0 : _d.innerHTML) || "", prompts, advancedOptionsConfig, includeAdvancedOptions)];
                                            case 3:
                                                _b.apply(void 0, [_e.sent()]);
                                                _e.label = 4;
                                            case 4: return [2 /*return*/];
                                        }
                                    });
                                }); }, className: "bg-[#8149EC] text-[#E9E9E9] text-[13px] font-medium px-4 py-[5px] rounded-[6px] hover:bg-[#7040db] transition-colors" }, "Generate")))))),
            activeTab === "create" && react_1["default"].createElement(CreateTab, null),
            react_1["default"].createElement("style", null, "\n          .ai-output-editable:empty::before {\n            content: attr(data-placeholder);\n            color: #A6A6A6;\n            display: block;\n            text-align: center;\n            padding-top: 54px;\n            pointer-events: none;\n          }\n          input[type='range']::-webkit-slider-thumb {\n            -webkit-appearance: none;\n            appearance: none;\n            width: 16px;\n            height: 16px;\n            border-radius: 50%;\n            background: white;\n            cursor: pointer;\n            box-shadow: 0 1px 4px rgba(0,0,0,0.4);\n          }\n          input[type='range']::-moz-range-thumb {\n            width: 16px;\n            height: 16px;\n            border-radius: 50%;\n            background: white;\n            cursor: pointer;\n            border: none;\n            box-shadow: 0 1px 4px rgba(0,0,0,0.4);\n          }\n          .adv-temp-slider::-webkit-slider-thumb {\n            -webkit-appearance: none;\n            width: 18px;\n            height: 18px;\n            border-radius: 50%;\n            background: #E9E9E9;\n            cursor: pointer;\n            box-shadow: 0 1px 4px rgba(0,0,0,0.5);\n          }\n          .adv-temp-slider::-moz-range-thumb {\n            width: 18px;\n            height: 18px;\n            border-radius: 50%;\n            background: #E9E9E9;\n            cursor: pointer;\n            border: none;\n            box-shadow: 0 1px 4px rgba(0,0,0,0.5);\n          }\n        "))));
}
exports.AiToolPanel = AiToolPanel;
