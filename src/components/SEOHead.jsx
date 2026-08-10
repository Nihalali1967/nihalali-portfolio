import { useEffect } from "react";

const sectionTitles = {
  home: "Nihal Ali | Full Stack Developer | PHP Laravel Developer | Kerala India",
  skills: "Skills - Nihal Ali | PHP, Laravel, MySQL, PostgreSQL, Redis, Docker, Azure | Full Stack Developer Kerala",
  experience: "Experience - Nihal Ali | Full Stack Developer | PHP Laravel | Fintech, ERP, Enterprise",
  education: "Education - Nihal Ali | BSc Computer Science | University of Calicut | Kerala",
  projects: "Projects - Nihal Ali | Finkey HRMS, SkilzHub, ServeEazy, Dum Handi Biryani | Laravel Full Stack",
  contact: "Contact Nihal Ali | Hire Full Stack Developer & PHP Laravel Developer | Kerala India",
};

const sectionDescriptions = {
  home: "Nihal Ali — Full Stack PHP/Laravel Developer experienced in building scalable web applications for fintech, ERP, HRMS, and enterprise clients. Expert in Laravel, REST APIs, MySQL, JavaScript, React, and payment integrations.",
  skills: "Technical skills of Nihal Ali — PHP, Laravel, RESTful APIs, MySQL, PostgreSQL, Redis, Docker, CI/CD, Microsoft Azure, payment gateways, IoT integration, SOLID principles, and team mentoring.",
  experience: "Professional experience of Nihal Ali — Full Stack Developer building fintech apps, ERP systems, and enterprise applications. Full Stack Developer at Dfine Digital Solutions.",
  projects: "Key projects by Nihal Ali — Finkey HRMS & Workforce Management, SkilzHub Digital Learning Platform, ServeEazy Repair Shop Management, Dum Handi Biryani Restaurant Platform. Built with PHP Laravel.",
  contact: "Hire Nihal Ali — Full Stack Developer & PHP Laravel Developer in Kerala, India. Available for full stack roles, API architecture, and enterprise projects worldwide.",
};

export default function SEOHead() {
  useEffect(() => {
    const updateMeta = (sectionId) => {
      const title = sectionTitles[sectionId] || sectionTitles.home;
      const desc = sectionDescriptions[sectionId] || sectionDescriptions.home;

      document.title = title;

      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) descMeta.setAttribute("content", desc);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", title);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", desc);

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", `https://nihalali-portfolio.vercel.app/#${sectionId}`);

      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute("href", `https://nihalali-portfolio.vercel.app/#${sectionId}`);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      updateMeta(hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
}
