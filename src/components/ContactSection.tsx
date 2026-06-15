"use client";

import { useEffect, useRef, useState } from "react";
import {
  Send,
  Mail,
  Globe,
  MapPin,
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#f8f9fa] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-[#2563eb]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/2 -right-32 w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="reveal opacity-0 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/5 border border-[#2563eb]/10 mb-6">
            <Mail size={14} className="text-[#2563eb]" />
            <span className="text-sm font-medium text-[#2563eb]">
              Contacto
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
            Conversemos sobre tu Proyecto
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            ¿Buscas transformar digitalmente tus procesos o implementar un SIG?
            Estoy listo para ayudar a tu organización.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="reveal opacity-0 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0a1628] mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-5">
                <a
                  href="mailto:hideto.maruyama@email.com"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#2563eb]/20 hover:shadow-lg hover:shadow-[#2563eb]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2563eb]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={20} className="text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Correo Electrónico
                    </p>
                    <p className="text-sm text-gray-500">
                      hideto.maruyama@email.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/hidetomaruyama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[#0a66c2]/20 hover:shadow-lg hover:shadow-[#0a66c2]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0a66c2]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe size={20} className="text-[#0a66c2]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      LinkedIn
                    </p>
                    <p className="text-sm text-gray-500">
                      /in/hidetomaruyama
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                    <MapPin size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Ubicación
                    </p>
                    <p className="text-sm text-gray-500">Lima, Perú</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#132347] text-white">
              <p className="text-sm font-medium mb-2">
                Disponibilidad
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Abierto a proyectos de consultoría, implementación de SIG,
                digitalización de procesos y mejoramiento continuo.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal opacity-0">
            {isSubmitted ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-gray-500 text-sm">
                  Gracias por contactarme. Te responderé a la brevedad posible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8"
              >
                <h3 className="text-lg font-semibold text-[#0a1628] mb-6">
                  Envíame un Mensaje
                </h3>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"
                      placeholder="¿En qué puedo ayudarte?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all resize-none"
                      placeholder="Describe tu proyecto o consulta..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] disabled:bg-[#2563eb]/60 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-[#2563eb]/20 hover:shadow-[#2563eb]/30"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
