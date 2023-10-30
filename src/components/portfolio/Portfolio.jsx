import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "SNL Shipping",
        img: "/snlshipping.png",
        desc: "Sito web per azienda di trasporti",
        url: "http://snlshipping.com/"
    },
    {
        id: 2,
        title: "Hotel Marittima",
        img: "/marittima.png",
        desc: "Sito web per hotel",
        url: "https://marittima.vercel.app/"
    },
    {
        id: 3,
        title: "MecSpare",
        img: "/mecspare.png",
        desc: "Sito web per rivendita di ricambi online",
        url: "https://mecspare2.vercel.app/"
    },
];

const Single = ({
    item,
    id
}) => {


    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
    });

    const y = useTransform(scrollYProgress, [0,1], [-100,100]);

    const handleButton = () => {
        window.open(item.url, "_blank");
    }

    return (
        <section id={id}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={handleButton}>Visita</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = ({
    id
}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return ( 
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Progetti realizzati</h1>
                <motion.div 
                style={{scaleX: scaleX}}
                className="progressBar">
                </motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} id={id}/>
            ))}
        </div>
     );
}
 
export default Portfolio;