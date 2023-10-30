import "./scrollbar.scss";

const Scrollbar = () => {

    const dots = document.querySelectorAll(".scroll-indicator a");

    const removeActiveClass = () => {
        dots.forEach(dot => {
            dot.classList.remove("active");
        })
    }

    const addActiveClass = (entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                let currentDot = document.querySelector(`.scroll-indicator a[href='#${entry.target.id}']`);
                removeActiveClass();
                currentDot.classList.add("active");
            }
        })
    };

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(addActiveClass, options);

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        observer.observe(section);
    })

    return ( 
        <div className="scroll-indicator">
            <a href="#Home" className="active" data-section="Home"></a>
            <a href="#Servizi" data-section="Servizi"></a>
            <a href="#Progetti" data-section="Progetti"></a>
            <a href="#Contatti" data-section="Contatti"></a>
        </div>
     );
}
 
export default Scrollbar;