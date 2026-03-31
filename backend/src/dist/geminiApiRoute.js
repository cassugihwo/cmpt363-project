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
exports.__esModule = true;
var express_1 = require("express");
var genai_1 = require("@google/genai");
var refineText_1 = require("./prompts/refineText");
var geminiApiKey = process.env.GEMINI_API_KEY;
var ai = new genai_1.GoogleGenAI({
    apiKey: geminiApiKey
});
var model_flash = "gemini-2.5-flash";
var model_flash_lite = "gemini-2.5-flash-lite";
var router = express_1.Router();
/* Test route */
router.get("/test-ai", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ai.models.generateContent({
                        model: model_flash_lite,
                        contents: "Explain how AI works in a few words"
                    })];
            case 1:
                response = _a.sent();
                /* Response given by Gemini AI */
                res.json({ message: response.text });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("Error occurred:", error_1);
                res.status(500).json({ message: "Internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/test-ai-cringe", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ai.models.generateContent({
                        model: model_flash_lite,
                        contents: refineText_1.testPrompt
                    })];
            case 1:
                response = _a.sent();
                res.json({ message: response.text });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error("Error occurred:", error_2);
                res.status(500).json({ message: "Internal server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post("/generate-slider", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, text, sliders, includeAdvancedOptions, advancedOptions, prompt, response, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, text = _a.text, sliders = _a.sliders, includeAdvancedOptions = _a.includeAdvancedOptions, advancedOptions = _a.advancedOptions;
                prompt = includeAdvancedOptions
                    ? refineText_1.startPrompt + "\n" + refineText_1.sliderPrompt[0] + "\n" + JSON.stringify(sliders) + "\n" + refineText_1.additionalConfigPrompt + "\n" + JSON.stringify(advancedOptions) + "\n" + refineText_1.sliderPrompt[1] + "\n" + text + "\n" + refineText_1.sliderPrompt[2]
                    : refineText_1.startPrompt + "\n" + refineText_1.sliderPrompt[0] + "\n" + JSON.stringify(sliders) + "\n" + refineText_1.sliderPrompt[1] + "\n" + text + "\n" + refineText_1.sliderPrompt[2];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ai.models.generateContent({
                        model: model_flash_lite,
                        contents: prompt
                    })];
            case 2:
                response = _b.sent();
                res.json({ message: response.text, prompt: prompt });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                console.error("Error occurred:", error_3);
                res.status(500).json({ message: "Internal server error", prompt: "-" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post("/generate-prompt", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, text, prompts, prompt, response, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, text = _a.text, prompts = _a.prompts;
                prompt = refineText_1.promptPrompt[0] + "\n" + text + "\n" + refineText_1.promptPrompt[1] + "\n" + JSON.stringify(prompts) + "\n" + refineText_1.promptPrompt[2];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ai.models.generateContent({
                        model: model_flash_lite,
                        contents: prompt
                    })];
            case 2:
                response = _b.sent();
                res.json({ message: response.text, prompt: prompt });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _b.sent();
                console.error("Error occurred:", error_4);
                res.status(500).json({ message: "Internal server error", prompt: "-" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;
