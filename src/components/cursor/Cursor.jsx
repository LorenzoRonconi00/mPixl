import { useEffect } from "react";
import "./cursor.scss";


const Cursor = () => {

    useEffect(() => {
        let outline = document.querySelector('.outline');
        let cursor = document.querySelector('.cursor');
        let links = document.querySelectorAll('a');

        document.addEventListener('mousemove', function(e){
            let x = e.clientX;
            let y = e.clientY;

            outline.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`;
            cursor.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`;
        });

        links.forEach((link) => {
            link.addEventListener("mouseover", function() {
                outline.classList.add('hover');
                cursor.classList.add('hover');
            });
            link.addEventListener("mouseleave", function() {
                outline.classList.remove('hover');
                cursor.classList.remove('hover');
            })
        });
    }, []);


    return ( 
        <div>
            <div className="outline"></div>
            <div className="cursor"></div>
        </div>
     );
}
 
export default Cursor;