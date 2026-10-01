import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/site";
import { Link } from "../components/RouteLink";
import HeroGalaxy from "../components/hero/HeroGalaxy";

export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow"><span className="eyebrow-dot" />Digital Products for Growing Businesses</p>
      <h1 id="hero-title">We build digital experiences that <span>move your business forward.</span></h1>
      <p className="hero-description">Websites, web applications and mobile products designed to help businesses attract customers, automate operations and grow.</p>
      <div className="hero-actions">
        <a className="button button-primary" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book a Call <ArrowUpRight size={16} aria-hidden="true" /></a>
        <Link className="button button-secondary" to="/work">View Our Work <ArrowDownRight size={16} aria-hidden="true" /></Link>
      </div>
    </div>
    <div className="hero-visual"><HeroGalaxy /></div>
  </section>;
}
