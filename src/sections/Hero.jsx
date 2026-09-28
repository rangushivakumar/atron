import { ArrowDownRight, ArrowUpRight, Layers3 } from "lucide-react";
import { siteConfig } from "../config/site";
import { Link } from "../components/RouteLink";
export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title"><div className="hero-copy">
    <p className="eyebrow"><span className="eyebrow-dot" />Digital Products for Growing Businesses</p>
    <h1 id="hero-title">We build digital experiences that <span>move your business forward.</span></h1>
    <p className="hero-description">Websites, web applications and mobile products designed to help businesses attract customers, automate operations and grow.</p>
    <div className="hero-actions"><a className="button button-primary" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book a Call <ArrowUpRight size={16} aria-hidden="true" /></a><Link className="button button-secondary" to="/work">View Our Work <ArrowDownRight size={16} aria-hidden="true" /></Link></div>
  </div><div className="hero-visual" aria-hidden="true"><div className="hero-visual-glow" /><div className="hero-product-frame">
    <div className="hero-frame-top"><span className="hero-frame-mark"><Layers3 size={15} /></span><span>Digital product</span><i /><i /><i /></div>
    <div className="hero-frame-body"><div className="hero-frame-sidebar"><b /><span /><span /><span /><span /></div><div className="hero-frame-main"><span className="frame-caption">A clearer way forward</span><strong>Make room<br />for what's next.</strong><span className="frame-rule" /><div className="frame-blocks"><i /><i /><i /></div></div></div>
    <div className="hero-frame-foot"><span>Strategy</span><i /><span>Design</span><i /><span>Product</span><i /><span>Growth</span></div>
  </div><div className="hero-visual-note"><span /> Thoughtful digital experiences</div></div></section>;
}
