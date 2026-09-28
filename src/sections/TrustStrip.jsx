import Container from "../components/Container";
const capabilities = ["Web", "Mobile", "Custom Software", "Product Development"];
export default function TrustStrip() {
  return <section className="trust-strip" aria-label="Atron Technologies capabilities"><Container className="trust-strip-inner"><span className="trust-intro">From websites to custom platforms and mobile products</span><div className="trust-capabilities">{capabilities.map((item) => <span key={item}>{item}</span>)}</div></Container></section>;
}
