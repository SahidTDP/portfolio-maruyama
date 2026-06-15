import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#hero" className="text-xl font-bold text-white">
              <span className="text-[#2563eb]">H</span>ideto
              <span className="text-[#2563eb]">.</span>
            </a>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
              Ingeniero de Procesos & Consultor SIG especializado en transformación
              digital y sistemas integrados de gestión.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Inicio", href: "#hero" },
                { label: "Habilidades", href: "#skills" },
                { label: "Proyectos", href: "#projects" },
                { label: "Experiencia", href: "#experience" },
                { label: "Contacto", href: "#contact" },
              ].map((link) => (
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

          {/* Expertise */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5">
              {[
                "Sistemas Integrados de Gestión",
                "ISO 9001 · 14001 · 45001 · 37001",
                "Gestión de Riesgos ISO 31000",
                "Digitalización de Procesos",
                "Lean Six Sigma",
                "Gobierno de Datos",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Hideto Samir Maruyama Vichir. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Hecho con <Heart size={12} className="text-red-400" /> desde Lima, Perú
          </p>
        </div>
      </div>
    </footer>
  );
}
