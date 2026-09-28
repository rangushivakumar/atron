import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
export default function Services() {
  return <section className="section services-section" id="services"><Container>
    <SectionHeading label="What we build" title="The right digital product for your next stage." description="From a clearer online presence to software that makes day-to-day work easier." />
    <div className="services-grid">{services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}</div>
    <p className="services-note">Designed around your customers, operations and the way your business needs to grow.</p>
  </Container></section>;
}
