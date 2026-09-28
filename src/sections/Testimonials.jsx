import { testimonials } from "../data/testimonials";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import TestimonialCard from "../components/TestimonialCard";
export default function Testimonials() {
  if (!testimonials.length) return null;
  return <section className="section testimonials-section" aria-label="What clients say"><Container><SectionHeading label="What clients say" title="Good work is a conversation." /><div className="testimonials-grid">{testimonials.map((item, index) => <TestimonialCard key={item.name || index} testimonial={item} />)}</div></Container></section>;
}
