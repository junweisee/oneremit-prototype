import { motion } from "motion/react";
import { Translation } from "../translations";
import imgLogo from """";

interface FooterProps {
  t: Translation;
}

export function Footer({ t }: FooterProps) {
  const quickLinks = [
    t.footer.aboutUs,
    t.footer.usageGuide,
    t.footer.feesLimits,
    t.footer.sendMoney,
  ];
  const legalLinks = [
    t.footer.privacy,
    t.footer.terms,
    t.footer.aml,
    t.footer.fraud,
    t.footer.antisocial,
  ];
  const supportLinks = [t.footer.notice, t.footer.faq, t.footer.contact];

  return (
    <motion.footer
      className="bg-[#f8fafb] w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-10 md:py-12 flex flex-col gap-8">
        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="relative h-[50px] w-[131px] shrink-0">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt="C&B Remittance"
                className="absolute h-[101%] left-[-13%] max-w-none top-[-0.3%] w-[127%] object-contain"
                src={imgLogo}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <p className="text-[#231a16] text-[13px] font-medium">
              {t.footer.quickLinks}
            </p>
            {quickLinks.map((link) => (
              <button
                key={link}
                className="text-[#647576] text-[13px] font-normal text-left cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <p className="text-[#231a16] text-[13px] font-medium">
              {t.footer.legal}
            </p>
            {legalLinks.map((link) => (
              <button
                key={link}
                className="text-[#647576] text-[13px] font-normal text-left cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <p className="text-[#231a16] text-[13px] font-medium">
              {t.footer.support}
            </p>
            {supportLinks.map((link) => (
              <button
                key={link}
                className="text-[#647576] text-[13px] font-normal text-left cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e5e5e5] w-full" />

        {/* Copyright */}
        <p className="text-[#647576] text-[12px] text-center">
          {t.footer.copyright}
        </p>
      </div>
    </motion.footer>
  );
}
