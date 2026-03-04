import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Language, LANGUAGES, Translation } from "../translations";
import imgLogo from "../../assets/landscape-placeholder.svg082a90a04b893d1c8d3ceafaf5997a05068aab8b.png";
import imgFlagEN from "../../assets/landscape-placeholder.svg9875e3b3d86e7e562cb0bc2c432eba5885fc02be.png";
import imgFlagKR from "../../assets/landscape-placeholder.svgda19d3b20c36de9cd3c0b60eb2dd732efebf6d02.png";

const FLAG_MAP: Record<Language, string> = {
  en: imgFlagEN,
  ko: imgFlagKR,
  ja: "https://flagcdn.com/w40/jp.png",
};

const HOW_TO_USE_LINKS = [
  { label: "Usage Guide", to: "/how-to-use/usage-guide" },
  { label: "Fees and Limits", to: "/how-to-use/fees-and-limits" },
];

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translation;
}

export function Navbar({ lang, setLang, t }: NavbarProps) {
  const [langOpen, setLangOpen] = useState(false);
  const [howToUseOpen, setHowToUseOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileHtu, setMobileHtu] = useState(false);

  const desktopLangRef = useRef<HTMLDivElement>(null);
  const desktopHtuRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  // Close dropdowns on route change
  useEffect(() => {
    setLangOpen(false);
    setHowToUseOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  // Click-outside to close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        !desktopLangRef.current?.contains(target) &&
        !mobileLangRef.current?.contains(target)
      ) {
        setLangOpen(false);
      }
      if (!desktopHtuRef.current?.contains(target)) {
        setHowToUseOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === lang)!;
  const isHtu = location.pathname.startsWith("/how-to-use");

  return (
    <motion.nav
      className="bg-white sticky top-0 z-50 shadow-sm"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-16 py-3 md:py-2">
        {/* Logo */}
        <Link
          to="/"
          className="h-10 w-[100px] lg:h-[50px] lg:w-[131px] relative shrink-0"
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt="C&B Remittance"
              className="absolute h-[101%] left-[-13%] max-w-none top-[-0.3%] w-[127%] object-contain"
              src={imgLogo}
            />
          </div>
        </Link>

        {/* ── Desktop Nav ─────────────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-10">
          {/* Send money */}
          <Link
            to="/"
            className="text-[#3f4e50] text-[15px] font-medium cursor-pointer"
          >
            {t.nav.sendMoney}
          </Link>

          {/* How to use dropdown */}
          <div className="relative" ref={desktopHtuRef}>
            <button
              className={`flex items-center gap-1.5 text-[15px] font-medium cursor-pointer transition-colors ${isHtu ? "text-[#3a9944]" : "text-[#3f4e50]"}`}
              onClick={() => setHowToUseOpen((v) => !v)}
            >
              {t.nav.howToUse}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${howToUseOpen ? "rotate-180" : ""}`}
                color={isHtu ? "#3a9944" : "#8CA2A4"}
              />
            </button>
            <AnimatePresence>
              {howToUseOpen && (
                <motion.div
                  className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border border-gray-100 z-50 overflow-hidden min-w-[148px]"
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.15 }}
                >
                  {HOW_TO_USE_LINKS.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-3 text-[#231a16] text-[15px] font-normal w-full text-left cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About us */}
          <Link
            to="/about"
            className={`text-[15px] font-medium cursor-pointer transition-colors ${location.pathname === "/about" ? "text-[#3a9944]" : "text-[#3f4e50]"}`}
          >
            {t.nav.aboutUs}
          </Link>

          {/* Help */}
          <Link
            to="/help"
            className={`text-[15px] font-medium cursor-pointer transition-colors ${location.pathname === "/help" ? "text-[#3a9944]" : "text-[#3f4e50]"}`}
          >
            {t.nav.help}
          </Link>
        </div>

        {/* ── Desktop Right ────────────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-10">
          {/* Language Selector */}
          <div className="relative" ref={desktopLangRef}>
            <button
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setLangOpen((v) => !v)}
            >
              <div className="relative size-6 overflow-hidden rounded-sm">
                <img
                  src={FLAG_MAP[lang]}
                  alt={lang}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <span className="text-[#3f4e50] text-[14px] font-medium">
                {currentLang.label}
              </span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#8CA2A4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-100 z-50 overflow-hidden min-w-[130px]"
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.15 }}
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      className="flex items-center gap-3 px-4 py-2.5 w-full text-left cursor-pointer"
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                    >
                      <div className="relative size-5 overflow-hidden rounded-sm shrink-0">
                        <img
                          src={FLAG_MAP[l.code]}
                          alt={l.label}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[#3f4e50] text-[13px] font-medium">
                        {l.label}
                      </span>
                      <span className="text-[#8CA2A4] text-[12px]">
                        {l.name}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-6">
            <button className="text-[#3a9944] text-[15px] font-medium cursor-pointer">
              {t.nav.login}
            </button>
            <button className="bg-[#3a9944] text-white px-5 py-2.5 rounded-full text-[15px] font-medium cursor-pointer">
              {t.nav.signup}
            </button>
          </div>
        </div>

        {/* ── Mobile Right ─────────────────────────────────────────────── */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Language compact */}
          <div className="relative" ref={mobileLangRef}>
            <button
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={() => setLangOpen((v) => !v)}
            >
              <div className="relative size-5 overflow-hidden rounded-sm">
                <img
                  src={FLAG_MAP[lang]}
                  alt={lang}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <span className="text-[#3f4e50] text-[12px] font-medium">
                {currentLang.label}
              </span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-100 z-50 overflow-hidden min-w-[120px]"
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.15 }}
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      className="flex items-center gap-2 px-3 py-2 w-full text-left cursor-pointer"
                      onClick={() => {
                        setLang(l.code);
                        setLangOpen(false);
                      }}
                    >
                      <div className="relative size-4 overflow-hidden rounded-sm shrink-0">
                        <img
                          src={FLAG_MAP[l.code]}
                          alt={l.label}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[#3f4e50] text-[12px]">
                        {l.label}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Hamburger */}
          <button
            className="cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X size={22} color="#3f4e50" />
            ) : (
              <Menu size={22} color="#3f4e50" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/"
              className="text-[#3f4e50] text-[15px] font-medium py-2 block"
            >
              {t.nav.sendMoney}
            </Link>

            {/* How to use (expandable) */}
            <button
              className="flex items-center justify-between text-[#3f4e50] text-[15px] font-medium py-2 w-full text-left cursor-pointer"
              onClick={() => setMobileHtu((v) => !v)}
            >
              {t.nav.howToUse}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${mobileHtu ? "rotate-180" : ""}`}
                color="#8CA2A4"
              />
            </button>
            <AnimatePresence>
              {mobileHtu && (
                <motion.div
                  className="pl-4 flex flex-col gap-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {HOW_TO_USE_LINKS.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="text-[#647576] text-[14px] py-1.5 block"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <Link
              to="/about"
              className="text-[#3f4e50] text-[15px] font-medium py-2 block"
            >
              {t.nav.aboutUs}
            </Link>
            <Link
              to="/help"
              className="text-[#3f4e50] text-[15px] font-medium py-2 block"
            >
              {t.nav.help}
            </Link>

            <div className="flex items-center gap-4 pt-2 border-t border-gray-100 mt-2">
              <button className="text-[#3a9944] text-[15px] font-medium cursor-pointer">
                {t.nav.login}
              </button>
              <button className="bg-[#3a9944] text-white px-5 py-2 rounded-full text-[14px] font-medium cursor-pointer">
                {t.nav.signup}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
