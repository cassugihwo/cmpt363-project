import { useState } from "react";
import { TitleBar, type DocTab } from "./components/TitleBar";
import { HomePageView } from "./components/HomePageView";
import { DocumentEditor } from "./components/DocumentEditor";

const SAMPLE_DOCS: DocTab[] = [
  {
    id: "doc-1",
    name: "Research Paper",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "March 10, 2026",
  },
  {
    id: "doc-2",
    name: "Project Proposal",
    content: "This document outlines the project proposal for Q2...",
    date: "March 10, 2026",
  },
  {
    id: "doc-3",
    name: "Meeting Notes",
    content: "Notes from the team sync on March 10th...",
    date: "March 10, 2026",
  },
  {
    id: "doc-4",
    name: "Blog Post Draft",
    content: "The future of AI in creative writing...",
    date: "March 10, 2026",
  },
  {
    id: "doc-5",
    name: "Cover Letter",
    content: "Dear Hiring Manager, I am writing to express my interest...",
    date: "March 10, 2026",
  },
  {
    id: "doc-6",
    name: "Product Brief",
    content: "WriteAI is an AI-powered text editor designed to...",
    date: "March 10, 2026",
  },
  {
    id: "doc-7",
    name: "Weekly Report",
    content: "This week we made significant progress on the AI integration...",
    date: "March 10, 2026",
  },
  {
    id: "doc-8",
    name: "User Story Map",
    content: "As a user, I want to be able to edit documents...",
    date: "March 10, 2026",
  },
  {
    id: "doc-9",
    name: "Onboarding Guide",
    content: "Welcome to WriteAI! This guide will help you get started...",
    date: "March 10, 2026",
  },
  {
    id: "doc-10",
    name: "Feature Spec",
    content: "The AI rewrite feature allows users to select text...",
    date: "March 10, 2026",
  },
  {
    id: "doc-11",
    name: "Marketing Copy",
    content: "Revolutionize the way you write with WriteAI...",
    date: "March 10, 2026",
  },
];

export default function App() {
  const [view, setView] = useState<"home" | "editor">("home");
  const [openDocuments, setOpenDocuments] = useState<DocTab[]>([]);
  const [activeDocId, setActiveDocId] = useState<string | null>(null);
  const [aiToolOpen, setAiToolOpen] = useState(false);
  const [aiToolActiveTab, setAiToolActiveTab] = useState<"rewrite" | "create">("rewrite");
  const [selectedTextToPass, setSelectedTextToPass] = useState<string>("");
  const [recentDocs] = useState<DocTab[]>(SAMPLE_DOCS);

  const openDocument = (doc: DocTab) => {
    if (!openDocuments.find((d) => d.id === doc.id)) {
      setOpenDocuments((prev) => [...prev, doc]);
    }
    setActiveDocId(doc.id);
    setView("editor");
  };

  const closeDocument = (id: string) => {
    const newDocs = openDocuments.filter((d) => d.id !== id);
    setOpenDocuments(newDocs);
    if (activeDocId === id) {
      if (newDocs.length > 0) {
        setActiveDocId(newDocs[newDocs.length - 1].id);
      } else {
        setActiveDocId(null);
        setView("home");
      }
    }
  };

  const createNewDocument = () => {
    const newDoc: DocTab = {
      id: `doc-new-${Date.now()}`,
      name: "Untitled Document",
      content: "",
      date: "March 29, 2026",
    };
    setOpenDocuments((prev) => [...prev, newDoc]);
    setActiveDocId(newDoc.id);
    setView("editor");
  };

  const updateDocument = (id: string, content: string) => {
    setOpenDocuments((prev) =>
      prev.map((d) => (d.id === id ? { ...d, content } : d))
    );
  };

  const activeDoc = openDocuments.find((d) => d.id === activeDocId) || null;

  return (
    <div className="w-full h-screen flex flex-col bg-[#212121] overflow-hidden">
      {/* Title bar */}
      <TitleBar
        openDocuments={openDocuments}
        activeDocId={activeDocId}
        currentView={view}
        onHomeClick={() => setView("home")}
        onTabClick={(id) => {
          setActiveDocId(id);
          setView("editor");
        }}
        onTabClose={closeDocument}
        onNewTab={createNewDocument}
      />

      {/* Main content */}
      {view === "home" ? (
        <HomePageView
          recentDocs={recentDocs}
          onOpenDocument={openDocument}
          onNewDocument={createNewDocument}
        />
      ) : (
        <DocumentEditor
          document={activeDoc}
          aiToolOpen={aiToolOpen}
          onToggleAiTool={() => setAiToolOpen((prev) => !prev)}
          onUpdateDocument={updateDocument}
          aiToolActiveTab={aiToolActiveTab}
          onAiToolTabChange={setAiToolActiveTab}
          selectedTextToPass={selectedTextToPass}
          onSelection={(selectedText?: string) => {
            if (selectedText !== undefined) setSelectedTextToPass(selectedText);
          }}
        />
      )}
    </div>
  );
}
