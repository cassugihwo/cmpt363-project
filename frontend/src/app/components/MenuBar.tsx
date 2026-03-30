import { useEffect, useRef, useState } from "react";

interface MenuItem {
  label: string;
  shortcut?: string;
  divider?: boolean;
}

interface MenuConfig {
  label: string;
  items: MenuItem[];
}

const MENUS: MenuConfig[] = [
  {
    label: "File",
    items: [
      { label: "New", shortcut: "⌘N" },
      { label: "Open", shortcut: "⌘O" },
      { divider: true, label: "" },
      { label: "Save", shortcut: "⌘S" },
      { label: "Save As", shortcut: "⇧⌘S" },
      { divider: true, label: "" },
      { label: "Export As" },
    ],
  },
  {
    label: "Edit",
    items: [
      { label: "Undo", shortcut: "⌘Z" },
      { label: "Redo", shortcut: "⇧⌘Z" },
      { divider: true, label: "" },
      { label: "Paste", shortcut: "⌘V" },
      { label: "Select All", shortcut: "⌘A" },
      { divider: true, label: "" },
      { label: "Find and Replace", shortcut: "⌘H" },
    ],
  },
  {
    label: "View",
    items: [
      { label: "Switch to Reading Mode" },
      { label: "Full Screen", shortcut: "F11" },
    ],
  },
  {
    label: "Format",
    items: [
      { label: "Text" },
      { label: "Paragraph Styles" },
      { divider: true, label: "" },
      { label: "Align & Indent" },
      { label: "Line & Paragraph Spacing" },
      { divider: true, label: "" },
      { label: "Bullets & Numbering" },
      { label: "Clear Formatting", shortcut: "⌘\\" },
    ],
  },
  {
    label: "AI Tool",
    items: [
      { label: "Open AI Tool" },
      { divider: true, label: "" },
      { label: "AI Tool Help" },
      { label: "AI Tool Settings" },
    ],
  },
  {
    label: "Help",
    items: [
      { label: "Search Menus" },
      { divider: true, label: "" },
      { label: "WriteAI Help" },
      { label: "Tutorial" },
      { divider: true, label: "" },
      { label: "Give Us Feedback" },
      { divider: true, label: "" },
      { label: "Privacy Policy" },
      { label: "Terms of Service" },
      { divider: true, label: "" },
      { label: "Keyboard Shortcuts", shortcut: "⌘/" },
    ],
  },
];

export function MenuBar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <div
      ref={barRef}
      className="bg-[#212121] flex items-center gap-1 px-3 py-1 flex-shrink-0"
    >
      {MENUS.map((menu) => (
        <div key={menu.label} className="relative">
          <button
            onMouseDown={() => toggle(menu.label)}
            className={`text-[#E9E9E9] text-[13px] px-2.5 py-1 rounded transition-colors ${
              openMenu === menu.label
                ? "bg-[#898989]/25"
                : "hover:bg-[#898989]/15"
            }`}
          >
            {menu.label}
          </button>

          {openMenu === menu.label && (
            <div
              className="absolute top-full left-0 mt-1 z-50 min-w-[220px] rounded-[10px] overflow-hidden py-1.5"
              style={{
                background: "#2a2a2a",
                boxShadow: "0 8px 32px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {menu.items.map((item, i) =>
                item.divider ? (
                  <div
                    key={i}
                    className="mx-3 my-1"
                    style={{ height: 1, background: "rgba(255,255,255,0.08)" }}
                  />
                ) : (
                  <button
                    key={i}
                    onClick={() => setOpenMenu(null)}
                    className="w-full flex items-center px-4 py-[7px] text-[13px] text-[#E9E9E9] hover:bg-[#ffffff]/10 transition-colors text-left"
                  >
                    <span>{item.label}</span>
                  </button>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}