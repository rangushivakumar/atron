import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import { projects } from "./data/projects";
import "./styles/variables.css";
import "./styles/globals.css";

function getPage(pathname) {
  if (pathname === "/work") return { title: "Work", component: <Work /> };
  if (pathname.startsWith("/work/")) {
    const slug = pathname.slice("/work/".length);
    const project = projects.find((item) => item.slug === slug);
    return { title: project ? project.title : "Case Study", component: <CaseStudy slug={slug} /> };
  }
  if (pathname === "/about") return { title: "About", component: <About /> };
  return { title: "Home", component: <Home /> };
}
export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const page = getPage(pathname);
  useEffect(() => {
    const onNavigate = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onNavigate);
    document.title = page.title === "Home" ? "Atron Technologies \u2014 Digital Products for Growing Businesses" : page.title + " \u2014 Atron Technologies";
    if (window.location.hash) {
      window.requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
    }
    return () => window.removeEventListener("popstate", onNavigate);
  }, [page.title]);
  return <><Navbar /><div key={pathname}>{page.component}</div><Footer /></>;
}
