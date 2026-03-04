import { motion } from "motion/react";
import { Translation } from "../translations";
import { Calculator } from "./Calculator";
import imgIntroImage from """";

interface HeroSectionProps {
  t: Translation;
  sendAmount: number;
  setSendAmount: (v: number) => void;
  receiveCurrencyCode: string;
  setReceiveCurrencyCode: (c: string) => void;
}

export function HeroSection({
  t,
  sendAmount,
  setSendAmount,
  receiveCurrencyCode,
  setReceiveCurrencyCode,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full"
      style={{
        background:
          "linear-gradient(245deg, rgb(232, 255, 234) 6%, rgb(255, 255, 255) 93%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-8 md:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
        {/* Left: Text + Image */}
        <div className="flex flex-col gap-8 flex-1 min-w-0">
          {/* Title */}
          <motion.div
            className="flex flex-col gap-4 items-start max-lg:items-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-[#231a16] font-bold leading-snug text-[32px] text-left max-lg:text-center">
              {t.hero.titleBefore}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #2d8c36 0%, #3a9944 40%, #4aad56 100%)",
                }}
              >
                {t.hero.titleHighlight}
              </span>
              {t.hero.titleAfter}
            </h1>
            <motion.p
              className="text-[#3f4e50] text-[15px] md:text-[16px] leading-relaxed w-full max-w-[480px] text-left max-lg:text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              {t.hero.desc}
            </motion.p>
          </motion.div>

          {/* Calculator – mobile only, sits between title and image */}
          <div className="lg:hidden w-full">
            <Calculator
              t={t}
              sendAmount={sendAmount}
              setSendAmount={setSendAmount}
              receiveCurrencyCode={receiveCurrencyCode}
              setReceiveCurrencyCode={setReceiveCurrencyCode}
            />
          </div>

          {/* Hero Image */}
          <motion.div
            className="w-full rounded-2xl overflow-hidden"
            style={{ aspectRatio: "853/469" }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <img
              src={imgIntroImage}
              alt="Send money"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Calculator – desktop only */}
        <div className="hidden lg:block w-[420px] xl:w-[480px] shrink-0">
          <Calculator
            t={t}
            sendAmount={sendAmount}
            setSendAmount={setSendAmount}
            receiveCurrencyCode={receiveCurrencyCode}
            setReceiveCurrencyCode={setReceiveCurrencyCode}
          />
        </div>
      </div>
    </section>
  );
}
