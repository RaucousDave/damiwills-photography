import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="min-h-screen bg-primary px-8">
      {" "}
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
