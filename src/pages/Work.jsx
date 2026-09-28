import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
export default function Work() {
  return <main className="inner-page work-page"><Container><SectionHeading label="Work" title="A selection of digital products, platforms and websites we've helped bring to life." description="Browse the work and open a case study to learn more." /><div className="projects-grid work-page-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></Container></main>;
}
