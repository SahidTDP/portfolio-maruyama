"use client";

import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  BarChart3,
  Shield,
  FileText,
  CheckCircle,
  AlertTriangle,
  Layers,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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

  const projectConfig = [
    {
      icon: BarChart3,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      tech: ["Python", "Power BI", "SQL", "JavaScript"],
    },
    {
      icon: AlertTriangle,
      color: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      tech: ["Python", "Power BI", "Excel Avanzado", "VBA"],
    },
    {
      icon: FileText,
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      tech: ["Next.js", "PostgreSQL", "Docker", "ISO Standards"],
    },
  ];

  const projects = t.projects.items.map((item, index) => ({
    ...item,
    ...projectConfig[index],
  }));

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#f8f9fa] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal opacity-0 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/5 border border-[#2563eb]/10 mb-6">
            <Layers size={14} className="text-[#2563eb]" />
            <span className="text-sm font-medium text-[#2563eb]">
              {t.projects.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            {t.projects.title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="reveal opacity-0 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className="h-full bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-2 cursor-pointer"
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : index)
                  }
                >
                  {/* Top Accent */}
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl ${project.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={26} className={project.textColor} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[#0a1628] mb-1 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#2563eb] font-medium mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Expandable Highlights */}
                    <div
                      className={`transition-all duration-400 overflow-hidden ${
                        isExpanded ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="space-y-2.5 pt-2 border-t border-gray-100">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle
                              size={14}
                              className={`${project.textColor} mt-0.5 shrink-0`}
                            />
                            <span className="text-sm text-gray-600">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium bg-gray-50 text-gray-500 rounded-lg border border-gray-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Expand Indicator */}
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
                      <ExternalLink size={12} />
                      <span>
                        {isExpanded
                          ? t.projects.show_less
                          : t.projects.click_details}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
