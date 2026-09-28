import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

const problems = [
  ["01", "Outdated online presence", "Businesses lose credibility when their digital presence no longer represents the quality of what they offer."],
  ["02", "Manual processes", "Repetitive work consumes time that could be spent growing the business."],
  ["03", "Disconnected systems", "When tools do not communicate, teams end up working around technology instead of using it."],
  ["04", "Products that don't scale", "A solution that works today can become a limitation as customers and operations grow."],
];

export default function Problems() {
  return (
    <section className="section problems-section" id="problems">
      <Container>
        <SectionHeading label="The problem" title="Good businesses can still be held back by outdated technology." />
        <div className="problem-layout">
          <p className="problem-aside">The right digital foundations give good ideas room to grow.</p>
          <div className="problem-list">
            {problems.map(([number, title, description]) => (
              <article className="problem-row" key={number}>
                <span className="problem-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
            <p className="problem-close">Your technology should make the business easier to run <span>— not harder.</span></p>
          </div>
        </div>
      </Container>
    </section>
  );
}
