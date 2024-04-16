import { BsJustify, BsXLg } from "react-icons/bs";

import useNav from "../hooks/useNav";

import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import Logo from "./ui/Logo";

const NavBar = () => {
  const { isOpen, handleIsOpen, hasScrolled } = useNav();

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
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
      <MenuDesktop />
    </header>
  );
};
export default NavBar;
