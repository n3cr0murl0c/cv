import React, { useState, useEffect } from "react";
import {
  Mail,
  Globe,
  Phone,
  MapPin,
  Download,
  Github,
  Linkedin,
  ChevronDown,
  Code,
  Cloud,
  Database,
  Cpu,
  Briefcase,
  GraduationCap,
  Award,
  Languages as LanguagesIcon,
  ArrowRight,
  ExternalLink,
  Star,
  FileText,
  BookOpen,
  Wrench,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("es"); // 'es' or 'en'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const content = {
    es: {
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        experience: "Experiencia",
        skills: "Habilidades",
        cv: "CV Completo",
        contact: "Contacto",
      },
      hero: {
        title: "Erick Escobar",
        subtitle: "Solutions Architect & Digital Transformation Leader",
        description:
          "Ingeniero Electrónico especializado en arquitectura cloud-native, transformación digital empresarial y liderazgo técnico. Más de 4 años diseñando soluciones escalables que impulsan la innovación organizacional.",
        contact: "Contáctame",
        portfolio: "Ver Portfolio",
        location: "Quito, Ecuador",
      },
      about: {
        title: "Sobre Mí",
        profileTitle: "Perfil Profesional",
        profileText1:
          "Ingeniero Electrónico con más de 4 años de experiencia especializada en arquitectura de soluciones cloud-native, transformación digital empresarial y desarrollo full-stack. Expert en diseño de sistemas distribuidos, arquitecturas de microservicios y metodologías DevOps.",
        profileText2:
          "Mi enfoque único en el diseño de software proviene de una profunda comprensión de los fundamentos de la arquitectura de computadoras, desde programación en ensamblador hasta arquitecturas cloud-native modernas.",
        education: "Educación",
        university: "Universidad Nacional de La Plata",
        degree: "Ingeniería Electrónica (2023)",
        masters:
          "Especialización: Arquitectura de Computadoras y Sistemas Operativos",
        cloudExpert: "Cloud Expert",
        fullStack: "Full-Stack",
        languages: "Idiomas",
        spanish: "Español",
        native: "Nativo",
        english: "Inglés",
        advanced: "Avanzado C1",
        chinese: "Chino Mandarín",
        basic: "Básico HSK1",
      },
      experience: {
        title: "Experiencia Profesional",
        present: "Presente",
        jobs: [
          {
            period: "Oct 2024 - Presente",
            title: "Coordinador de Aplicaciones Digitales",
            company: "Arca Continental Ecuador",
            location: "Quito, Ecuador",
            description:
              "Liderazgo en arquitectura cloud enterprise, DevOps automation y transformación digital",
            achievements: [
              "Arquitectura de microservicios en Azure con alta disponibilidad",
              "Implementación de pipelines CI/CD organizacionales",
              "Diseño de arquitectura de datos cloud para aplicativos críticos",
              "Desarrollo full-stack con .NET 9 y Flutter",
            ],
            technologies: [
              "Azure",
              "C# .NET 9",
              "Flutter",
              "DevOps",
              "SQL Server",
            ],
          },
          {
            period: "2022 - 2023",
            title: "Desarrollador de Hardware & Software",
            company: "Ventrue Technologies",
            location: "Quito, Ecuador",
            description:
              "Arquitectura IoT end-to-end y desarrollo de soluciones full-stack para industria",
            achievements: [
              "Diseño completo de soluciones IoT industriales",
              "Desarrollo de aplicaciones móviles multiplataforma",
              "Integración de sistemas complejos hardware-software",
              "Optimización de rendimiento mejorando eficiencia en 25%",
            ],
            technologies: ["IoT", "Flutter", "Python", "React", "Docker"],
          },
          {
            period: "2021",
            title: "Ingeniero de Instrumentación y Control",
            company: "Repsol Ecuador",
            location: "Orellana, Ecuador",
            description:
              "Gestión de redes industriales y programación PLC en industria petrolera",
            achievements: [
              "Mantenimiento de protocolos HART, Ethernet y MODBUS",
              "Programación de PLCs Rockwell y Siemens",
              "Reducción del 30% en tiempo de resolución de problemas",
              "Implementación de protocolos de mantenimiento preventivo",
            ],
            technologies: ["PLC", "HART", "MODBUS", "Rockwell", "Siemens"],
          },
          {
            period: "2020 - 2021",
            title: "Especialista en Infraestructura IT y Ciberseguridad",
            company: "Palmedical",
            location: "Quito, Ecuador",
            description:
              "Liderazgo en transformación digital e infraestructura empresarial",
            achievements: [
              "Implementación de arquitectura cloud-first con Docker",
              "Administración integral de ciberseguridad",
              "Mejora del 35% en escalabilidad del sistema",
              "Infrastructure as Code con automatización",
            ],
            technologies: [
              "Docker",
              "Windows Server",
              "VMWare",
              "PowerShell",
              "Linux",
            ],
          },
        ],
      },
      skills: {
        title: "Competencias Técnicas",
        categories: {
          cloud: "Cloud & DevOps",
          backend: "Backend Development",
          frontend: "Frontend & Mobile",
          data: "Data & Analytics",
        },
        architectTitle: "Competencias Clave de Solutions Architect",
        architectSkills: [
          "Liderazgo técnico en equipos multidisciplinarios",
          "Definición de roadmaps tecnológicos",
          "Arquitecturas de solución enterprise",
          "Comunicación con C-level executives",
          "Transformación digital enterprise",
          "Evaluación de tecnologías emergentes",
        ],
      },
      cv: {
        title: "Curriculum Vitae Completo",
        summary: "Resumen Profesional",
        summaryText:
          "Ingeniero Electrónico con experiencia especializada en Arquitectura de Computadoras y Sistemas Operativos, ofreciendo 4+ años de experiencia progresiva en DevOps, desarrollo full-stack e infraestructura empresarial. Profundidad técnica única que abarca desde programación en ensamblador hasta arquitecturas cloud-native modernas.",
        coreCompetencies: "Competencias Principales",
        competencies: [
          {
            title: "Liderazgo Técnico",
            desc: "Lidero equipos multifuncionales, mentor de desarrolladores, impulso decisiones arquitectónicas y estrategia técnica",
          },
          {
            title: "DevOps & Cloud",
            desc: "4+ años implementando pipelines CI/CD, automatización de infraestructura y soluciones cloud (AWS, Azure, GCP)",
          },
          {
            title: "Desarrollo Full-Stack",
            desc: "Ecosistema .NET, TypeScript, React, Flutter, Python—desde concepción hasta despliegue en producción",
          },
          {
            title: "Programación de Sistemas",
            desc: "Experiencia profunda desde Assembly hasta lenguajes de alto nivel, arquitectura de computadoras y sistemas operativos",
          },
          {
            title: "Sistemas Legacy",
            desc: "Programación RPGLE y administración IBM i, estrategias de modernización",
          },
          {
            title: "Colaboración & Comunicación",
            desc: "Excelentes habilidades interpersonales, gestión de stakeholders y documentación técnica",
          },
        ],
        technicalSkills: "Habilidades Técnicas",
        programming: "Programación & Desarrollo",
        programmingSkills: [
          {
            category: "Lenguajes Core",
            skills:
              "Expert: C/C++, Assembly, Python, TypeScript, Bash, PowerShell | Proficiente: RPGLE (IBM i)",
          },
          {
            category: "Frontend",
            skills:
              "React, Angular, Flutter - Desarrollo UI/UX responsive moderno y aplicaciones móviles multiplataforma",
          },
          {
            category: "Backend",
            skills:
              ".NET Framework/Core, Python (Django, Flask), Node.js - Diseño e implementación de APIs RESTful y GraphQL",
          },
          {
            category: "Bases de Datos",
            skills:
              "SQL Server, PostgreSQL, NoSQL (MongoDB, Redis) - Diseño, optimización y administración de bases de datos",
          },
          {
            category: "Bajo Nivel",
            skills:
              "Programación en Assembly, Sistemas Embebidos (ARM, AVR, PIC), Sistemas Operativos en Tiempo Real (RTOS)",
          },
        ],
        devops: "DevOps & Infraestructura",
        devopsSkills: [
          {
            category: "Plataformas Cloud",
            skills:
              "AWS, Azure, GCP - Servicios completos de computación, almacenamiento y bases de datos",
          },
          {
            category: "CI/CD",
            skills:
              "Azure DevOps, GitHub Actions, GitLab CI - Pipelines automatizados de testing, building y deployment",
          },
          {
            category: "Contenedorización",
            skills:
              "Docker, Kubernetes - Orquestación, escalado y arquitectura de microservicios",
          },
          {
            category: "IaC",
            skills:
              "Terraform, ARM Templates - Provisión de infraestructura y gestión de configuración",
          },
          {
            category: "Monitoreo",
            skills:
              "Prometheus, Grafana, ELK Stack - Monitoreo de sistemas, logging y alertas",
          },
        ],
        automation: "Automatización Industrial",
        automationSkills: [
          {
            category: "Programación PLC",
            skills:
              "Rockwell (Allen-Bradley), Siemens (S7-300/400), Ladder Logic, Function Block Diagrams",
          },
          {
            category: "Protocolos Industriales",
            skills:
              "MODBUS, HART, Profibus, Ethernet/IP - Implementación y troubleshooting de protocolos",
          },
          {
            category: "SCADA/HMI",
            skills:
              "Sistemas de control industrial, monitoreo de procesos y adquisición de datos",
          },
        ],
        leadership: "Liderazgo & Habilidades Profesionales",
        leadershipSkills: [
          {
            title: "Liderazgo Técnico",
            desc: "Capacidad probada para liderar equipos de desarrollo e impulsar iniciativas técnicas. Experiencia en mentoría de desarrolladores junior, revisiones de código y establecimiento de mejores prácticas.",
          },
          {
            title: "Comunicación & Colaboración",
            desc: "Excelentes habilidades de comunicación verbal y escrita en inglés y español. Hábil en traducir conceptos técnicos complejos para audiencias diversas.",
          },
          {
            title: "Resolución de Problemas",
            desc: "Experto en aplicar principios de pensamiento computacional para descomponer problemas complejos. Enfoque sistemático para debugging y optimización.",
          },
        ],
        availability: "Disponibilidad",
        availabilityText:
          "Abierto a reubicación y viajes internacionales - Pasaporte válido, licencia de conducir Clase B",
        workAuth: "Autorización de Trabajo",
        workAuthText:
          "Disponible para trabajar en Ecuador, Argentina, y abierto a sponsorship de visa",
      },
      contact: {
        title: "Hablemos sobre tu próximo Proyecto",
        subtitle: "¿Listo para transformar tu arquitectura tecnológica?",
        description:
          "Estoy disponible para colaborar en proyectos de arquitectura cloud enterprise, transformación digital y desarrollo de soluciones escalables. Mi enfoque se centra en crear valor tangible para el negocio mediante tecnologías de vanguardia.",
        specialties: "Especialidades",
        specialtyList: [
          { label: "Cloud Architecture", desc: "Azure & AWS" },
          { label: "Full-Stack Development", desc: ".NET & Flutter" },
          { label: "Data Architecture", desc: "ETL/ELT & Analytics" },
          { label: "IoT Solutions", desc: "Industrial & Edge" },
        ],
        available: "Actualmente disponible",
        availableText:
          "Abierto a nuevos desafíos y oportunidades de colaboración en proyectos de transformación digital enterprise.",
      },
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        experience: "Experience",
        skills: "Skills",
        cv: "Full CV",
        contact: "Contact",
      },
      hero: {
        title: "Erick Escobar",
        subtitle: "Solutions Architect & Digital Transformation Leader",
        description:
          "Electronic Engineer specializing in cloud-native architecture, enterprise digital transformation, and technical leadership. 4+ years designing scalable solutions that drive organizational innovation.",
        contact: "Contact Me",
        portfolio: "View Portfolio",
        location: "Quito, Ecuador",
      },
      about: {
        title: "About Me",
        profileTitle: "Professional Profile",
        profileText1:
          "Electronic Engineer with 4+ years of specialized experience in cloud-native solution architecture, enterprise digital transformation, and full-stack development. Expert in distributed systems design, microservices architectures, and DevOps methodologies.",
        profileText2:
          "My unique approach to software design stems from a deep understanding of computer architecture fundamentals, from assembly programming to modern cloud-native architectures.",
        education: "Education",
        university: "La Plata National University",
        degree: "Electronic Engineering (2023)",
        masters: "Specialization: Computer Architecture and Operating Systems",
        cloudExpert: "Cloud Expert",
        fullStack: "Full-Stack",
        languages: "Languages",
        spanish: "Spanish",
        native: "Native",
        english: "English",
        advanced: "Advanced C1",
        chinese: "Mandarin Chinese",
        basic: "Basic HSK1",
      },
      experience: {
        title: "Professional Experience",
        present: "Present",
        jobs: [
          {
            period: "Oct 2024 - Present",
            title: "Digital Applications Coordinator",
            company: "Arca Continental Ecuador",
            location: "Quito, Ecuador",
            description:
              "Leadership in enterprise cloud architecture, DevOps automation, and digital transformation",
            achievements: [
              "High-availability microservices architecture on Azure",
              "Implementation of organizational CI/CD pipelines",
              "Cloud data architecture design for critical applications",
              "Full-stack development with .NET 9 and Flutter",
            ],
            technologies: [
              "Azure",
              "C# .NET 9",
              "Flutter",
              "DevOps",
              "SQL Server",
            ],
          },
          {
            period: "2022 - 2023",
            title: "Hardware & Software Developer",
            company: "Ventrue Technologies",
            location: "Quito, Ecuador",
            description:
              "End-to-end IoT architecture and full-stack solutions development for industry",
            achievements: [
              "Complete industrial IoT solution design",
              "Cross-platform mobile application development",
              "Complex hardware-software systems integration",
              "Performance optimization achieving 25% efficiency improvement",
            ],
            technologies: ["IoT", "Flutter", "Python", "React", "Docker"],
          },
          {
            period: "2021",
            title: "Instrumentation & Control Engineer",
            company: "Repsol Ecuador",
            location: "Orellana, Ecuador",
            description:
              "Industrial network management and PLC programming in oil & gas industry",
            achievements: [
              "Maintenance of HART, Ethernet, and MODBUS protocols",
              "Rockwell and Siemens PLC programming",
              "30% reduction in mean time to resolution",
              "Implementation of preventive maintenance protocols",
            ],
            technologies: ["PLC", "HART", "MODBUS", "Rockwell", "Siemens"],
          },
          {
            period: "2020 - 2021",
            title: "IT Infrastructure & Cybersecurity Specialist",
            company: "Palmedical",
            location: "Quito, Ecuador",
            description:
              "Leadership in digital transformation and enterprise infrastructure",
            achievements: [
              "Cloud-first architecture implementation with Docker",
              "Comprehensive cybersecurity administration",
              "35% improvement in system scalability",
              "Infrastructure as Code with automation",
            ],
            technologies: [
              "Docker",
              "Windows Server",
              "VMWare",
              "PowerShell",
              "Linux",
            ],
          },
        ],
      },
      skills: {
        title: "Technical Competencies",
        categories: {
          cloud: "Cloud & DevOps",
          backend: "Backend Development",
          frontend: "Frontend & Mobile",
          data: "Data & Analytics",
        },
        architectTitle: "Key Solutions Architect Competencies",
        architectSkills: [
          "Technical leadership in cross-functional teams",
          "Technology roadmap definition",
          "Enterprise solution architectures",
          "C-level executive communication",
          "Enterprise digital transformation",
          "Emerging technology evaluation",
        ],
      },
      cv: {
        title: "Complete Curriculum Vitae",
        summary: "Professional Summary",
        summaryText:
          "Electronic Engineer with specialized expertise in Computer Architecture and Operating Systems, offering 4+ years of progressive experience in DevOps, full-stack development, and enterprise infrastructure. Unique technical depth spanning from assembly-level programming to modern cloud-native architectures.",
        coreCompetencies: "Core Competencies",
        competencies: [
          {
            title: "Technical Leadership",
            desc: "Lead cross-functional teams, mentor developers, drive architectural decisions and technical strategy",
          },
          {
            title: "DevOps & Cloud",
            desc: "4+ years implementing CI/CD pipelines, infrastructure automation, and cloud solutions (AWS, Azure, GCP)",
          },
          {
            title: "Full-Stack Development",
            desc: ".NET ecosystem, TypeScript, React, Flutter, Python—from conception to production deployment",
          },
          {
            title: "Systems Programming",
            desc: "Deep expertise from Assembly to high-level languages, computer architecture, and operating systems",
          },
          {
            title: "Legacy Systems",
            desc: "RPGLE programming and IBM i administration, modernization strategies",
          },
          {
            title: "Collaboration & Communication",
            desc: "Excellent interpersonal skills, stakeholder management, and technical documentation",
          },
        ],
        technicalSkills: "Technical Skills",
        programming: "Programming & Development",
        programmingSkills: [
          {
            category: "Core Languages",
            skills:
              "Expert: C/C++, Assembly, Python, TypeScript, Bash, PowerShell | Proficient: RPGLE (IBM i)",
          },
          {
            category: "Frontend",
            skills:
              "React, Angular, Flutter - Modern responsive UI/UX development and cross-platform mobile applications",
          },
          {
            category: "Backend",
            skills:
              ".NET Framework/Core, Python (Django, Flask), Node.js - RESTful and GraphQL API design and implementation",
          },
          {
            category: "Databases",
            skills:
              "SQL Server, PostgreSQL, NoSQL (MongoDB, Redis) - Database design, optimization, and administration",
          },
          {
            category: "Low-Level",
            skills:
              "Assembly Programming, Embedded Systems (ARM, AVR, PIC), Real-Time Operating Systems (RTOS)",
          },
        ],
        devops: "DevOps & Infrastructure",
        devopsSkills: [
          {
            category: "Cloud Platforms",
            skills:
              "AWS, Azure, GCP - Complete compute, storage, and database services",
          },
          {
            category: "CI/CD",
            skills:
              "Azure DevOps, GitHub Actions, GitLab CI - Automated testing, building, and deployment pipelines",
          },
          {
            category: "Containerization",
            skills:
              "Docker, Kubernetes - Orchestration, scaling, and microservices architecture",
          },
          {
            category: "IaC",
            skills:
              "Terraform, ARM Templates - Infrastructure provisioning and configuration management",
          },
          {
            category: "Monitoring",
            skills:
              "Prometheus, Grafana, ELK Stack - System monitoring, logging, and alerting",
          },
        ],
        automation: "Industrial Automation",
        automationSkills: [
          {
            category: "PLC Programming",
            skills:
              "Rockwell (Allen-Bradley), Siemens (S7-300/400), Ladder Logic, Function Block Diagrams",
          },
          {
            category: "Industrial Protocols",
            skills:
              "MODBUS, HART, Profibus, Ethernet/IP - Protocol implementation and troubleshooting",
          },
          {
            category: "SCADA/HMI",
            skills:
              "Industrial control systems, process monitoring, and data acquisition",
          },
        ],
        leadership: "Leadership & Professional Skills",
        leadershipSkills: [
          {
            title: "Technical Leadership",
            desc: "Proven ability to lead development teams and drive technical initiatives. Experience mentoring junior developers, conducting code reviews, and establishing best practices.",
          },
          {
            title: "Communication & Collaboration",
            desc: "Excellent verbal and written communication skills in English and Spanish. Skilled at translating complex technical concepts for diverse audiences.",
          },
          {
            title: "Problem-Solving",
            desc: "Expert at applying computational thinking principles to decompose complex problems. Systematic approach to debugging and optimization.",
          },
        ],
        availability: "Availability",
        availabilityText:
          "Open to relocation and international travel - Valid passport, Class B driver's license",
        workAuth: "Work Authorization",
        workAuthText:
          "Available for work in Ecuador, Argentina, and open to visa sponsorship",
      },
      contact: {
        title: "Let's Talk About Your Next Project",
        subtitle: "Ready to transform your technology architecture?",
        description:
          "I'm available to collaborate on enterprise cloud architecture projects, digital transformation, and scalable solution development. My approach focuses on creating tangible business value through cutting-edge technologies.",
        specialties: "Specialties",
        specialtyList: [
          { label: "Cloud Architecture", desc: "Azure & AWS" },
          { label: "Full-Stack Development", desc: ".NET & Flutter" },
          { label: "Data Architecture", desc: "ETL/ELT & Analytics" },
          { label: "IoT Solutions", desc: "Industrial & Edge" },
        ],
        available: "Currently Available",
        availableText:
          "Open to new challenges and collaboration opportunities in enterprise digital transformation projects.",
      },
    },
  };

  const t = content[language as keyof typeof content];

  const skillsData = {
    [t.skills.categories.cloud]: [
      { name: "Microsoft Azure", level: 95 },
      { name: "AWS", level: 90 },
      { name: "Docker/Kubernetes", level: 88 },
      { name: "Terraform", level: 85 },
      { name: "CI/CD Pipelines", level: 92 },
    ],
    [t.skills.categories.backend]: [
      { name: "C# .NET 9", level: 95 },
      { name: "Python", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "RESTful APIs", level: 92 },
      { name: "GraphQL", level: 80 },
    ],
    [t.skills.categories.frontend]: [
      { name: "React.js", level: 88 },
      { name: "Flutter", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "PWA", level: 82 },
      { name: "Angular", level: 75 },
    ],
    [t.skills.categories.data]: [
      { name: "SQL Server", level: 92 },
      { name: "Apache Spark", level: 85 },
      { name: "ETL/ELT", level: 90 },
      { name: "Power BI", level: 88 },
      { name: "Big Data", level: 80 },
    ],
  };

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  const ExperienceCard = ({
    experience,
    index,
  }: {
    experience: any;
    index: number;
  }) => (
    <div
      className={`mb-8 flex ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="hidden md:flex items-center justify-center w-12">
        <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
      </div>
      <div
        className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 ${
          index % 2 === 0 ? "md:ml-6" : "md:mr-6"
        } flex-1 hover:shadow-xl transition-all duration-300`}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
              {experience.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold">
              {experience.company}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {experience.location}
            </p>
          </div>
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
            {experience.period}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {experience.description}
        </p>
        <ul className="space-y-2 mb-4">
          {experience.achievements.map((achievement: string, i: number) => (
            <li
              key={i}
              className="flex items-start"
            >
              <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                {achievement}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech: string, i: number) => (
            <span
              key={i}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              Erick <span className="text-blue-600">Escobar</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex space-x-8">
                {["home", "about", "experience", "skills", "cv", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`capitalize font-medium transition-colors duration-200 ${
                        activeSection === item
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                    >
                      {t.nav[item as keyof typeof t.nav]}
                    </button>
                  )
                )}
              </div>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                <Globe className="w-4 h-4" />
                {language === "es" ? "EN" : "ES"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-8 relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    EE
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
              {t.hero.title.split(" ")[0]}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {t.hero.title.split(" ")[1]}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {t.hero.contact}
              </button>
              <a
                href="https://w-dev-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                {t.hero.portfolio}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="flex justify-center space-x-8 text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{t.hero.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+593 99 202 4767</span>
              </div>
            </div>
          </div>

          <div className="animate-bounce text-center">
            <ChevronDown
              className="w-8 h-8 text-gray-400 mx-auto cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              {t.about.title.split(" ")[0]}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {t.about.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  {t.about.profileTitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {t.about.profileText1}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.about.profileText2}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl text-white">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">{t.about.education}</h3>
                    <p className="opacity-90">{t.about.university}</p>
                  </div>
                </div>
                <p className="opacity-90">{t.about.degree}</p>
                <p className="text-sm opacity-75 mt-2">{t.about.masters}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center">
                  <Cloud className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    {t.about.cloudExpert}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Azure & AWS
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center">
                  <Code className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    {t.about.fullStack}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    .NET & Flutter
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 rounded-2xl text-white">
                <div className="flex items-center gap-4">
                  <LanguagesIcon className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">{t.about.languages}</h3>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="font-medium">{t.about.spanish}</p>
                        <p className="text-sm opacity-75">{t.about.native}</p>
                      </div>
                      <div>
                        <p className="font-medium">{t.about.english}</p>
                        <p className="text-sm opacity-75">{t.about.advanced}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="font-medium">{t.about.chinese}</p>
                      <p className="text-sm opacity-75">{t.about.basic}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              {t.experience.title.split(" ")[0]}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {t.experience.title.split(" ")[1]}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full rounded-full"></div>
            {t.experience.jobs.map((experience: any, index: number) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              {t.skills.title.split(" ")[0]}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {t.skills.title.split(" ")[1]}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div
                key={category}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  {category.includes("Cloud") && (
                    <Cloud className="w-6 h-6 text-blue-600" />
                  )}
                  {category.includes("Backend") && (
                    <Code className="w-6 h-6 text-green-600" />
                  )}
                  {category.includes("Frontend") && (
                    <Cpu className="w-6 h-6 text-purple-600" />
                  )}
                  {category.includes("Data") && (
                    <Database className="w-6 h-6 text-orange-600" />
                  )}
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                {t.skills.architectTitle}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {t.skills.architectSkills.map(
                  (competencia: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-2"
                    >
                      <Star className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span className="text-sm">{competencia}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section
        id="cv"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {t.cv.title}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Professional Summary */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {t.cv.summary}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.cv.summaryText}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {t.cv.coreCompetencies}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {t.cv.competencies.map((comp: any, index: number) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl"
                >
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-blue-600" />
                    {comp.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {comp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {t.cv.technicalSkills}
              </h3>
            </div>

            {/* Programming */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                {t.cv.programming}
              </h4>
              <div className="space-y-4">
                {t.cv.programmingSkills.map((skill: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                  >
                    <h5 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {skill.category}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.skills}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Cloud className="w-6 h-6 text-blue-600" />
                {t.cv.devops}
              </h4>
              <div className="space-y-4">
                {t.cv.devopsSkills.map((skill: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                  >
                    <h5 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {skill.category}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.skills}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial Automation */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-orange-600" />
                {t.cv.automation}
              </h4>
              <div className="space-y-4">
                {t.cv.automationSkills.map((skill: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                  >
                    <h5 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {skill.category}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.skills}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership Skills */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {t.cv.leadership}
              </h3>
            </div>
            <div className="space-y-6">
              {t.cv.leadershipSkills.map((skill: any, index: number) => (
                <div key={index}>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">{t.cv.availability}</h4>
              <p className="opacity-90">{t.cv.availabilityText}</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">{t.cv.workAuth}</h4>
              <p className="opacity-90">{t.cv.workAuthText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.contact.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {t.contact.title.split(" ").slice(-1)}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t.contact.subtitle}</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                {t.contact.description}
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:eescobar.p07@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">eescobar.p07@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+593992024767"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="font-medium">
                      {language === "es" ? "Teléfono" : "Phone"}
                    </p>
                    <p className="text-gray-300">+593 99 202 4767</p>
                  </div>
                </a>

                <a
                  href="https://w-dev-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  <Globe className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-medium">Portfolio</p>
                    <p className="text-gray-300">w-dev-portfolio.vercel.app</p>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">
                {t.contact.specialties}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {t.contact.specialtyList.map(({ label, desc }: any) => (
                  <div
                    key={label}
                    className="text-center p-4 bg-white/5 rounded-xl"
                  >
                    {label.includes("Cloud") && (
                      <Cloud className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    )}
                    {label.includes("Full-Stack") && (
                      <Code className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    )}
                    {label.includes("Data") && (
                      <Database className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    )}
                    {label.includes("IoT") && (
                      <Cpu className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    )}
                    <h4 className="font-medium mb-1">{label}</h4>
                    <p className="text-sm text-gray-300">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">{t.contact.available}</span>
                </div>
                <p className="text-sm text-gray-300">
                  {t.contact.availableText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">
              Erick <span className="text-blue-400">Escobar</span>
            </div>
            <p className="mb-6">
              Solutions Architect & Digital Transformation Leader
            </p>
            <div className="w-16 h-px bg-gray-600 mx-auto mb-6"></div>
            <p className="text-sm">
              © 2025 Erick Escobar.{" "}
              {language === "es"
                ? "Todos los derechos reservados"
                : "All rights reserved"}
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
