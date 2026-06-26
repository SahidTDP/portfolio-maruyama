import type { Dictionary } from "./es";

const en: Dictionary = {
  metadata: {
    title: "Hideto Maruyama | Process Engineer & IMS Consultant",
    description: "Professional portfolio of Hideto Samir Maruyama Vichir, Industrial Engineer specialized in Processes, Integrated Management Systems (IMS), and ISO Standards. Digital transformation, process digitalization, and Data Governance.",
  },
  nav: {
    inicio: "Home",
    habilidades: "Skills",
    proyectos: "Projects",
    liderazgo: "Leadership",
    experiencia: "Experience",
    educacion: "Education",
    contacto: "Contact",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    language: "Language",
  },
  hero: {
    badge: "Digital Transformation & Regulatory Management",
    title1: "Hideto Samir",
    title2: "Maruyama Vichir",
    subtitle: "Hybrid Engineer: Processes, Compliance & Digital Transformation",
    description: "I combine the discipline of engineering and the philosophy of continuous improvement (Lean Six Sigma) with technological solutions. I translate complex regulations into digital, efficient, and secure operations, leading teams with clear communication and empathy.",
    cta_projects: "View Projects",
    cta_contact: "Contact Me",
    cta_download_cv: "Download CV",
    stat1_value: "100%",
    stat1_label: "SUNAFIL Compliance & Zero Accidents",
    stat2_value: "Speaker",
    stat2_label: "EXPOINDUSTRIAL 2024 Speaker",
    stat3_value: "Lean 6σ",
    stat3_label: "Yellow Belt & Continuous Improvement",
  },
  skills: {
    badge: "Stack & Competencies",
    title: "Technical & Professional Expertise",
    subtitle: "Over 5 years integrating world-class methodologies with technological tools to transform business processes.",
    extra: "And more: Power BI · Tableau · PostgreSQL · Docker · RPA Automation · EHS Indicator Management",
    categories: {
      processes: "Process Engineering",
      sig: "Integrated Management Systems",
      risk: "Risk Management & Compliance",
      tech: "Technology & Data",
    },
    items: {
      processes: {
        description: "Operational optimization and waste reduction.",
        badges: ["Lean Six Sigma (Yellow Belt)", "KPI Management", "Root Cause Analysis", "Statistical Control"],
      },
      sig: {
        description: "Implementation and auditing of international standards.",
        badges: ["ISO 9001 (Quality)", "ISO 14001 (Environmental)", "ISO 45001 (OH&S)", "ISO 37001 (Anti-bribery)"],
      },
      risk: {
        description: "Legal mitigation and business continuity.",
        badges: ["ISO 31000", "Law 29783", "IPERC Matrix", "NFPA 70E Regulations"],
      },
      tech: {
        description: "Digitalization of operational control and reporting.",
        badges: ["Python (Scripting)", "Power BI", "SQL / DB", "Document Control"],
      },
    },
  },
  leadership: {
    badge: "Human Factor",
    title: "Purpose-Driven Leadership & Effective Communication",
    subtitle: "Process management requires convincing and inspiring. My ability to connect with all levels of an organization (from operators to executives) allows me to ensure change management.",
    card1_title: "Strategic Communication",
    card1_desc: "Ability to translate complex technical concepts into clear messages for diverse audiences.",
    card2_title: "Change Management",
    card2_desc: "Experience connecting with all organizational levels to ensure adoption of new methodologies.",
    card3_title: "Work Under Pressure",
    card3_desc: "Forged in action as a Volunteer Firefighter (CGBVP) and Voz Animal, staying calm in critical situations.",
    card4_title: "Bilingual (Advanced English)",
    card4_desc: "Fluent communication in technical and business English, facilitating international collaboration.",
    quote: "\u201cTrue transformation doesn't happen with processes and technology alone — it happens when people understand the why and commit to change.\u201d",
  },
  experience: {
    badge: "Professional Career",
    title: "Work Experience",
    subtitle: "Over 7 years driving digital transformation, regulatory compliance, and operational excellence in leading organizations.",
    items: [
      {
        company: "Project-based Consulting",
        role: "IMS, Processes, Audits, Compliance & Digital Transformation Consultant",
        period: "May 2025 - Present",
        location: "Lima, Peru",
        description: "Consulting focused on the implementation of Integrated Management Systems, auditing, regulatory compliance, and workflow automation & digitalization using modern tools.",
        highlights: [
          "Execution of internal audits under Trinorma framework (ISO 9001, 14001, 45001)",
          "Workflow automation using AI, Python, n8n, and Google Apps Script",
          "Design of digital platforms for document control and corrective actions"
        ]
      },
      {
        company: "SST Consultores S.A.",
        role: "IMS, Process & Digital Transformation Consultant (Project: Grupo Santander)",
        period: "March 2025 - Present",
        location: "Lima, Peru",
        description: "HSE and IMS consulting focused on designing, implementing, and controlling document workflows for Grupo Santander's expansion projects.",
        highlights: [
          "Design and implementation of IMS under ISO 9001, 14001, and 45001 standards",
          "Development of process maps, procedures, and document matrix control",
          "Tracking OH&S KPIs using GISSAT and interactive Power BI dashboards"
        ]
      },
      {
        company: "JEF Servicios Generales",
        role: "IMS & Project Management Specialist",
        period: "March 2025 - March 2026",
        location: "Lima, Peru",
        description: "Specialist in charge of Integrated Management System (IMS) assurance and contractor control in infrastructure projects.",
        highlights: [
          "Assurance of the Integrated Management System and business continuity",
          "Management, control of contractors, and process auditing on site",
          "Monitoring of compliance indicators and document control"
        ]
      },
      {
        company: "SAMITEX",
        role: "Process & Operational Control Analyst",
        period: "March 2024 - January 2025",
        location: "Lima, Peru",
        description: "Process mapping and standardization under an Integrated Management System (IMS) and operational infrastructure framework.",
        highlights: [
          "Standardization and mapping of production and operational processes",
          "Quality audits and operational quality control",
          "Coordination of cross-functional committees and KPI tracking"
        ]
      },
      {
        company: "SERMAGEN",
        role: "Supervisor in Operational Compliance & Project Control",
        period: "January 2023 - May 2024",
        location: "Lima, Peru",
        description: "Supervision of regulatory compliance and operational process control on site, ensuring continuous improvement and KPI reporting.",
        highlights: [
          "Assurance of regulatory and operational compliance on site",
          "Project management, scheduling, and deviation analysis",
          "Reporting of management and safety performance indicators"
        ]
      },
      {
        company: "ITSE Consulting – Eng. Dally Vichir",
        role: "ITSE Safety Adequacy Project Supervisor",
        period: "November 2018 - April 2020",
        location: "Lima, Peru",
        description: "Technical supervision of building safety adequacy under ITSE guidelines, preparing safety plans and evacuation modeling.",
        highlights: [
          "Design of continuity and contingency plans and evacuation modeling",
          "Audit and diagnosis of infrastructure and facility security compliance",
          "Management and steering of safety adequacy projects"
        ]
      }
    ],
  },
  projects: {
    badge: "Featured Projects",
    title: "Innovation with Regulatory & Tech Impact",
    subtitle: "Projects merging traditional process engineering with advanced tech solutions for digital transformation.",
    show_less: "Show less",
    click_details: "Click to view details",
    items: [
      {
        title: "Automated IMS Compliance & KPI Dashboard",
        subtitle: "Web Platform for Strategic Control",
        description: "Web platform built to centralize internal audit control, contractor management, and real-time operational KPI visualization.",
        highlights: [
          "Automation of IMS compliance reporting",
          "Interactive dashboard with real-time metrics",
          "Control of findings and non-conformities",
          "Integration with operational data sources",
        ],
      },
      {
        title: "Digital Risk Management & Operational Continuity System",
        subtitle: "ISO 31000 · Automated Alerts",
        description: "Digitalized IPERC and risk matrix that automates deviation alerts using data analysis scripts developed in Python.",
        highlights: [
          "Interactive digital IPERC matrix",
          "Automated deviation alerts",
          "Predictive risk analysis",
          "Automated reports for auditing",
        ],
      },
      {
        title: "Document Control & Corporate Compliance Platform",
        subtitle: "ISO Standardization · Approval Workflows",
        description: "Smart repository for process standardization and approval workflows of ISO manuals, ensuring compliance and document traceability.",
        highlights: [
          "Centralized repository for ISO documents",
          "Automated approval workflows",
          "Version control and traceability",
          "Role-based access with auditing",
        ],
      },
    ],
  },
  education: {
    badge: "Academic Background",
    title: "Education & Certifications",
    subtitle: "Solid academic foundation and specialized certifications in engineering, management, and technology.",
    higher_title: "Higher Education",
    certs_title: "Key Certifications",
    items: [
      {
        degree: "Industrial Engineering (Degree program in progress)",
        institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
        period: "August 2018 – August 2025",
      },
      {
        degree: "Integrated Management Systems (ISO 9001, 14001, 45001, 37001 and 31000) + Trinorma Lead Auditor: ISO 9001, 14001 and 45001 (Diploma)",
        institution: "Universidad Nacional Agraria La Molina (UNALM)",
        period: "June 2026 – Present",
      },
    ],
    certifications: [
      {
        name: "Power BI for Management Indicators",
        org: "EDUTIN ACADEMY",
      },
      {
        name: "Microsoft Power Automate",
        org: "EDUTIN ACADEMY",
      },
      {
        name: "OH&S and Risk Management Training (Working at Heights, Hot Work, Confined Spaces, and Electrical Risk)",
        org: "ALSICARD SAC",
      },
      {
        name: "NFPA 70E:2024 – Electrical Safety Risk Inspector",
        org: "UDEMY",
      },
      {
        name: "Fire Safety: Risk Management under NFPA Standards",
        org: "UDEMY",
      },
      {
        name: "Process Management and BPM",
        org: "EDUTIN ACADEMY",
      },
      {
        name: "Python",
        org: "University of Michigan",
      },
      {
        name: "Lean Six Sigma",
        org: "Coursera | Tecnológico de Monterrey",
      },
      {
        name: "Technical Tools for Infrastructure (Basic AutoCAD, single-line diagram, and load chart)",
        org: "UDEMY",
      },
    ],
  },
  contact: {
    badge: "Contact",
    title: "Let's Talk About Your Project",
    subtitle: "Looking to digitally transform your processes or implement an IMS? I'm ready to help your organization.",
    info_title: "Contact Information",
    email_label: "Email",
    email_value: "hs.maruyama.vichir@outlook.com",
    phone_label: "Phone",
    phone_value: "+51 962 164 307",
    location_label: "Location",
    location_value: "Lima, Peru",
    linkedin_label: "LinkedIn",
    linkedin_value: "Linkedin Hideto",
    linkedin_url: "https://www.linkedin.com/in/hideto-maruyama-877a05186/",
    availability_title: "Availability",
    availability_text: "Open to consulting projects, IMS implementation, process digitalization, and continuous improvement.",
    form_title: "Send Me a Message",
    form_name: "Full name",
    form_email: "Email address",
    form_subject: "Subject",
    form_message: "Message",
    form_placeholder_name: "Your name",
    form_placeholder_email: "your@email.com",
    form_placeholder_subject: "How can I help you?",
    form_placeholder_message: "Describe your project or inquiry...",
    form_submit: "Send Message",
    form_sending: "Sending...",
    form_success_title: "Message Sent!",
    form_success_text: "Thank you for contacting me. I'll get back to you as soon as possible.",
  },
  footer: {
    description: "Process Engineer & IMS Consultant specialized in digital transformation and integrated management systems.",
    nav_title: "Navigation",
    specialties_title: "Specialties",
    specialties: ["Integrated Management Systems", "ISO 9001 · 14001 · 45001 · 37001", "Risk Management ISO 31000", "Process Digitalization", "Lean Six Sigma", "Data Governance"],
    copyright: "All rights reserved.",
    made_with: "Made with",
    from: "from Lima, Peru",
  },
};

export default en;
