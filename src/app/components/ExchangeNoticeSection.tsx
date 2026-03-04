import { motion } from "motion/react";
import { Translation } from "../translations";
import imgFlagImage from "../assets/landscape-placeholder.svg"; // KR
import imgFlagImage1 from "../assets/landscape-placeholder.svg"; // GB/EN
import imgFlagIcon from "../assets/landscape-placeholder.svg"; // CN

interface ExchangeNoticeSectionProps {
  t: Translation;
}

// ─── Rate data ──────────────────────────────────────────────────────────────
type RateEntry = {
  flagSrc: string;
  flagCls: string;
  code: string;
  rate: string;
};

const LEFT_RATES: RateEntry[] = [
  {
    flagSrc: imgFlagImage,
    flagCls: "h-[152.38%] left-0 max-w-none top-[-26.19%] w-full",
    code: "KR",
    rate: "9.4745 KRW",
  },
  {
    flagSrc: "https://flagcdn.com/w40/ph.png",
    flagCls: "h-[152.38%] left-0 max-w-none top-[-26.19%] w-full",
    code: "PH",
    rate: "0.3760 PHP",
  },
  {
    flagSrc: "https://flagcdn.com/w40/vn.png",
    flagCls: "h-[152.38%] left-0 max-w-none top-[-26.19%] w-full",
    code: "VN",
    rate: "164.40 VND",
  },
  {
    flagSrc: "https://flagcdn.com/w40/us.png",
    flagCls: "h-[152.38%] left-0 max-w-none top-[-26.19%] w-full",
    code: "US",
    rate: "0.0067 USD",
  },
  {
    flagSrc: imgFlagIcon,
    flagCls: "h-[152.38%] left-0 max-w-none top-[-26.19%] w-full",
    code: "CN",
    rate: "0.0490 CNY",
  },
];

const RIGHT_RATES: RateEntry[] = [
  {
    flagSrc: "https://flagcdn.com/w40/np.png",
    flagCls: "h-[152.38%] left-0 max-w-none top-[-26.19%] w-full",
    code: "NP",
    rate: "0.8930 NPR",
  },
  {
    flagSrc: imgFlagImage1,
    flagCls: "h-[142.22%] left-[-3.33%] max-w-none top-[-21.11%] w-[106.67%]",
    code: "GB",
    rate: "0.0054 GBP",
  },
  {
    flagSrc: "https://flagcdn.com/w40/au.png",
    flagCls: "h-[152.38%] left-0 max-w-none top-[-26.19%] w-full",
    code: "AU",
    rate: "0.0101 AUD",
  },
  {
    flagSrc: "https://flagcdn.com/w40/th.png",
    flagCls: "h-[152.38%] left-0 max-w-none top-[-26.19%] w-full",
    code: "TH",
    rate: "0.2450 THB",
  },
  {
    flagSrc: "https://flagcdn.com/w40/my.png",
    flagCls: "h-[152.38%] left-0 max-w-none top-[-26.19%] w-full",
    code: "MY",
    rate: "0.0312 MYR",
  },
];

// ─── Row ────────────────────────────────────────────────────────────────────
function RateRow({ flagSrc, flagCls, code, rate }: RateEntry) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      {/* flag + code cell — no vertical padding; gap-[16px] on the column handles spacing */}
      <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0">
        <div className="relative shrink-0 size-[24px]">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[22px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt={code} className={`absolute ${flagCls}`} src={flagSrc} />
            </div>
          </div>
        </div>
        <p className="font-normal leading-normal relative shrink-0 text-[#3f4e50] text-[14px]">
          {code}
        </p>
      </div>
      {/* rate cell */}
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
        <p className="font-medium leading-[0] relative shrink-0 text-[#ff9d1a] text-[14px]">
          <span className="leading-normal text-[#231a16]">1 YEN =</span>
          <span className="leading-normal">{` ${rate}`}</span>
        </p>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function ExchangeNoticeSection({ t }: ExchangeNoticeSectionProps) {
  const notices = [
    { text: t.notice.n1, date: t.notice.date },
    { text: t.notice.n2, date: t.notice.date },
    { text: t.notice.n3, date: t.notice.date },
    { text: t.notice.n4, date: t.notice.date },
  ];

  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px] flex flex-col lg:flex-row gap-[32px] items-start">
        {/* ── Exchange Rate Panel ─────────────────────────────────────── */}
        <motion.div
          className="w-full lg:flex-[1_0_0] lg:min-w-0 bg-white rounded-[8px] flex flex-col overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* inset border — same as Figma overlay border pattern */}
          <div
            aria-hidden="true"
            className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] z-10"
          />

          {/* Header */}
          <div className="content-stretch flex flex-col items-start p-[24px] relative w-full shrink-0">
            <div className="content-stretch flex items-center justify-between relative w-full">
              <p className="font-medium leading-normal relative shrink-0 text-[#231a16] text-[16px]">
                {t.exchange.title}
              </p>
              <p className="font-normal leading-normal relative shrink-0 text-[#647576] text-[14px]">
                {t.exchange.updatedAt}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-[#e5e5e5] h-px shrink-0 w-full" />

          {/* Scrollable rate list — height = 4 rows×24px + 3 gaps×16px + 2×py-16 = 176px */}
          <div className="px-[24px] py-[16px] overflow-y-auto h-[176px]">
            <div className="flex items-start">
              {/* Left column — gap-[16px] matches Figma Container gap */}
              <div className="flex flex-col gap-[16px] flex-1 min-w-0">
                {LEFT_RATES.map((r) => (
                  <RateRow key={r.code} {...r} />
                ))}
              </div>
              {/* Right column */}
              <div className="flex flex-col gap-[16px] flex-1 min-w-0">
                {RIGHT_RATES.map((r) => (
                  <RateRow key={r.code} {...r} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Notice Panel ────────────────────────────────────────────── */}
        {/* self-stretch makes it fill the cross-axis height of the exchange rate panel */}
        <motion.div
          className="w-full lg:flex-[1_0_0] lg:min-w-0 bg-white rounded-[8px] flex flex-col lg:self-stretch relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            aria-hidden="true"
            className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] z-10"
          />

          {/* Header */}
          <div className="content-stretch flex flex-col items-start p-[24px] relative w-full shrink-0">
            <div className="content-stretch flex font-medium items-center justify-between leading-normal relative w-full">
              <p className="relative shrink-0 text-[#3f4e50] text-[16px]">
                {t.notice.title}
              </p>
              <button className="relative shrink-0 text-[#3a9944] text-[14px] cursor-pointer">
                {t.notice.viewAll}
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-[#e5e5e5] h-px shrink-0 w-full" />

          {/* Notice list */}
          <div className="w-full relative">
            <div className="content-stretch flex flex-col font-normal items-start gap-[12px] leading-[1.5] px-[24px] py-[16px] w-full text-[14px]">
              {notices.map((notice, i) => (
                <div
                  key={i}
                  className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                >
                  <p className="relative shrink-0 text-[#3a9944] cursor-pointer">
                    {notice.text}
                  </p>
                  <p className="relative shrink-0 text-[#3f4e50] pl-4">
                    {notice.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
