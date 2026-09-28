import { Compass, MessageCircle, ShieldCheck, TrendingUp } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
const principles = [
  { icon: Compass, title: "Business-first", text: "We focus on what the product needs to achieve, not just the technology behind it." },
  { icon: ShieldCheck, title: "Reliable engineering", text: "Clean, maintainable software built with long-term reliability in mind." },
  { icon: MessageCircle, title: "Clear communication", text: "Straightforward communication from the first conversation to launch." },
  { icon: TrendingUp, title: "Long-term thinking", text: "We build products that can evolve as your business grows." },
];
export default function WhyAtron() {
  return <section className="section why-section" id="about"><Container><div className="why-heading"><SectionHeading label="Why Atron" title="A partner for the next step in your business." /><p>Atron Technologies helps businesses turn ideas, outdated systems and operational challenges into modern digital products.</p></div><div className="principles-grid">{principles.map(({ icon: Icon, title, text }) => <article className="principle-card" key={title}><Icon size={19} strokeWidth={1.7} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></Container></section>;
}
