import { ArrowUpRight } from "lucide-react";
import Container from "../components/Container";
import { siteConfig } from "../config/site";
export default function CTA() {
  return <section className="cta-section" id="contact" aria-labelledby="cta-title"><Container><div className="cta-panel">
    <p className="eyebrow">Start a conversation</p><h2 id="cta-title">Let's build something that moves your business forward.</h2>
    <p className="cta-copy">Tell us what you're trying to build, improve or automate. We'll help you figure out the right next step.</p>
    <div className="cta-actions"><a className="button button-primary" href={"mailto:" + siteConfig.email}>Start a Project <ArrowUpRight size={16} aria-hidden="true" /></a><a className="button button-secondary" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book a Call <ArrowUpRight size={16} aria-hidden="true" /></a></div>
  </div></Container></section>;
}
