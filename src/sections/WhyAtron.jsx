import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

const principles = [
  ["01", "Business-first thinking", "We start with the problem, not the technology."],
  ["02", "Clean, scalable engineering", "We build systems that are easier to maintain, extend and operate."],
  ["03", "Clear communication", "You always know what is being built, why it matters and what comes next."],
  ["04", "Built for real users", "Every decision is made around usability, performance and business outcomes."],
];

export default function WhyAtron() {
  return (
    <section className="section why-section" id="why-atron">
      <Container className="why-layout">
        <div className="why-intro">
          <SectionHeading label="Why Atron" title="Technology is only useful when it moves the business forward." />
          <p className="why-note">Good digital products make meaningful work easier for both customers and the teams behind them.</p>
        </div>
        <div className="principles-list">
          {principles.map(([number, title, description]) => (
            <article className="principle-row" key={number}>
              <span className="principle-number">{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
