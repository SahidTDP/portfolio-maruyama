"use client";

import { useEffect, useRef } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceSection() {
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

  const experiences = t.experience.items;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal opacity-0 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/5 border border-[#2563eb]/10 mb-6">
            <Briefcase size={14} className="text-[#2563eb]" />
            <span className="text-sm font-medium text-[#2563eb]">
              {t.experience.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            {t.experience.title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563eb] via-[#3b82f6] to-transparent md:-translate-x-px hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="reveal opacity-0 relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`md:flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#2563eb] shadow-md shadow-[#2563eb]/20 z-10" />

                  {/* Content */}
                  <div
                    className={`md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300">
                      {/* Period Badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#2563eb]/5 text-[#2563eb] border border-[#2563eb]/10 mb-3 ${
                          index % 2 === 0
                            ? "md:ml-auto"
                            : ""
                        }`}
                      >
                        <Calendar size={12} />
                        {exp.period}
                      </div>

                      {/* Company & Role */}
                      <h3 className="text-xl font-semibold text-[#0a1628] mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[#2563eb] font-medium mb-1">
                        <Building2 size={14} />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
                        <MapPin size={12} />
                        {exp.location}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5">
                        {exp.highlights.map((h, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2 text-xs text-gray-500 ${
                              index % 2 === 0 ? "md:justify-end" : ""
                            }`}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
