import "./services.scss";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../animation_lo774do5.json";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services h-screen"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >

      <motion.div className="titleContainer pt-20" variants={variants}>
        <div className="title">
          <h1>
            <b>Sviluppo</b> e
            <b> Design Web</b>
          </h1>
        </div>
        <div className="title">
          <h1>
            per il tuo{" "}
            <b>Successo.</b>
          </h1>
          <a href="#Progetti">COSA REALIZZIAMO</a>
        </div>
      </motion.div>
      <motion.div className="listContainer px-10 lg:px-16 pb-10 grid xl:grid-cols-4 grid-cols-2" variants={variants}>
        <div
          className="box"
        >
          <h2>Design</h2>
          <p>
            Rendi unici i tuoi siti web, con un design personalizzato che
            cattura l'essenza del tuo marchio e affascina i visitatori.
          </p>
          <button>Vai</button>
        </div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Development</h2>
          <p>
            Nel processo di sviluppo del tuo sito web, creiamo soluzioni
            personalizzate per massimizzare la tua presenza online.
          </p>
          <button>Vai</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Innovazione</h2>
          <p>
            Sfruttiamo tecnologie avanzate e framework innovativi per offrire
            esperienze web coinvolgenti e all'avanguardia.
          </p>
          <button>Vai</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Manutenibilitá</h2>
          <p>
            Garantiamo assistenza tempestiva per aggiornamenti, backup e
            risoluzione di problemi, assicurando un funzionamento ottimale.
          </p>
          <button>Vai</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
