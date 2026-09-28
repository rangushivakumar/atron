import { ArrowUpRight, Mail } from "lucide-react";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { siteConfig } from "../config/site";

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const project = formData.get("project")?.toString().trim() ?? "";
  const subject = encodeURIComponent(`Project enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nWhat I want to build:\n${project}`);
  window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <Container className="contact-layout">
        <div className="contact-copy">
          <SectionHeading label="Start a project" title="Let's build something useful." description="Tell us what you're trying to build, improve or automate." />
          <a className="contact-email" href={`mailto:${siteConfig.email}`}><Mail size={17} aria-hidden="true" />{siteConfig.email}<ArrowUpRight size={14} aria-hidden="true" /></a>
          <a className="button button-secondary contact-book" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book a Call <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name<input name="name" autoComplete="name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          </div>
          <label>Company <span className="optional-label">Optional</span><input name="company" autoComplete="organization" /></label>
          <label>What do you want to build?<textarea name="project" rows="4" required /></label>
          <button className="button button-primary form-submit" type="submit">Prepare email <ArrowUpRight size={16} aria-hidden="true" /></button>
          <p className="form-note">This opens a message in your email app; nothing is sent from this website.</p>
        </form>
      </Container>
    </section>
  );
}
