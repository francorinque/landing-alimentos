import { useState } from "react";
import { BsJustify, BsXLg } from "react-icons/bs";

import Logo from "./ui/Logo";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Función para manejar el evento de scroll
    const handleScroll = () => {
      // Verifica si se ha hecho scroll más allá de una cierta cantidad (por ejemplo, 100px)
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    // Agregar el event listener para el scroll cuando se monta el componente
    window.addEventListener("scroll", handleScroll);

    // Remover el event listener cuando se desmonta el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
      fixed top-0 left-0 w-full
       px-5 flex justify-between items-center  
       h-header  text-secondary
       ${hasScrolled ? "bg-[#bdf7bb48] backdrop-blur-sm" : "bg-transparent"}
       `}
    >
      <Logo />
      <button
        className="text-2xl cursor-pointer z-50 text-secondary flex items-center justify-center md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} />
      <MenuDesktop />
    </header>
  );
};
export default NavBar;
