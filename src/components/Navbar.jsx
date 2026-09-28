import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "../config/site";
const links = [{ label: "Work", href: "/work" }, { label: "Services", href: "/#services" }, { label: "About", href: "/about" }, { label: "Contact", href: "/#contact" }];
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <header className="nav-shell"><nav className="navbar container" aria-label="Main navigation">
    <a className="brand" href="/" onClick={closeMenu} aria-label="Atron Technologies home"><span className="brand-mark" aria-hidden="true">A</span><span className="brand-name">Atron <span>Technologies</span></span></a>
    <div className="nav-links">{links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}</div>
    <a className="nav-book" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book a Call <ArrowUpRight size={15} aria-hidden="true" /></a>
    <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
  </nav><div id="mobile-navigation" className="mobile-nav" hidden={!menuOpen}>{links.map((link) => <a key={link.label} href={link.href} onClick={closeMenu}>{link.label}</a>)}<a className="mobile-book" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Book a Call <ArrowUpRight size={16} aria-hidden="true" /></a></div></header>;
}
