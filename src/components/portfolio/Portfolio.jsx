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
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    
    <div ref={targetRef} className="relative h-[300vh] z-10">
      <div className="sticky top-0 w-screen flex h-screen items-center overflow-hidden parallax">
        
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
        
        <motion.div className="mountains"></motion.div>
        <motion.div className="stars" style={{ x: yBg }}></motion.div>
      </div>
    </div>
   
  );
};

export const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[1000px] overflow-hidden bg-neutral-200"
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
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-sm m-auto px-10">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
