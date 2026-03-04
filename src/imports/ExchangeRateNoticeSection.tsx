import svgPaths from "./svg-ovqndi5xxe";
import imgFlagImage from "https://placehold.co/600x400da19d3b20c36de9cd3c0b60eb2dd732efebf6d02.png";
import imgFlagImage1 from "https://placehold.co/600x4009875e3b3d86e7e562cb0bc2c432eba5885fc02be.png";
import imgFlagIcon from "https://placehold.co/600x4009b49587ddc7f5ff1a253a50d93a5735408b7988d.png";

function ExchangeRateDetails() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Exchange rate details"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#231a16] text-[16px]">
        Exchange Rate Information
      </p>
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#647576] text-[14px]">
        2025-12-12 10:30
      </p>
    </div>
  );
}

function ExchangeRateInfo() {
  return (
    <div
      className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
      data-name="Exchange rate info"
    >
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <ExchangeRateDetails />
      </div>
    </div>
  );
}

function ExchangeRateDivider() {
  return (
    <div
      className="bg-[#e5e5e5] h-px shrink-0 w-full"
      data-name="Exchange rate divider"
    />
  );
}

function Scrollbar() {
  return (
    <div
      className="absolute h-[208px] left-[623px] rounded-br-[8px] top-0 w-[17px]"
      data-name="Scrollbar"
    >
      <div
        className="-translate-x-1/2 absolute left-1/2 size-[7px] top-[6px]"
        data-name="Arrow"
      >
        <div className="absolute inset-[14.29%_0_28.57%_0]" data-name="Arrow">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 7 4"
          >
            <path
              d="M7 4H0L3.5 0L7 4Z"
              fill="var(--fill-0, #505050)"
              id="Arrow"
            />
          </svg>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bottom-[6px] left-1/2 size-[7px]"
        data-name="Arrow"
      >
        <div className="absolute inset-[28.57%_0_14.29%_0]" data-name="Arrow">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 7 4"
          >
            <path
              d={svgPaths.p2bd0fa40}
              fill="var(--fill-0, #505050)"
              id="Arrow"
            />
          </svg>
        </div>
      </div>
      <div
        className="-translate-x-1/2 absolute bg-[#c1c1c1] content-stretch flex flex-col h-[73px] items-start left-1/2 rounded-[4px] top-[16px] w-[8px]"
        data-name="Thumb"
      >
        <div
          className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#c1c1c1] text-[4px] w-[13px] whitespace-pre-wrap"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/Korean"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full"
              src={imgFlagImage}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell1() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell />
      <Cell1 />
    </div>
  );
}

function Cell2() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
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
              src={imgFlagImage1}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell3() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell2 />
      <Cell3 />
    </div>
  );
}

function Cell4() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/Korean"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full"
              src={imgFlagImage}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell5() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell4 />
      <Cell5 />
    </div>
  );
}

function Cell6() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
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
              src={imgFlagImage1}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell7() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell6 />
      <Cell7 />
    </div>
  );
}

function Cell8() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
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
              src={imgFlagImage1}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell9() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell8 />
      <Cell9 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[278px]"
      data-name="Container"
    >
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Cell10() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/Chinese"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Icon"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full"
              src={imgFlagIcon}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell11() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell10 />
      <Cell11 />
    </div>
  );
}

function Cell12() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/Korean"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full"
              src={imgFlagImage}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell13() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell12 />
      <Cell13 />
    </div>
  );
}

function Cell14() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
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
              src={imgFlagImage1}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell15() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell14 />
      <Cell15 />
    </div>
  );
}

function Cell16() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/Chinese"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Icon"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full"
              src={imgFlagIcon}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell17() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell16 />
      <Cell17 />
    </div>
  );
}

function Cell18() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <div
        className="relative shrink-0 size-[24px]"
        data-name="Language/Chinese"
      >
        <div
          className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]"
          data-name="Flag Icon"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[152.38%] left-0 max-w-none top-[-26.19%] w-full"
              src={imgFlagIcon}
            />
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3f4e50] text-[14px]">
        KR
      </p>
    </div>
  );
}

