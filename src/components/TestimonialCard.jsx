export default function TestimonialCard({ testimonial }) {
  return <figure className="testimonial-card">
    <blockquote>{testimonial.quote}</blockquote>
    <figcaption><strong>{testimonial.name}</strong><span>{[testimonial.role, testimonial.company].filter(Boolean).join(", ")}</span></figcaption>
  </figure>;
}
