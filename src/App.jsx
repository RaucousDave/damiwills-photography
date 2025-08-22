import { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // map section names to refs
  const sections = {
    hero: heroRef,
    about: aboutRef,
    gallery: galleryRef,
    services: servicesRef,
    contact: contactRef,
  };

  return (
    <div className="min-h-screen bg-primary px-8">
      <div ref={heroRef}>
        {/* Pass both scroll function + refs */}
        <Hero scroll={scrollToSection} sections={sections} />
      </div>
      <section className="min-h-screen py-12 mb-8" ref={aboutRef}>
        <About />
      </section>
      <section ref={galleryRef} className="min-h-full">
        <Gallery />
      </section>
      <section ref={servicesRef} className="py-12">
        <Services />
      </section>
      <section ref={contactRef} className="py-12">
        <Contact />
      </section>
    </div>
  );
};

export default App;
