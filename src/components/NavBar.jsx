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
       h-header  
       ${
         hasScrolled
           ? "bg-neutral-900 text-apple-50 transition ease-in-out duration-300"
           : "bg-transparent"
       }
       `}
    >
      <Logo />
      <button
        className={`
        ${hasScrolled ? "text-apple-50" : "text-neutral-900"}
        text-2xl cursor-pointer z-[999]  flex items-center justify-center md:hidden
        `}
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
