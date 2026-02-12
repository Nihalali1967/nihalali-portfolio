import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitles = {
  "/": "Nihal Ali | Best PHP Laravel Developer | Senior Full Stack Developer | Freelance Web Developer Kerala",
  "/skills": "Skills - Nihal Ali | PHP, Laravel, MySQL, React | Best Full Stack Developer Kerala",
  "/experience": "Experience - Nihal Ali | Senior PHP Laravel Developer | 3+ Years Professional Experience",
  "/education": "Education - Nihal Ali | BSc Computer Science | PHP Laravel Developer Kerala",
  "/projects": "Projects - Nihal Ali | Laravel Web Applications | Finkey, SkyERP, Wasla Pro, Dhababbay Resorts",
  "/blog": "Blog & Gallery - Nihal Ali | Best PHP Laravel Developer Kerala India",
  "/contact": "Contact Nihal Ali | Hire Best Freelance PHP Laravel Developer Kerala India",
};

const routeDescriptions = {
  "/": "Nihal Ali — Best PHP Developer & Senior Laravel Developer in Kerala, India. Expert in full stack web development, RESTful APIs, payment gateway integration & scalable backend solutions.",
  "/skills": "Explore the technical skills of Nihal Ali — PHP, Laravel, MySQL, PostgreSQL, React, JavaScript, Tailwind CSS, Microsoft Azure. Best full stack developer in Kerala.",
  "/experience": "Professional experience of Nihal Ali — Senior PHP Laravel Developer with 3+ years building fintech apps, ERP systems, and enterprise web applications.",
  "/projects": "View projects by Nihal Ali — Finkey HR System, SkyERP Accounting Software, Wasla Pro NFC Platform, Dhababbay Resorts Booking System. Built with PHP Laravel.",
  "/contact": "Hire Nihal Ali — Best freelance PHP Laravel developer in Kerala, India. Available for web development, API integration, and enterprise projects worldwide.",
};

export default function SEOHead() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    document.title = routeTitles[path] || routeTitles["/"];

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && routeDescriptions[path]) {
      descMeta.setAttribute("content", routeDescriptions[path]);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", routeTitles[path] || routeTitles["/"]);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && routeDescriptions[path]) {
      ogDesc.setAttribute("content", routeDescriptions[path]);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", `https://nihalali-portfolio.vercel.app${path}`);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `https://nihalali-portfolio.vercel.app${path}`);
    }
  }, [location.pathname]);

  return null;
}
