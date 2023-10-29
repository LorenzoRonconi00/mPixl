import Logo from "../../assets/logo.svg";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 h-20 w-full items-center px-5 pt-5">
      <div className="INNER-CONTAINER flex flex-row justify-between">
        {/* Logo */}
        <a href="#">
          <img
            src={Logo}
            alt="logo"
            className="h-12 text-white cursor-pointer"
          />
        </a>
        {/* Items */}
        <div className="flex items-center justify-center gap-10">
          <a href="#Home" className="text-white hover:text-[#05E1E3]">
            Home
            <span className="sr-only">Home</span>
          </a>
          <a href="#Servizi" className="text-white hover:text-[#05E1E3]">
            Servizi
            <span className="sr-only">Servizi</span>
          </a>
          <a href="#Progetti" className="text-white hover:text-[#05E1E3]">
            Progetti
            <span className="sr-only">Progetti</span>
          </a>
          <a href="#Contatti" className="text-white hover:text-[#05E1E3] mr-10">
            Contatti
            <span className="sr-only">Contatti</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
