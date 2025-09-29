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
  Languages,
  ArrowRight,
  ExternalLink,
  Star,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

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

  const skillsData = {
    "Cloud & DevOps": [
      { name: "Microsoft Azure", level: 95 },
      { name: "AWS", level: 90 },
      { name: "Docker/Kubernetes", level: 88 },
      { name: "Terraform", level: 85 },
      { name: "CI/CD Pipelines", level: 92 },
    ],
    "Backend Development": [
      { name: "C# .NET 9", level: 95 },
      { name: "Python", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "RESTful APIs", level: 92 },
      { name: "GraphQL", level: 80 },
    ],
    "Frontend & Mobile": [
      { name: "React.js", level: 88 },
      { name: "Flutter", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "PWA", level: 82 },
      { name: "Angular", level: 75 },
    ],
    "Data & Analytics": [
      { name: "SQL Server", level: 92 },
      { name: "Apache Spark", level: 85 },
      { name: "ETL/ELT", level: 90 },
      { name: "Power BI", level: 88 },
      { name: "Big Data", level: 80 },
    ],
  };

  const experiences = [
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
      technologies: ["Azure", "C# .NET 9", "Flutter", "DevOps", "SQL Server"],
    },
    {
      period: "2022 - 2024",
      title: "Desarrollador de Hardware & Solutions Developer",
      company: "Ventrue Technologies",
      location: "Quito, Ecuador",
      description:
        "Arquitectura IoT end-to-end y desarrollo de soluciones full-stack para industria",
      achievements: [
        "Diseño completo de soluciones IoT industriales",
        "Desarrollo de aplicaciones móviles multiplataforma",
        "Integración de sistemas complejos hardware-software",
        "Arquitectura asíncrona con eventos y colas de mensajería",
      ],
      technologies: ["IoT", "Flutter", "Python", "MQTT", "React"],
    },
    {
      period: "2019 - 2021",
      title: "Especialista Infrastructure IT & Lead Developer",
      company: "Palmedical",
      location: "Quito, Ecuador",
      description:
        "Liderazgo en transformación digital e infraestructura empresarial",
      achievements: [
        "Implementación de arquitectura cloud-first con Docker",
        "Administración integral de ciberseguridad",
        "Desarrollo de soluciones BI con Python",
        "Infrastructure as Code con Terraform",
      ],
      technologies: ["Docker", "Kubernetes", "Python", "Terraform", "Proxmox"],
    },
  ];

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
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "skills", "contact"].map(
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
                    {item === "home"
                      ? "Inicio"
                      : item === "about"
                      ? "Sobre Mí"
                      : item === "experience"
                      ? "Experiencia"
                      : item === "skills"
                      ? "Habilidades"
                      : "Contacto"}
                  </button>
                )
              )}
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
              Erick{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Escobar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
              Solutions Architect & Digital Transformation Leader
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ingeniero Electrónico especializado en arquitectura cloud-native,
              transformación digital empresarial y liderazgo técnico. Más de 5
              años diseñando soluciones escalables que impulsan la innovación
              organizacional.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contáctame
              </button>
              <a
                href="https://w-dev-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <Globe className="w-5 h-5" />
                Ver Portfolio
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="flex justify-center space-x-8 text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Quito, Ecuador</span>
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
              Sobre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Mí
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Perfil Profesional
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Ingeniero Electrónico con más de 5 años de experiencia
                  especializada en arquitectura de soluciones cloud-native,
                  transformación digital empresarial y desarrollo full-stack.
                  Expert en diseño de sistemas distribuidos, arquitecturas de
                  microservicios y metodologías DevOps.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Actualmente cursando Maestría en Ingeniería de Software con
                  enfoque en sistemas inteligentes e intensivos en datos. Mi
                  metodología de trabajo se basa en la estrategia de "Divide y
                  Conquistarás" para resolver problemas complejos.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl text-white">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">Educación</h3>
                    <p className="opacity-90">
                      Universidad Nacional de La Plata
                    </p>
                  </div>
                </div>
                <p className="opacity-90">Ingeniería Electrónica (2023)</p>
                <p className="text-sm opacity-75 mt-2">
                  Maestría en Ingeniería de Software (2025 - En curso)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center">
                  <Cloud className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    Cloud Expert
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Azure & AWS
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center">
                  <Code className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    Full-Stack
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    .NET & Flutter
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-blue-600 p-6 rounded-2xl text-white">
                <div className="flex items-center gap-4">
                  <Languages className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold">Idiomas</h3>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="font-medium">Español</p>
                        <p className="text-sm opacity-75">Nativo</p>
                      </div>
                      <div>
                        <p className="font-medium">English</p>
                        <p className="text-sm opacity-75">Avanzado C1</p>
                      </div>
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
              Experiencia{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Profesional
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full rounded-full"></div>
            {experiences.map((experience, index) => (
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
              Competencias{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Técnicas
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
                Competencias Clave de Solutions Architect
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {[
                  "Liderazgo técnico en equipos multidisciplinarios",
                  "Definición de roadmaps tecnológicos",
                  "Arquitecturas de solución enterprise",
                  "Comunicación con C-level executives",
                  "Transformación digital enterprise",
                  "Evaluación de tecnologías emergentes",
                ].map((competencia, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <Star className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span className="text-sm">{competencia}</span>
                  </div>
                ))}
              </div>
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
              Hablemos sobre tu próximo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Proyecto
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                ¿Listo para transformar tu arquitectura tecnológica?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Estoy disponible para colaborar en proyectos de arquitectura
                cloud enterprise, transformación digital y desarrollo de
                soluciones escalables. Mi enfoque se centra en crear valor
                tangible para el negocio mediante tecnologías de vanguardia.
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
                    <p className="font-medium">Teléfono</p>
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
              <h3 className="text-xl font-bold mb-6">Especialidades</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Cloud,
                    label: "Cloud Architecture",
                    desc: "Azure & AWS",
                  },
                  {
                    icon: Code,
                    label: "Full-Stack Development",
                    desc: ".NET & Flutter",
                  },
                  {
                    icon: Database,
                    label: "Data Architecture",
                    desc: "ETL/ELT & Analytics",
                  },
                  {
                    icon: Cpu,
                    label: "IoT Solutions",
                    desc: "Industrial & Edge",
                  },
                ].map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="text-center p-4 bg-white/5 rounded-xl"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    <h4 className="font-medium mb-1">{label}</h4>
                    <p className="text-sm text-gray-300">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">Actualmente disponible</span>
                </div>
                <p className="text-sm text-gray-300">
                  Abierto a nuevos desafíos y oportunidades de colaboración en
                  proyectos de transformación digital enterprise.
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
              © 2025 Erick Escobar. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
