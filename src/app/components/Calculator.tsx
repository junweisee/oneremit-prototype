import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Translation, CURRENCIES, formatReceiveAmount } from "../translations";
import imgFlagKR from "../assets/landscape-placeholder.svg"; // Korea
import imgFlagCN from "../assets/landscape-placeholder.svg"; // China

const JP_FLAG = "https://flagcdn.com/w40/jp.png";

const FLAG_SRCS: Record<string, string> = {
  KRW: imgFlagKR,
  PHP: "https://flagcdn.com/w40/ph.png",
  VND: "https://flagcdn.com/w40/vn.png",
  USD: "https://flagcdn.com/w40/us.png",
  CNY: imgFlagCN,
  NPR: "https://flagcdn.com/w40/np.png",
};

function FlagCell({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-[22px] h-[16px] rounded-[2px] overflow-hidden shrink-0">
      <img
        alt={alt}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

function CurrencyFlag({ code }: { code: string }) {
  const src = FLAG_SRCS[code];
  if (!src) return null;
  return <FlagCell src={src} alt={code} />;
}

function JapanFlag() {
  return <FlagCell src={JP_FLAG} alt="JP" />;
}

interface CalculatorProps {
  t: Translation;
  sendAmount: number;
  setSendAmount: (v: number) => void;
  receiveCurrencyCode: string;
  setReceiveCurrencyCode: (c: string) => void;
}

export function Calculator({
  t,
  sendAmount,
  setSendAmount,
  receiveCurrencyCode,
  setReceiveCurrencyCode,
}: CalculatorProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeField, setActiveField] = useState<"send" | "receive">("send");
  const [receiveRaw, setReceiveRaw] = useState<string>("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCurrency =
    CURRENCIES.find((c) => c.code === receiveCurrencyCode) ?? CURRENCIES[0];
  const FEE_YEN = 100;

  const netAmount = Math.max(0, sendAmount - FEE_YEN);
  const receiveAmountComputed = netAmount * selectedCurrency.rate;
  const receiveFormatted = formatReceiveAmount(
    receiveAmountComputed,
    selectedCurrency.decimals,
  );

  // Currency change → snap back to send-active so receive is recomputed
  useEffect(() => {
    setActiveField("send");
  }, [receiveCurrencyCode]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSendFocus() {
    setActiveField("send");
  }

  function handleSendChange(e: React.ChangeEvent<HTMLInputElement>) {
    setActiveField("send");
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val >= 0) setSendAmount(val);
    else if (e.target.value === "") setSendAmount(0);
  }

  function handleReceiveFocus() {
    setActiveField("receive");
    setReceiveRaw(receiveAmountComputed.toFixed(selectedCurrency.decimals));
  }

  function handleReceiveChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    setReceiveRaw(raw);
    const val = parseFloat(raw);
    if (!isNaN(val) && val >= 0 && selectedCurrency.rate > 0) {
      const netNeeded = val / selectedCurrency.rate;
      const grossSend = Math.round((netNeeded + FEE_YEN) * 100) / 100;
      setSendAmount(grossSend);
    }
  }

  const receiveInputValue =
    activeField === "send" ? receiveFormatted : receiveRaw;

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-[0px_2px_24px_0px_rgba(0,0,0,0.12)] w-full max-w-[480px] mx-auto"
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
    >
      <div className="p-6 flex flex-col gap-7">
        {/* Rate header */}
        <div className="flex flex-col gap-2">
          <p className="text-[#647576] text-[13px]">{t.calc.rate}</p>
          <motion.p
            key={receiveCurrencyCode}
            className="text-[#231a16] text-[15px] font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            1 YEN ={" "}
            <span className="text-[#ff9d1a] font-semibold">
              {selectedCurrency.rate.toLocaleString(undefined, {
                minimumFractionDigits: selectedCurrency.decimals,
                maximumFractionDigits: selectedCurrency.decimals + 2,
              })}{" "}
              {selectedCurrency.code}
            </span>
          </motion.p>
        </div>

        {/* You send */}
        <div className="flex flex-col gap-2">
          <label className="text-[#647576] text-[13px] font-medium">
            {t.calc.youSend}
          </label>
          <div className="border border-[#e5e5e5] rounded-lg flex items-center justify-between px-4 py-3 gap-3">
            <input
              type="number"
              value={sendAmount}
              onFocus={handleSendFocus}
              onChange={handleSendChange}
              className="text-[#231a16] text-[22px] font-bold w-full bg-transparent outline-none border-none min-w-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min={0}
            />
            <div className="flex items-center gap-2 shrink-0">
              <JapanFlag />
              <span className="text-[#231a16] text-[17px] font-medium">
                YEN
              </span>
            </div>
          </div>
        </div>

        {/* Recipient gets */}
        <div className="flex flex-col gap-2">
          <label className="text-[#647576] text-[13px] font-medium">
            {t.calc.recipientGets}
          </label>
          <div className="border border-[#e5e5e5] rounded-lg flex items-center justify-between px-4 py-3 gap-3">
            <input
              type="text"
              inputMode="decimal"
              value={receiveInputValue}
              onFocus={handleReceiveFocus}
              onChange={handleReceiveChange}
              className="text-[#231a16] text-[22px] font-bold min-w-0 flex-1 bg-transparent outline-none border-none truncate"
            />

            {/* Currency selector */}
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setDropdownOpen((v) => !v)}
              >
                <CurrencyFlag code={selectedCurrency.code} />
                <span className="text-[#231a16] text-[17px] font-medium">
                  {selectedCurrency.code}
                </span>
                <ChevronDown
                  size={15}
                  color="#8CA2A4"
                  className={`transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden min-w-[120px]"
                    initial={{ opacity: 0, scale: 0.95, y: -8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -8 }}
                    transition={{ duration: 0.15 }}
                  >
                    {CURRENCIES.map((cur) => (
                      <button
                        key={cur.code}
                        className="flex items-center gap-3 px-4 py-3 w-full text-left cursor-pointer"
                        onClick={() => {
                          setReceiveCurrencyCode(cur.code);
                          setDropdownOpen(false);
                        }}
                      >
                        <CurrencyFlag code={cur.code} />
                        <span className="text-[#231a16] text-[14px] font-medium">
                          {cur.code}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e5e5e5]" />

        {/* Fee */}
        <div className="flex items-center justify-between">
          <p className="text-[#647576] text-[13px]">{t.calc.fee}</p>
          <p className="text-[#231a16] text-[15px] font-medium">
            {t.calc.feeValue}
          </p>
        </div>

        {/* CTA */}
        <button className="bg-[#3a9944] text-white rounded-[10px] py-4 w-full text-[15px] font-medium cursor-pointer">
          {t.calc.button}
        </button>
      </div>
    </motion.div>
  );
}
