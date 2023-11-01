import Logo from "../../assets/logo.svg";
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="fixed top-0 z-50 h-20 w-full items-center px-5 pt-5">
      <div className="INNER-CONTAINER flex flex-row justify-between">
        {/* Logo */}
        <a href="#Home">
          <img
            src={Logo}
            alt="logo"
            className="md:h-12 h-8 text-white cursor-pointer ml-10 mt-6"
          />
        </a>
        {/* Items */}
        <div className="hidden md:flex md:items-center md:justify-center md:gap-10 md:text-[22px] md:lowercase">
          <a href="#Home" className="nav-link">
            Home
            <span className="sr-only">Home</span>
          </a>
          <a href="#Servizi" className="nav-link">
            Servizi
            <span className="sr-only">Servizi</span>
          </a>
          <a href="#Progetti" className="nav-link">
            Progetti
            <span className="sr-only">Progetti</span>
          </a>
          <a href="#Contatti" className="nav-link mr-10">
            Contatti
            <span className="sr-only">Contatti</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