function Cell19() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip py-[8px] relative shrink-0"
      data-name="cell"
    >
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[0px] text-[14px]">
        <span className="leading-[normal] text-[#231a16]">1 YEN =</span>
        <span className="leading-[normal]">{` 9.4745 KRW`}</span>
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <Cell18 />
      <Cell19 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-end left-[314px] top-0 w-[278px]"
      data-name="Container"
    >
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function ExchangeRateColumn() {
  return (
    <div
      className="absolute h-[160px] left-[24px] top-[12.81px] w-[592px]"
      data-name="Exchange rate column"
    >
      <Container />
      <Container6 />
    </div>
  );
}

function ExchangeRateList() {
  return (
    <div
      className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full"
      data-name="Exchange rate list"
    >
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Scrollbar />
        <ExchangeRateColumn />
      </div>
    </div>
  );
}

function FooterContent() {
  return (
    <div
      className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]"
      data-name="Footer content"
    >
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <ExchangeRateInfo />
        <ExchangeRateDivider />
        <ExchangeRateList />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
}

function NoticeDetails() {
  return (
    <div
      className="content-stretch flex font-['Noto_Sans_KR:Medium',sans-serif] font-medium items-center justify-between leading-[normal] relative shrink-0 w-full"
      data-name="Notice details"
    >
      <p className="relative shrink-0 text-[#3f4e50] text-[16px]">Notice</p>
      <p className="relative shrink-0 text-[#3a9944] text-[14px]">View all</p>
    </div>
  );
}

function NoticeHeader() {
  return (
    <div
      className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
      data-name="Notice header"
    >
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <NoticeDetails />
      </div>
    </div>
  );
}

function NoticeDivider() {
  return (
    <div
      className="bg-[#e5e5e5] h-px shrink-0 w-full"
      data-name="Notice divider"
    />
  );
}

function NoticeItem() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Notice item"
    >
      <p className="relative shrink-0 text-[#3a9944]">
        Important Notice Regarding Remittance Services to Korea
      </p>
      <p className="relative shrink-0 text-[#3f4e50]">2025-12-12</p>
    </div>
  );
}

function NoticeItem1() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Notice item"
    >
      <p className="relative shrink-0 text-[#3a9944]">
        Regarding Lawson ATM deposit service system malfunction
      </p>
      <p className="relative shrink-0 text-[#3f4e50]">2025-12-12</p>
    </div>
  );
}

function NoticeItem2() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Notice item"
    >
      <p className="relative shrink-0 text-[#3a9944]">
        Important Notice Regarding Remittance Services to Korea
      </p>
      <p className="relative shrink-0 text-[#3f4e50]">2025-12-12</p>
    </div>
  );
}

function NoticeItem3() {
  return (
    <div
      className="content-stretch flex items-center justify-between relative shrink-0 w-full"
      data-name="Notice item"
    >
      <p className="relative shrink-0 text-[#3a9944]">
        Regarding Lawson ATM deposit service system malfunction
      </p>
      <p className="relative shrink-0 text-[#3f4e50]">2025-12-12</p>
    </div>
  );
}

function NoticeList() {
  return (
    <div
      className="flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[8px] rounded-br-[8px] w-full"
      data-name="Notice list"
    >
      <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[24px] items-start leading-[1.5] p-[24px] relative size-full text-[14px]">
        <NoticeItem />
        <NoticeItem1 />
        <NoticeItem2 />
        <NoticeItem3 />
      </div>
    </div>
  );
}

function NoticeSection() {
  return (
    <div
      className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[8px] self-stretch"
      data-name="Notice section"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <NoticeHeader />
      <NoticeDivider />
      <NoticeList />
    </div>
  );
}

export default function ExchangeRateNoticeSection() {
  return (
    <div
      className="content-stretch flex gap-[32px] items-start px-[64px] relative size-full"
      data-name="Exchange rate + Notice section"
    >
      <FooterContent />
      <NoticeSection />
    </div>
  );
}
