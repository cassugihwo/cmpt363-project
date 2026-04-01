"use strict";
exports.__esModule = true;
var refineText_1 = require("./prompts/refineText");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var express_1 = require("express");
var cors_1 = require("cors");
var geminiApiRoute_1 = require("./geminiApiRoute");
var app = express_1["default"]();
var PORT = 5000;
// middleware
app.use(cors_1["default"]());
app.use(express_1["default"].json());
// this says "for all requests starting with /api/gemini, use geminiApiRoute router to handle it"
app.use("/api/gemini", geminiApiRoute_1["default"]);
// test route
app.get("/api/hello", function (req, res) {
    res.json({ message: "Hello from backend!" });
});
// test route
app.post("/api/debugSlider", function (req, res) {
    res.json({ message: "Hello from backend!" });
    var _a = req.body, text = _a.text, sliders = _a.sliders, includeAdvancedOptions = _a.includeAdvancedOptions, advancedOptions = _a.advancedOptions;
    console.log("Debug Slider API -----");
    var sliderText = "";
    if (Array.isArray(sliders)) {
        sliderText = sliders
            .map(function (slider, index) {
            return "- " + slider.label + " at " + slider.value + " on the scale";
        })
            .join("\n");
    }
    var advancedConfigText = refineText_1.buildAdvancedConfigText(advancedOptions, includeAdvancedOptions);
    var prompt = refineText_1.startPrompt + "\n" + refineText_1.sliderPrompt[0] +
        sliderText +
        ("\n" + advancedConfigText + "\n" + refineText_1.sliderPrompt[1] + "\n" + text + "\n" + refineText_1.sliderPrompt[2]);
    console.log("Constructed Prompt:");
    console.log(prompt);
});
// test route
app.post("/api/debugPrompts", function (req, res) {
    res.json({ message: "Hello from backend!" });
    var _a = req.body, text = _a.text, prompts = _a.prompts, includeAdvancedOptions = _a.includeAdvancedOptions, advancedOptions = _a.advancedOptions;
    console.log("Debug Prompt API -----");
    var promptText = "";
    if (Array.isArray(prompts)) {
        promptText = prompts
            .map(function (prompt, index) { return "- \"" + prompt.userPrompt + "\""; })
            .join("\n");
    }
    var advancedConfigText = refineText_1.buildAdvancedConfigText(advancedOptions, includeAdvancedOptions);
    var prompt = refineText_1.startPrompt + "\n" + refineText_1.promptPrompt[0] +
        promptText +
        ("\n" + advancedConfigText + "\n" + refineText_1.promptPrompt[1] + "\n" + text + "\n" + refineText_1.promptPrompt[2]);
    console.log("Constructed Prompt:");
    console.log(prompt);
});
app.listen(PORT, function () {
    console.log("Server running on http://localhost:" + PORT);
});
