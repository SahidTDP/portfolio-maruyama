"use client";

import { useEffect, useRef } from "react";
import {
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
  Building2,
  BadgeCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function EducationSection() {
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

  const education = t.education.items.map((edu, idx) => ({
    ...edu,
    icon: idx === 0 ? GraduationCap : BookOpen,
  }));

  const certifications = t.education.certifications;

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal opacity-0 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/5 border border-[#2563eb]/10 mb-6">
            <GraduationCap size={14} className="text-[#2563eb]" />
            <span className="text-sm font-medium text-[#2563eb]">
              {t.education.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            {t.education.title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Education Timeline (takes 3/5) */}
          <div className="lg:col-span-3 reveal opacity-0">
            <h3 className="text-xl font-semibold text-[#0a1628] mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#2563eb]/10 flex items-center justify-center">
                <GraduationCap size={18} className="text-[#2563eb]" />
              </div>
              {t.education.higher_title}
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-[#2563eb]/20 hover:border-[#2563eb]/40 transition-colors group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-[#2563eb] group-hover:scale-125 transition-transform" />

                  <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-lg hover:shadow-[#2563eb]/5 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2 text-xs font-medium text-[#2563eb] bg-[#2563eb]/5 px-3 py-1 rounded-full">
                        <Calendar size={12} />
                        {edu.period}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-[#0a1628] mb-1">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Building2 size={14} className="text-[#2563eb]/60" />
                      {edu.institution}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (takes 2/5) */}
          <div className="lg:col-span-2 reveal opacity-0">
            <h3 className="text-xl font-semibold text-[#0a1628] mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Award size={18} className="text-emerald-600" />
              </div>
              {t.education.certs_title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative p-5 rounded-xl border border-gray-100 bg-white hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <BadgeCheck size={20} className="text-emerald-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-[#0a1628] mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {cert.org}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
