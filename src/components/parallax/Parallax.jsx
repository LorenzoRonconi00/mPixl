import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Portfolio from "../portfolio/Portfolio";

const Parallax = ({
    type
}) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0,1], ["0%", "300%"]);
    const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);

    return ( 
        <div
        ref={ref}
        className="parallax" 
        style={{background: type === "servizi" 
            ? "linear-gradient(180deg, #0C0C1F, #0C0C1F)" 
            : "linear-gradient(180deg, #0C0C1F, #505064)"
        }}
        >
            <motion.h1 style={{y: yText}}>
                {type === "servizi" ? "Cosa facciamo" : "Cosa abbiamo realizzato"}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="stars" style={{x: yBg}}></motion.div>
        </div>
     );
}
 
export default Parallax;