import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Parallax from "../parallax/Parallax";
import "./parallax.scss";

export const cards = [
  {
    id: 1,
    title: "SNL Shipping",
    img: "/snlshipping.png",
    desc: "Sito web per azienda di trasporti",
    url: "http://snlshipping.com/",
  },
  {
    id: 2,
    title: "Hotel Marittima",
    img: "/marittima.png",
    desc: "Sito web per hotel",
    url: "https://marittima.vercel.app/",
  },
  {
    id: 3,
    title: "MecSpare",
    img: "/mecspare.png",
    desc: "Sito web per rivendita di ricambi online",
    url: "https://mecspare2.vercel.app/",
  },
];

const Portfolio = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-50%"]);

  return (
    
    <div ref={targetRef} className="relative h-[300vh] z-10 mt-52">
      <div className="sticky top-0 w-screen flex h-screen justify-center overflow-y-hidden parallax">
        <h1 className="absolute text-4xl font-bold">Progetti Realizzati</h1>
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
        
        <motion.div className="mountains pointer-events-none"></motion.div>
        <motion.div className="stars pointer-events-none" style={{ x: yBg, opacity: "20%" }}></motion.div>
      </div>
    </div>
   
  );
};

export const Card = ({ card }) => {
  return (
    <a
      href={card.url}
      key={card.id}
      className="group relative h-[350px] w-[750px] overflow-hidden bg-neutral-200 mt-96 cursor-pointer"
    >
      <div
        style={{
          backgroundImage: `url(${card.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end w-full">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-white backdrop-blur-sm m-auto px-10">
          {card.title}
        </p>
      </div>
    </a>
  );
};

export default Portfolio;
