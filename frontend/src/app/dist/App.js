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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var TitleBar_1 = require("./components/TitleBar");
var HomePageView_1 = require("./components/HomePageView");
var DocumentEditor_1 = require("./components/DocumentEditor");
var SAMPLE_DOCS = [
    {
        id: "doc-1",
        name: "Research Paper",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        date: "March 10, 2026"
    },
    {
        id: "doc-2",
        name: "Project Proposal",
        content: "This document outlines the project proposal for Q2...",
        date: "March 10, 2026"
    },
    {
        id: "doc-3",
        name: "Meeting Notes",
        content: "Notes from the team sync on March 10th...",
        date: "March 10, 2026"
    },
    {
        id: "doc-4",
        name: "Blog Post Draft",
        content: "The future of AI in creative writing...",
        date: "March 10, 2026"
    },
    {
        id: "doc-5",
        name: "Cover Letter",
        content: "Dear Hiring Manager, I am writing to express my interest...",
        date: "March 10, 2026"
    },
    {
        id: "doc-6",
        name: "Product Brief",
        content: "WriteAI is an AI-powered text editor designed to...",
        date: "March 10, 2026"
    },
    {
        id: "doc-7",
        name: "Weekly Report",
        content: "This week we made significant progress on the AI integration...",
        date: "March 10, 2026"
    },
    {
        id: "doc-8",
        name: "User Story Map",
        content: "As a user, I want to be able to edit documents...",
        date: "March 10, 2026"
    },
    {
        id: "doc-9",
        name: "Onboarding Guide",
        content: "Welcome to WriteAI! This guide will help you get started...",
        date: "March 10, 2026"
    },
    {
        id: "doc-10",
        name: "Feature Spec",
        content: "The AI rewrite feature allows users to select text...",
        date: "March 10, 2026"
    },
    {
        id: "doc-11",
        name: "Marketing Copy",
        content: "Revolutionize the way you write with WriteAI...",
        date: "March 10, 2026"
    },
];
function App() {
    var _a = react_1.useState("home"), view = _a[0], setView = _a[1];
    var _b = react_1.useState([]), openDocuments = _b[0], setOpenDocuments = _b[1];
    var _c = react_1.useState(null), activeDocId = _c[0], setActiveDocId = _c[1];
    var _d = react_1.useState(false), aiToolOpen = _d[0], setAiToolOpen = _d[1];
    var _e = react_1.useState("rewrite"), aiToolActiveTab = _e[0], setAiToolActiveTab = _e[1];
    var _f = react_1.useState(""), selectedTextToPass = _f[0], setSelectedTextToPass = _f[1];
    var recentDocs = react_1.useState(SAMPLE_DOCS)[0];
    var openDocument = function (doc) {
        if (!openDocuments.find(function (d) { return d.id === doc.id; })) {
            setOpenDocuments(function (prev) { return __spreadArrays(prev, [doc]); });
        }
        setActiveDocId(doc.id);
        setView("editor");
    };
    var closeDocument = function (id) {
        var newDocs = openDocuments.filter(function (d) { return d.id !== id; });
        setOpenDocuments(newDocs);
        if (activeDocId === id) {
            if (newDocs.length > 0) {
                setActiveDocId(newDocs[newDocs.length - 1].id);
            }
            else {
                setActiveDocId(null);
                setView("home");
            }
        }
    };
    var createNewDocument = function () {
        var newDoc = {
            id: "doc-new-" + Date.now(),
            name: "Untitled Document",
            content: "",
            date: "March 29, 2026"
        };
        setOpenDocuments(function (prev) { return __spreadArrays(prev, [newDoc]); });
        setActiveDocId(newDoc.id);
        setView("editor");
    };
    var updateDocument = function (id, content) {
        setOpenDocuments(function (prev) {
            return prev.map(function (d) { return (d.id === id ? __assign(__assign({}, d), { content: content }) : d); });
        });
    };
    var activeDoc = openDocuments.find(function (d) { return d.id === activeDocId; }) || null;
    return (React.createElement("div", { className: "w-full h-screen flex flex-col bg-[#212121] overflow-hidden" },
        React.createElement(TitleBar_1.TitleBar, { openDocuments: openDocuments, activeDocId: activeDocId, currentView: view, onHomeClick: function () { return setView("home"); }, onTabClick: function (id) {
                setActiveDocId(id);
                setView("editor");
            }, onTabClose: closeDocument, onNewTab: createNewDocument }),
        view === "home" ? (React.createElement(HomePageView_1.HomePageView, { recentDocs: recentDocs, onOpenDocument: openDocument, onNewDocument: createNewDocument })) : (React.createElement(DocumentEditor_1.DocumentEditor, { document: activeDoc, aiToolOpen: aiToolOpen, onToggleAiTool: function () { return setAiToolOpen(function (prev) { return !prev; }); }, onUpdateDocument: updateDocument, aiToolActiveTab: aiToolActiveTab, onAiToolTabChange: setAiToolActiveTab, selectedTextToPass: selectedTextToPass, onSelection: function (selectedText) {
                if (selectedText !== undefined)
                    setSelectedTextToPass(selectedText);
            } }))));
}
exports["default"] = App;
