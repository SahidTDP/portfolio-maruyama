"use client";

import { useEffect, useRef } from "react";
import {
  BarChart3,
  Shield,
  FileCheck,
  Leaf,
  Users,
  LineChart,
  Code2,
  GitBranch,
  Database,
  AlertTriangle,
  Target,
  Settings,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function SkillsSection() {
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

  const skills = [
    {
      category: t.skills.categories.processes,
      icon: Settings,
      colorClass: "bg-blue-50 text-blue-700 border-blue-100/50",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      description: t.skills.items.processes.description,
      badges: t.skills.items.processes.badges,
    },
    {
      category: t.skills.categories.sig,
      icon: FileCheck,
      colorClass: "bg-emerald-50 text-emerald-700 border-emerald-100/50",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      description: t.skills.items.sig.description,
      badges: t.skills.items.sig.badges,
    },
    {
      category: t.skills.categories.risk,
      icon: AlertTriangle,
      colorClass: "bg-amber-50 text-amber-700 border-amber-100/50",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      description: t.skills.items.risk.description,
      badges: t.skills.items.risk.badges,
    },
    {
      category: t.skills.categories.tech,
      icon: Code2,
      colorClass: "bg-purple-50 text-purple-700 border-purple-100/50",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      description: t.skills.items.tech.description,
      badges: t.skills.items.tech.badges,
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal opacity-0 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/5 border border-[#2563eb]/10 mb-6">
            <Target size={14} className="text-[#2563eb]" />
            <span className="text-sm font-medium text-[#2563eb]">
              {t.skills.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            {t.skills.title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="reveal opacity-0 group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${skill.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon size={22} className={skill.textColor} />
                </div>

                {/* Category */}
                <h3 className="text-base font-semibold text-[#0a1628] mb-1">
                  {skill.category}
                </h3>

                {/* Practical application description */}
                <p className="text-xs text-gray-500 mb-4 italic min-h-[2.5rem] flex items-center">
                  {skill.description}
                </p>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {skill.badges.map((badge, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold border transition-colors ${skill.colorClass}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal opacity-0 mt-12 text-center">
          <p className="text-sm text-gray-400">
            {t.skills.extra}
          </p>
        </div>
      </div>
    </section>
  );
}
