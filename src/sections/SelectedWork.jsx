import { ArrowRight } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { Link } from "../components/RouteLink";
import { projects } from "../data/projects";
export default function SelectedWork() {
  return <section className="section selected-work" id="work"><Container>
    <div className="work-heading-row"><SectionHeading title="Selected Work" description="A look at some of the digital products and experiences we've helped build." /><Link className="text-link work-all-link" to="/work">View All Work <ArrowRight size={16} aria-hidden="true" /></Link></div>
    <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}</div>
  </Container></section>;
}
