// Contenido bilingüe del sitio (EN default / ES). Editá este archivo para
// actualizar textos. Los campos marcados con "// TODO" son placeholders.

export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];

// Datos que no cambian según el idioma (nombre, contacto, etc.)
export const personalInfo = {
  name: "Federico Giuliani",
  shortName: "Fede",
  initials: "FG",
  location: "Buenos Aires, Argentina", // TODO: confirmar si querés mostrar la ubicación
  email: "feedeegface@gmail.com", // TODO: confirmar si este es el mail público
  phone: "", // TODO: agregar teléfono (opcional)
  linkedin: "", // TODO: agregar URL de LinkedIn
  github: "", // TODO: agregar URL de GitHub
  cvPdfUrl: "", // TODO: agregar link de descarga del CV en PDF (opcional)
  // Tecnologías destacadas en el Hero
  stack: ["JavaScript", "TypeScript", "React", "Node.js"],
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  url?: string;
  repoUrl?: string;
};

export type Fact = {
  label: string;
  value: string;
};

export type LocaleContent = {
  ui: {
    skipToContent: string;
    primaryNav: string;
    openMenu: string;
    closeMenu: string;
    switchToLight: string;
    switchToDark: string;
    language: string;
    backToTop: string;
  };
  nav: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    contact: string;
  };
  hero: {
    status: string;
    eyebrow: string;
    title: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    label: string;
    title: string;
    lead: string;
    body: string;
    factsTitle: string;
    facts: Fact[];
  };
  experienceSection: {
    label: string;
    title: string;
    items: ExperienceItem[];
  };
  educationSection: {
    label: string;
    title: string;
    items: EducationItem[];
  };
  skillsSection: {
    label: string;
    title: string;
    items: SkillCategory[];
  };
  projects: ProjectItem[];
  contact: {
    label: string;
    title: string;
    text: string;
    emailCta: string;
    copyCta: string;
    copiedCta: string;
    downloadCv: string;
  };
  footer: {
    tagline: string;
  };
};

