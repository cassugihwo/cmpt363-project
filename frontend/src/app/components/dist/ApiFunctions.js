"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.PromptGenerate = exports.TestPromptFunction = exports.SliderGenerate = exports.TestSliderFunction = exports.DebugFunction1 = exports.DebugFunction0 = exports.DebugFunctions = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
function DebugFunctions(debugMode) {
    var _this = this;
    var _a = react_1.useState("debug text"), response = _a[0], setResponse = _a[1];
    var fetchTestData = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, text, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:5000/api/gemini/test-ai")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.text()];
                case 2:
                    text = _a.sent();
                    setResponse(text);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setResponse("Error fetching data (frontend side)");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getHtml = function () {
        switch (debugMode) {
            case 1:
                return (react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h1", { className: "text-white" }, "Debug Mode 1"),
                    react_1["default"].createElement("p", { className: "text-white" }, response || "Loading..."),
                    react_1["default"].createElement("button", { onClick: fetchTestData }, "(click to test API)")));
            default:
                return (react_1["default"].createElement("div", { className: "flex-1 flex flex-col items-center justify-center gap-4 px-8 text-center" },
                    react_1["default"].createElement("div", { className: "w-14 h-14 rounded-full bg-[#262626] flex items-center justify-center" },
                        react_1["default"].createElement(lucide_react_1.Wand2, { size: 24, color: "#8149EC" })),
                    react_1["default"].createElement("p", { className: "text-white text-[15px] font-medium" }, "Create"),
                    react_1["default"].createElement("p", { className: "text-[#898989] text-[13px] leading-[1.6]" }, "This feature is coming soon. You'll be able to generate new content from scratch using AI.")));
        }
    };
    return getHtml();
}
exports.DebugFunctions = DebugFunctions;
/**
 * DebugFunction0 --- sends slider data to API
 * @param text -> current text in output text area
 * @param sliders -> array of current SliderConfig objects
 * @param advancedOptions -> current advanced options configuration
 * @param includeAdvancedOptions -> whether to include advanced options in API request
 */
