import { useRef, useState, useCallback, useEffect } from "react";
import {
  Undo2,
  Redo2,
  ChevronDown,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Indent,
  Outdent,
  Minus,
  Plus,
  ChevronUp,
  Baseline,
} from "lucide-react";
import { AiToolPanel } from "./AiToolPanel";
import { MenuBar } from "./MenuBar";

export interface DocTab {
  id: string;
  name: string;
  content: string;
  date: string;
}

interface DocumentEditorProps {
  document: DocTab | null;
  aiToolOpen: boolean;
  onToggleAiTool: (selectedText?: string) => void;
  onUpdateDocument: (id: string, content: string) => void;
  selectedTextToPass: string;
}

const SAMPLE_CONTENT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc arcu, laoreet ut ornare ut, condimentum scelerisque nisl. Nunc vel quam eu ligula facilisis consectetur id non est. Aenean maximus ac lacus id blandit. Etiam feugiat ligula et hendrerit mollis. Proin ut lacus orci. In imperdiet nulla sed magna ullamcorper, ac maximus elit eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas, mi quis efficitur aliquam, tellus diam eleifend enim, vitae lacinia nisi libero a tellus. Sed vulputate bibendum velit nec rhoncus. Fusce pulvinar tempor diam sit amet ornare. Cras aliquet varius purus, ut congue lacus gravida ac. Nullam cursus scelerisque auctor. Etiam sit amet ornare sapien. Aenean quis posuere justo.

In suscipit magna sed libero sagittis egestas sed sit amet ante. Duis id risus cursus, consectetur est sed, efficitur elit. Vivamus bibendum pharetra ligula, quis posuere magna mattis id. Morbi sit amet eros id augue accumsan dictum. Maecenas commodo tincidunt justo eu posuere. Curabitur neque tellus, porttitor pharetra erat sit amet, congue tempus mi. Cras sit amet venenatis ex, ac tempor diam. In eu tortor et arcu dictum feugiat tincidunt ut ex. Sed tortor elit, fringilla quis facilisis et, commodo quis sem. Fusce quam ligula, tincidunt sed dapibus eu, pretium eleifend tortor. Etiam eget pulvinar ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam nec mauris dignissim, mattis massa vel, venenatis justo. Donec aliquet volutpat nibh condimentum posuere. Nullam elementum nisi a sollicitudin facilisis. Nunc aliquet dolor quis libero sollicitudin aliquet.

Morbi commodo ac nibh ut finibus. Suspendisse potenti. Maecenas sollicitudin posuere aliquet. Pellentesque venenatis orci sem. Nullam sodales volutpat sollicitudin. Cras ultricies neque a ante sollicitudin, a elementum arcu finibus. Praesent non elit et lectus euismod pellentesque quis quis turpis. Aenean et finibus augue. Cras euismod ac ligula vel ultrices. Nullam ac orci non tortor vehicula sollicitudin. Vestibulum sed odio a tortor molestie semper.

