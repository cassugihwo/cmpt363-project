import svgPaths from "./svg-tnvx8pnrcm";

function AiToolTabOpen() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex gap-px items-center left-[1364px] overflow-clip pl-[10px] pr-[15px] py-[8px] rounded-bl-[15px] rounded-tl-[15px] top-[143px]" data-name="ai-tool-tab-open">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon-chevron-left">
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.83%] top-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 10">
            <path d={svgPaths.p17eef600} fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[30px]" data-name="icon-edit-ai">
        <div className="absolute bottom-1/4 left-[12.5%] right-[29.17%] top-[16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <path d={svgPaths.p1424ba00} fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.83%_8.33%_12.5%_54.17%]">
          <div className="absolute inset-[4.24%_3.87%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3792 11.439">
              <path d={svgPaths.p221c5180} fill="var(--fill-0, #8149EC)" id="Star 1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function UndoRedo() {
  return (
    <div className="content-stretch flex gap-[14px] items-center px-[22px] relative shrink-0" data-name="undo-redo">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-undo">
        <div className="absolute inset-[16.67%_16.67%_20.83%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            <path d={svgPaths.p22d78f90} fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-redo">
        <div className="absolute inset-[16.67%_16.67%_20.83%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            <path d={svgPaths.p3ee5cd80} fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left">
      <UndoRedo />
      <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 0.8">
                <line id="Line 22" stroke="var(--stroke-0, #898989)" strokeWidth="0.8" x2="17" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StyleSelect1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[126px]" data-name="style-select">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#e9e9e9] text-[14px] text-center tracking-[-0.154px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Normal text
      </p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-arrow-drop-down">
        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
            <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StyleSelect() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative shrink-0" data-name="style-select">
      <StyleSelect1 />
    </div>
  );
}

function FontSelect1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[87px]" data-name="font-select">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#e9e9e9] text-[14px] text-center tracking-[-0.154px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Arial
      </p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-arrow-drop-down">
        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
            <path d="M5 5L0 0H10L5 5Z" fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FontSelect() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[14px] relative shrink-0" data-name="font-select">
      <FontSelect1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative rounded-[6px] shrink-0 w-[37px]">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#e9e9e9] text-[14px] text-center tracking-[-0.154px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        16
      </p>
    </div>
  );
}

