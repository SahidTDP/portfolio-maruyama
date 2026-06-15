"use client";

import { Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.inicio, href: "#hero" },
    { label: t.nav.habilidades, href: "#skills" },
    { label: t.nav.proyectos, href: "#projects" },
    { label: t.nav.experiencia, href: "#experience" },
    { label: t.nav.educacion, href: "#education" },
    { label: t.nav.contacto, href: "#contact" },
  ];

  return (
    <footer className="bg-[#0a1628] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#hero" className="text-xl font-bold text-white">
              <span className="text-[#2563eb]">H</span>ideto
              <span className="text-[#2563eb]">.</span>
            </a>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {t.footer.nav_title}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#2563eb] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {t.footer.specialties_title}
            </h4>
            <ul className="space-y-2.5">
              {t.footer.specialties.map((item: string, i: number) => (
                <li key={i} className="text-sm text-gray-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Hideto Samir Maruyama Vichir. {t.footer.copyright}
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            {t.footer.made_with} <Heart size={12} className="text-red-400" /> {t.footer.from}
          </p>
        </div>
      </div>
    </footer>
  );
}
