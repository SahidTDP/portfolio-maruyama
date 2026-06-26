"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Briefcase, TrendingUp, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden pt-20 pb-12 md:pt-24 md:pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050b14] via-[#0e1b30] to-[#1b355a] animate-metallic" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAyIiBoZWlnaHQ9IjYwMiIgdmlld0JveD0iMCAwIDYwIDYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjAzIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      {/* Metallic Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#3b82f6]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2563eb]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-[#60a5fa]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Background overlay that dims the scene on spotlight */}
      <div className="absolute inset-0 bg-[#020617]/50 opacity-0 animate-backdrop-dim pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text, Buttons, Stats */}
          <div className="order-2 md:order-1 text-center md:text-left flex flex-col justify-center">
            <h1 className="reveal opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-3 leading-tight animate-text-dim-title">
              {t.hero.title1} {t.hero.title2}
            </h1>

            <p className="reveal opacity-0 text-base sm:text-xl md:text-xl text-gray-300 max-w-3xl mx-auto md:mx-0 mb-3 leading-snug font-medium animate-text-dim-subtitle">
              {t.hero.subtitle}
            </p>

            <p className="reveal opacity-0 text-sm sm:text-base md:text-base text-gray-400 max-w-2xl mx-auto md:mx-0 mb-6 leading-relaxed animate-text-dim-desc">
              {t.hero.description}
            </p>

            <div className="reveal opacity-0 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-text-dim-buttons">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-[#2563eb]/25 hover:shadow-[#2563eb]/40 hover:-translate-y-0.5"
              >
                <Briefcase size={18} className="group-hover:rotate-12 transition-transform" />
                {t.hero.cta_projects}
              </a>
              <a
                href="/CV_Hideto_Maruyama.pdf"
                download="CV_Hideto_Maruyama.pdf"
                className="group inline-flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-3.5 border border-white/20 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:bg-white/5"
              >
                <Download size={18} />
                {t.hero.cta_download_cv}
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 w-full sm:w-auto justify-center px-6 py-3.5 text-gray-400 hover:text-white font-medium transition-all duration-300 hover:underline"
              >
                {t.hero.cta_contact}
              </a>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto md:mx-0 border-t border-white/5 pt-6 animate-text-dim-stats">
              <div className="text-center md:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#2563eb]">{t.hero.stat1_value}</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">{t.hero.stat1_label}</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">{t.hero.stat2_value}</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">{t.hero.stat2_label}</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">{t.hero.stat3_value}</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">{t.hero.stat3_label}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="order-1 md:order-2 flex justify-center items-end reveal opacity-0 h-[400px] sm:h-[480px] md:h-[560px] lg:h-[660px] relative group">
            {/* Electric blue glow background effect behind the person - animate automatically */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#2563eb] to-[#60a5fa] blur-3xl transition-all duration-500 animate-glow-highlight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
            
            {/* Profile Image container - standing tall - animate automatically */}
            <div className="relative w-full h-full transition-all duration-500 animate-hero-highlight origin-bottom cursor-pointer">
              <Image
                src="/hideto_maruyama.png"
                alt="Hideto Samir Maruyama Vichir"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 420px, 500px"
                priority
                className="object-contain object-bottom filter brightness-95 group-hover:brightness-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-gray-400" />
      </div>
    </section>
  );
}
