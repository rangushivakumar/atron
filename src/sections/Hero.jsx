import { ArrowDownRight, ArrowUpRight, Compass, Layers3, Code2, TrendingUp } from "lucide-react";
import { siteConfig } from "../config/site";

const stages = [
  { icon: Compass, label: "Strategy", className: "stage-strategy" },
  { icon: Layers3, label: "Design", className: "stage-design" },
  { icon: Code2, label: "Development", className: "stage-development" },
  { icon: TrendingUp, label: "Growth", className: "stage-growth" },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> Digital Product Development</p>
        <h1 id="hero-title">We build digital products <span>that help businesses grow.</span></h1>
        <p className="hero-description">Modern websites, custom applications and mobile experiences designed to turn ideas into reliable digital products.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book a Call <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a className="button button-secondary" href="#services">Explore Our Services <ArrowDownRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="hero-note"><span className="hero-note-line" /> From first idea to product in the hands of your customers</div>
      </div>
      <div className="hero-visual" role="img" aria-label="A connected path from strategy and design through development to growth">
        <div className="visual-orbit orbit-outer" /><div className="visual-orbit orbit-inner" />
        <div className="visual-core"><span className="core-mark">A</span><span>Digital product</span></div>
        <div className="visual-path" />
        {stages.map(({ icon: Icon, label, className }, index) => (
          <div className={`visual-stage ${className}`} key={label}>
            <span className="stage-icon"><Icon size={17} strokeWidth={1.7} aria-hidden="true" /></span>
            <span className="stage-label">{label}</span><span className="stage-index">0{index + 1}</span>
          </div>
        ))}
        <span className="visual-caption">A clear path from idea to impact</span><span className="visual-glow" />
      </div>
    </section>
  );
}
