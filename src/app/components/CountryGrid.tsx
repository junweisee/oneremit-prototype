/**
 * CountryGrid – uses the exact SVG flag set from /src/imports/CountryItem-33-741.tsx
 * Layout: justify-between / items-start (matching Figma root component)
 * USA label: max 2 lines (whitespace normal + 80px max-width)
 */
import svgPaths from "../../imports/svg-6q1iiupmd9";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3 } from "../../imports/svg-rvw01";
import { motion } from "motion/react";

// ─── label helper ────────────────────────────────────────────────────────────
function Label({ text, wrap }: { text: string; wrap?: boolean }) {
  return (
    <p
      className="font-normal leading-[1.5] text-[#3f4e50] text-[14px] text-center"
      style={wrap ? { maxWidth: 80, overflowWrap: "break-word" } : { whiteSpace: "nowrap" }}
    >
      {text}
    </p>
  );
}

// ─── Flag components (verbatim from CountryItem-33-741.tsx) ──────────────────

function AustraliaAu() {
  return (
    <div className="h-[36px] relative shrink-0 w-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 36">
        <g clipPath="url(#clip0_12_806)">
          <path d="M0 0H48V36H0V0Z" fill="#00008B" />
          <path d={svgPaths.p1f5abc00} fill="white" />
          <path d={svgPaths.p36d57700} fill="#FF0000" />
          <path d={svgPaths.p25e900f0} fill="white" />
          <path d={svgPaths.p2707000}  fill="#FF0000" />
          <path d={svgPaths.p17b2500}  fill="white" />
        </g>
        <defs><clipPath id="clip0_12_806"><rect fill="white" height="36" width="48" /></clipPath></defs>
      </svg>
    </div>
  );
}

