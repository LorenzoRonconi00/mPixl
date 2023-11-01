import Logo from "../../assets/logo.svg";
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="fixed top-0 z-50 h-20 w-screen items-center  backdrop-blur-sm border-b border-neutral-900 flex align-middle px-5">
      <div className="INNER-CONTAINER w-full flex flex-row justify-between align-middle">
        {/* Logo */}
        <a href="#Home">
          <img
            src={Logo}
            alt="logo"
            className="h-8 mt-1 text-white cursor-pointer align-middle"
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
          <a href="#Contatti" className="nav-link">
            Contatti
            <span className="sr-only">Contatti</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