function DebugFunction0(text, sliders, advancedOptions, includeAdvancedOptions) {
    return __awaiter(this, void 0, Promise, function () {
        var temperature, useSpelling, filteredAdvancedOptions, response, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    temperature = advancedOptions.temperature, useSpelling = advancedOptions.useSpelling, filteredAdvancedOptions = __rest(advancedOptions, ["temperature", "useSpelling"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:5000/api/debugSlider", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                text: text,
                                sliders: sliders.map(function (_a) {
                                    var id = _a.id, rest = __rest(_a, ["id"]);
                                    return rest;
                                }),
                                includeAdvancedOptions: includeAdvancedOptions,
                                advancedOptions: filteredAdvancedOptions
                            })
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    console.log("API Response (DebugSlider) -----");
                    console.log(result.message);
                    console.log(result.prompt);
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error("API Error (DebugSlider):", error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.DebugFunction0 = DebugFunction0;
/**
 * DebugFunction1 --- sends prompt data to API
 * @param text -> current text in output text area
 * @param prompts -> array of current Prompt objects
 * @param advancedOptions -> current advanced options configuration
 * @param includeAdvancedOptions -> whether to include advanced options in API request
 */
function DebugFunction1(text, prompts, advancedOptions, includeAdvancedOptions) {
    return __awaiter(this, void 0, Promise, function () {
        var temperature, useSpelling, filteredAdvancedOptions, response, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    temperature = advancedOptions.temperature, useSpelling = advancedOptions.useSpelling, filteredAdvancedOptions = __rest(advancedOptions, ["temperature", "useSpelling"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:5000/api/debugPrompts", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                text: text,
                                prompts: prompts.map(function (_a) {
                                    var id = _a.id, label = _a.label, userPrompt = _a.userPrompt;
                                    return ({ userPrompt: userPrompt });
                                }),
                                includeAdvancedOptions: includeAdvancedOptions,
                                advancedOptions: filteredAdvancedOptions
                            })
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    console.log("API Response (DebugPrompts) -----");
                    console.log(result.message);
                    console.log(result.prompt);
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    console.error("API Error (DebugPrompts):", error_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.DebugFunction1 = DebugFunction1;
/**
 * TestSliderFunction --- prints current text and slider configurations
 * @param text -> current text in output text area
 * @param sliders -> array of current SliderConfig objects
 */
function TestSliderFunction(text, sliders) {
    console.log("---- TestSliderFunction Output ----");
    console.log("Text:", text);
    console.log("Slider Configurations:", sliders);
    // print individual slider details
    sliders.forEach(function (slider) {
        console.log("Slider - ID: " + slider.id + ", Label: " + slider.label + ", Level0: " + slider.level0 + ", Level100: " + slider.level100 + ", Value: " + slider.value);
    });
    console.log("aaaaaaa", JSON.stringify({
        text: text,
        sliders: sliders.map(function (_a) {
            var id = _a.id, rest = __rest(_a, ["id"]);
            return rest;
        })
    }));
}
exports.TestSliderFunction = TestSliderFunction;
/**
 * SliderGenerate --- sends slider data to API
 * @param text -> current text in output text area
 * @param sliders -> array of current SliderConfig objects
 * @param advancedOptions -> current advanced options configuration
 * @param includeAdvancedOptions -> whether to include advanced options in API request
 */
function SliderGenerate(text, sliders, advancedOptions, includeAdvancedOptions) {
    return __awaiter(this, void 0, Promise, function () {
        var temperature, useSpelling, filteredAdvancedOptions, response, result, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    temperature = advancedOptions.temperature, useSpelling = advancedOptions.useSpelling, filteredAdvancedOptions = __rest(advancedOptions, ["temperature", "useSpelling"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:5000/api/gemini/generate-slider", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                text: text,
                                sliders: sliders.map(function (_a) {
                                    var id = _a.id, rest = __rest(_a, ["id"]);
                                    return rest;
                                }),
                                includeAdvancedOptions: includeAdvancedOptions,
                                advancedOptions: filteredAdvancedOptions
                            })
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    console.log("API Response (Slider) -----");
                    console.log(result.message);
                    console.log(result.prompt);
                    return [3 /*break*/, 5];
                case 4:
                    error_4 = _a.sent();
                    console.error("API Error (Slider):", error_4);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.SliderGenerate = SliderGenerate;
/**
 * TestPromptFunction --- prints current text and prompt configurations
 * @param text -> current text in output text area
 * @param prompts -> array of current Prompt objects
 */
function TestPromptFunction(text, prompts) {
    console.log("---- TestPromptFunction Output ----");
    console.log("Text:", text);
    console.log("Prompt Configurations:", prompts);
    //print individual prompt details
    prompts.forEach(function (prompt) {
        console.log("Prompt - ID: " + prompt.id + ", Label: " + prompt.label + ", UserPrompt: " + prompt.userPrompt);
    });
    console.log("aaaaaaa", JSON.stringify({
        text: text,
        prompts: prompts.map(function (_a) {
            var id = _a.id, label = _a.label, userPrompt = _a.userPrompt;
            return ({ userPrompt: userPrompt });
        })
    }));
}
exports.TestPromptFunction = TestPromptFunction;
/**
 * PromptGenerate --- sends prompt data to API
 * @param text -> current text in output text area
 * @param prompts -> array of current Prompt objects
 * @param advancedOptions -> current advanced options configuration
 * @param includeAdvancedOptions -> whether to include advanced options in API request
 */
function PromptGenerate(text, prompts, advancedOptions, includeAdvancedOptions) {
    return __awaiter(this, void 0, Promise, function () {
        var temperature, useSpelling, filteredAdvancedOptions, response, result, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    temperature = advancedOptions.temperature, useSpelling = advancedOptions.useSpelling, filteredAdvancedOptions = __rest(advancedOptions, ["temperature", "useSpelling"]);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:5000/api/gemini/generate-prompt", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                text: text,
                                prompts: prompts.map(function (_a) {
                                    var id = _a.id, label = _a.label, userPrompt = _a.userPrompt;
                                    return ({ userPrompt: userPrompt });
                                }),
                                includeAdvancedOptions: includeAdvancedOptions,
                                advancedOptions: filteredAdvancedOptions
                            })
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    console.log("API Response (Prompt) -----");
                    console.log(result.message);
                    console.log(result.prompt);
                    return [3 /*break*/, 5];
                case 4:
                    error_5 = _a.sent();
                    console.error("API Error (Prompt):", error_5);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.PromptGenerate = PromptGenerate;