// India Ashoka-Chakra spoke sub-components (verbatim)
function IA() { return <div className="absolute inset-[50.85%_40.82%_38.34%_49.7%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55034 3.89257"><path d={svgPaths.p2c65c00} fill="#000088" /><path d={svgPaths.p2dfc8280} fill="#000088" /></svg></div>; }
function IA1() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5504 3.89257"><path d={svgPaths.p3680c700} fill="#000088" /><path d={svgPaths.p31433b40} fill="#000088" /></svg></div>; }
function IB() { return <div className="absolute contents inset-[50.72%_40.82%_35.56%_47.45%]"><IA /><div className="absolute flex inset-[50.72%_41.3%_35.56%_47.45%] items-center justify-center"><div className="flex-none h-[3.892px] rotate-15 w-[4.55px]"><IA1 /></div></div></div>; }
function IA2() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55034 3.89259"><path d={svgPaths.p3b9d0400} fill="#000088" /><path d={svgPaths.p1e2ef400} fill="#000088" /></svg></div>; }
function IA3() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55034 3.89261"><path d={svgPaths.p25959b00} fill="#000088" /><path d={svgPaths.paa04d00} fill="#000088" /></svg></div>; }
function IB1() { return <div className="absolute contents inset-[48.92%_42.32%_31.38%_42.37%]"><div className="absolute flex inset-[50.54%_42.37%_33.78%_45.37%] items-center justify-center"><div className="flex-none h-[3.892px] rotate-30 w-[4.551px]"><IA2 /></div></div><div className="absolute flex inset-[50.32%_43.96%_33.1%_43.6%] items-center justify-center"><div className="flex-none h-[3.894px] rotate-45 w-[4.549px]"><IA3 /></div></div></div>; }
function IC() { return <div className="absolute contents inset-[48.92%_40.82%_31.38%_42.37%]"><IB /><IB1 /></div>; }
function IA4() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55041 3.89254"><path d={svgPaths.p2628d4c0} fill="#000088" /><path d={svgPaths.pb35eb70} fill="#000088" /></svg></div>; }
function IA5() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55035 3.89258"><path d={svgPaths.p1c246000} fill="#000088" /><path d={svgPaths.p4488a00} fill="#000088" /></svg></div>; }
function IB2() { return <div className="absolute contents inset-[47.41%_45.88%_32.18%_39.35%]"><div className="absolute flex inset-[50.08%_45.96%_33.56%_42.27%] items-center justify-center"><div className="flex-none h-[3.892px] rotate-60 w-[4.551px]"><IA4 /></div></div><div className="absolute flex inset-[49.84%_48.24%_35.16%_41.47%] items-center justify-center"><div className="flex-none h-[3.893px] rotate-75 w-[4.549px]"><IA5 /></div></div></div>; }
function IA6() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55044 3.89246"><path d={svgPaths.p39454700} fill="#000088" /><path d={svgPaths.p2494d200} fill="#000088" /></svg></div>; }
function IA7() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55047 3.89243"><path d={svgPaths.p38352500} fill="#000088" /><path d={svgPaths.p2ed08480} fill="#000088" /></svg></div>; }
function IB3() { return <div className="absolute contents inset-[46.59%_50.54%_37.76%_39.17%]"><div className="absolute flex inset-[49.6%_50.64%_37.76%_41.25%] items-center justify-center"><div className="flex-none h-[3.892px] rotate-90 w-[4.55px]"><IA6 /></div></div><div className="absolute flex inset-[46.59%_50.54%_38.4%_39.17%] items-center justify-center"><div className="flex-none h-[3.893px] rotate-105 w-[4.552px]"><IA7 /></div></div></div>; }
function IC1() { return <div className="absolute contents inset-[40.65%_44.71%_30.09%_34.09%]"><IB2 /><IB3 /></div>; }
function ID() { return <div className="absolute contents inset-[40.65%_40.82%_30.09%_34.09%]"><IC /><IC1 /></div>; }
function IA8() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55041 3.89282"><path d={svgPaths.p1d558300} fill="#000088" /><path d={svgPaths.pec9a400} fill="#000088" /></svg></div>; }
function IA9() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55034 3.89262"><path d={svgPaths.p9ef7ef0} fill="#000088" /><path d={svgPaths.p1721aff0} fill="#000088" /></svg></div>; }
function IB4() { return <div className="absolute contents inset-[39.83%_49.19%_39.76%_36.03%]"><div className="absolute flex inset-[43.82%_50.4%_39.83%_37.83%] items-center justify-center"><div className="flex-none h-[3.893px] rotate-120 w-[4.55px]"><IA8 /></div></div><div className="absolute flex inset-[41.47%_50.24%_41.95%_37.32%] items-center justify-center"><div className="flex-none h-[3.893px] rotate-135 w-[4.551px]"><IA9 /></div></div></div>; }
function IA10() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55034 3.89266"><path d={svgPaths.p39cc9b80} fill="#000088" /><path d={svgPaths.pf484980} fill="#000088" /></svg></div>; }
function IA11() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55035 3.89268"><path d={svgPaths.p10feb700} fill="#000088" /><path d={svgPaths.p4e7180} fill="#000088" /></svg></div>; }
function IB5() { return <div className="absolute contents inset-[35.79%_48.06%_44.5%_36.64%]"><div className="absolute flex inset-[39.7%_50.06%_44.62%_37.68%] items-center justify-center"><div className="flex-none h-[3.891px] rotate-150 w-[4.55px]"><IA10 /></div></div><div className="absolute flex inset-[38.62%_49.88%_47.66%_38.87%] items-center justify-center"><div className="flex-none h-[3.893px] rotate-165 w-[4.551px]"><IA11 /></div></div></div>; }
function IC2() { return <div className="absolute contents inset-[31.88%_45.49%_38.86%_33.31%]"><IB4 /><IB5 /></div>; }
function IA12() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55024 3.89266"><path d={svgPaths.p2cfd0100} fill="#000088" /><path d={svgPaths.p3262e500} fill="#000088" /></svg></div>; }
function IA13() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55039 3.89263"><path d={svgPaths.p21266280} fill="#000088" /><path d={svgPaths.p3aed000} fill="#000088" /></svg></div>; }
function IB6() { return <div className="absolute contents inset-[35.56%_47.45%_50.72%_40.82%]"><div className="absolute flex inset-[38.33%_49.7%_50.85%_40.82%] items-center justify-center"><div className="flex-none h-[3.892px] rotate-180 w-[4.55px]"><IA12 /></div></div><div className="absolute flex inset-[35.56%_47.45%_50.72%_41.3%] items-center justify-center"><div className="-rotate-165 flex-none h-[3.892px] w-[4.55px]"><IA13 /></div></div></div>; }
function IA14() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55033 3.89263"><path d={svgPaths.pcbb9e80} fill="#000088" /><path d={svgPaths.p39b64700} fill="#000088" /></svg></div>; }
function IA15() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55053 3.89265"><path d={svgPaths.p35d00e40} fill="#000088" /><path d={svgPaths.pb7cd280} fill="#000088" /></svg></div>; }
function IB7() { return <div className="absolute contents inset-[31.38%_42.37%_48.92%_42.32%]"><div className="absolute flex inset-[33.78%_45.37%_50.54%_42.37%] items-center justify-center"><div className="-rotate-150 flex-none h-[3.894px] w-[4.55px]"><IA14 /></div></div><div className="absolute flex inset-[33.1%_43.6%_50.32%_43.96%] items-center justify-center"><div className="-rotate-135 flex-none h-[3.892px] w-[4.551px]"><IA15 /></div></div></div>; }
function IC3() { return <div className="absolute contents inset-[31.38%_42.37%_48.92%_40.82%]"><IB6 /><IB7 /></div>; }
function ID1() { return <div className="absolute contents inset-[21.68%_35.98%_34.72%_32.48%]"><IC2 /><IC3 /></div>; }
function IA16() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55037 3.89254"><path d={svgPaths.p2bd7a500} fill="#000088" /><path d={svgPaths.pd184f00} fill="#000088" /></svg></div>; }
function IA17() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55035 3.89258"><path d={svgPaths.p168f6280} fill="#000088" /><path d={svgPaths.p1e0b7980} fill="#000088" /></svg></div>; }
function IB8() { return <div className="absolute contents inset-[32.18%_39.35%_47.41%_45.88%]"><div className="absolute flex inset-[33.57%_42.27%_50.08%_45.96%] items-center justify-center"><div className="-rotate-120 flex-none h-[3.892px] w-[4.551px]"><IA16 /></div></div><div className="absolute flex inset-[35.16%_41.47%_49.84%_48.24%] items-center justify-center"><div className="-rotate-105 flex-none h-[3.893px] w-[4.549px]"><IA17 /></div></div></div>; }
function IA18() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55044 3.89246"><path d={svgPaths.p1a65a9f0} fill="#000088" /><path d={svgPaths.p1aef700} fill="#000088" /></svg></div>; }
function IA19() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55048 3.89242"><path d={svgPaths.p398e0f80} fill="#000088" /><path d={svgPaths.p37b6e7c0} fill="#000088" /></svg></div>; }
function IB9() { return <div className="absolute contents inset-[37.76%_39.17%_46.59%_50.54%]"><div className="absolute flex inset-[37.76%_41.25%_49.6%_50.64%] items-center justify-center"><div className="-rotate-90 flex-none h-[3.892px] w-[4.55px]"><IA18 /></div></div><div className="absolute flex inset-[38.4%_39.17%_46.59%_50.54%] items-center justify-center"><div className="-rotate-75 flex-none h-[3.893px] w-[4.552px]"><IA19 /></div></div></div>; }
function IC4() { return <div className="absolute contents inset-[30.09%_34.09%_40.65%_44.71%]"><IB8 /><IB9 /></div>; }
function IA20() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55056 3.89259"><path d={svgPaths.p192f0500} fill="#000088" /><path d={svgPaths.p3006ef80} fill="#000088" /></svg></div>; }
function IA21() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55039 3.89254"><path d={svgPaths.p3d6e6a00} fill="#000088" /><path d={svgPaths.p8191b00} fill="#000088" /></svg></div>; }
function IB10() { return <div className="absolute contents inset-[39.76%_36.03%_39.83%_49.19%]"><div className="absolute flex inset-[39.83%_37.83%_43.82%_50.4%] items-center justify-center"><div className="-rotate-60 flex-none h-[3.893px] w-[4.551px]"><IA20 /></div></div><div className="absolute flex inset-[41.95%_37.32%_41.47%_50.24%] items-center justify-center"><div className="-rotate-45 flex-none h-[3.893px] w-[4.551px]"><IA21 /></div></div></div>; }
function IA22() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55038 3.89252"><path d={svgPaths.p2a524500} fill="#000088" /><path d={svgPaths.p164e2c0} fill="#000088" /></svg></div>; }
function IA23() { return <div className="relative size-full"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.55037 3.89252"><path d={svgPaths.p3bc78b80} fill="#000088" /><path d={svgPaths.p1fca31f0} fill="#000088" /></svg></div>; }
function IB11() { return <div className="absolute contents inset-[44.5%_36.64%_35.8%_48.06%]"><div className="absolute flex inset-[44.62%_37.67%_39.69%_50.06%] items-center justify-center"><div className="-rotate-30 flex-none h-[3.893px] w-[4.551px]"><IA22 /></div></div><div className="absolute flex inset-[47.66%_38.87%_38.63%_49.88%] items-center justify-center"><div className="-rotate-15 flex-none h-[3.891px] w-[4.55px]"><IA23 /></div></div></div>; }
function IC5() { return <div className="absolute contents inset-[38.86%_33.31%_31.89%_45.49%]"><IB10 /><IB11 /></div>; }
function ID2() { return <div className="absolute contents inset-[29.44%_29.11%_26.96%_39.34%]"><IC4 /><IC5 /></div>; }
function IndiaGroup() {
  return (
    <div className="absolute contents inset-[21.68%_29.11%_26.96%_32.48%]">
      <div className="absolute inset-[36.67%_40%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 9.6"><path d={svgPaths.p7271600} fill="#000088" /></svg></div>
      <div className="absolute inset-[38.33%_41.25%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4 8.4"><path d={svgPaths.padc5380} fill="white" /></svg></div>
      <div className="absolute inset-[47.67%_48.25%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.68 1.68"><path d={svgPaths.p13f67800} fill="#000088" /></svg></div>
      <ID /><ID1 /><ID2 />
    </div>
  );
}
function IndiaIn() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[48px]">
      <div className="absolute inset-[0_0_66.67%_0]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 12"><path d="M0 0H48V12H0V0Z" fill="#FF9933" /></svg></div>
      <div className="absolute inset-[33.33%_0]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 12"><path d="M0 0H48V12H0V0Z" fill="white" /></svg></div>
      <div className="absolute inset-[66.67%_0_0_0]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 12"><path d="M0 0H48V12H0V0Z" fill="#128807" /></svg></div>
      <IndiaGroup />
    </div>
  );
}

