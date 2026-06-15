"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Briefcase, Shield, TrendingUp } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#132347] to-[#1a3a6e]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <Shield size={14} className="text-[#60a5fa]" />
            <span className="text-sm text-gray-300">
              Transformación Digital & Gestión Normativa
            </span>
          </div>
        </div>

        <h1 className="reveal opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          <span className="block">Hideto Samir</span>
          <span className="block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#2563eb]">
              Maruyama Vichir
            </span>
          </span>
        </h1>

        <p className="reveal opacity-0 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
          Ingeniero de Procesos & Consultor SIG
        </p>

        <p className="reveal opacity-0 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformo operaciones analógicas en sistemas digitales eficientes y normativos,
          fusionando ingeniería de procesos con tecnología para impulsar la excelencia operacional.
        </p>

        <div className="reveal opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-[#2563eb]/25 hover:shadow-[#2563eb]/40 hover:-translate-y-0.5"
          >
            <Briefcase size={18} className="group-hover:rotate-12 transition-transform" />
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 border border-gray-500/30 hover:border-[#2563eb]/50 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:bg-white/5"
          >
            <TrendingUp size={18} />
            Contáctame
          </a>
        </div>

        {/* Stats */}
        <div className="reveal opacity-0 mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">5+</div>
            <div className="text-sm text-gray-400 mt-1">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">30+</div>
            <div className="text-sm text-gray-400 mt-1">Proyectos Completados</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-white">6</div>
            <div className="text-sm text-gray-400 mt-1">Normativas ISO Implementadas</div>
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
