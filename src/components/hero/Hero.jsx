import { motion } from "framer-motion";
import Lottie from "lottie-react";

import scrollJson from "./scrollanimation.json"

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
      duration: 40,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero h-screen w-full overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132] ">
      <div className="wrapper flex flex-col items-center justify-center align-middle h-full">
        <motion.div
          className="flex flex-col items-center"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="px-5 md:text-md leading-7 text-3xl text-[#cf8bea] tracking-wider text-center"
            variants={textVariants}
          >
            Benvenuto in mPixl!
          </motion.h2>
          <motion.h1
            className="px-5 mt-10 text-6xl text-center"
            variants={textVariants}
          >
            Il tuo Sito in pochi click.
          </motion.h1>
          <div className="w-full flex flex-col items-center">
            <motion.div
              variants={textVariants}
              class=" w-fit buttons flex gap-4 mt-10 flex-col md:flex-row justify-center "
            >
              <motion.a
                href="#Progetti"
                variants={textVariants}
                className=" border border-white bg-transparent hover:border-[aqua] duration-700 text-white font-bold py-5 px-8 rounded-lg"
              >
                I nostri progetti
              </motion.a>
              <motion.a
                href="#Contatti"
                variants={textVariants}
                className=" border border-white bg-white text-black font-bold py-5 px-8 rounded-lg hover:bg-[aqua] duration-700 text-center"
                // whileHover={{
                //   background: "aqua",
                //   transition: { duration: 0.5 },
                // }}
              >
                Scrivici
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute bottom-5">
          
          <Lottie className="h-20"
            loop
            play
            animationData={scrollJson}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
