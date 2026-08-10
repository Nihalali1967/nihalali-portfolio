import { useEffect } from "react";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import { FlipWords } from "@/components/ui/flip-words";
import { Github, Linkedin, Mail, Phone, ArrowRight, Download, FileCode2, Wifi, Battery, MousePointerClick, ChevronDown } from "lucide-react";

// Grid Background
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Full Stack PHP/Laravel Developer",
    "Scalable Web Applications & REST APIs",
    "Payment Gateway Integration & IoT",
    "Mentoring & Team Leadership",
  ];

  const codeLines = [
    { num: 1, content: [<span key="1-k" className="text-purple-400">const</span>, " ", <span key="1-v" className="text-blue-400">profile</span>, " ", <span key="1-eq" className="text-gray-500">=</span>, " ", <span key="1-br" className="text-gray-500">{'{'}</span>] },
    { num: 2, content: ["  ", <span key="2-k" className="text-cyan-400">name</span>, <span key="2-c1" className="text-gray-500">: </span>, <span key="2-v" className="text-emerald-400">'Nihal Ali'</span>, <span key="2-c2" className="text-gray-500">,</span>] },
    { num: 3, content: ["  ", <span key="3-k" className="text-cyan-400">title</span>, <span key="3-c1" className="text-gray-500">: </span>, <span key="3-v" className="text-emerald-400">'Full Stack PHP/Laravel Developer'</span>, <span key="3-c2" className="text-gray-500">,</span>] },
    { num: 4, content: ["  ", <span key="4-k" className="text-cyan-400">location</span>, <span key="4-c1" className="text-gray-500">: </span>, <span key="4-v" className="text-emerald-400">'Malappuram, Kerala'</span>, <span key="4-c2" className="text-gray-500">,</span>] },
    { num: 5, content: ["  ", <span key="5-k" className="text-cyan-400">experience</span>, <span key="5-c1" className="text-gray-500">: </span>, <span key="5-v" className="text-emerald-400">'Production-grade'</span>, <span key="5-c2" className="text-gray-500">,</span>] },
    { num: 6, content: ["  ", <span key="6-k" className="text-cyan-400">domains</span>, <span key="6-c1" className="text-gray-500">: [</span>, <span key="6-v1" className="text-emerald-400">'Fintech'</span>, <span key="6-c2" className="text-gray-500">, </span>, <span key="6-v2" className="text-emerald-400">'ERP'</span>, <span key="6-c3" className="text-gray-500">, </span>, <span key="6-v3" className="text-emerald-400">'HRMS'</span>, <span key="6-c4" className="text-gray-500">],</span>] },
    { num: 7, content: ["  ", <span key="7-k" className="text-cyan-400">skills</span>, <span key="7-c1" className="text-gray-500">: [</span>] },
    { num: 8, content: ["    ", <span key="8-v1" className="text-emerald-400">'PHP'</span>, <span key="8-c1" className="text-gray-500">, </span>, <span key="8-v2" className="text-emerald-400">'Laravel'</span>, <span key="8-c2" className="text-gray-500">, </span>, <span key="8-v3" className="text-emerald-400">'Livewire'</span>, <span key="8-c3" className="text-gray-500">, </span>, <span key="8-v4" className="text-emerald-400">'REST APIs'</span>, <span key="8-c4" className="text-gray-500">,</span>] },
    { num: 9, content: ["    ", <span key="9-v1" className="text-emerald-400">'MySQL'</span>, <span key="9-c1" className="text-gray-500">, </span>, <span key="9-v2" className="text-emerald-400">'PostgreSQL'</span>, <span key="9-c2" className="text-gray-500">, </span>, <span key="9-v3" className="text-emerald-400">'Redis'</span>, <span key="9-c3" className="text-gray-500">, </span>, <span key="9-v4" className="text-emerald-400">'JavaScript'</span>, <span key="9-c4" className="text-gray-500">,</span>] },
    { num: 10, content: ["    ", <span key="10-v1" className="text-emerald-400">'React'</span>, <span key="10-c1" className="text-gray-500">, </span>, <span key="10-v2" className="text-emerald-400">'Tailwind'</span>, <span key="10-c2" className="text-gray-500">, </span>, <span key="10-v3" className="text-emerald-400">'Docker'</span>, <span key="10-c3" className="text-gray-500">, </span>, <span key="10-v4" className="text-emerald-400">'Azure'</span>, <span key="10-c4" className="text-gray-500">,</span>] },
    { num: 11, content: ["  ", <span key="11-c" className="text-gray-500">],</span>] },
    { num: 12, content: ["  ", <span key="12-k" className="text-cyan-400">practices</span>, <span key="12-c1" className="text-gray-500">: [</span>, <span key="12-v1" className="text-emerald-400">'SOLID'</span>, <span key="12-c2" className="text-gray-500">, </span>, <span key="12-v2" className="text-emerald-400">'CI/CD'</span>, <span key="12-c3" className="text-gray-500">, </span>, <span key="12-v3" className="text-emerald-400">'PHPUnit'</span>, <span key="12-c4" className="text-gray-500">],</span>] },
    { num: 13, content: ["  ", <span key="13-k" className="text-cyan-400">seniorLevel</span>, <span key="13-c1" className="text-gray-500">: </span>, <span key="13-v" className="text-orange-400">true</span>, <span key="13-c2" className="text-gray-500">,</span>] },
    { num: 14, content: ["  ", <span key="14-k" className="text-purple-400">hireable</span>, <span key="14-c1" className="text-gray-500">{": () => "}</span>, <span key="14-v" className="text-blue-400">true</span>, <span key="14-c2" className="text-gray-500">,</span>] },
    { num: 15, content: [<span key="15-br" className="text-gray-500">{'}'}</span>, <span key="15-c" className="text-gray-600">;</span>] },
  ];

  // const stats = [
  //   { label: "Live Projects", value: "6" },
  //   { label: "Tech Stack", value: "15+" },
  //   { label: "Domains", value: "4" },
  // ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Nihalali1967", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nihal-ali-a72784235", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nihalali1967@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+916282981209", label: "Phone" },
  ];

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <main className="bg-[#04081A] text-white min-h-screen">
        {/* SEO-rich hidden content */}
        <div className="sr-only" aria-hidden="false">
          <h1>Nihal Ali - Full Stack Developer | PHP Laravel Developer | Kerala India</h1>
          <p>Nihal Ali is a Full Stack PHP/Laravel Developer experienced in building scalable web applications
          for fintech, ERP, HRMS, and enterprise solutions. Specializing in Laravel, REST APIs, MySQL, JavaScript,
          React, Livewire, payment integrations, and responsive web development. Expert in MySQL, PostgreSQL, Redis,
          Docker, CI/CD, Microsoft Azure, and Linux server administration.</p>
          <h2>Expertise: Full Stack Development, PHP Laravel, REST API Architecture, Payment Gateway Integration,
          IoT Integration, Database Optimization, Docker, CI/CD, Microsoft Azure, Team Mentoring</h2>
          <p>Full Stack Developer specializing in PHP Laravel framework with proven experience building production-ready
          enterprise applications including HRMS, learning platforms, repair shop management, and restaurant ordering
          systems. Available for full stack roles and enterprise projects across India and worldwide.</p>
        </div>

        <section
          className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-28 md:pt-28 pb-20"
          aria-label="Nihal Ali - Full Stack Developer Portfolio"
        >
          <GridBackground />

          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={8} />
          </div>

          {/* Background glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Main content container */}
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

              {/* Left column - Professional intro */}
              <div className="w-full lg:w-3/5 space-y-5 sm:space-y-6">

                {/* Availability badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-emerald-300 text-xs sm:text-sm font-medium">
                    Available for Full Stack Developer Roles
                  </span>
                </div>

                {/* Name & Title */}
                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                    <span className="text-white">Nihal Ali</span>
                  </h1>
                  <div className="flex items-center gap-2">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full" />
                    <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text">
                      Full Stack PHP / Laravel Developer
                    </span>
                  </div>
                </div>

                {/* Rotating role text */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <FlipWords
                    className={"text-sm sm:text-base text-gray-300 font-medium"}
                    words={words}
                  />
                </div>

                {/* Professional summary */}
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                  Building scalable web applications for fintech, ERP, HRMS & enterprise
                  clients using PHP, Laravel, MySQL, JavaScript & React. Passionate about
                  clean code, SOLID principles, and delivering production-grade solutions
                  end-to-end.
                </p>

                {/* Stats row */}
                {/* <div className="flex items-center gap-5 sm:gap-8 py-2">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                        {stat.value}
                      </span>
                      <span className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-medium uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div> */}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Nihal_Ali_Resume.pdf"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 pt-2">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white hover:scale-105"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right column - Professional code editor */}
              <div className="w-full lg:w-2/5 max-w-md mx-auto lg:mx-0">
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 bg-[#0d1117]">
                  {/* Title bar with traffic lights + file tab */}
                  <div className="flex items-center bg-[#161b22] border-b border-white/10 px-3 py-2.5 gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    {/* File tab */}
                    <div className="ml-3 flex items-center gap-1.5 px-3 py-1 rounded-t-md bg-[#0d1117] border-t border-x border-white/10 text-xs text-gray-300">
                      <FileCode2 className="w-3.5 h-3.5 text-yellow-400" />
                      <span>developer.js</span>
                    </div>
                  </div>

                  {/* Editor body with line numbers */}
                  <div className="overflow-x-auto bg-[#0d1117]">
                    <div className="flex text-xs sm:text-sm font-mono leading-relaxed py-3 min-w-max">
                      {/* Line numbers gutter */}
                      <div className="flex flex-col items-end pr-3 pl-4 select-none border-r border-white/5 flex-shrink-0">
                        {codeLines.map((line) => (
                          <span key={line.num} className="text-gray-600 leading-relaxed py-0.5">
                            {line.num}
                          </span>
                        ))}
                      </div>
                      {/* Code content */}
                      <div className="pl-4 pr-4 flex-1">
                        {codeLines.map((line) => (
                          <div key={line.num} className="py-0.5 whitespace-pre">
                            {line.content}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between bg-[#161b22] border-t border-white/10 px-3 py-1.5 text-[10px] text-gray-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        JavaScript
                      </span>
                      <span>UTF-8</span>
                      <span>LF</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Ln 15, Col 2</span>
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-1.5">
          <span className="text-gray-500 text-xs flex items-center gap-1.5">
            <MousePointerClick className="w-3.5 h-3.5 text-blue-400" />
            About me
          </span>
          <ChevronDown className="w-4 h-4 text-blue-400" />
        </div>
        <PortfolioPage />
      </main>
    </>
  );
}
