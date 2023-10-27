import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";

const NavBar = () => {
    return ( 
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.img
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                src="/mpixl.png"
                />
                <div className="social">
                    <a href=""><img src="/github.png" alt="" /></a>
                </div>
            </div>
        </div>
     );
}
 
export default NavBar;