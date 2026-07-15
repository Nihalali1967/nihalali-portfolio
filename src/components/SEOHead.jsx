import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitles = {
  "/": "Nihal Ali | Backend Engineer | PHP Laravel Developer | Kerala India",
  "/skills": "Skills - Nihal Ali | PHP, Laravel, MySQL, PostgreSQL, Redis, Docker, Azure | Backend Engineer Kerala",
  "/experience": "Experience - Nihal Ali | Backend Engineer | PHP Laravel | Fintech, ERP, Enterprise",
  "/education": "Education - Nihal Ali | BSc Computer Science | University of Calicut | Kerala",
  "/projects": "Projects - Nihal Ali | Finkey HRMS, SkilzHub, ServeEazy, Dhababbay Resorts | Laravel Backend",
  "/contact": "Contact Nihal Ali | Hire Backend Engineer & PHP Laravel Developer | Kerala India",
};

const routeDescriptions = {
  "/": "Nihal Ali — Backend Engineer architecting production-grade PHP/Laravel applications for fintech, ERP, and enterprise clients. Expert in REST API design, payment gateways, IoT integration, and database optimization.",
  "/skills": "Technical skills of Nihal Ali — PHP, Laravel, RESTful APIs, MySQL, PostgreSQL, Redis, Docker, CI/CD, Microsoft Azure, payment gateways, IoT integration, SOLID principles, and team mentoring.",
  "/experience": "Professional experience of Nihal Ali — Backend Engineer building fintech apps, ERP systems, and enterprise applications. Lead backend engineer at D-FINE DIGITAL LLP.",
  "/projects": "Key projects by Nihal Ali — Finkey HRMS & Workforce Management, SkilzHub Digital Learning Platform, ServeEazy Repair Shop Management, Dhababbay Resorts Booking System. Built with PHP Laravel.",
  "/contact": "Hire Nihal Ali — Backend Engineer & PHP Laravel Developer in Kerala, India. Available for senior backend roles, API architecture, and enterprise projects worldwide.",
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
