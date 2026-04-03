"use strict";
exports.__esModule = true;
exports.DocumentEditor = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var AiToolPanel_1 = require("./AiToolPanel");
var MenuBar_1 = require("./MenuBar");
var SAMPLE_CONTENT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\nI am able to provide professional and friendly customer service and am eager to assist and interact with people. As a peer tutor for Fraser International College (FIC), I tutored international students, like myself, who were first-years and struggling in courses. We were expected to maintain professionalism, as we represented FIC. It was a rewarding yet challenging experience to assist these students who sometimes lacked English proficiency. I also helped promote the peer tutoring service at FIC by tabling at booths to inform and answer questions about peer tutoring. \n\nIn addition, I bring strong teamwork and adaptability skills to fast-paced environments. Through my academic and tutoring experiences, I frequently collaborated with peers to solve problems, share knowledge, and support group objectives. I am comfortable adjusting my communication style depending on the situation, whether working independently, assisting customers, or coordinating with team members. I take initiative when needed, remain organized under pressure, and strive to contribute positively to the workplace by being reliable, approachable, and solution-oriented.";
var TEXT_STYLES = [
    "Normal text",
    "Title",
    "Subtitle",
    "Heading 1",
    "Heading 2",
    "Heading 3",
];
var FONTS = ["Arial", "Georgia", "Times New Roman", "Verdana", "Courier New"];
function Divider() {
    return React.createElement("div", { className: "w-px h-[17px] bg-[#898989]/50 mx-1 flex-shrink-0" });
}
function ToolbarBtn(_a) {
    var children = _a.children, onClick = _a.onClick, active = _a.active, title = _a.title;
    return (React.createElement("button", { title: title, onMouseDown: function (e) {
            e.preventDefault();
            onClick === null || onClick === void 0 ? void 0 : onClick();
        }, className: "p-1.5 rounded transition-colors hover:bg-[#898989]/20 flex-shrink-0 " + (active ? "bg-[#898989]/30" : "") }, children));
}
function DocumentEditor(_a) {
    var activeDoc = _a.document, aiToolOpen = _a.aiToolOpen, onToggleAiTool = _a.onToggleAiTool, onSelection = _a.onSelection, aiToolActiveTab = _a.aiToolActiveTab, onAiToolTabChange = _a.onAiToolTabChange, onUpdateDocument = _a.onUpdateDocument, selectedTextToPass = _a.selectedTextToPass;
    var editorRef = react_1.useRef(null);
    var _b = react_1.useState(16), fontSize = _b[0], setFontSize = _b[1];
    var _c = react_1.useState("Normal text"), textStyle = _c[0], setTextStyle = _c[1];
    var _d = react_1.useState("Arial"), fontFamily = _d[0], setFontFamily = _d[1];
    var _e = react_1.useState(false), showStyleMenu = _e[0], setShowStyleMenu = _e[1];
    var _f = react_1.useState(false), showFontMenu = _f[0], setShowFontMenu = _f[1];
    var _g = react_1.useState(false), isBold = _g[0], setIsBold = _g[1];
    var _h = react_1.useState(false), isItalic = _h[0], setIsItalic = _h[1];
    var _j = react_1.useState(false), isUnderline = _j[0], setIsUnderline = _j[1];
    var _k = react_1.useState("left"), alignment = _k[0], setAlignment = _k[1];
    var _l = react_1.useState(null), storedRange = _l[0], setStoredRange = _l[1];
    // Floating button state
    var _m = react_1.useState(false), showFloatingButton = _m[0], setShowFloatingButton = _m[1];
    var _o = react_1.useState({
        x: 0,
        y: 0
    }), floatingButtonPosition = _o[0], setFloatingButtonPosition = _o[1];
    var savedRangeRef = react_1.useRef(null);
    // Word insertion state
    var _p = react_1.useState(false), wordInserted = _p[0], setWordInserted = _p[1];
    var _q = react_1.useState(""), actualWord = _q[0], setActualWord = _q[1];
    var insertedSpanRef = react_1.useRef(null);
    // Drag state for expanding selection
    var _r = react_1.useState(false), isDragging = _r[0], setIsDragging = _r[1];
    var _s = react_1.useState({ x: 0, y: 0 }), dragButtonPosition = _s[0], setDragButtonPosition = _s[1];
    var insertedSpansRef = react_1.useRef([]);
    var actualWordsRef = react_1.useRef([]);
    var lastMousePosRef = react_1.useRef({ x: 0, y: 0 });
    // Select text insertion toggle + char count
    var _t = react_1.useState(false), selectInsertionActive = _t[0], setSelectInsertionActive = _t[1];
    var _u = react_1.useState(0), insertedCharCount = _u[0], setInsertedCharCount = _u[1];
    var handleFinish = function (text) {
        var _a, _b;
        if (aiToolActiveTab === "create") {
            if (insertedSpansRef.current.length > 0 &&
                actualWordsRef.current.length > 0) {
                // Add space at the beginning (before first span)
                insertedSpansRef.current.forEach(function (span, index) {
                    var _a;
                    (_a = span.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(span);
                });
                (_a = savedRangeRef.current) === null || _a === void 0 ? void 0 : _a.deleteContents();
                savedRangeRef.current = null;
                // Update document content
                if (activeDoc && editorRef.current) {
                    onUpdateDocument(activeDoc.id, editorRef.current.innerText);
                }
                // Reset state
                setWordInserted(false);
                setShowFloatingButton(false);
                setActualWord("");
                setInsertedCharCount(0);
                insertedSpanRef.current = null;
                insertedSpansRef.current = [];
                actualWordsRef.current = [];
            }
            (_b = editorRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
        if (storedRange && editorRef.current) {
            storedRange.deleteContents();
            storedRange.insertNode(document.createTextNode(" " + text + " "));
            setStoredRange(null);
        }
    };
    var execCmd = react_1.useCallback(function (cmd, value) {
        var _a;
        window.document.execCommand(cmd, false, value);
        (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    var updateFormatState = react_1.useCallback(function () {
        setIsBold(window.document.queryCommandState("bold"));
        setIsItalic(window.document.queryCommandState("italic"));
        setIsUnderline(window.document.queryCommandState("underline"));
    }, []);
    // Generate random word
    var generateRandomWord = react_1.useCallback(function () {
        var length = Math.floor(Math.random() * 14) + 3; // 3 to 16 characters
        var characters = "abcdefghijklmnopqrstuvwxyz";
        var word = "";
        for (var i = 0; i < length; i++) {
            word += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return word;
    }, []);
    // Insert word at cursor position
    var insertWordAtCursor = react_1.useCallback(function () {
        var _a;
        var word = generateRandomWord();
        var obfuscated = ".".repeat(word.length);
        if (savedRangeRef.current) {
            var selection = window.getSelection();
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(savedRangeRef.current);
                // Create a span with obfuscated text
                var span = document.createElement("span");
                span.style.backgroundColor = "#8149EC33";
                span.style.color = "#8149EC";
                span.style.padding = "2px 4px";
                span.style.borderRadius = "3px";
                span.textContent = obfuscated;
                // Insert the span
                savedRangeRef.current.insertNode(span);
                insertedSpanRef.current = span;
                // Initialize tracking arrays
                insertedSpansRef.current = [span];
                actualWordsRef.current = [word];
                // Move cursor to end of word (instead of selecting it)
                var newRange = document.createRange();
                newRange.setStartAfter(span);
                newRange.collapse(true);
                selection.removeAllRanges();
                selection.addRange(newRange);
                // Store actual word
                setActualWord(word);
                setWordInserted(true);
                setInsertedCharCount(word.length);
                // Position drag button to the right of the word
                var rect = span.getBoundingClientRect();
                var x = rect.right + 8;
                var y = rect.top + rect.height / 2 - 16; // Center vertically
                setDragButtonPosition({ x: x, y: y });
                // Update document content
                if (activeDoc && editorRef.current) {
                    onUpdateDocument(activeDoc.id, editorRef.current.innerText);
                }
            }
        }
        (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [generateRandomWord, activeDoc, onUpdateDocument]);
    // Accept the word (reveal it)
    var acceptWord = react_1.useCallback(function () {
        var _a, _b, _c;
        // Handle all inserted spans
        if (insertedSpansRef.current.length > 0 &&
            actualWordsRef.current.length > 0) {
            // Add space at the beginning (before first span)
            var firstSpan = insertedSpansRef.current[0];
            if (firstSpan && firstSpan.previousSibling) {
                var spaceTextNode = document.createTextNode(" ");
                (_a = firstSpan.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(spaceTextNode, firstSpan);
            }
            insertedSpansRef.current.forEach(function (span, index) {
                var _a;
                var word = actualWordsRef.current[index];
                if (span && word) {
                    // Remove leading space if it exists
                    var text = ((_a = span.textContent) === null || _a === void 0 ? void 0 : _a.startsWith(" ")) ? " " + word : word;
                    span.textContent = text;
                    span.style.backgroundColor = "transparent";
                    span.style.color = "inherit";
                    span.style.padding = "0";
                }
            });
            // Add space at the end (after last span)
            var lastSpan = insertedSpansRef.current[insertedSpansRef.current.length - 1];
            if (lastSpan) {
                var spaceTextNode = document.createTextNode(" ");
                (_b = lastSpan.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(spaceTextNode, lastSpan.nextSibling);
                // Move cursor after the space
                var selection = window.getSelection();
                if (selection) {
                    var range = document.createRange();
                    range.setStartAfter(spaceTextNode);
                    range.collapse(true);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
            // Update document content
            if (activeDoc && editorRef.current) {
                onUpdateDocument(activeDoc.id, editorRef.current.innerText);
            }
            // Reset state
            setWordInserted(false);
            setShowFloatingButton(false);
            setActualWord("");
            setInsertedCharCount(0);
            insertedSpanRef.current = null;
            insertedSpansRef.current = [];
            actualWordsRef.current = [];
        }
        (_c = editorRef.current) === null || _c === void 0 ? void 0 : _c.focus();
    }, [activeDoc, onUpdateDocument]);
    // Delete the word
    var deleteWord = react_1.useCallback(function () {
        var _a;
        // Remove all inserted spans
        if (insertedSpansRef.current.length > 0) {
            insertedSpansRef.current.forEach(function (span) {
                if (span) {
                    span.remove();
                }
            });
            // Update document content
            if (activeDoc && editorRef.current) {
                onUpdateDocument(activeDoc.id, editorRef.current.innerText);
            }
            // Reset state
            setWordInserted(false);
            setShowFloatingButton(false);
            setActualWord("");
            setInsertedCharCount(0);
            insertedSpanRef.current = null;
            insertedSpansRef.current = [];
            actualWordsRef.current = [];
            savedRangeRef.current = null;
        }
        (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [activeDoc, onUpdateDocument]);
    // Handle drag start on the drag button
    var handleDragStart = react_1.useCallback(function (e) {
        e.preventDefault();
        setIsDragging(true);
        lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    }, []);
    // Handle mouse move during drag
    var handleMouseMove = react_1.useCallback(function (e) {
        if (!isDragging)
            return;
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        var lastSpan = insertedSpansRef.current[insertedSpansRef.current.length - 1];
        if (!lastSpan)
            return;
        // Get position of the end of the last span
        var lastSpanRect = lastSpan.getBoundingClientRect();
        var endX = lastSpanRect.right;
        var endY = lastSpanRect.top + lastSpanRect.height / 2;
        // Calculate distance from end of selection to mouse
        var distanceX = mouseX - endX;
        var distanceY = mouseY - endY;
        var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        // If mouse is ahead of selection end, add words
        if (mouseX > endX && distance > 30) {
            var word = generateRandomWord();
            var obfuscated = ".".repeat(word.length);
            // Create new span
            var newSpan = document.createElement("span");
            newSpan.style.backgroundColor = "#8149EC33";
            newSpan.style.color = "#8149EC";
            newSpan.style.padding = "2px 4px";
            newSpan.style.borderRadius = "3px";
            newSpan.textContent = " " + obfuscated; // Add space before
            // Insert after last span
            lastSpan.insertAdjacentElement("afterend", newSpan);
            // Track the new span
            insertedSpansRef.current.push(newSpan);
            actualWordsRef.current.push(word);
            // Update selection to include all spans
            var selection = window.getSelection();
            if (selection) {
                var range = document.createRange();
                range.setStartBefore(insertedSpansRef.current[0]);
                range.setEndAfter(newSpan);
                selection.removeAllRanges();
                selection.addRange(range);
            }
            // Update button position
            var rect = newSpan.getBoundingClientRect();
            var x = rect.right + 8;
            var y = rect.top + rect.height / 2 - 16;
            setDragButtonPosition({ x: x, y: y });
            // Update document
            if (activeDoc && editorRef.current) {
                onUpdateDocument(activeDoc.id, editorRef.current.innerText);
            }
            // Update char count
            var newTotal = actualWordsRef.current.reduce(function (sum, w) { return sum + w.length; }, 0);
            setInsertedCharCount(newTotal);
        }
        // If mouse is behind selection end and we have more than 1 word, remove words
        else if (mouseX < endX - 30 && insertedSpansRef.current.length > 1) {
            var spanToRemove = insertedSpansRef.current[insertedSpansRef.current.length - 1];
            if (spanToRemove) {
                // Remove last span
                spanToRemove.remove();
                insertedSpansRef.current.pop();
                actualWordsRef.current.pop();
                // Update selection to include remaining spans
                var newLastSpan = insertedSpansRef.current[insertedSpansRef.current.length - 1];
                if (newLastSpan) {
                    var selection = window.getSelection();
                    if (selection) {
                        var range = document.createRange();
                        range.setStartBefore(insertedSpansRef.current[0]);
                        range.setEndAfter(newLastSpan);
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                    // Update button position to new last span
                    var rect = newLastSpan.getBoundingClientRect();
                    var x = rect.right + 8;
                    var y = rect.top + rect.height / 2 - 16;
                    setDragButtonPosition({ x: x, y: y });
                }
                // Update document
                if (activeDoc && editorRef.current) {
                    onUpdateDocument(activeDoc.id, editorRef.current.innerText);
                }
                // Update char count
                var newTotal = actualWordsRef.current.reduce(function (sum, w) { return sum + w.length; }, 0);
                setInsertedCharCount(newTotal);
            }
        }
    }, [isDragging, generateRandomWord, activeDoc, onUpdateDocument]);
    // Handle drag end
    var handleMouseUp = react_1.useCallback(function () {
        if (isDragging) {
            setIsDragging(false);
        }
    }, [isDragging]);
    // Add mouse move/up listeners when dragging
    react_1.useEffect(function () {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
            return function () {
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp]);
    // Handle cursor position and show floating button
    var handleEditorClick = react_1.useCallback(function (e) {
        setShowStyleMenu(false);
        setShowFontMenu(false);
        if (!selectInsertionActive)
            return;
        var selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            var range = selection.getRangeAt(0);
            savedRangeRef.current = range.cloneRange();
            var rect = range.getBoundingClientRect();
            // Position button above cursor
            var buttonWidth = 100; // Approximate button width
            var buttonHeight = 40; // Approximate button height with offset
            var x = rect.left;
            var y = rect.top - buttonHeight;
            setFloatingButtonPosition({ x: x, y: y });
            setShowFloatingButton(true);
        }
    }, [selectInsertionActive]);
    // Handle select insertion toggle
    var handleSelectInsertionToggle = react_1.useCallback(function (active) {
        setSelectInsertionActive(active);
        if (!active) {
            // Clear everything when toggled off
            if (insertedSpansRef.current.length > 0) {
                insertedSpansRef.current.forEach(function (span) {
                    if (span)
                        span.remove();
                });
                insertedSpansRef.current = [];
                actualWordsRef.current = [];
                insertedSpanRef.current = null;
            }
            setWordInserted(false);
            setShowFloatingButton(false);
            setActualWord("");
            setInsertedCharCount(0);
            savedRangeRef.current = null;
        }
    }, []);
    var handleFontSize = function (delta) {
        var newSize = Math.max(8, Math.min(72, fontSize + delta));
        setFontSize(newSize);
        execCmd("fontSize", "7");
        // Apply via selection
        var sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
            var range = sel.getRangeAt(0);
            var span = window.document.createElement("span");
            span.style.fontSize = newSize + "px";
            try {
                range.surroundContents(span);
            }
            catch (_a) { }
        }
    };
    var setAlign = function (align) {
        setAlignment(align);
        if (align === "left")
            execCmd("justifyLeft");
        else if (align === "center")
            execCmd("justifyCenter");
        else
            execCmd("justifyRight");
    };
    // Initialize editor content
    react_1.useEffect(function () {
        if (editorRef.current) {
            var content = (activeDoc === null || activeDoc === void 0 ? void 0 : activeDoc.content) || SAMPLE_CONTENT;
            var paragraphs = content.split("\n\n").filter(Boolean);
            editorRef.current.innerHTML = paragraphs
                .map(function (p) { return "<p style=\"margin-bottom:16px\">" + p + "</p>"; })
                .join("");
        }
    }, [activeDoc === null || activeDoc === void 0 ? void 0 : activeDoc.id]);
    react_1.useEffect(function () {
        var handleSelection = function (event) {
            var selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
                setStoredRange(selection.getRangeAt(0).cloneRange());
            }
            var selected = (selection === null || selection === void 0 ? void 0 : selection.toString()) || "";
            onSelection(selected);
        };
        if (editorRef && editorRef.current) {
            editorRef.current.addEventListener("mouseup", handleSelection);
            return function () {
                var _a;
                (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("mouseup", handleSelection);
            };
        }
    }, [editorRef]);
    return (React.createElement("div", { className: "flex flex-col flex-1 min-h-0 bg-[#212121]" },
        React.createElement(MenuBar_1.MenuBar, null),
        React.createElement("div", { className: "bg-[#212121] px-3 pb-2 flex-shrink-0" },
            React.createElement("div", { className: "bg-[#333] rounded-[36px] py-[6px] px-2 flex items-center" },
                React.createElement("div", { className: "flex items-center gap-1 px-2" },
                    React.createElement(ToolbarBtn, { onClick: function () { return execCmd("undo"); }, title: "Undo" },
                        React.createElement(lucide_react_1.Undo2, { size: 16, color: "#E9E9E9" })),
                    React.createElement(ToolbarBtn, { onClick: function () { return execCmd("redo"); }, title: "Redo" },
                        React.createElement(lucide_react_1.Redo2, { size: 16, color: "#E9E9E9" }))),
                React.createElement(Divider, null),
                React.createElement("div", { className: "relative px-2 flex-shrink-0" },
                    React.createElement("button", { onMouseDown: function (e) {
                            e.preventDefault();
                            setShowStyleMenu(!showStyleMenu);
                            setShowFontMenu(false);
                        }, className: "flex items-center gap-1 text-[#E9E9E9] text-[13px] hover:bg-[#898989]/20 px-2 py-1 rounded transition-colors whitespace-nowrap" },
                        textStyle,
                        React.createElement(lucide_react_1.ChevronDown, { size: 14, color: "#E9E9E9" })),
                    showStyleMenu && (React.createElement("div", { className: "absolute top-full left-0 mt-1 bg-[#2a2a2a] rounded-[8px] shadow-lg z-50 min-w-[160px] py-1 border border-[#898989]/20" }, TEXT_STYLES.map(function (style) { return (React.createElement("button", { key: style, onMouseDown: function (e) {
                            e.preventDefault();
                            setTextStyle(style);
                            setShowStyleMenu(false);
                        }, className: "w-full text-left px-4 py-2 text-[#E9E9E9] text-[13px] hover:bg-[#3a3a3a] transition-colors" }, style)); })))),
                React.createElement(Divider, null),
                React.createElement("div", { className: "relative px-2 flex-shrink-0" },
                    React.createElement("button", { onMouseDown: function (e) {
                            e.preventDefault();
                            setShowFontMenu(!showFontMenu);
                            setShowStyleMenu(false);
                        }, className: "flex items-center gap-1 text-[#E9E9E9] text-[13px] hover:bg-[#898989]/20 px-2 py-1 rounded transition-colors whitespace-nowrap" },
                        fontFamily,
                        React.createElement(lucide_react_1.ChevronDown, { size: 14, color: "#E9E9E9" })),
                    showFontMenu && (React.createElement("div", { className: "absolute top-full left-0 mt-1 bg-[#2a2a2a] rounded-[8px] shadow-lg z-50 min-w-[180px] py-1 border border-[#898989]/20" }, FONTS.map(function (font) { return (React.createElement("button", { key: font, onMouseDown: function (e) {
                            e.preventDefault();
                            setFontFamily(font);
                            execCmd("fontName", font);
                            setShowFontMenu(false);
                        }, className: "w-full text-left px-4 py-2 text-[#E9E9E9] text-[13px] hover:bg-[#3a3a3a] transition-colors", style: { fontFamily: font } }, font)); })))),
                React.createElement(Divider, null),
                React.createElement("div", { className: "flex items-center gap-2 px-2 flex-shrink-0" },
                    React.createElement(ToolbarBtn, { onClick: function () { return handleFontSize(-1); }, title: "Decrease font size" },
                        React.createElement(lucide_react_1.Minus, { size: 14, color: "#E9E9E9" })),
                    React.createElement("div", { className: "border border-[#E9E9E9]/50 rounded-[6px] px-2 py-0.5 min-w-[36px] text-center" },
                        React.createElement("span", { className: "text-[#E9E9E9] text-[13px]" }, fontSize)),
                    React.createElement(ToolbarBtn, { onClick: function () { return handleFontSize(1); }, title: "Increase font size" },
                        React.createElement(lucide_react_1.Plus, { size: 14, color: "#E9E9E9" }))),
                React.createElement(Divider, null),
                React.createElement("div", { className: "flex items-center gap-1 px-2 flex-shrink-0" },
                    React.createElement(ToolbarBtn, { onClick: function () {
                            execCmd("bold");
                            setIsBold(!isBold);
                        }, active: isBold, title: "Bold" },
                        React.createElement(lucide_react_1.Bold, { size: 15, color: "#E9E9E9" })),
                    React.createElement(ToolbarBtn, { onClick: function () {
                            execCmd("italic");
                            setIsItalic(!isItalic);
                        }, active: isItalic, title: "Italic" },
                        React.createElement(lucide_react_1.Italic, { size: 15, color: "#E9E9E9" })),
                    React.createElement(ToolbarBtn, { onClick: function () {
                            execCmd("underline");
                            setIsUnderline(!isUnderline);
                        }, active: isUnderline, title: "Underline" },
                        React.createElement(lucide_react_1.Underline, { size: 15, color: "#E9E9E9" })),
                    React.createElement(ToolbarBtn, { title: "Text color" },
                        React.createElement(lucide_react_1.Baseline, { size: 15, color: "#E9E9E9" }))),
                React.createElement(Divider, null),
                React.createElement("div", { className: "flex items-center gap-1 px-2 flex-shrink-0" },
                    React.createElement(ToolbarBtn, { onClick: function () { return setAlign("left"); }, active: alignment === "left", title: "Align left" },
                        React.createElement(lucide_react_1.AlignLeft, { size: 15, color: "#E9E9E9" })),
                    React.createElement(ToolbarBtn, { onClick: function () { return setAlign("center"); }, active: alignment === "center", title: "Align center" },
                        React.createElement(lucide_react_1.AlignCenter, { size: 15, color: "#E9E9E9" })),
                    React.createElement(ToolbarBtn, { onClick: function () { return setAlign("right"); }, active: alignment === "right", title: "Align right" },
                        React.createElement(lucide_react_1.AlignRight, { size: 15, color: "#E9E9E9" }))),
                React.createElement(Divider, null),
                React.createElement("div", { className: "flex items-center gap-1 px-2 flex-shrink-0" },
                    React.createElement(ToolbarBtn, { onClick: function () { return execCmd("insertUnorderedList"); }, title: "Bullet list" },
                        React.createElement(lucide_react_1.List, { size: 15, color: "#E9E9E9" })),
                    React.createElement(ToolbarBtn, { onClick: function () { return execCmd("insertOrderedList"); }, title: "Numbered list" },
                        React.createElement(lucide_react_1.ListOrdered, { size: 15, color: "#E9E9E9" })),
                    React.createElement(ToolbarBtn, { onClick: function () { return execCmd("indent"); }, title: "Indent" },
                        React.createElement(lucide_react_1.Indent, { size: 15, color: "#E9E9E9" })),
                    React.createElement(ToolbarBtn, { onClick: function () { return execCmd("outdent"); }, title: "Outdent" },
                        React.createElement(lucide_react_1.Outdent, { size: 15, color: "#E9E9E9" }))),
                React.createElement("div", { className: "flex-1" }),
                React.createElement(ToolbarBtn, { title: "Collapse toolbar" },
                    React.createElement(lucide_react_1.ChevronUp, { size: 15, color: "#E9E9E9" })))),
        React.createElement("div", { className: "flex flex-1 min-h-0 relative overflow-hidden" },
            React.createElement("div", { className: "flex-1 overflow-auto bg-[#555] py-8 px-6 relative" },
                React.createElement("div", { ref: editorRef, contentEditable: true, suppressContentEditableWarning: true, onKeyUp: updateFormatState, onMouseUp: updateFormatState, onClick: function (e) {
                        setShowStyleMenu(false);
                        setShowFontMenu(false);
                        handleEditorClick(e);
                    }, onInput: function () {
                        if (activeDoc && editorRef.current) {
                            onUpdateDocument(activeDoc.id, editorRef.current.innerText);
                        }
                    }, className: "bg-white outline-none w-[846px] min-w-[846px] min-h-[1095px] h-auto px-[62px] py-[67px] text-[16px] text-[#1a1a1a] leading-[1.6] shadow-lg flex-shrink-0 mx-auto", style: { fontFamily: fontFamily, caretColor: "#333" } }),
                showFloatingButton &&
                    !wordInserted &&
                    aiToolActiveTab === "create" &&
                    selectInsertionActive && (React.createElement("button", { onMouseDown: function (e) {
                        e.preventDefault();
                        insertWordAtCursor();
                    }, className: "fixed z-50 bg-[#8149EC] hover:bg-[#9159FC] text-white w-10 h-10 rounded-full shadow-lg transition-colors flex items-center justify-center", style: {
                        left: floatingButtonPosition.x + "px",
                        top: floatingButtonPosition.y + "px"
                    } },
                    React.createElement(lucide_react_1.Plus, { size: 20 }))),
                wordInserted && (React.createElement("div", { className: "fixed z-50 flex gap-2", style: {
                        left: floatingButtonPosition.x + "px",
                        top: floatingButtonPosition.y + "px"
                    } },
                    React.createElement("button", { onMouseDown: function (e) {
                            e.preventDefault();
                            deleteWord();
                        }, className: "bg-[#EF4444] hover:bg-[#DC2626] text-white p-2 rounded-lg shadow-lg transition-colors", title: "Delete word" },
                        React.createElement(lucide_react_1.X, { size: 18 })))),
                wordInserted && (React.createElement("button", { onMouseDown: handleDragStart, className: "fixed z-50 bg-[#8149EC] hover:bg-[#9159FC] text-white px-4 py-2 rounded-lg shadow-lg transition-colors text-sm font-medium flex items-center gap-2", style: {
                        left: dragButtonPosition.x + "px",
                        top: dragButtonPosition.y + "px"
                    } },
                    React.createElement("svg", { viewBox: "0 0 8 14", fill: "none", width: "8", height: "14", className: "flex-shrink-0" },
                        React.createElement("rect", { x: "0.5", y: "0", width: "2.5", height: "14", rx: "1.25", fill: "white", opacity: "0.9" }),
                        React.createElement("rect", { x: "5", y: "0", width: "2.5", height: "14", rx: "1.25", fill: "white", opacity: "0.9" })),
                    "Drag to add"))),
            React.createElement("button", { onClick: function () {
                    var selection = window.getSelection();
                    if (selection && selection.rangeCount > 0) {
                        setStoredRange(selection.getRangeAt(0).cloneRange());
                    }
                    var selected = (selection === null || selection === void 0 ? void 0 : selection.toString()) || "";
                    onToggleAiTool();
                }, className: "absolute top-[80px] z-20 bg-[#303030] flex items-center gap-1 pl-[10px] pr-[12px] py-[8px] rounded-bl-[15px] rounded-tl-[15px] hover:bg-[#3a3a3a]", title: aiToolOpen ? "Close AI Tool" : "Open AI Tool", style: {
                    right: aiToolOpen ? 370 : 0,
                    transition: "right 320ms cubic-bezier(0.4, 0, 0.2, 1)"
                } },
                React.createElement("svg", { viewBox: "0 0 6.17 10", fill: "none", className: "w-3 h-4 flex-shrink-0", style: {
                        transform: aiToolOpen ? "scaleX(1)" : "scaleX(-1)",
                        transition: "transform 320ms cubic-bezier(0.4, 0, 0.2, 1)"
                    } },
                    React.createElement("path", { d: "M1 10L6.17 5L1 0L0 1.2L4 5L0 8.8L1 10Z", fill: "#E9E9E9" })),
                React.createElement("div", { className: "relative flex-shrink-0", style: { width: 26, height: 26 } },
                    React.createElement("svg", { viewBox: "0 0 17.5 17.5", fill: "none", style: { position: "absolute", inset: 0, width: 18, height: 18 } },
                        React.createElement("path", { d: "M1.94444 15.5556H3.32986L12.8333 6.05208L11.4479 4.66667L1.94444 14.1701V15.5556ZM0 17.5V13.3681L12.8333 0.559028C13.0278 0.380787 13.2425 0.243056 13.4774 0.145833C13.7124 0.0486111 13.9595 0 14.2188 0C14.478 0 14.7292 0.0486111 14.9722 0.145833C15.2153 0.243056 15.4259 0.388889 15.6042 0.583333L16.941 1.94444C17.1354 2.12269 17.2772 2.33333 17.3663 2.57639C17.4554 2.81944 17.5 3.0625 17.5 3.30556C17.5 3.56481 17.4554 3.81192 17.3663 4.04688C17.2772 4.28183 17.1354 4.49653 16.941 4.69097L4.13194 17.5H0Z", fill: "#E9E9E9" })),
                    React.createElement("div", { style: {
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            width: 11,
                            height: 12
                        } },
                        React.createElement("svg", { viewBox: "0 0 10.38 11.44", fill: "none", className: "w-full h-full" },
                            React.createElement("path", { d: "M5.04404 0.116448C5.07897 -0.0388164 5.30022 -0.0388156 5.33516 0.116449L5.47808 0.751671C6.01834 3.15282 7.88355 5.03389 10.28 5.59447C10.4123 5.6254 10.4123 5.81363 10.28 5.84456C7.88355 6.40514 6.01834 8.28621 5.47808 10.6874L5.33516 11.3226C5.30022 11.4778 5.07897 11.4778 5.04404 11.3226L4.90111 10.6874C4.36086 8.28621 2.49565 6.40514 0.0991709 5.84456C-0.0330572 5.81363 -0.0330569 5.6254 0.0991712 5.59447C2.49565 5.03389 4.36086 3.15282 4.90111 0.75167L5.04404 0.116448Z", fill: "#8149EC" }))))),
            React.createElement("div", { className: "flex-shrink-0 overflow-hidden", style: {
                    width: aiToolOpen ? 370 : 0,
                    transition: "width 320ms cubic-bezier(0.4, 0, 0.2, 1)"
                } },
                React.createElement("div", { className: "w-[370px] h-full" },
                    React.createElement(AiToolPanel_1.AiToolPanel, { onClose: onToggleAiTool, activeTab: aiToolActiveTab, onTabChange: onAiToolTabChange, selectInsertionActive: selectInsertionActive, onSelectInsertionToggle: handleSelectInsertionToggle, insertedCharCount: insertedCharCount, selectedText: selectedTextToPass, onFinish: handleFinish })))),
        (showStyleMenu || showFontMenu) && (React.createElement("div", { className: "fixed inset-0 z-40", onMouseDown: function () {
                setShowStyleMenu(false);
                setShowFontMenu(false);
            } }))));
}
exports.DocumentEditor = DocumentEditor;
