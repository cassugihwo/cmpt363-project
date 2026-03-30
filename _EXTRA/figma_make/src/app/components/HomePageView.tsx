import { MoreVertical, FilePlus, FolderOpen } from "lucide-react";
import svgPaths from "../../imports/svg-a1l64nldvs";

interface DocItem {
  id: string;
  name: string;
  content: string;
  date: string;
}

interface HomePageViewProps {
  recentDocs: DocItem[];
  onOpenDocument: (doc: DocItem) => void;
  onNewDocument: () => void;
}

function DocumentThumbnail() {
  return (
    <svg
      className="absolute block w-full h-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 245 246"
    >
      <rect fill="white" width="245" height="246" />
      {[31, 45, 59, 73, 87, 101, 115, 129, 143, 157, 171, 185, 199, 213, 227].map(
        (y) => (
          <path
            key={y}
            d={`M28 ${y}H217`}
            stroke="#A6A6A6"
            strokeLinecap="round"
            strokeWidth="2"
          />
        )
      )}
    </svg>
  );
}

function DocCard({
  doc,
  onOpen,
}: {
  doc: DocItem;
  onOpen: (doc: DocItem) => void;
}) {
  return (
    <div
      className="relative cursor-pointer group flex-shrink-0"
      style={{ width: 245 }}
      onClick={() => onOpen(doc)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ height: 246 }}>
        <DocumentThumbnail />
        <div className="absolute inset-0 bg-transparent group-hover:bg-white/5 transition-colors" />
      </div>

      {/* Info bar */}
      <div className="bg-[#303030] px-[19px] pt-[10px] pb-[16px]">
        <p className="text-white text-[16px] font-medium leading-[1.5] truncate">
          {doc.name}
        </p>
        <div className="flex items-center justify-between mt-[-2px]">
          <p className="text-[#a6a6a6] text-[11px] leading-[1.5]">{doc.date}</p>
          <button
            onClick={(e) => e.stopPropagation()}
            className="hover:bg-[#898989]/20 rounded p-0.5 transition-colors"
          >
            <MoreVertical size={16} color="#A6A6A6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function HomePageView({
  recentDocs,
  onOpenDocument,
  onNewDocument,
}: HomePageViewProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-[#212121]">
      {/* Hero section */}
      <div className="bg-[#2a2a2a] px-[100px] py-[60px]">
        <div className="flex items-start justify-between max-w-[807px]">
          {/* Title */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              {/* Star logo */}
              <div className="w-[52px] h-[58px] flex-shrink-0">
                <svg
                  viewBox="0 0 60 66"
                  fill="none"
                  className="w-full h-full"
                >
                  <path d={svgPaths.p3ed4c600} fill="#8149EC" />
                </svg>
              </div>
              <span className="text-white text-[54px] font-bold tracking-[-1px] leading-none">
                WriteAI.
              </span>
            </div>
            <p className="text-white text-[17px] font-medium leading-[1.6] max-w-[380px] opacity-90">
              Welcome to WriteAI, your personal writing tool, powered by Google
              AI. What would you like to do first?
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-5 mt-2">
            <button
              onClick={onNewDocument}
              className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 27 33" fill="none" className="w-7 h-8">
                  <path d={svgPaths.p145f5200} fill="#A6A6A6" />
                </svg>
              </div>
              <span className="text-white text-[16px] font-medium whitespace-nowrap">
                New Document
              </span>
            </button>

            <button className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 36 27" fill="none" className="w-9 h-7">
                  <path d={svgPaths.p4de00} fill="#A6A6A6" />
                </svg>
              </div>
              <span className="text-white text-[16px] font-medium whitespace-nowrap">
                Open Document
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent documents */}
      <div className="px-[100px] py-[40px]">
        <h2 className="text-white text-[16px] font-medium mb-6">
          Recent Documents
        </h2>
        <div className="flex flex-wrap gap-5">
          {recentDocs.map((doc) => (
            <DocCard key={doc.id} doc={doc} onOpen={onOpenDocument} />
          ))}
        </div>
      </div>
    </div>
  );
}
