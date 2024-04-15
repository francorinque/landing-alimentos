import { useState } from "react";
import { BsJustify, BsXLg } from "react-icons/bs";

import Menu from "./Menu";
import Logo from "./ui/Logo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
       px-5 flex justify-between items-center relative 
       h-header  text-white bg-secondary
    "
    >
      <Logo />
      <button
        className="text-2xl cursor-pointer text-white flex items-center justify-center md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <BsXLg /> : <BsJustify />}
      </button>
      <Menu isOpen={isOpen} />
    </header>
  );
};
export default NavBar;