function FontSize() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] relative shrink-0" data-name="font-size">
      <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="font-size">
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[21px]" data-name="icon-remove">
          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 1.75">
              <path d="M0 1.75V0H12.25V1.75H0Z" fill="var(--fill-0, #E9E9E9)" id="Vector" />
            </svg>
          </div>
        </button>
        <Frame5 />
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[21px]" data-name="icon-add">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 12.25">
              <path d={svgPaths.p3a083f00} fill="var(--fill-0, #E9E9E9)" id="Vector" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start px-[4px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-format-line-spacing">
        <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
            <path d={svgPaths.p4c445a0} fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center pr-[2px] relative shrink-0">
      <div className="mr-[-2px] overflow-clip relative shrink-0 size-[24px]" data-name="icon-format-list-bulleted">
        <div className="absolute inset-[20.83%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.p11d88100} fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="mr-[-2px] overflow-clip relative shrink-0 size-[18px]" data-name="icon-arrow-drop-down">
        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 3.75">
            <path d={svgPaths.pd8d170} fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center pr-[2px] relative shrink-0">
      <div className="mr-[-2px] overflow-clip relative shrink-0 size-[24px]" data-name="icon-format-list-numbered">
        <div className="absolute inset-[16.67%_20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
            <path d={svgPaths.p3f6cc900} fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="mr-[-2px] overflow-clip relative shrink-0 size-[18px]" data-name="icon-arrow-drop-down">
        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 3.75">
            <path d={svgPaths.pd8d170} fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center px-[4px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-format-indent-increase">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p3554e800} fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center px-[4px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-format-indent-decrease">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2d745c00} fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextFormat() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center px-[14px] relative shrink-0" data-name="text-format-2">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Alignment options">
        <div className="content-stretch cursor-pointer flex items-center pr-[2px] relative shrink-0 w-[40px]">
          <button className="content-stretch flex items-start mr-[-2px] relative shrink-0" data-name="Alignment-options-icon">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-format-align-left">
              <div className="absolute inset-[16.67%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p38cd9f80} fill="var(--fill-0, #E9E9E9)" id="Vector" />
                </svg>
              </div>
            </div>
          </button>
          <button className="block mr-[-2px] overflow-clip relative shrink-0 size-[18px]" data-name="icon-arrow-drop-down">
            <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 3.75">
                <path d={svgPaths.pd8d170} fill="var(--fill-0, #E9E9E9)" id="Vector" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <Frame2 />
      <Frame />
      <Frame1 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Middle() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[825px]" data-name="middle">
      <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 0.8">
                <line id="Line 22" stroke="var(--stroke-0, #898989)" strokeWidth="0.8" x2="17" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <StyleSelect />
      <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 0.8">
                <line id="Line 22" stroke="var(--stroke-0, #898989)" strokeWidth="0.8" x2="17" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <FontSelect />
      <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 0.8">
                <line id="Line 23" stroke="var(--stroke-0, #A6A6A6)" strokeWidth="0.8" x2="17" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <FontSize />
      <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 0.8">
                <line id="Line 22" stroke="var(--stroke-0, #898989)" strokeWidth="0.8" x2="17" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[14px] items-center justify-center px-[14px] relative shrink-0" data-name="Text style options">
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="icon-format-bold">
          <div className="absolute inset-[20.83%_28.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4 14">
              <path d={svgPaths.p3c668f80} fill="var(--fill-0, #E9E9E9)" id="Vector" />
            </svg>
          </div>
        </button>
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="icon-format-italic">
          <div className="absolute bottom-[20.83%] left-[20.83%] right-1/4 top-[20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
              <path d={svgPaths.p3efb3480} fill="var(--fill-0, #E9E9E9)" id="Vector" />
            </svg>
          </div>
        </button>
        <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="icon-format-underline">
          <div className="absolute bottom-[16.67%] left-1/4 right-1/4 top-[16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
              <path d={svgPaths.pdc78400} fill="var(--fill-0, #E9E9E9)" id="Vector" />
            </svg>
          </div>
        </button>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-format-text-color">
          <div className="absolute inset-[16.67%_20.83%_20.83%_20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
              <path d={svgPaths.p137d2b80} fill="var(--fill-0, #E9E9E9)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 0.8">
                <line id="Line 22" stroke="var(--stroke-0, #898989)" strokeWidth="0.8" x2="17" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <TextFormat />
      <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 0.8">
                <line id="Line 20" stroke="var(--stroke-0, #898989)" strokeWidth="0.8" x2="17" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Aaaa() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative shrink-0" data-name="aaaa">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon-chevron-up">
        <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.4">
            <path d={svgPaths.p23227880} fill="var(--fill-0, #E9E9E9)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="right">
      <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[17px]">
            <div className="absolute inset-[-0.8px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 0.8">
                <line id="Line 20" stroke="var(--stroke-0, #898989)" strokeWidth="0.8" x2="17" y1="0.4" y2="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Aaaa />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1383px]">
      <Left />
      <Middle />
      <Right />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#333] col-1 content-stretch flex flex-col items-center justify-center justify-self-stretch py-[9px] relative rounded-[36px] row-2 self-start shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.47] not-italic relative shrink-0 text-[14px] text-left text-white tracking-[-0.154px] whitespace-nowrap">File</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.47] not-italic relative shrink-0 text-[14px] text-left text-white tracking-[-0.154px] whitespace-nowrap">Edit</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.47] not-italic relative shrink-0 text-[14px] text-left text-white tracking-[-0.154px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.47] not-italic relative shrink-0 text-[14px] text-left text-white tracking-[-0.154px] whitespace-nowrap">Format</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.47] not-italic relative shrink-0 text-[14px] text-left text-white tracking-[-0.154px] whitespace-nowrap">AI Tool</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.47] not-italic relative shrink-0 text-[14px] text-left text-white tracking-[-0.154px] whitespace-nowrap">Help</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="col-1 content-stretch cursor-pointer flex gap-[19px] items-center justify-self-start px-[15px] relative row-1 self-start shrink-0">
      <button className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[23px]" data-name="File">
        <Frame10 />
      </button>
      <button className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Edit">
        <Frame11 />
      </button>
      <button className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="View">
        <Frame12 />
      </button>
      <button className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Format">
        <Frame13 />
      </button>
      <button className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="AI Tool">
        <Frame14 />
      </button>
      <button className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Help">
        <Frame15 />
      </button>
    </div>
  );
}

