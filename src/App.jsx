import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Problems from "./sections/Problems";
import Services from "./sections/Services";
import WhyAtron from "./sections/WhyAtron";
import Process from "./sections/Process";
import Proof from "./sections/Proof";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import "./styles/variables.css";
import "./styles/globals.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Problems />
        <Services />
        <WhyAtron />
        <Process />
        <Proof />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
