import { ArrowUpRight } from "lucide-react";
import Container from "./Container";
import { siteConfig } from "../config/site";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Atron", href: "#why-atron" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#top" aria-label="Atron Technologies home">
              <span className="brand-mark" aria-hidden="true">A</span>
              <span className="brand-name">Atron <span>Technologies</span></span>
            </a>
            <p>We build digital products that help businesses grow.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <div className="footer-contact">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight size={14} aria-hidden="true" /></a>
            <a className="footer-book" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book a Call <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 {siteConfig.name}. All rights reserved.</span><a href="#top">Back to top ↑</a></div>
      </Container>
    </footer>
  );
}
