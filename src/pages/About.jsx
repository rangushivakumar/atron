import { ArrowUpRight } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { Link } from "../components/RouteLink";
export default function About() {
  return <main className="inner-page about-page"><Container><SectionHeading label="About Atron" title="Digital products for growing businesses." description="Atron Technologies is a digital product development agency helping businesses turn ideas, outdated systems and operational challenges into modern digital products." /><div className="about-bottom"><p>We work across websites, web applications, mobile products and custom software, always grounded in what the business and its customers need.</p><Link className="text-link" to="/work">Explore our work <ArrowUpRight size={16} /></Link></div></Container></main>;
}
