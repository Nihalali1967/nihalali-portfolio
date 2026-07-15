import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaLinux,
  FaBootstrap,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiRedis,
  SiDocker,
  SiGithub,
  SiGitlab,
  SiNginx,
  SiJquery,
} from "react-icons/si";
import { TbBrandVscode, TbApi } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdPayment, MdSecurity } from "react-icons/md";
import { FaDocker, FaJira } from "react-icons/fa";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Backend",
      color: "text-green-400",
      skills: [
        { name: "PHP", icon: <FaPhp className="w-4 h-4 text-[#777BB4]" /> },
        { name: "Laravel", icon: <FaLaravel className="w-4 h-4 text-[#FF2D20]" /> },
        { name: "RESTful & JSON API Design", icon: <TbApi className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "MVC & Service-Oriented Architecture", icon: <BsGrid1X2 className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Authentication (Sanctum/Passport/JWT)", icon: <MdSecurity className="w-4 h-4 text-[#4CAF50]" /> },
        { name: "Authorization & RBAC", icon: <MdSecurity className="w-4 h-4 text-[#2196F3]" /> },
        { name: "Queues & Background Jobs", icon: <Cpu className="w-4 h-4 text-[#FF9800]" /> },
        { name: "Event-Driven Architecture", icon: <BsGrid1X2 className="w-4 h-4 text-[#9C27B0]" /> },
      ],
    },
    {
      icon: Code2,
      title: "Frontend",
      color: "text-blue-400",
      skills: [
        { name: "Laravel Blade", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#FF2D20]" /> },
        { name: "Livewire", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#FB7099]" /> },
        { name: "HTML5", icon: <FaHtml5 className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-4 h-4 text-[#1572B6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="w-4 h-4 text-[#7952B3]" /> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "jQuery", icon: <SiJquery className="w-4 h-4 text-[#0769AD]" /> },
        { name: "AJAX", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "React (Basic)", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Database",
      color: "text-purple-400",
      skills: [
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "Database Design & Normalization", icon: <Database className="w-4 h-4 text-[#9CA3AF]" /> },
        { name: "Query Optimization & Indexing", icon: <Cpu className="w-4 h-4 text-[#F59E0B]" /> },
        { name: "Eloquent ORM", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#FF2D20]" /> },
        { name: "Migrations & Seeding", icon: <BsGrid1X2 className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Redis (Caching)", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      color: "text-orange-400",
      skills: [
        { name: "Git/GitHub/GitLab", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "CI/CD Pipelines", icon: <Cpu className="w-4 h-4 text-[#00897B]" /> },
        { name: "Docker", icon: <SiDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Linux Server Administration", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "Microsoft Azure", icon: <Cloud className="w-4 h-4 text-[#0078D4]" /> },
        { name: "cPanel", icon: <BsGrid1X2 className="w-4 h-4 text-[#FFA726]" /> },
        { name: "Nginx/Apache", icon: <SiNginx className="w-4 h-4 text-[#009639]" /> },
        { name: "SSL & Server Hardening", icon: <MdSecurity className="w-4 h-4 text-[#607D8B]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Integrations & Practices",
      color: "text-pink-400",
      skills: [
        { name: "Payment Gateways (Razorpay, Stripe)", icon: <MdPayment className="w-4 h-4 text-[#4CAF50]" /> },
        { name: "Third-Party APIs & Webhooks", icon: <TbApi className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Hardware/IoT Integration", icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" /> },
        { name: "SMS & Email Services", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#FFA726]" /> },
        { name: "SOLID Principles", icon: <BsGrid1X2 className="w-4 h-4 text-[#2196F3]" /> },
        { name: "Design Patterns", icon: <BsGrid1X2 className="w-4 h-4 text-[#9C27B0]" /> },
        { name: "Unit Testing (PHPUnit)", icon: <Cpu className="w-4 h-4 text-[#F44336]" /> },
        { name: "API Documentation (Postman/Swagger)", icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Agile/Scrum", icon: <BsGrid1X2 className="w-4 h-4 text-[#00BCD4]" /> },
        { name: "Mentoring & Team Leadership", icon: <MdSecurity className="w-4 h-4 text-[#FF9800]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
