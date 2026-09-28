import { ArrowUpRight } from "lucide-react";
import Container from "./Container";
import { Link } from "./RouteLink";
import { siteConfig } from "../config/site";
const links = [{ label: "Work", href: "/work" }, { label: "Services", href: "/#services" }, { label: "About", href: "/about" }, { label: "Contact", href: "/#contact" }];
export default function Footer() {
  return <footer className="site-footer"><Container><div className="footer-main"><div className="footer-brand"><Link className="brand" to="/" aria-label="Atron Technologies home"><span className="brand-mark" aria-hidden="true">A</span><span className="brand-name">Atron <span>Technologies</span></span></Link><p>Digital products for growing businesses.</p></div><nav className="footer-nav" aria-label="Footer navigation">{links.map((link) => <Link key={link.label} to={link.href}>{link.label}</Link>)}</nav><div className="footer-contact"><a href={"mailto:" + siteConfig.email}>{siteConfig.email}</a><a className="footer-book" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book a Call <ArrowUpRight size={14} aria-hidden="true" /></a></div></div><div className="footer-bottom"><span>&#169; 2026 {siteConfig.name}. All rights reserved.</span><Link to="/">Back to top</Link></div></Container></footer>;
}