Quisque fringilla metus vulputate condimentum lacinia. Morbi ut luctus ipsum, varius viverra urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In mollis vel odio sit amet condimentum. Praesent cursus leo cursus, tincidunt massa ac, fermentum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce non vulputate metus. Nulla sollicitudin mauris ligula. Mauris mattis congue pellentesque. Praesent vitae malesuada diam. Nam luctus ex sed lorem fringilla dictum. Morbi a erat in enim viverra consectetur nec vitae magna. Sed suscipit vulputate neque, eu pulvinar nulla vulputate nec.`;

const TEXT_STYLES = [
  "Normal text",
  "Title",
  "Subtitle",
  "Heading 1",
  "Heading 2",
  "Heading 3",
];
const FONTS = ["Arial", "Georgia", "Times New Roman", "Verdana", "Courier New"];

function Divider() {
  return <div className="w-px h-[17px] bg-[#898989]/50 mx-1 flex-shrink-0" />;
}

function ToolbarBtn({
  children,
  onClick,
  active,
  title,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  title?: string;
}) {
  return (
    <button
      title={title}
      onMouseDown={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className={`p-1.5 rounded transition-colors hover:bg-[#898989]/20 flex-shrink-0 ${
        active ? "bg-[#898989]/30" : ""
      }`}
    >
      {children}
    </button>
  );
}

export function DocumentEditor({
  document: activeDoc,
  aiToolOpen,
  onToggleAiTool,
  onUpdateDocument,
  selectedTextToPass,
}: DocumentEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(16);
  const [textStyle, setTextStyle] = useState("Normal text");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [showStyleMenu, setShowStyleMenu] = useState(false);
  const [showFontMenu, setShowFontMenu] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [alignment, setAlignment] = useState<"left" | "center" | "right">("left");
  const [storedRange, setStoredRange] = useState<Range | null>(null);

  const handleFinish = (text: string) => {
    if (storedRange && editorRef.current) {
      storedRange.deleteContents();
      storedRange.insertNode(document.createTextNode(text));
      setStoredRange(null);
    }
  };

  const execCmd = useCallback((cmd: string, value?: string) => {
    window.document.execCommand(cmd, false, value);
    editorRef.current?.focus();
  }, []);

  const updateFormatState = useCallback(() => {
    setIsBold(window.document.queryCommandState("bold"));
    setIsItalic(window.document.queryCommandState("italic"));
    setIsUnderline(window.document.queryCommandState("underline"));
  }, []);

  const handleFontSize = (delta: number) => {
    const newSize = Math.max(8, Math.min(72, fontSize + delta));
    setFontSize(newSize);
    execCmd("fontSize", "7");
    // Apply via selection
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      const span = window.document.createElement("span");
      span.style.fontSize = `${newSize}px`;
      try {
        range.surroundContents(span);
      } catch {}
    }
  };

  const setAlign = (align: "left" | "center" | "right") => {
    setAlignment(align);
    if (align === "left") execCmd("justifyLeft");
    else if (align === "center") execCmd("justifyCenter");
    else execCmd("justifyRight");
  };

  // Initialize editor content
  useEffect(() => {
    if (editorRef.current) {
      const content = activeDoc?.content || SAMPLE_CONTENT;
      const paragraphs = content.split("\n\n").filter(Boolean);
      editorRef.current.innerHTML = paragraphs
        .map((p) => `<p style="margin-bottom:16px">${p}</p>`)
        .join("");
    }
  }, [activeDoc?.id]);

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-[#212121]">
      {/* Menu bar */}
      <MenuBar />

      {/* Formatting toolbar */}
      <div className="bg-[#212121] px-3 pb-2 flex-shrink-0">
        <div className="bg-[#333] rounded-[36px] py-[6px] px-2 flex items-center">
          {/* Undo/Redo */}
          <div className="flex items-center gap-1 px-2">
            <ToolbarBtn onClick={() => execCmd("undo")} title="Undo">
              <Undo2 size={16} color="#E9E9E9" />
            </ToolbarBtn>
            <ToolbarBtn onClick={() => execCmd("redo")} title="Redo">
              <Redo2 size={16} color="#E9E9E9" />
            </ToolbarBtn>
          </div>

          <Divider />

          {/* Text style dropdown */}
          <div className="relative px-2 flex-shrink-0">
            <button
              onMouseDown={(e) => {
                e.preventDefault();
                setShowStyleMenu(!showStyleMenu);
                setShowFontMenu(false);
              }}
              className="flex items-center gap-1 text-[#E9E9E9] text-[13px] hover:bg-[#898989]/20 px-2 py-1 rounded transition-colors whitespace-nowrap"
            >
              {textStyle}
              <ChevronDown size={14} color="#E9E9E9" />
            </button>
            {showStyleMenu && (
              <div className="absolute top-full left-0 mt-1 bg-[#2a2a2a] rounded-[8px] shadow-lg z-50 min-w-[160px] py-1 border border-[#898989]/20">
                {TEXT_STYLES.map((style) => (
                  <button
                    key={style}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setTextStyle(style);
                      setShowStyleMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[#E9E9E9] text-[13px] hover:bg-[#3a3a3a] transition-colors"
                  >
                    {style}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Divider />

          {/* Font family dropdown */}
          <div className="relative px-2 flex-shrink-0">
            <button
              onMouseDown={(e) => {
                e.preventDefault();
                setShowFontMenu(!showFontMenu);
                setShowStyleMenu(false);
              }}
              className="flex items-center gap-1 text-[#E9E9E9] text-[13px] hover:bg-[#898989]/20 px-2 py-1 rounded transition-colors whitespace-nowrap"
            >
              {fontFamily}
              <ChevronDown size={14} color="#E9E9E9" />
            </button>
            {showFontMenu && (
              <div className="absolute top-full left-0 mt-1 bg-[#2a2a2a] rounded-[8px] shadow-lg z-50 min-w-[180px] py-1 border border-[#898989]/20">
                {FONTS.map((font) => (
                  <button
                    key={font}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setFontFamily(font);
                      execCmd("fontName", font);
                      setShowFontMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[#E9E9E9] text-[13px] hover:bg-[#3a3a3a] transition-colors"
                    style={{ fontFamily: font }}
                  >
                    {font}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Divider />

          {/* Font size */}
          <div className="flex items-center gap-2 px-2 flex-shrink-0">
            <ToolbarBtn onClick={() => handleFontSize(-1)} title="Decrease font size">
              <Minus size={14} color="#E9E9E9" />
            </ToolbarBtn>
            <div className="border border-[#E9E9E9]/50 rounded-[6px] px-2 py-0.5 min-w-[36px] text-center">
              <span className="text-[#E9E9E9] text-[13px]">{fontSize}</span>
            </div>
            <ToolbarBtn onClick={() => handleFontSize(1)} title="Increase font size">
              <Plus size={14} color="#E9E9E9" />
            </ToolbarBtn>
          </div>

          <Divider />

          {/* Text formatting */}
          <div className="flex items-center gap-1 px-2 flex-shrink-0">
            <ToolbarBtn
              onClick={() => { execCmd("bold"); setIsBold(!isBold); }}
              active={isBold}
              title="Bold"
            >
              <Bold size={15} color="#E9E9E9" />
            </ToolbarBtn>
            <ToolbarBtn
              onClick={() => { execCmd("italic"); setIsItalic(!isItalic); }}
              active={isItalic}
              title="Italic"
            >
              <Italic size={15} color="#E9E9E9" />
            </ToolbarBtn>
            <ToolbarBtn
              onClick={() => { execCmd("underline"); setIsUnderline(!isUnderline); }}
              active={isUnderline}
              title="Underline"
            >
              <Underline size={15} color="#E9E9E9" />
            </ToolbarBtn>
            <ToolbarBtn title="Text color">
              <Baseline size={15} color="#E9E9E9" />
            </ToolbarBtn>
          </div>

          <Divider />

          {/* Alignment + Lists + Indent */}
          <div className="flex items-center gap-1 px-2 flex-shrink-0">
            <ToolbarBtn
              onClick={() => setAlign("left")}
              active={alignment === "left"}
              title="Align left"
            >
              <AlignLeft size={15} color="#E9E9E9" />
            </ToolbarBtn>
            <ToolbarBtn
              onClick={() => setAlign("center")}
              active={alignment === "center"}
              title="Align center"
            >
              <AlignCenter size={15} color="#E9E9E9" />
            </ToolbarBtn>
            <ToolbarBtn
              onClick={() => setAlign("right")}
              active={alignment === "right"}
              title="Align right"
            >
              <AlignRight size={15} color="#E9E9E9" />
            </ToolbarBtn>
          </div>

          <Divider />

          <div className="flex items-center gap-1 px-2 flex-shrink-0">
            <ToolbarBtn onClick={() => execCmd("insertUnorderedList")} title="Bullet list">
              <List size={15} color="#E9E9E9" />
            </ToolbarBtn>
            <ToolbarBtn onClick={() => execCmd("insertOrderedList")} title="Numbered list">
              <ListOrdered size={15} color="#E9E9E9" />
            </ToolbarBtn>
            <ToolbarBtn onClick={() => execCmd("indent")} title="Indent">
              <Indent size={15} color="#E9E9E9" />
            </ToolbarBtn>
            <ToolbarBtn onClick={() => execCmd("outdent")} title="Outdent">
              <Outdent size={15} color="#E9E9E9" />
            </ToolbarBtn>
          </div>

          <div className="flex-1" />

          {/* Collapse toolbar */}
          <ToolbarBtn title="Collapse toolbar">
            <ChevronUp size={15} color="#E9E9E9" />
          </ToolbarBtn>
        </div>
      </div>

      {/* Editor + AI panel row */}
      <div className="flex flex-1 min-h-0 relative overflow-hidden">
        {/* Document area */}
        <div className="flex-1 overflow-auto bg-[#555] py-8 px-6 relative">
          {/* White paper */}
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            onKeyUp={updateFormatState}
            onMouseUp={updateFormatState}
            onClick={() => {
              setShowStyleMenu(false);
              setShowFontMenu(false);
            }}
            onInput={() => {
              if (activeDoc && editorRef.current) {
                onUpdateDocument(activeDoc.id, editorRef.current.innerText);
              }
            }}
            className="bg-white outline-none w-[846px] min-w-[846px] min-h-[1095px] h-auto px-[62px] py-[67px] text-[16px] text-[#1a1a1a] leading-[1.6] shadow-lg flex-shrink-0 mx-auto"
            style={{ fontFamily, caretColor: "#333" }}
          />
        </div>

        {/* Single animated tab button — slides with the panel */}
        <button
          onClick={() => {
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
              setStoredRange(selection.getRangeAt(0).cloneRange());
            }
            const selected = selection?.toString() || '';
            onToggleAiTool(selected);
          }}
          className="absolute top-[80px] z-20 bg-[#303030] flex items-center gap-1 pl-[10px] pr-[12px] py-[8px] rounded-bl-[15px] rounded-tl-[15px] hover:bg-[#3a3a3a]"
          title={aiToolOpen ? "Close AI Tool" : "Open AI Tool"}
          style={{
            right: aiToolOpen ? 370 : 0,
            transition: "right 320ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Always a right-pointing chevron */}
          <svg
            viewBox="0 0 6.17 10"
            fill="none"
            className="w-3 h-4 flex-shrink-0"
            style={{
              transform: aiToolOpen ? "scaleX(1)" : "scaleX(-1)",
              transition: "transform 320ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <path
              d="M1 10L6.17 5L1 0L0 1.2L4 5L0 8.8L1 10Z"
              fill="#E9E9E9"
            />
          </svg>
          {/* Pen + star icon */}
          <div className="relative flex-shrink-0" style={{ width: 26, height: 26 }}>
            <svg viewBox="0 0 17.5 17.5" fill="none" style={{ position: "absolute", inset: 0, width: 18, height: 18 }}>
              <path
                d="M1.94444 15.5556H3.32986L12.8333 6.05208L11.4479 4.66667L1.94444 14.1701V15.5556ZM0 17.5V13.3681L12.8333 0.559028C13.0278 0.380787 13.2425 0.243056 13.4774 0.145833C13.7124 0.0486111 13.9595 0 14.2188 0C14.478 0 14.7292 0.0486111 14.9722 0.145833C15.2153 0.243056 15.4259 0.388889 15.6042 0.583333L16.941 1.94444C17.1354 2.12269 17.2772 2.33333 17.3663 2.57639C17.4554 2.81944 17.5 3.0625 17.5 3.30556C17.5 3.56481 17.4554 3.81192 17.3663 4.04688C17.2772 4.28183 17.1354 4.49653 16.941 4.69097L4.13194 17.5H0Z"
                fill="#E9E9E9"
              />
            </svg>
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 11, height: 12 }}>
              <svg viewBox="0 0 10.38 11.44" fill="none" className="w-full h-full">
                <path
                  d="M5.04404 0.116448C5.07897 -0.0388164 5.30022 -0.0388156 5.33516 0.116449L5.47808 0.751671C6.01834 3.15282 7.88355 5.03389 10.28 5.59447C10.4123 5.6254 10.4123 5.81363 10.28 5.84456C7.88355 6.40514 6.01834 8.28621 5.47808 10.6874L5.33516 11.3226C5.30022 11.4778 5.07897 11.4778 5.04404 11.3226L4.90111 10.6874C4.36086 8.28621 2.49565 6.40514 0.0991709 5.84456C-0.0330572 5.81363 -0.0330569 5.6254 0.0991712 5.59447C2.49565 5.03389 4.36086 3.15282 4.90111 0.75167L5.04404 0.116448Z"
                  fill="#8149EC"
                />
              </svg>
            </div>
          </div>
        </button>

        {/* AI Tool Panel — always mounted, width animates open/closed */}
        <div
          className="flex-shrink-0 overflow-hidden"
          style={{
            width: aiToolOpen ? 370 : 0,
            transition: "width 320ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="w-[370px] h-full">
            <AiToolPanel onClose={() => onToggleAiTool()} selectedText={selectedTextToPass} onFinish={handleFinish} />
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(showStyleMenu || showFontMenu) && (
        <div
          className="fixed inset-0 z-40"
          onMouseDown={() => {
            setShowStyleMenu(false);
            setShowFontMenu(false);
          }}
        />
      )}
    </div>
  );
}