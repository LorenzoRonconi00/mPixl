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

const items = [
  {
    title: "Design",
    description:
      "Rendi unici i tuoi siti web, con un design personalizzato che cattura l'essenza del tuo marchio e affascina i visitatori.",
  },
  {
    title: "Development",
    description:
      "Nel processo di sviluppo del tuo sito web, creiamo soluzioni personalizzate per massimizzare la tua presenza online.",
  },
  {
    title: "Innovazione",
    description:
      "Sfruttiamo tecnologie avanzate e framework innovativi per offrire esperienze web coinvolgenti e all'avanguardia.",
  },
  {
    title: "Manutenibilitá",
    description:
      "Garantiamo assistenza tempestiva per aggiornamenti, backup e risoluzione di problemi, assicurando un funzionamento ottimale.",
  },
];

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services h-full bg-gradient-to-b from-[#111132] to-[#0c0c1d] flex flex-col items-center justify-center"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div
        className="titleContainer pt-24 text-center"
        variants={variants}
      >
        <div className="title mb-16 text-6xl font-thin">
          <h1>
            <b>Sviluppo</b> e<b> Design Web</b>
          </h1>
          per il tuo <b>Successo.</b>
        </div>
        <a
          className="bg-[#cf8bea] rounded-full py-5 px-6 text-black text-center text-2xl font-bold border-none transition-colors duration-500 hover:bg-[#e6a7ff]"
          href="#Progetti"
        >
          COSA REALIZZIAMO
        </a>
      </motion.div>
      <motion.div
        className="listContainer mt-24 px-10 lg:px-16 grid md:grid-cols-2 grid-cols-1 gap-5 max-w-6xl"
        variants={variants}
      >
        {items.map((item, index) => (
          <motion.div
            className="box hover:bg-white hover:text-black duration-700"
            key={index}
          >
            <h2 className=" font-bold text-4xl pb-8 text-center">{item.title}</h2>
            <p className="pb-5 text-xl text-center">{item.description}</p>
            <div className="w-full flex justify-center">
              <button className="bg-[#cf8bea] py-3 px-10 rounded-lg text-black font-bold hover:scale-125 duration-700">Vai</button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
