import { Home, Plus, X, Minus, Square, FileText } from "lucide-react";

export interface DocTab {
  id: string;
  name: string;
  content: string;
  date: string;
}

interface TitleBarProps {
  openDocuments: DocTab[];
  activeDocId: string | null;
  currentView: "home" | "editor";
  onHomeClick: () => void;
  onTabClick: (id: string) => void;
  onTabClose: (id: string) => void;
  onNewTab: () => void;
}

export function TitleBar({
  openDocuments,
  activeDocId,
  currentView,
  onHomeClick,
  onTabClick,
  onTabClose,
  onNewTab,
}: TitleBarProps) {
  return (
    <div className="flex items-stretch bg-[#212121] h-[30px] flex-shrink-0 select-none">
      {/* Left side - tabs */}
      <div className="flex items-stretch flex-1 overflow-hidden">
        {/* Home tab */}
        <button
          onClick={onHomeClick}
          className={`flex items-center justify-center px-5 h-full border border-[#898989]/50 flex-shrink-0 transition-colors ${
            currentView === "home"
              ? "bg-[#212121]"
              : "bg-[#212121] hover:bg-[#282828]"
          }`}
        >
          <Home size={14} color="#E9E9E9" />
        </button>

        {/* Document tabs */}
        {openDocuments.map((doc) => (
          <div
            key={doc.id}
            className={`flex items-center gap-2 px-4 h-full border border-[#898989]/50 min-w-[120px] max-w-[200px] cursor-pointer flex-shrink-0 transition-colors ${
              activeDocId === doc.id
                ? "bg-[#2c2c2c]"
                : "bg-[#1e1e1e] hover:bg-[#252525]"
            }`}
            onClick={() => onTabClick(doc.id)}
          >
            <FileText size={11} color="#A6A6A6" className="flex-shrink-0" />
            <span className="text-[#E9E9E9] text-[12px] flex-1 truncate">
              {doc.name}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(doc.id);
              }}
              className="flex-shrink-0 hover:bg-[#898989]/30 rounded p-0.5 transition-colors"
            >
              <X size={9} color="#A6A6A6" />
            </button>
          </div>
        ))}

        {/* New tab button */}
        <button
          onClick={onNewTab}
          className="flex items-center justify-center px-[9px] h-full hover:bg-[#282828] flex-shrink-0 transition-colors border-r border-[#898989]/20"
        >
          <Plus size={12} color="#898989" />
        </button>
      </div>

      {/* Right side - window controls */}
      <div className="flex items-center gap-[18px] px-4 flex-shrink-0">
        <button className="hover:opacity-70 transition-opacity">
          <Minus size={12} color="#A6A6A6" />
        </button>
        <button className="hover:opacity-70 transition-opacity">
          <Square size={10} color="#A6A6A6" />
        </button>
        <button className="hover:opacity-70 transition-opacity">
          <X size={12} color="#A6A6A6" />
        </button>
      </div>
    </div>
  );
}
