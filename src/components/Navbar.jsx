import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";

const links = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/#services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav-shell">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Atron Technologies home">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span className="brand-name">Atron <span>Technologies</span></span>
        </Link>
        <div className="nav-links">
          {links.map((link) => <Link key={link.label} to={link.to}>{link.label}</Link>)}
        </div>
        <a className="nav-book" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">
          Book a Call <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      <div id="mobile-navigation" className="mobile-nav" hidden={!menuOpen}>
        {links.map((link) => <Link key={link.label} to={link.to} onClick={closeMenu}>{link.label}</Link>)}
        <a className="mobile-book" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Book a Call <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
