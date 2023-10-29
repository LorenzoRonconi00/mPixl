import "./hero.scss";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData1 from "../../animation_lo7pktqf.json";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Benvenuto in mPixl!</motion.h2>
          <motion.h1 variants={textVariants}>
            Il tuo Sito in pochi click
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a href="#Progetti" variants={textVariants}>
              I nostri progetti
            </motion.a>
            <motion.a
              href="#Contatti"
              style={{
                background: "white",
                color: "black",
                transition: "background 0.5s",
              }}
              variants={textVariants}
              whileHover={{
                background: "aqua",
                transition: { duration: 0.5 },
              }}
            >
              Scrivici
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        Design Develop Imagine Animate
      </motion.div>
    </div>
  );
};

export default Hero;
