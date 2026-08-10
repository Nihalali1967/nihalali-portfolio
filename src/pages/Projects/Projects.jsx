import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, ChevronDown, Code2, Layers } from "lucide-react";

const projects = [
  {
    title: "Finkey – HRMS & Workforce Management Platform",
    link: "https://finkey.io/",
    overview: "Finkey is a complete HR Management System that helps companies manage their entire workforce lifecycle — from attendance and payroll to performance and asset tracking.",
    features: [
      "Employee Management", "Attendance & Biometric Integration", "Payroll",
      "Leave Management", "Geofencing", "Performance Management",
      "Asset Management", "Task & Project Management", "Role & Permission Management",
      "Mobile Applications", "Reports & Analytics",
    ],
    contributions: [
      "REST API development for Web & Mobile applications",
      "Authentication & Authorization (Sanctum/Passport/JWT)",
      "Employee Management module",
      "Attendance & biometric machine data synchronization",
      "Payroll calculation logic",
      "Leave approval workflows",
      "Department & Designation management",
      "Branch Management",
      "Shift & Holiday Management",
      "Role & Permission Management",
      "Notification APIs",
      "Database design and optimization",
      "Report generation",
      "Queue Jobs & Scheduled Tasks",
      "Third-party integrations",
      "Bug fixing & production support",
      "Client-specific customizations",
      "Performance optimization",
    ],
    color: "#ed649e",
    icon: "💼",
  },
  {
    title: "SkilzHub – Digital Learning Platform",
    link: "https://skilzhub.org/",
    overview: "SkilzHub is an education platform offering courses, internships, certifications, and placement assistance with full student and trainer management.",
    features: [
      "Student Admissions", "Course Management", "Internship Programs",
      "Certification", "Placement Assistance", "Student Login",
      "Certificate Verification", "Event Management", "Web Development (Laravel) Training",
    ],
    contributions: [
      "Student Registration APIs",
      "Login & Authentication",
      "Course Management",
      "Batch Management",
      "Trainer Management",
      "Student Dashboard APIs",
      "Certificate Verification APIs",
      "Attendance System",
      "Placement Module",
      "Payment Integration",
      "Notification System",
      "CMS Backend",
      "Admin Panel Development",
      "Database Optimization",
      "API Documentation",
      "Laravel Queue Jobs",
      "Email Automation",
    ],
    color: "#34d399",
    icon: "🎓",
  },
  {
    title: "ServeEazy – Repair Shop Management Software",
    link: "https://serveeazy.com/",
    overview: "ServeEazy is a multi-tenant repair shop management platform for mobile, laptop, electronics, and watch service centers with full job ticket and CRM workflows.",
    features: [
      "Job Ticket Management", "Customer CRM", "Inventory",
      "Accounts", "Billing", "SMS & Email",
      "Reports", "Multi-user Access", "Workflow Management",
    ],
    contributions: [
      "Repair Ticket APIs",
      "Customer Management",
      "Inventory Management",
      "Spare Parts Module",
      "Invoice Generation",
      "Payment Module",
      "Technician Assignment",
      "Job Status Workflow",
      "CRM APIs",
      "Reports",
      "SMS Integration",
      "Email Notifications",
      "User Roles & Permissions",
      "Database Design",
      "API Security",
      "Performance Optimization",
    ],
    color: "#5196fd",
    icon: "🔧",
  },
  {
    title: "Dum Handi Biryani – Restaurant Ordering & Management Platform",
    link: "https://www.dumhandibiryani.com/",
    overview: "A scalable restaurant ordering platform supporting online orders, dine-in operations, table booking, menu management, catering, and multiple locations.",
    features: [
      "Online Ordering", "Dine-in Operations", "Table Booking",
      "Menu Management", "Catering", "Multi-Location Support",
      "Order Tracking", "Billing",
    ],
    contributions: [
      "Laravel backend modules & REST APIs",
      "Order processing & tracking",
      "Customer management",
      "Billing & reservations",
      "Secure authentication & validation",
      "Role-based access control",
      "MySQL query optimization",
      "Scalable business logic",
    ],
    color: "#f97316",
    icon: "🍽️",
  },
  {
    title: "Kuza – Business Website",
    link: "https://www.kuza.co.in/",
    overview: "A responsive business website showcasing company services and solutions, built with a focus on performance, SEO, usability, and cross-browser compatibility.",
    features: [
      "Responsive Design", "SEO Optimization", "Service Showcase", "Cross-Browser Compatibility",
    ],
    contributions: [
      "Responsive front-end development",
      "SEO optimization",
      "Performance tuning",
      "Cross-browser testing & fixes",
    ],
    color: "#22d3ee",
    icon: "🌐",
  },
  {
    title: "Huebond – Business Website",
    link: "https://www.huebond.com/",
    overview: "A modern responsive corporate website showcasing products and services, focused on performance, user experience, and optimized web architecture.",
    features: [
      "Responsive Design", "Product Showcase", "Performance Optimization", "Modern UI/UX",
    ],
    contributions: [
      "Modern responsive front-end development",
      "Performance & UX optimization",
      "Optimized web architecture",
    ],
    color: "#a78bfa",
    icon: "⚡",
  },
];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const color = project.color;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
      className="group relative"
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${color}, transparent)` }}
      />

      {/* Card */}
      <div
        className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl"
        style={{ boxShadow: `0 0 0 0 ${color}00` }}
      >
        {/* Top accent bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}40, transparent)` }}
        />

        {/* Card body */}
        <div className="p-5 md:p-6 lg:p-7">
          {/* Header row: icon + number + visit link */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* Icon circle */}
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl text-xl flex-shrink-0"
                style={{ backgroundColor: `${color}1a`, border: `1px solid ${color}30` }}
              >
                {project.icon}
              </div>
              {/* Project number */}
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                  Project {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color }}
                >
                </span>
              </div>
            </div>

            {/* Visit site link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: `${color}40`,
                  color: color,
                  backgroundColor: `${color}0d`,
                }}
              >
                <span className="hidden sm:inline">Visit Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg font-bold text-white leading-snug mb-2 group-hover:text-white">
            {project.title}
          </h3>

          {/* Overview */}
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            {project.overview}
          </p>

          {/* Features */}
          <div className="mb-5">
            <div className="flex items-center gap-1.5 mb-2.5">
              <Layers className="w-3.5 h-3.5" style={{ color }} />
              <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color }}>
                Key Features
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-[11px] md:text-xs rounded-md bg-white/5 border border-white/10 text-gray-300 transition-colors duration-200 hover:border-white/20"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Contributions - expandable with read more */}
          <div>
            <div className="flex items-center gap-1.5 mb-2.5">
              <Code2 className="w-3.5 h-3.5" style={{ color }} />
              <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color }}>
                My Contributions
              </span>
              <span className="text-[10px] text-gray-500 ml-1">
                ({project.contributions.length})
              </span>
            </div>

            {/* Collapsed: show first 4 items */}
            <div className="grid grid-cols-1 gap-x-3 gap-y-1">
              {project.contributions.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 transition-all duration-300 ${
                    expanded || idx < 4
                      ? "opacity-100 max-h-20"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs text-gray-400 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Read more / Show less button */}
            {project.contributions.length > 4 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 mt-3 text-xs font-medium transition-colors duration-200 cursor-pointer"
                style={{ color }}
              >
                {expanded ? (
                  <>
                    Show Less
                    <ChevronDown className="w-3.5 h-3.5 rotate-180" />
                  </>
                ) : (
                  <>
                    Read More ({project.contributions.length - 4} more)
                    <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#04081A] text-white py-12 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-400 font-medium">6 Live Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Production-grade applications built with PHP, Laravel, MySQL & JavaScript
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
