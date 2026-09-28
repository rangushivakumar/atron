import { ArrowUpRight, Globe2, PanelsTopLeft, Smartphone, Workflow } from "lucide-react";
import GlassCard from "./GlassCard";
import { Link } from "./RouteLink";
const icons = { Globe2, PanelsTopLeft, Smartphone, Workflow };
export default function ServiceCard({ service, index }) {
  const Icon = icons[service.icon];
  return <GlassCard hover className="service-card">
    <div className="service-card-top"><span>0{index + 1}</span><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></div>
    <h3>{service.title}</h3><p>{service.description}</p>
    <Link className="service-card-link" to="/#contact">Discuss your needs <ArrowUpRight size={15} aria-hidden="true" /></Link>
  </GlassCard>;
}
