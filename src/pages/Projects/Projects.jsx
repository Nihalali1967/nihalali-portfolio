import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ExternalLink } from "lucide-react";

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
  },
];


export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                title={project.title}
                link={project.link}
                overview={project.overview}
                features={project.features}
                contributions={project.contributions}
                color={project.color}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  link,
  overview,
  features,
  contributions,
  color,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={container}
      className={`flex items-center justify-center ${
        isMobile ? 'py-4' : 'h-screen sticky top-0'
      } project-container`}
    >
      <motion.div
        style={
          isMobile
            ? {}
            : {
                scale,
                top: `calc(-5vh + ${i * 25}px)`,
                transform: `scale(var(--project-scale, 1))`,
                marginTop: "var(--project-margin, 0)",
              }
        }
        className={`relative h-auto w-[92%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card ${
          isMobile ? '' : '-top-[25%]'
        }`}
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <div className="w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-xl p-6 md:p-10 lg:p-12 max-h-[90vh] overflow-y-auto">
          {/* Project number badge */}
          <div className="inline-block bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4">
            Project {i + 1}
          </div>

          {/* Accent line */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            <div className="h-[1px] w-16 md:w-24" style={{ backgroundColor: color, opacity: 0.4 }} />
          </div>

          {/* Title */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white">
              {title}
            </h2>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 inline-flex items-center gap-1.5 text-xs md:text-sm font-medium px-3 py-1.5 rounded-full border border-white/20 text-gray-200 hover:text-white hover:border-white/40 transition-colors whitespace-nowrap cursor-pointer"
                style={{ backgroundColor: `${color}1a` }}
              >
                Visit Site
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Overview */}
          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
            {overview}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider mb-3" style={{ color }}>
              Platform Features
            </h3>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Contributions */}
          <div>
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider mb-3" style={{ color }}>
              My Backend Contributions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
              {contributions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                  <span className="text-xs md:text-sm text-gray-400 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  overview: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  contributions: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
};