function TextEditBar() {
  return (
    <div className="gap-x-[10px] gap-y-[10px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-[1383px]" data-name="text edit bar">
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function Frame8() {
  return (
    <button className="content-stretch flex items-center mr-[-1px] px-[9px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon-add">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.p3873ed80} fill="var(--fill-0, #898989)" id="Vector" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch cursor-pointer flex items-center pr-px relative shrink-0" data-name="left-side">
      <button className="bg-[#212121] content-stretch flex h-[30px] items-start mr-[-1px] px-[20px] py-[8px] relative shrink-0" data-name="upper-bar-home-tab">
        <div aria-hidden="true" className="absolute border-[#898989] border-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="relative shrink-0 size-[16px]" data-name="icon-home">
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 12">
              <path d={svgPaths.p20163bf0} fill="var(--fill-0, #E9E9E9)" id="Vector" />
            </svg>
          </div>
        </div>
      </button>
      <Frame8 />
    </div>
  );
}

function RightSide1() {
  return (
    <div className="content-stretch flex gap-[19px] items-center relative shrink-0" data-name="right-side">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon-minimize">
        <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[58.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1.16667">
            <path d="M0 1.16667V0H7V1.16667H0Z" fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon-window">
        <div className="absolute inset-[16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p36ff74f0} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon-close">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
            <path d={svgPaths.pbce2e00} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex items-center px-[14px] relative shrink-0" data-name="right-side">
      <RightSide1 />
    </div>
  );
}

function Letter() {
  return (
    <div className="bg-white content-stretch cursor-pointer flex flex-col gap-[10px] h-[1095px] items-start overflow-clip px-[62px] py-[67px] relative shrink-0 w-[846px]" data-name="Letter">
      <button className="content-stretch flex items-start relative shrink-0" data-name="Highlightable text object">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Alignable text object">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Formattable text object">
            <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[1.47] relative shrink-0 text-[16px] text-black text-left tracking-[-0.176px] w-[722px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc arcu, laoreet ut ornare ut, condimentum scelerisque nisl. Nunc vel quam eu ligula facilisis consectetur id non est. Aenean maximus ac lacus id blandit. Etiam feugiat ligula et hendrerit mollis. Proin ut lacus orci. In imperdiet nulla sed magna ullamcorper, ac maximus elit eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas, mi quis efficitur aliquam, tellus diam eleifend enim, vitae lacinia nisi libero a tellus. Sed vulputate bibendum velit nec rhoncus. Fusce pulvinar tempor diam sit amet ornare. Cras aliquet varius purus, ut congue lacus gravida ac. Nullam cursus scelerisque auctor. Etiam sit amet ornare sapien. Aenean quis posuere justo.</p>
          </div>
        </div>
      </button>
      <button className="content-stretch flex items-start relative shrink-0" data-name="Highlightable text object">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Alignable text object">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Formattable text object">
            <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[1.47] relative shrink-0 text-[16px] text-black text-left tracking-[-0.176px] w-[722px]">In suscipit magna sed libero sagittis egestas sed sit amet ante. Duis id risus cursus, consectetur est sed, efficitur elit. Vivamus bibendum pharetra ligula, quis posuere magna mattis id. Morbi sit amet eros id augue accumsan dictum. Maecenas commodo tincidunt justo eu posuere. Curabitur neque tellus, porttitor pharetra erat sit amet, congue tempus mi. Cras sit amet venenatis ex, ac tempor diam. In eu tortor et arcu dictum feugiat tincidunt ut ex. Sed tortor elit, fringilla quis facilisis et, commodo quis sem. Fusce quam ligula, tincidunt sed dapibus eu, pretium eleifend tortor. Etiam eget pulvinar ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam nec mauris dignissim, mattis massa vel, venenatis justo. Donec aliquet volutpat nibh condimentum posuere. Nullam elementum nisi a sollicitudin facilisis. Nunc aliquet dolor quis libero sollicitudin aliquet.</p>
          </div>
        </div>
      </button>
      <button className="content-stretch flex items-start relative shrink-0" data-name="Highlightable text object">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Alignable text object">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Formattable text object">
            <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[1.47] relative shrink-0 text-[16px] text-black text-left tracking-[-0.176px] w-[722px]">Morbi commodo ac nibh ut finibus. Suspendisse potenti. Maecenas sollicitudin posuere aliquet. Pellentesque venenatis orci sem. Nullam sodales volutpat sollicitudin. Cras ultricies neque a ante sollicitudin, a elementum arcu finibus. Praesent non elit et lectus euismod pellentesque quis quis turpis. Aenean et finibus augue. Cras euismod ac ligula vel ultrices. Nullam ac orci non tortor vehicula sollicitudin. Vestibulum sed odio a tortor molestie semper.</p>
          </div>
        </div>
      </button>
      <button className="content-stretch flex items-start relative shrink-0" data-name="Highlightable text object">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Alignable text object">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Formattable text object">
            <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[1.47] relative shrink-0 text-[16px] text-black text-left tracking-[-0.176px] w-[722px]">Quisque fringilla metus vulputate condimentum lacinia. Morbi ut luctus ipsum, varius viverra urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In mollis vel odio sit amet condimentum. Praesent cursus leo cursus, tincidunt massa ac, fermentum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce non vulputate metus. Nulla sollicitudin mauris ligula. Mauris mattis congue pellentesque. Praesent vitae malesuada diam. Nam luctus ex sed lorem fringilla dictum. Morbi a erat in enim viverra consectetur nec vitae magna. Sed suscipit vulputate neque, eu pulvinar nulla vulputate nec.</p>
          </div>
        </div>
      </button>
    </div>
  );
}

function Padding() {
  return <div className="bg-[#212121] h-[193px] shrink-0 w-full" data-name="padding" />;
}

function Document() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[297px] top-[229px] w-[846px]" data-name="Document">
      <Letter />
      <Padding />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#212121] relative size-full" data-name="1">
      <AiToolTabOpen />
      <div className="-translate-x-1/2 absolute bg-[#212121] content-stretch flex flex-col items-start left-[calc(50%-0.5px)] pt-[18px] top-[28px]" data-name="document-edit-top">
        <TextEditBar />
      </div>
      <div className="absolute bg-[#303030] content-stretch flex items-center justify-between left-0 overflow-clip top-0 w-[1440px]" data-name="upper-bar">
        <LeftSide />
        <RightSide />
      </div>
      <Document />
    </div>
  );
}