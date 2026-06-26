"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Dictionary } from "@/lib/dictionaries/es";

interface NavLink {
  label: keyof Dictionary["nav"];
  href: string;
}

const navLinks: NavLink[] = [
  { label: "inicio", href: "#hero" },
  { label: "habilidades", href: "#skills" },
  { label: "liderazgo", href: "#leadership" },
  { label: "proyectos", href: "#projects" },
  { label: "experiencia", href: "#experience" },
  { label: "educacion", href: "#education" },
  { label: "contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md shadow-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className={`text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? "text-[#0a1628]" : "text-white"
            }`}
          >
            <span className="text-[#2563eb]">H</span>ideto
            <span className="text-[#2563eb]">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-[#2563eb] ${
                  isScrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                {t.nav[link.label]}
              </a>
            ))}

            {/* Divider */}
            <div className="w-px h-5 bg-gray-300/30" />

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className={`text-xs font-semibold px-2.5 py-1.5 rounded-md border transition-all duration-200 hover:bg-[#2563eb]/10 hover:border-[#2563eb]/30 ${
                isScrolled
                  ? "text-gray-600 border-gray-200"
                  : "text-gray-300 border-white/20"
              }`}
              aria-label={t.nav.language}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>

            {/* Download CV Button */}
            <a
              href="/CV_Hideto_Maruyama.pdf"
              download="CV_Hideto_Maruyama.pdf"
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all duration-200 ${
                isScrolled
                  ? "bg-[#2563eb] border-[#2563eb] text-white hover:bg-[#1d4ed8]"
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
              }`}
            >
              <Download size={14} />
              {t.hero.cta_download_cv}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className={`text-xs font-semibold px-2 py-1 rounded-md border transition-colors ${
                isScrolled
                  ? "text-gray-600 border-gray-200"
                  : "text-gray-300 border-white/20"
              }`}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-600 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-[#f8f9fa] hover:text-[#2563eb] transition-colors"
            >
              {t.nav[link.label]}
            </a>
          ))}

          {/* Download CV Button Mobile */}
          <div className="pt-2">
            <a
              href="/CV_Hideto_Maruyama.pdf"
              download="CV_Hideto_Maruyama.pdf"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#2563eb] rounded-lg hover:bg-[#1d4ed8] transition-colors shadow-sm"
            >
              <Download size={16} />
              {t.hero.cta_download_cv}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
