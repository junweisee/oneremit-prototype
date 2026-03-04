import svgPaths from "./svg-tc3c3nx1ym";
import imgLogo from "../assets/landscape-placeholder.svg";
import imgLogo1 from "../assets/landscape-placeholder.svg";
import imgFlagImage from "../assets/landscape-placeholder.svg";

function Line() {
  return (
    <div className="bg-[#3a9944] h-[4px] shrink-0 w-full" data-name="Line" />
  );
}

function Tabs() {
  return (
    <div
      className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full"
      data-name="Tabs"
    >
      <div
        className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0"
        data-name="Tab"
      >
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3a9944] text-[16px]">
          Notice
        </p>
        <Line />
      </div>
      <div
        className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
        data-name="Tab"
      >
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">
          FAQ
        </p>
      </div>
      <div
        className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0"
        data-name="Tab"
      >
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">
          Contact us
        </p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[8px] h-[20px] items-center min-h-px min-w-px relative"
      data-name="Text"
    >
      <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#8ca2a4] text-[16px] whitespace-pre-wrap">
        Search
      </p>
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-white relative rounded-[8px] shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative w-full">
          <Text />
          <div className="relative shrink-0 size-[16px]" data-name="Size=16">
            <div
              className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2"
              data-name="Vector"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 14"
              >
                <path
                  d={svgPaths.p379dde00}
                  fill="var(--fill-0, #8CA2A4)"
                  id="Vector"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
}

