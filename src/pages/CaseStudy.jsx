import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "../components/Container";
import { Link } from "../components/RouteLink";
import { ProjectVisual } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { siteConfig } from "../config/site";
export default function CaseStudy({ slug }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <main className="inner-page"><Container><h1>We couldn't find that case study.</h1><Link className="text-link" to="/work"><ArrowLeft size={16} /> Back to Work</Link></Container></main>;
  return <main className="inner-page case-study-page"><Container>
    <Link className="back-link" to="/work"><ArrowLeft size={15} /> All Work</Link><p className="eyebrow case-category">{project.category}</p>
    <h1>{project.title}</h1><p className="case-summary">{project.description}</p>
    <div className="case-hero-visual"><ProjectVisual project={project} /></div>
    <div className="case-details"><section><h2>Overview</h2><p>{project.overview}</p></section><section><h2>What We Built</h2><ul>{project.whatBuilt.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Key Features</h2><ul>{project.keyFeatures.map((item) => <li key={item}>{item}</li>)}</ul></section>
      {project.technology.length > 0 && <section><h2>Technology</h2><ul>{project.technology.map((item) => <li key={item}>{item}</li>)}</ul></section>}
      {project.gallery.length > 0 && <section className="case-gallery"><h2>Project Gallery</h2><div>{project.gallery.map((image) => <img key={image.src} src={image.src} alt={image.alt} />)}</div></section>}
    </div><section className="case-cta"><h2>Have a similar product in mind?</h2><a className="button button-primary" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book a Call <ArrowUpRight size={16} /></a></section>
  </Container></main>;
}