function PakistanPk() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[48px]">
      <div className="absolute inset-[0_-6.24%_0_-6.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.002px_0px] mask-size-[47.995px_36px]" style={{ maskImage: `url('${imgGroup}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 36">
          <path clipRule="evenodd" d="M0 0H54V36H0V0Z" fill="#0C590B" fillRule="evenodd" />
          <path clipRule="evenodd" d="M0 0H13.5352V36H0V0Z" fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p389ae600} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1d93ba80} fill="white" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function ThailandTh() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 36">
        <path clipRule="evenodd" d="M0 0H48V36H0V0Z" fill="#F4F5F8" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3c58f500} fill="#2D2A4A" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p155cf700} fill="#A51931" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function BangladeshBd() {
  return (
    <div className="h-[36px] relative shrink-0 w-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 36">
        <g clipPath="url(#clip0_12_699)">
          <path d="M0 0H48V36H0V0Z" fill="#006A4E" />
          <path d={svgPaths.p1e608600} fill="#F42A41" />
        </g>
        <defs><clipPath id="clip0_12_699"><rect fill="white" height="36" width="48" /></clipPath></defs>
      </svg>
    </div>
  );
}

function IndonesiaId() {
  return (
    <div className="h-[36px] relative shrink-0 w-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 36">
        <g clipPath="url(#clip0_12_741)">
          <path d="M0 0H48V18H0V0Z" fill="#E70011" />
          <path d="M0 18H48V36H0V18Z" fill="white" />
        </g>
        <defs><clipPath id="clip0_12_741"><rect fill="white" height="36" width="48" /></clipPath></defs>
      </svg>
    </div>
  );
}

function PhilippinesPh() {
  return (
    <div className="h-[36px] relative shrink-0 w-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 36">
        <g clipPath="url(#clip0_12_630)">
          <path d="M0 0H48V18H0V0Z" fill="#0038A8" />
          <path d="M0 18H48V36H0V18Z" fill="#CE1126" />
          <path d="M31.1775 18L0 36V0" fill="white" />
          <path d={svgPaths.pcf88a00} fill="#FCD116" />
        </g>
        <defs><clipPath id="clip0_12_630"><rect fill="white" height="36" width="48" /></clipPath></defs>
      </svg>
    </div>
  );
}

function UnitedStatesUs() {
  return (
    <div className="h-[36px] relative shrink-0 w-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 36">
        <g clipPath="url(#clip0_12_766)">
          <path d="M0 0H48V36H0" fill="#BD3D44" />
          <path d={svgPaths.p3dcb1580} fill="black" />
          <path d={svgPaths.p5047980}  fill="white" />
          <path d="M0 0H27.36V19.3875H0" fill="#192F5D" />
          <path d={svgPaths.p926e080}  fill="white" />
        </g>
        <defs><clipPath id="clip0_12_766"><rect fill="white" height="36" width="48" /></clipPath></defs>
      </svg>
    </div>
  );
}

function CanadaCa() {
  return (
    <div className="h-[36px] relative shrink-0 w-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 36">
        <g clipPath="url(#clip0_12_623)">
          <path d={svgPaths.p31082900} fill="white" />
          <path d={svgPaths.pf17ed00}  fill="#D52B1E" />
        </g>
        <defs><clipPath id="clip0_12_623"><rect fill="white" height="36" width="48" /></clipPath></defs>
      </svg>
    </div>
  );
}

function MalaysiaMy() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[48px]">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[48px_36px]" style={{ maskImage: `url('${imgGroup1}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 36">
          <path d="M0 0H48V36H0V0Z" fill="#CC0000" />
          <path d="M0 2.5725H48V5.145H0V2.5725Z" fill="white" />
          <path d="M0 5.145H48V7.7175H0V5.145Z" fill="#CC0000" />
          <path d={svgPaths.p8874200}  fill="white" />
          <path d={svgPaths.p24817880} fill="#CC0000" />
          <path d={svgPaths.pc2f1e00}  fill="white" />
          <path d="M0 15.4275H48V18H0V15.4275Z" fill="#CC0000" />
          <path d="M0 18H48V20.5725H0V18Z" fill="white" />
          <path d={svgPaths.p3e5a1a80} fill="#CC0000" />
          <path d={svgPaths.p10246100} fill="white" />
          <path d={svgPaths.p2bc55600} fill="#CC0000" />
          <path d={svgPaths.p392db380} fill="white" />
          <path d={svgPaths.p3f620580} fill="#CC0000" />
          <path d="M0 33.4275H48V36H0V33.4275Z" fill="white" />
          <path d="M0 0.0375H24V20.61H0V0.0375Z" fill="#000066" />
          <path d={svgPaths.p3fe09471} fill="#FFCC00" />
        </svg>
      </div>
    </div>
  );
}

function SingaporeSg() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[48px]">
      <div className="absolute inset-[0_-9.38%_0_-3.13%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.5px_0px] mask-size-[48px_36px]" style={{ maskImage: `url('${imgGroup1}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 36">
          <path clipRule="evenodd" d="M0 0H54V36H0V0Z" fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d="M0 0H54V18H0V0Z" fill="#DF0000" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p15d8f100} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p23eed100} fill="white" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function VietnamVn() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[48px]">
      <div className="absolute inset-[0_-6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.002px_0px] mask-size-[47.995px_36px]" style={{ maskImage: `url('${imgGroup}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 36">
          <path clipRule="evenodd" d="M0 0H54V36H0V0Z" fill="#DA251D" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p379e3871} fill="#FFFF00" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function ChinaCn() {
  return (
    <div className="h-[36px] relative shrink-0 w-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 36">
        <g clipPath="url(#clip0_12_792)">
          <path d="M0 0H48V36H0V0Z" fill="#EE1C25" />
          <path d={svgPaths.p1bc60a0}  fill="#FFFF00" />
          <path d={svgPaths.p1406ca00} fill="#FFFF00" />
          <path d={svgPaths.p38d48980} fill="#FFFF00" />
          <path d={svgPaths.p11dbbbf0} fill="#FFFF00" />
          <path d={svgPaths.p1d09a300} fill="#FFFF00" />
        </g>
        <defs><clipPath id="clip0_12_792"><rect fill="white" height="36" width="48" /></clipPath></defs>
      </svg>
    </div>
  );
}

function MongoliaMn() {
  return (
    <div className="h-[36px] relative shrink-0 w-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 36">
        <g clipPath="url(#clip0_12_671)">
          <path d="M0 0H48V36H0V0Z" fill="#DA2032" />
          <path d={svgPaths.p2ce3cb00} fill="#0066B3" />
          <path d={svgPaths.pfcdda00}  fill="#FFD900" />
          <path d={svgPaths.p3e5fe000} fill="#DA2032" />
          <path d={svgPaths.p20178480} fill="#FFD900" />
          <path d={svgPaths.p20f01f00} fill="#FFD900" />
          <path d={svgPaths.p1bed5600} fill="#FFD900" />
          <path d={svgPaths.pce0d880}  fill="#DA2032" />
          <path d={svgPaths.p20b7db00} fill="#DA2032" />
          <path d={svgPaths.p27bd9a00} fill="#DA2032" />
        </g>
        <defs><clipPath id="clip0_12_671"><rect fill="white" height="36" width="48" /></clipPath></defs>
      </svg>
    </div>
  );
}

function SriLankaLk() {
  const leaf = <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.06755 3.73287"><path d={svgPaths.p34de2ff0} fill="#FFB700" stroke="black" strokeWidth="0.1375" /></svg>;
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-[56px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 42"><path d="M0 0H56V42H0V0Z" fill="#FFB700" /></svg>
      <div className="absolute inset-[5.56%_68.33%_5.56%_4.17%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4 37.3275"><path d={svgPaths.p3321c000} fill="#FF5B00" /></svg></div>
      <div className="absolute inset-[5.56%_82.08%_5.56%_4.17%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.7 37.3275"><path d="M0 0H7.7V37.3275H0V0Z" fill="#005641" /></svg></div>
      <div className="absolute inset-[5.56%_3.75%_5.56%_35.83%]"><svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.8363 37.3275"><path d="M0 0H33.8363V37.3275H0V0Z" fill="#8D2029" /></svg></div>
      <div className="absolute inset-[85.13%_4.25%_6.22%_90.52%]"><div className="absolute inset-[-0.84%_-2.34%_-1.89%_-2.35%]">{leaf}</div></div>
      <div className="absolute flex inset-[85.13%_58.44%_6.22%_36.33%] items-center justify-center"><div className="-scale-y-100 flex-none h-[3.634px] rotate-180 w-[2.93px]"><div className="relative size-full"><div className="absolute inset-[-0.84%_-2.34%_-1.89%_-2.35%]">{leaf}</div></div></div></div>
      <div className="absolute flex inset-[6.22%_4.25%_85.13%_90.52%] items-center justify-center"><div className="-scale-y-100 flex-none h-[3.634px] w-[2.93px]"><div className="relative size-full"><div className="absolute inset-[-0.84%_-2.34%_-1.89%_-2.35%]">{leaf}</div></div></div></div>
      <div className="absolute flex inset-[6.22%_58.42%_85.13%_36.35%] items-center justify-center"><div className="flex-none h-[3.634px] rotate-180 w-[2.93px]"><div className="relative size-full"><div className="absolute inset-[-0.84%_-2.34%_-1.89%_-2.35%]">{leaf}</div></div></div></div>
      <div className="absolute inset-[28.93%_15.03%_28.92%_47.11%]">
        <div className="absolute inset-[-1.98%_-1.65%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9047 18.4044">
            <path d={svgPaths.p3b0eae00} fill="#FFB700" stroke="black" strokeWidth="0.7" />
            <path d={svgPaths.p3fb5a100} fill="#FFB700" stroke="black" strokeWidth="0.7" />
            <path d={svgPaths.p1a024c00} fill="#FFB700" stroke="black" strokeWidth="0.7" />
            <path d={svgPaths.p22c97071} fill="#FFB700" stroke="black" strokeWidth="0.7" />
            <path d={svgPaths.p27210640} fill="#FFB700" stroke="black" strokeWidth="0.7" />
            <path d={svgPaths.p9586e00}  fill="#000001" stroke="black" strokeWidth="0.7" />
            <path d={svgPaths.p2699f280} fill="#000001" stroke="black" strokeWidth="0.7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HongKongHk() {
  return (
    <div className="h-[36px] relative shrink-0 w-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 36">
        <g clipPath="url(#clip0_12_585)">
          <path d="M0 0H48V36H0" fill="#EC1B2E" />
          <path d={svgPaths.p1b11b380} fill="white" />
          <path d={svgPaths.p1e649200} fill="white" />
          <path d={svgPaths.p134d3f00} fill="white" />
          <path d={svgPaths.p38267900} fill="white" />
          <path d={svgPaths.p3dfc8ab0} fill="white" />
        </g>
        <defs><clipPath id="clip0_12_585"><rect fill="white" height="36" width="48" /></clipPath></defs>
      </svg>
    </div>
  );
}

function NepalNp() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[48px]">
      <div className="absolute bottom-0 contents left-0 right-1/4 top-0">
        <div className="absolute inset-[1.27%_42.18%_1.27%_0.95%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.457px_-0.457px] mask-size-[36px_36px]" style={{ maskImage: `url('${imgGroup2}')` }}>
          <div className="absolute inset-[-4.21%_-10.16%_-2.3%_-2.94%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.8699 37.3705">
              <path clipRule="evenodd" d={svgPaths.p3e813480} fill="#CE0000" fillRule="evenodd" stroke="#000063" strokeWidth="1.61719" />
              <path clipRule="evenodd" d={svgPaths.p23655500} fill="white" fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SouthKoreaKr() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[48px]">
      <div className="absolute inset-[-0.82%_-0.02%_-2.04%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.299px] mask-size-[48.002px_36px]" style={{ maskImage: `url('${imgGroup3}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48.0094 37.0303">
          <path clipRule="evenodd" d={svgPaths.p1c326100} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p19f99380} fill="#000001" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p3b0deb00} fill="#000001" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p9f84180}  fill="black"   fillRule="evenodd" />
          <path d={svgPaths.p6cef480} stroke="white" strokeWidth="1.25" />
          <path clipRule="evenodd" d={svgPaths.p1f32ef00} fill="#CD2E3A" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.pe16ef80}  fill="#0047A0" fillRule="evenodd" />
          <path d={svgPaths.p20bee900} fill="#CD2E3A" />
          <path clipRule="evenodd" d={svgPaths.p3ea43d00} fill="#000001" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1cff7900} fill="#000001" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p35d7cd80} fill="black"   fillRule="evenodd" />
          <path d={svgPaths.p32c3f000} stroke="white" strokeWidth="1.25" />
        </svg>
      </div>
    </div>
  );
}

// ─── CountryGrid (matches Figma root: justify-between items-start size-full) ─
export function CountryGrid() {
  return (
    <div className="flex items-start justify-between w-full">

      {/* Col 1 – w-[58px]: Australia · India · Pakistan · Thailand */}
      <motion.div
        className="flex flex-col gap-[64px] items-center shrink-0 w-[58px]"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.0 }}
      >
        <div className="flex flex-col gap-[8px] items-center"><AustraliaAu /><Label text="Australia" /></div>
        <div className="flex flex-col gap-[8px] items-center"><IndiaIn /><Label text="India" /></div>
        <div className="flex flex-col gap-[8px] items-center"><PakistanPk /><Label text="Pakistan" /></div>
        <div className="flex flex-col gap-[8px] items-center"><ThailandTh /><Label text="Thailand" /></div>
      </motion.div>

      {/* Col 2 – w-[100px]: Bangladesh · Indonesia · Philippines · United States of America (2-line) */}
      <motion.div
        className="flex flex-col gap-[64px] items-center shrink-0 w-[100px]"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <div className="flex flex-col gap-[8px] items-center"><BangladeshBd /><Label text="Bangladesh" /></div>
        <div className="flex flex-col gap-[8px] items-center"><IndonesiaId /><Label text="Indonesia" /></div>
        <div className="flex flex-col gap-[8px] items-center"><PhilippinesPh /><Label text="Philippines" /></div>
        {/* USA: allow wrap, max 2 lines */}
        <div className="flex flex-col gap-[8px] items-center">
          <UnitedStatesUs />
          <Label text="United States of America" wrap />
        </div>
      </motion.div>

      {/* Col 3 – w-[67px]: Canada · Malaysia · Singapore · Vietnam */}
      <motion.div
        className="flex flex-col gap-[64px] items-center shrink-0 w-[67px]"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex flex-col gap-[8px] items-center"><CanadaCa /><Label text="Canada" /></div>
        <div className="flex flex-col gap-[8px] items-center"><MalaysiaMy /><Label text="Malaysia" /></div>
        <div className="flex flex-col gap-[8px] items-center"><SingaporeSg /><Label text="Singapore" /></div>
        <div className="flex flex-col gap-[8px] items-center"><VietnamVn /><Label text="Vietnam" /></div>
      </motion.div>

      {/* Col 4 – w-[61px]: China · Mongolia · SriLanka */}
      <motion.div
        className="flex flex-col gap-[64px] items-center shrink-0 w-[61px]"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <div className="flex flex-col gap-[8px] items-center"><ChinaCn /><Label text="China" /></div>
        <div className="flex flex-col gap-[8px] items-center"><MongoliaMn /><Label text="Mongolia" /></div>
        <div className="flex flex-col gap-[8px] items-center"><SriLankaLk /><Label text="SriLanka" /></div>
      </motion.div>

      {/* Col 5 – w-[115px]: Hong Kong · Nepal · Republic of Korea */}
      <motion.div
        className="flex flex-col gap-[64px] items-center shrink-0 w-[115px]"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex flex-col gap-[8px] items-center"><HongKongHk /><Label text="Hong Kong" /></div>
        <div className="flex flex-col gap-[8px] items-center"><NepalNp /><Label text="Nepal" /></div>
        <div className="flex flex-col gap-[8px] items-center"><SouthKoreaKr /><Label text="Republic of Korea" /></div>
      </motion.div>

    </div>
  );
}
