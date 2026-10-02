import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import { projects } from "./data/projects";
import "./styles/variables.css";
import "./styles/globals.css";

function RouteEffects() {
  const location = useLocation();
  useEffect(() => {
    const projectSlug = location.pathname.startsWith("/work/")
      ? location.pathname.slice("/work/".length)
      : null;
    const project = projectSlug ? projects.find((item) => item.slug === projectSlug) : null;
    const pageTitle = location.pathname === "/work"
      ? "Work"
      : location.pathname === "/about"
        ? "About"
        : projectSlug
          ? (project?.title || "Case Study")
          : null;

    document.title = pageTitle
      ? pageTitle + " \u2014 Atron Technologies"
      : "Atron Technologies \u2014 Digital Products for Growing Businesses";

    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
      } else if (location.pathname !== "/") {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <RouteEffects />
    </BrowserRouter>
  );
}
