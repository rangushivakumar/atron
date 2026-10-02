import { ArrowUpRight } from "lucide-react";
import { Link } from "./RouteLink";

export function ProjectVisual({ project }) {
  return (
    <div className={"project-visual art-" + project.visual} aria-label={project.title + " website preview"} role="img">
      <div className="mock-browser" aria-hidden="true">
        <div className="mock-browser-bar"><i /><i /><i /><span>{project.title}</span></div>
        <div className="mock-content">
          <div className="mock-copy"><span className="mock-kicker">{project.category}</span><strong>{project.title}</strong><em>Digital products, made useful.</em><b /></div>
          <div className="mock-shape mock-shape-one" /><div className="mock-shape mock-shape-two" />
          <div className="mock-panel"><span /><span /><span /></div>
        </div>
        <span className="mock-caption">Project preview</span>
      </div>
      {project.imageAvailable && project.image && (
        <img className="project-image" src={project.image} alt={project.title + " website preview"} onError={(event) => event.currentTarget.remove()} />
      )}
    </div>
  );
}

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={"project-card" + (featured ? " project-card-featured" : "")}>
      <Link className="project-visual-link" to={"/work/" + project.slug} aria-label={"View " + project.title + " case study"}>
        <ProjectVisual project={project} />
        <span className="project-visual-arrow"><ArrowUpRight size={19} aria-hidden="true" /></span>
      </Link>
      <div className="project-meta"><span>{project.category}</span><span className="project-line" /></div>
      <h3><Link to={"/work/" + project.slug}>{project.title}</Link></h3>
      <p>{project.description}</p>
      <Link className="project-link" to={"/work/" + project.slug}>View Case Study <ArrowUpRight size={15} aria-hidden="true" /></Link>
    </article>
  );
}
