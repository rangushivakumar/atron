import { ArrowUpRight } from "lucide-react";
import Container from "../components/Container";
import { siteConfig } from "../config/site";

export default function CTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <Container>
        <div className="cta-panel">
          <span className="cta-orb cta-orb-teal" /><span className="cta-orb cta-orb-blue" />
          <p className="eyebrow"><span className="eyebrow-dot" /> A good place to start</p>
          <h2 id="cta-title">Have a digital product in mind?</h2>
          <p className="cta-copy">Let's turn the idea into something your customers can actually use.</p>
          <a className="button button-primary" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book a Call <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a className="cta-email" href={`mailto:${siteConfig.email}`}>Prefer email? {siteConfig.email}</a>
        </div>
      </Container>
    </section>
  );
}
