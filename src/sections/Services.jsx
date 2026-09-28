import { ArrowUpRight, Globe2, Layers3, Smartphone, Server } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import GlassCard from "../components/GlassCard";
import { siteConfig } from "../config/site";

const services = [
  { icon: Globe2, number: "01", title: "Modern Websites", description: "High-performance websites designed to establish credibility, communicate value and convert visitors into customers.", tags: ["Responsive", "SEO-ready", "Performance", "Conversion"], className: "service-featured" },
  { icon: Layers3, number: "02", title: "Custom Web Applications", description: "Business platforms, customer portals and internal tools designed around the way your company actually works.", tags: ["Platforms", "Automation", "Portals", "Integrations"], className: "service-featured" },
  { icon: Smartphone, number: "03", title: "Mobile Applications", description: "Mobile experiences for businesses that need customers or teams to have powerful products in their hands.", tags: ["iOS", "Android", "React Native", "Real-time"], className: "service-mobile" },
  { icon: Server, number: "04", title: "Backend & API Development", description: "Reliable backend systems that connect products, users, data and third-party services.", tags: ["APIs", "Authentication", "Databases", "Integrations"], className: "service-support" },
];

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <Container>
        <SectionHeading label="What we build" title="Digital products built around your business." description="Choose the right starting point. We connect the pieces as your needs evolve." />
        <div className="services-grid">
          {services.map(({ icon: Icon, number, title, description, tags, className }) => (
            <GlassCard key={number} hover className={className}>
              <div className="service-topline"><span>{number}</span><Icon size={19} strokeWidth={1.65} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p className="service-description">{description}</p>
              <div className="service-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="service-link" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" aria-label={`Discuss ${title}`}>Discuss your project <ArrowUpRight size={15} aria-hidden="true" /></a>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
