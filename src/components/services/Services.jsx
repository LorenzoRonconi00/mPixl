import "./services.scss";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../animation_lo774do5.json"
import { useRef } from "react";

const variants = {
    initial: {
        x: -500,
        y:  100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    } 
}

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin: "-100px"})

    return ( 
        <motion.div className="services" variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    Creiamo siti web unici e accattivanti
                    <br /> per far crescere il tuo business
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <Lottie 
                    style={{width: "500px", height: "200px", borderRadius: "50px", 
                    objectFit: "cover"}}
                    animationData={animationData}/>
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>Sviluppo</motion.b> e 
                        <motion.b whileHover={{color: "orange"}}> Design Web</motion.b>
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        per il tuo <motion.b whileHover={{color: "orange"}}>Successo.</motion.b>
                    </h1>
                    <a href="#Progetti">COSA REALIZZIAMO</a>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>
                        Design
                    </h2>
                    <p>
                        Rendi unici i tuoi siti web, con un design personalizzato che 
                        cattura l'essenza del tuo marchio e affascina i visitatori.
                    </p>
                    <button>Vai</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>
                        Development
                    </h2>
                    <p>
                        Nel processo di sviluppo del tuo sito web, creiamo soluzioni 
                        personalizzate per massimizzare la tua presenza online.
                    </p>
                    <button>Vai</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>
                        Innovazione
                    </h2>
                    <p>
                    Sfruttiamo tecnologie avanzate e framework innovativi
                    per offrire esperienze web coinvolgenti e all'avanguardia.
                    </p>
                    <button>Vai</button>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>
                        Manutenibilitá
                    </h2>
                    <p>
                    Garantiamo assistenza tempestiva per aggiornamenti, 
                    backup e risoluzione di problemi, assicurando un funzionamento ottimale.
                    </p>
                    <button>Vai</button>
                </motion.div>
            </motion.div>
        </motion.div>
     );
}
 
export default Services;