export const content: Record<Locale, LocaleContent> = {
  en: {
    ui: {
      skipToContent: "Skip to content",
      primaryNav: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
      language: "Language",
      backToTop: "Back to top",
    },
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      status: "Open to new opportunities",
      eyebrow: "Hi, I'm",
      title: "Programmer Analyst in Training",
      tagline:
        "Administrative professional transitioning into software development, focused on JavaScript, React, and Node.js.",
      primaryCta: "Get in touch",
      secondaryCta: "View experience",
    },
    about: {
      label: "About me",
      title: "Who I am",
      lead: "Administrative professional moving into software development.",
      body: "I currently work in administration at a teacher training institute belonging to the Federación de Educadores Bonaerenses (FEB), where I handle enrollments, generate PDF payment vouchers, and coordinate their delivery by email. In parallel, I've been training as a developer: I completed JavaScript, React, and Node.js courses at Coderhouse and I'm currently pursuing a Programmer Analyst degree at the Universidad Nacional de La Plata (UNLP). I'm looking to move into a more technical role, bringing the same organization and responsibility I apply in my current job.",
      factsTitle: "At a glance",
      facts: [
        { label: "Based in", value: "Buenos Aires, Argentina" }, // TODO: confirmar ubicación
        { label: "Currently", value: "Administrative Assistant at a teacher training institute (FEB)" },
        { label: "Studying", value: "Programmer Analyst degree — UNLP" },
        { label: "Languages", value: "Spanish (native), English (advanced)" },
      ],
    },
    experienceSection: {
      label: "Career",
      title: "Experience",
      items: [
        {
          role: "Administrative Assistant",
          company:
            "Teacher Training Institute — Federación de Educadores Bonaerenses (FEB)",
          period: "2022 — Present", // TODO: confirmar fecha de inicio exacta
          description: [
            "Enrollment of students in the academic management system.",
            "Generation of PDF payment vouchers.",
            "Sending and tracking vouchers by email for each enrollee.",
            "Automation of repetitive tasks in the administrative process.", // TODO: ajustar si aplica
          ],
        },
        // TODO: agregar experiencias laborales previas si las tenés
      ],
    },
    educationSection: {
      label: "Education",
      title: "Education",
      items: [
        {
          title: "Programmer Analyst (University Degree)",
          institution: "Universidad Nacional de La Plata (UNLP)",
          period: "In progress", // TODO: confirmar año de inicio
        },
        {
          title: "JavaScript, React & Node.js Courses",
          institution: "Coderhouse",
          period: "", // TODO: agregar año
        },
        {
          title: "High School Diploma + Computer Operator Certification",
          institution: "High school", // TODO: agregar nombre de la institución
          period: "",
        },
      ],
    },
    skillsSection: {
      label: "Stack",
      title: "Skills",
      items: [
        { category: "Frontend", items: ["JavaScript", "TypeScript", "React", "HTML", "CSS"] },
        { category: "Backend", items: ["Node.js"] },
        { category: "Tools", items: ["Git", "Three.js", "Vite"] },
        { category: "Languages", items: ["Spanish (native)", "English (advanced)"] },
      ],
    },
    projects: [
      // TODO: agregar tus proyectos personales o del instituto
      // { name: "Coupon automation", description: "...", repoUrl: "https://github.com/..." },
    ],
    contact: {
      label: "Contact",
      title: "Let's talk",
      text: "I'm looking for new opportunities to keep growing as a developer. If you have a proposal or just want to say hi, reach out.",
      emailCta: "Send an email",
      copyCta: "Copy email",
      copiedCta: "Copied!",
      downloadCv: "Download CV",
    },
    footer: {
      tagline: "Built with React, TypeScript and Three.js",
    },
  },
  es: {
    ui: {
      skipToContent: "Saltar al contenido",
      primaryNav: "Navegación principal",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      switchToLight: "Cambiar a modo claro",
      switchToDark: "Cambiar a modo oscuro",
      language: "Idioma",
      backToTop: "Volver arriba",
    },
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      education: "Educación",
      skills: "Skills",
      contact: "Contacto",
    },
    hero: {
      status: "Disponible para nuevas oportunidades",
      eyebrow: "Hola, soy",
      title: "Analista Programador en formación",
      tagline:
        "Administrativo en transición hacia el desarrollo de software, con foco en JavaScript, React y Node.js.",
      primaryCta: "Contactame",
      secondaryCta: "Ver experiencia",
    },
    about: {
      label: "Sobre mí",
      title: "Quién soy",
      lead: "Administrativo en transición hacia el desarrollo de software.",
      body: "Trabajo como administrativo en un instituto de formación docente de la Federación de Educadores Bonaerenses, donde gestiono inscripciones, genero cupones de pago en PDF y coordino su envío por mail. En paralelo, vengo formándome como desarrollador: hice cursos de JavaScript, React y Node.js en Coderhouse y actualmente estoy cursando la carrera de Analista Programador Universitario en la UNLP. Busco dar el salto a un rol más técnico, aportando la misma organización y responsabilidad que aplico en mi trabajo actual.",
      factsTitle: "De un vistazo",
      facts: [
        { label: "Ubicación", value: "Buenos Aires, Argentina" }, // TODO: confirmar ubicación
        { label: "Actualmente", value: "Administrativo en un instituto de formación docente (FEB)" },
        { label: "Estudiando", value: "Analista Programador Universitario — UNLP" },
        { label: "Idiomas", value: "Español (nativo), Inglés (avanzado)" },
      ],
    },
    experienceSection: {
      label: "Trayectoria",
      title: "Experiencia",
      items: [
        {
          role: "Administrativo",
          company:
            "Instituto de Formación Docente — Federación de Educadores Bonaerenses (FEB)",
          period: "2022 — Actualidad",
          description: [
            "Inscripción de personas en el sistema de gestión académica.",
            "Generación de cupones de pago en formato PDF.",
            "Envío y seguimiento de cupones por mail a cada inscripto.",
            "Automatización de tareas repetitivas del proceso administrativo.",
          ],
        },
      ],
    },
    educationSection: {
      label: "Formación",
      title: "Educación",
      items: [
        {
          title: "Analista Programador Universitario",
          institution: "Universidad Nacional de La Plata (UNLP)",
          period: "En curso",
        },
        {
          title: "Cursos de JavaScript, React y Node.js",
          institution: "Coderhouse",
          period: "",
        },
        {
          title:
            "Estudios secundarios completos + Certificación de Operador de Computadoras",
          institution: "Escuela secundaria",
          period: "",
        },
      ],
    },
    skillsSection: {
      label: "Stack",
      title: "Skills",
      items: [
        { category: "Frontend", items: ["JavaScript", "TypeScript", "React", "HTML", "CSS"] },
        { category: "Backend", items: ["Node.js"] },
        { category: "Herramientas", items: ["Git", "Three.js", "Vite"] },
        { category: "Idiomas", items: ["Español (nativo)", "Inglés (avanzado)"] },
      ],
    },
    projects: [],
    contact: {
      label: "Contacto",
      title: "Hablemos",
      text: "Estoy buscando nuevas oportunidades para seguir creciendo como desarrollador. Si tenés una propuesta o simplemente querés charlar, escribime.",
      emailCta: "Enviar un mail",
      copyCta: "Copiar mail",
      copiedCta: "¡Copiado!",
      downloadCv: "Descargar CV",
    },
    footer: {
      tagline: "Hecho con React, TypeScript y Three.js",
    },
  },
};
