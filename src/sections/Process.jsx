import { ArrowRight } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

const steps = [
  ["01", "Discover", "Understand the business, users, goals and requirements."],
  ["02", "Design", "Turn requirements into a clear product and user experience."],
  ["03", "Build", "Develop the product using modern, maintainable technology."],
  ["04", "Launch & Improve", "Deploy, measure, refine and continue improving the product."],
];

export default function Process() {
  return (
    <section className="section process-section" id="process">
      <Container>
        <SectionHeading label="How we work" title="From idea to launch, without the unnecessary complexity." />
        <div className="process-track">
          {steps.map(([number, title, description], index) => (
            <article className="process-step" key={number}>
              <div className="process-marker"><span>{number}</span>{index < steps.length - 1 && <ArrowRight size={14} aria-hidden="true" />}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
