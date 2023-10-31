import { useEffect, useState } from "react";
import "./scrollbar.scss";

const Scrollbar = () => {

  const changeActiveClass = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let currentDot = document.querySelector(
          `.scroll-indicator a[href='#${entry.target.id}']`
        );
        let allDots = document.querySelectorAll(".scroll-indicator a");
        allDots.forEach((dot) => {
            dot.classList.remove("active");
          });
        currentDot.classList.add("active");
      }
    });
  };

  const options = {
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(changeActiveClass, options);

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="scroll-indicator">
      <a href="#Home" data-section="Home"></a>
      <a href="#Servizi" data-section="Servizi"></a>
      <a href="#Progetti" data-section="Progetti"></a>
      <a href="#Contatti" data-section="Contatti"></a>
    </div>
  );
};

export default Scrollbar;
