import { ArrowUpRight } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

const capabilities = [
  "Web Platforms", "Mobile Applications", "Backend Systems", "Payment Integrations",
  "Authentication", "Role-Based Systems", "Real-Time Applications", "Business Automation",
  "API Integrations", "Database Systems",
];

export default function Proof() {
  return (
    <section className="section proof-section" id="capabilities">
      <Container className="proof-layout">
        <div className="proof-intro">
          <SectionHeading label="Built for real-world work" title="From customer-facing experiences to the systems behind them." />
          <p>Practical capabilities for the products your customers use and the operations your teams rely on.</p>
        </div>
        <ul className="capability-list" aria-label="Atron Technologies capabilities">
          {capabilities.map((item, index) => (
            <li key={item}><span className="capability-index">{String(index + 1).padStart(2, "0")}</span>{item}<ArrowUpRight size={14} aria-hidden="true" /></li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
