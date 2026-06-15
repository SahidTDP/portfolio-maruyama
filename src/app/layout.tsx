import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hideto Maruyama | Ingeniero de Procesos & Consultor SIG",
  description:
    "Portafolio profesional de Hideto Samir Maruyama Vichir, Ingeniero Industrial especializado en Procesos, Sistemas Integrados de Gestión (SIG) y Normativas ISO. Transformación digital, digitalización de procesos y Gobierno de Datos.",
  keywords: [
    "Ingeniero de Procesos",
    "SIG",
    "ISO 9001",
    "ISO 14001",
    "ISO 45001",
    "ISO 37001",
    "ISO 31000",
    "Gestión de Riesgos",
    "Lean Six Sigma",
    "Digitalización",
    "Hideto Maruyama",
  ],
  openGraph: {
    title: "Hideto Maruyama | Ingeniero de Procesos & Consultor SIG",
    description:
      "Transformando operaciones analógicas en sistemas digitales eficientes y normativos.",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