function Cell() {
  return (
    <div
      className="bg-[#f8fafb] col-1 justify-self-stretch relative row-1 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[14px]">
            No.
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell1() {
  return (
    <div
      className="bg-[#f8fafb] col-2 justify-self-stretch relative row-1 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[14px]">
            Title
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell2() {
  return (
    <div
      className="bg-[#f8fafb] col-3 justify-self-stretch relative row-1 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[14px]">
            Date Created
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell3() {
  return (
    <div
      className="bg-[#f8fafb] col-4 justify-self-stretch relative row-1 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[14px]">
            Writer
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell4() {
  return (
    <div
      className="bg-[#f8fafb] col-5 justify-self-stretch relative row-1 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] py-[12px] relative size-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[14px]">
            Views
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell5() {
  return (
    <div
      className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#231a16] text-[14px]">
            33
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell6() {
  return (
    <div
      className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px overflow-hidden relative text-[#3a9944] text-[14px] text-ellipsis whitespace-nowrap">
            Important Notice Regarding Remittance Services to Korea
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell7() {
  return (
    <div
      className="col-3 justify-self-stretch relative row-2 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] whitespace-pre-wrap">
            2025-12-12
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell8() {
  return (
    <div
      className="col-4 justify-self-stretch relative row-2 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] whitespace-pre-wrap">
            sjkyung2023
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell9() {
  return (
    <div
      className="col-5 justify-self-stretch relative row-2 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] text-center whitespace-pre-wrap">
            99
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell10() {
  return (
    <div
      className="col-1 justify-self-stretch relative row-3 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#231a16] text-[14px]">
            33
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell11() {
  return (
    <div
      className="col-1 justify-self-stretch relative row-5 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#231a16] text-[14px]">
            33
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell12() {
  return (
    <div
      className="col-1 justify-self-stretch relative row-7 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#231a16] text-[14px]">
            33
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell13() {
  return (
    <div
      className="col-2 justify-self-stretch relative row-3 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px overflow-hidden relative text-[#3a9944] text-[14px] text-ellipsis whitespace-nowrap">
            Important Notice Regarding Remittance Services to Korea
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell14() {
  return (
    <div
      className="col-2 h-[49.5px] justify-self-stretch relative row-5 shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px overflow-hidden relative text-[#3a9944] text-[14px] text-ellipsis whitespace-nowrap">
            Important Notice Regarding Remittance Services to Korea
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell15() {
  return (
    <div
      className="col-2 h-[49.5px] justify-self-stretch relative row-7 shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px overflow-hidden relative text-[#3a9944] text-[14px] text-ellipsis whitespace-nowrap">
            Important Notice Regarding Remittance Services to Korea
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell16() {
  return (
    <div
      className="col-3 justify-self-stretch relative row-3 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] whitespace-pre-wrap">
            2025-12-12
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell17() {
  return (
    <div
      className="col-3 h-[49.5px] justify-self-stretch relative row-5 shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] whitespace-pre-wrap">
            2025-12-12
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell18() {
  return (
    <div
      className="col-3 h-[49.5px] justify-self-stretch relative row-7 shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] whitespace-pre-wrap">
            2025-12-12
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell19() {
  return (
    <div
      className="col-4 justify-self-stretch relative row-3 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] whitespace-pre-wrap">
            sjkyung2023
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell20() {
  return (
    <div
      className="col-4 h-[49.5px] justify-self-stretch relative row-5 shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] whitespace-pre-wrap">
            sjkyung2023
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell21() {
  return (
    <div
      className="col-4 h-[49.5px] justify-self-stretch relative row-7 shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] whitespace-pre-wrap">
            sjkyung2023
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell22() {
  return (
    <div
      className="col-5 justify-self-stretch relative row-3 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] text-center whitespace-pre-wrap">
            99
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell23() {
  return (
    <div
      className="col-5 h-[49.5px] justify-self-stretch relative row-5 shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] text-center whitespace-pre-wrap">
            99
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell24() {
  return (
    <div
      className="col-5 h-[49.5px] justify-self-stretch relative row-7 shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] text-center whitespace-pre-wrap">
            99
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell25() {
  return (
    <div
      className="col-1 justify-self-stretch relative row-4 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#231a16] text-[14px]">
            33
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell26() {
  return (
    <div
      className="col-1 justify-self-stretch relative row-6 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#231a16] text-[14px]">
            33
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell27() {
  return (
    <div
      className="col-2 justify-self-stretch relative row-4 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px overflow-hidden relative text-[#3a9944] text-[14px] text-ellipsis whitespace-nowrap">
            Important Notice Regarding Remittance Services to Korea
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell28() {
  return (
    <div
      className="col-2 justify-self-stretch relative row-6 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px overflow-hidden relative text-[#3a9944] text-[14px] text-ellipsis whitespace-nowrap">
            Important Notice Regarding Remittance Services to Korea
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell29() {
  return (
    <div
      className="col-3 justify-self-stretch relative row-4 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] whitespace-pre-wrap">
            2025-12-12
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell30() {
  return (
    <div
      className="col-3 justify-self-stretch relative row-6 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] whitespace-pre-wrap">
            2025-12-12
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell31() {
  return (
    <div
      className="col-4 h-[49.5px] justify-self-stretch relative row-4 shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] whitespace-pre-wrap">
            sjkyung2023
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell32() {
  return (
    <div
      className="col-4 h-[49.5px] justify-self-stretch relative row-6 shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] whitespace-pre-wrap">
            sjkyung2023
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell33() {
  return (
    <div
      className="col-5 justify-self-stretch relative row-4 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] text-center whitespace-pre-wrap">
            99
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Cell34() {
  return (
    <div
      className="col-5 justify-self-stretch relative row-6 self-stretch shrink-0"
      data-name="cell"
    >
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#231a16] text-[14px] text-center whitespace-pre-wrap">
            99
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none"
      />
    </div>
  );
}

function Table() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Table">
      <div className="gap-x-px gap-y-px grid grid-cols-[_____fit-content(100%)_minmax(0,1fr)_fit-content(100%)_146px_fit-content(100%)] grid-rows-[_______fit-content(100%)_fit-content(100%)_49.50px_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)] overflow-clip relative rounded-[inherit] w-full">
        <Cell />
        <Cell1 />
        <Cell2 />
        <Cell3 />
        <Cell4 />
        <Cell5 />
        <Cell6 />
        <Cell7 />
        <Cell8 />
        <Cell9 />
        <Cell10 />
        <Cell11 />
        <Cell12 />
        <Cell13 />
        <Cell14 />
        <Cell15 />
        <Cell16 />
        <Cell17 />
        <Cell18 />
        <Cell19 />
        <Cell20 />
        <Cell21 />
        <Cell22 />
        <Cell23 />
        <Cell24 />
        <Cell25 />
        <Cell26 />
        <Cell27 />
        <Cell28 />
        <Cell29 />
        <Cell30 />
        <Cell31 />
        <Cell32 />
        <Cell33 />
        <Cell34 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-[-1px] pointer-events-none rounded-[11px]"
      />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <div
        className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full"
        data-name="Textfield"
      >
        <Input />
      </div>
      <Table />
    </div>
  );
}

function Content() {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-[48px] items-start left-0 px-[64px] py-[32px] top-[81px] w-[1440px]"
      data-name="Content"
    >
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#231a16] text-[24px] w-full whitespace-pre-wrap">
        Help
      </p>
      <Tabs />
      <Frame />
    </div>
  );
}

function NavigationItem() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Navigation Item"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">
        How to use
      </p>
      <div
        className="overflow-clip relative shrink-0 size-[16px]"
        data-name="chevron-down"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[6px] items-center justify-center left-1/2 top-1/2 w-[10px]"
          style={
            {
              "--transform-inner-width": "1185",
              "--transform-inner-height": "21",
            } as React.CSSProperties
          }
        >
          <div className="-rotate-90 flex-none">
            <div className="h-[10px] relative w-[6px]" data-name="Vector">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 6 10"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p2118a470}
                  fill="var(--fill-0, #8CA2A4)"
                  fillRule="evenodd"
                  id="Vector"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div
      className="content-stretch flex gap-[48px] items-center relative shrink-0"
      data-name="Navigation"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">
        Send money
      </p>
      <NavigationItem />
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">
        About us
      </p>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[16px]">
        Help
      </p>
    </div>
  );
}

function LanguageSelector() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="Language Selector"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/English"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[142.22%] left-[-3.33%] max-w-none top-[-21.11%] w-[106.67%]"
              src={imgFlagImage}
            />
          </div>
        </div>
      </div>
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        EN
      </p>
    </div>
  );
}

function SignUpButton() {
  return (
    <div
      className="bg-[#3a9944] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[32px] shrink-0"
      data-name="Sign up Button"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-white">
        Sign up
      </p>
    </div>
  );
}

function UserMenu() {
  return (
    <div
      className="content-stretch flex gap-[24px] items-center relative shrink-0"
      data-name="User Menu"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#3a9944] text-[16px]">
        Log in
      </p>
      <SignUpButton />
    </div>
  );
}

function UserActions() {
  return (
    <div
      className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0"
      data-name="User Actions"
    >
      <LanguageSelector />
      <UserMenu />
    </div>
  );
}

export default function Notice() {
  return (
    <div className="bg-white relative size-full" data-name="Notice">
      <div
        className="absolute h-[169.5px] left-[-3144px] top-[-37px] w-[887px]"
        data-name="Logo"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgLogo}
        />
      </div>
      <Content />
      <div className="absolute bottom-0 h-[1192px] left-0 pointer-events-none top-0">
        <div
          className="bg-white content-stretch flex items-center justify-between pointer-events-auto px-[64px] py-[8px] sticky top-0 w-[1436px]"
          data-name="Navbar"
        >
          <div
            aria-hidden="true"
            className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none"
          />
          <div
            className="h-[50px] relative shrink-0 w-[131px]"
            data-name="Logo"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[100.62%] left-[-13.37%] max-w-none top-[-0.31%] w-[126.74%]"
                src={imgLogo1}
              />
            </div>
          </div>
          <Navigation />
          <UserActions />
        </div>
      </div>
    </div>
  );
}
