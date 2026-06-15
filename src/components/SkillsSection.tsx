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

const skills = [
  {
    category: "Ingeniería de Procesos",
    icon: Settings,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    items: [
      { name: "Lean Six Sigma", level: 95 },
      { name: "Mapeo de Procesos (BPMN)", level: 90 },
      { name: "Control Estadístico (SPC)", level: 85 },
      { name: "Gestión de KPIs", level: 95 },
    ],
  },
  {
    category: "Sistemas Integrados de Gestión",
    icon: FileCheck,
    color: "from-emerald-400 to-emerald-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    items: [
      { name: "ISO 9001:2015 (Calidad)", level: 95 },
      { name: "ISO 14001:2015 (Ambiental)", level: 90 },
      { name: "ISO 45001:2018 (SST)", level: 90 },
      { name: "ISO 37001:2016 (Antisoborno)", level: 85 },
    ],
  },
  {
    category: "Gestión de Riesgos & Compliance",
    icon: AlertTriangle,
    color: "from-amber-400 to-amber-600",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    items: [
      { name: "ISO 31000 (Gestión de Riesgos)", level: 90 },
      { name: "Matriz IPERC", level: 95 },
      { name: "Auditorías Internas SIG", level: 90 },
      { name: "Control Documentario", level: 85 },
    ],
  },
  {
    category: "Tecnología & Datos",
    icon: Code2,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    items: [
      { name: "Python (Scripting & Análisis)", level: 80 },
      { name: "Dashboards (Power BI / Looker)", level: 85 },
      { name: "SQL / Bases de Datos", level: 75 },
      { name: "Gobierno de Datos", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
              Stack & Competencias
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            Expertise Técnico y Profesional
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Más de 5 años integrando metodologías de clase mundial con herramientas
            tecnológicas para transformar procesos empresariales.
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
                <h3 className="text-base font-semibold text-[#0a1628] mb-4">
                  {skill.category}
                </h3>

                {/* Skills */}
                <div className="space-y-3">
                  {skill.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">{item.name}</span>
                        <span className="text-xs font-medium text-gray-400">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal opacity-0 mt-12 text-center">
          <p className="text-sm text-gray-400">
            Y más: Power BI · Tableau · PostgreSQL · Docker · Automatización RPA · Gestión de Indicadores EHS
          </p>
        </div>
      </div>
    </section>
  );
}
