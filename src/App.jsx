
import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return <div>
    {/* <AnimatedCursor 
    innerSize={8}
    outerSize={35}
    innerScale={1}
    outerScale={2}
    outerAlpha={0}
    hasBlendMode={true}
    innerStyle={{
      backgroundColor: 'var(--cursor-color)'
    }}
    outerStyle={{
      border: '3px solid var(--cursor-color)'
    }}
    /> */}
    <section id="Home">
      <NavBar />
      <Hero />
    </section>
    <section id="Servizi"><Parallax type="servizi"/></section>
    <section><Services /></section>
    <section id="Progetti"><Parallax type="progetti"/></section>
    <Portfolio />
    <section id="Contatti"><Contact /></section>
  </div>;
};

export default App;
