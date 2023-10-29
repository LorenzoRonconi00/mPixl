import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <>
      <NavBar />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      <div className="scroll-container">
        <section id="Home" className="scroll-item">
          <Hero />
        </section>
        <section id="Servizi" className="scroll-item">
          <Parallax type="servizi" />
        </section>
        <section>
          <Services />
        </section>
        <section id="Progetti" className="scroll-item">
          <Parallax type="progetti" />
        </section>
        <Portfolio />
        <section id="Contatti" className="scroll-item">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default App;
