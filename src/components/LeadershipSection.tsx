"use client";

import { useEffect, useRef } from "react";
import { Users, Megaphone, ShieldCheck, Heart, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
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
      id="leadership"
      ref={sectionRef}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background with accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#132347] to-[#1a3a6e]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAyIiBoZWlnaHQ9IjYwMiIgdmlld0JveD0iMCAwIDYwIDYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjAzIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
      {/* Accent gradient orbs */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-[#2563eb]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-48 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-3xl" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb]/30 to-transparent" />
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb]/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal opacity-0 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 mb-6">
            <Heart size={14} className="text-[#60a5fa]" />
            <span className="text-sm font-medium text-[#60a5fa]">
              {t.leadership.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.leadership.title}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            {t.leadership.subtitle}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Comunicación */}
          <div className="reveal opacity-0 group">
            <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2563eb]/10">
              <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Megaphone size={22} className="text-[#60a5fa]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{t.leadership.card1_title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t.leadership.card1_desc}
              </p>
            </div>
          </div>

          {/* Card 2: Liderazgo */}
          <div className="reveal opacity-0 group">
            <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2563eb]/10">
              <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Users size={22} className="text-[#60a5fa]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{t.leadership.card2_title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t.leadership.card2_desc}
              </p>
            </div>
          </div>

          {/* Card 3: Resiliencia */}
          <div className="reveal opacity-0 group">
            <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2563eb]/10">
              <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={22} className="text-[#60a5fa]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{t.leadership.card3_title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t.leadership.card3_desc}
              </p>
            </div>
          </div>

          {/* Card 4: Bilingüe */}
          <div className="reveal opacity-0 group">
            <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2563eb]/10">
              <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Languages size={22} className="text-[#60a5fa]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{t.leadership.card4_title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t.leadership.card4_desc}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="reveal opacity-0 max-w-4xl mx-auto">
          <div className="relative p-8 rounded-2xl border border-[#2563eb]/20 bg-gradient-to-r from-[#2563eb]/5 to-[#3b82f6]/5 text-center">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2563eb]/5 to-transparent opacity-100" />
            <p className="relative text-base sm:text-lg text-gray-300 leading-relaxed italic font-medium">
              &ldquo;{t.leadership.quote}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
