import { useEffect } from "react";
import "./cursor.scss";

const Cursor = () => {

    const coords = {x: 0, y: 0};
    const circles = document.querySelectorAll(".circle");

    circles.forEach(function(circle){
        circle.x = 0;
        circle.y = 0;
    });

    useEffect(() => {
        window.addEventListener("mousemove", function(e){
            coords.x = e.clientX;
            coords.y = e.clientY;
    
            animateCircles();
        })
    }, [coords]);

    function animateCircles(){

        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";
            circle.x = x;
            circle.y = y;

            const nextCircle = circles(index + 1) || circles[0];
            x += (nextCircle.x - x) * 0.5;
            y += (nextCircle.y - y) * 0.5;
        });
    }


    return ( 
        <>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </>
     );
}
 
export default Cursor;