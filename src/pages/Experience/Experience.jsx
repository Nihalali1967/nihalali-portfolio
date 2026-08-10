import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-xl" />

    {/* Animated gradient border on hover */}
    <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-xl p-5 md:p-6 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Icon */}
      <div className="relative mb-4">
        <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 rounded-full blur-xl group-hover:opacity-50 transition-all duration-500" />
        <Icon className="w-8 h-8 text-cyan-400 relative z-10" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>
        <div className="flex flex-wrap justify-between items-center gap-2">
          <span className="font-semibold text-blue-400 text-sm">{company}</span>
          <span className="text-xs font-mono bg-blue-500/10 px-3 py-1 rounded-full text-gray-300">
            {period}
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mt-3">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Full Stack Developer",
      company: "Dfine Digital Solutions, Malappuram",
      period: "Nov 2024 - Present",
      description: "Led full-stack development of scalable fintech and enterprise applications using PHP, Laravel, MySQL, JavaScript, HTML, CSS, and Bootstrap, owning architecture and end-to-end delivery. Architected and developed secure, scalable RESTful APIs and integrated them with responsive web applications and Android clients, implementing authentication, authorization, validation, and API versioning. Designed and integrated payment gateways, real-time IoT/device communication, and complex business workflows, focusing on security, reliability, and performance. Optimized application performance through database query tuning and mentored developers.",
    },
    {
      icon: Code2,
      title: "Software Developer",
      company: "Natmco Solutions, Malappuram",
      period: "Sep 2023 - Nov 2024",
      description: "Developed and maintained scalable backend applications using PHP, Laravel, MySQL, and RESTful APIs, focusing on clean architecture, performance, security, and maintainability. Architected and developed secure RESTful APIs for web and Android applications, implementing authentication, authorization, validation, API versioning, and reliable data processing. Designed and integrated payment gateway workflows, real-time IoT/device communication, background jobs, notifications, and complex business logic. Optimized database queries and mentored developers on Laravel best practices.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Content container */}
        <div className="relative container mx-auto px-6 max-w-6xl">
          {/* Section header */}
          <div className="flex flex-col items-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs text-gray-400 font-medium">Career History</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
              Professional Journey
            </h2>
            <p className="text-gray-400 text-base md:text-lg text-center max-w-2xl">
              Building production-grade applications across fintech, enterprise & SaaS domains
            </p>
          </div>

          {/* Experience grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl pointer-events-none" />
      </div>
    </>
  );
};

export default ExperienceSection;
