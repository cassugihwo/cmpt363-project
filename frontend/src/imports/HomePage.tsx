import svgPaths from "./svg-a1l64nldvs";

function Frame20() {
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
      <Frame20 />
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

function Frame47() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-0 top-0">
      <div className="h-[72px] relative shrink-0 w-[65px]">
        <div className="absolute inset-[4.23%_3.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.9524 65.9086">
            <path d={svgPaths.p3ed4c600} fill="var(--fill-0, #8149EC)" id="Star 2" />
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans:Display_Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[64px] text-white tracking-[-0.704px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        WriteAI.
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="col-1 h-[155px] relative row-1 self-start shrink-0 w-[491px]" data-name="title">
      <Frame47 />
      <p className="absolute font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] left-0 text-[20px] text-white top-[95px] tracking-[-0.22px] w-[444px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Welcome to WriteAI, your personal writing tool, powered by Google AI. What would you like to do first?
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_16.67%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 33.3333">
        <g id="Group 2">
          <path d={svgPaths.p145f5200} fill="var(--fill-0, #A6A6A6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NewDocument() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[14px] items-center relative shrink-0 w-full" data-name="new-document">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="icon-new-document 3">
        <Group />
      </div>
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-left text-white tracking-[-0.176px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        New Document
      </p>
    </button>
  );
}

function OpenDocument() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-name="open-document">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="icon-folder-open 3">
        <div className="absolute inset-[16.67%_2.08%_16.67%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8333 26.6667">
            <path d={svgPaths.p4de00} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-white tracking-[-0.176px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Open Document
      </p>
    </div>
  );
}

function Options() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[19px] items-end justify-end justify-self-end relative row-1 self-end shrink-0 w-[171px]" data-name="options">
      <NewDocument />
      <OpenDocument />
    </div>
  );
}

function Frame() {
  return (
    <div className="gap-x-[130px] gap-y-[130px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[155px] relative shrink-0 w-[807px]" data-name="frame">
      <Title />
      <Options />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame25 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame40 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute h-[286px] left-0 top-0 w-[245px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 286">
        <g id="Frame 6">
          <rect fill="white" height="286" width="245" />
          <path d="M28 31H217" id="Line 1" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 45H217" id="Line 2" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 59H217" id="Line 3" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 73H217" id="Line 4" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 87H217" id="Line 5" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 101H217" id="Line 6" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 115H217" id="Line 7" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 129H217" id="Line 8" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 143H217" id="Line 9" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 157H217" id="Line 10" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 171H217" id="Line 11" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 185H217" id="Line 12" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 199H217" id="Line 13" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 213H217" id="Line 14" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 227H217" id="Line 15" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 241H217" id="Line 16" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
          <path d="M28 255H217" id="Line 17" stroke="var(--stroke-0, #A6A6A6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-between mb-[-6px] relative shrink-0 w-[212px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#a6a6a6] text-[11px] tracking-[-0.121px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        March 10, 2026
      </p>
      <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-more-vert">
        <div className="absolute inset-[16.67%_41.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 14.6667">
            <path d={svgPaths.p19bc9500} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute bg-[#303030] content-stretch flex flex-col items-start left-0 overflow-clip pb-[16px] pt-[10px] px-[19px] top-[246px] w-[245px]">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] min-w-full relative shrink-0 text-[16px] text-white tracking-[-0.176px] w-[min-content]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Document Name
      </p>
      <Frame46 />
    </div>
  );
}

function GridRecentDocuments() {
  return (
    <div className="content-start flex flex-wrap gap-[20px] h-[1292px] items-start overflow-clip relative shrink-0 w-[1040px]" data-name="grid-recent-documents">
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame2 />
        <Frame1 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame4 />
        <Frame5 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame7 />
        <Frame8 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame10 />
        <Frame11 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame13 />
        <Frame14 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame16 />
        <Frame17 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame19 />
        <Frame21 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame23 />
        <Frame24 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame26 />
        <Frame27 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame29 />
        <Frame30 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame32 />
        <Frame33 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame35 />
        <Frame36 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame38 />
        <Frame39 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame41 />
        <Frame42 />
      </div>
      <div className="h-[308px] overflow-clip relative rounded-[2px] shrink-0 w-[245px]" data-name="component-recent-document">
        <Frame44 />
        <Frame45 />
      </div>
    </div>
  );
}

function RecentDocuments() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0" data-name="recent documents">
      <p className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[20px] text-white tracking-[-0.22px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Recent Documents
      </p>
      <GridRecentDocuments />
    </div>
  );
}

function Padding() {
  return <div className="bg-[#212121] h-[100px] shrink-0 w-full" data-name="_padding" />;
}

function HomePage1() {
  return (
    <div className="absolute bg-[#212121] content-stretch flex flex-col h-[1024px] items-start left-0 pt-[200px] px-[200px] top-0 w-[1440px]" data-name="Home page">
      <div className="bg-[#212121] content-stretch flex flex-col gap-[186px] h-[1979px] items-start overflow-clip relative shrink-0" data-name="frame-home-page">
        <Frame />
        <RecentDocuments />
        <Padding />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative size-full" data-name="Home page">
      <div className="absolute bg-[#303030] content-stretch flex items-center justify-between left-0 overflow-clip top-0 w-[1440px]" data-name="upper-bar">
        <LeftSide />
        <RightSide />
      </div>
      <HomePage1 />
    </div>
  );
}