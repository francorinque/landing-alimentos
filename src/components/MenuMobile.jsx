import data from "../mock/data.json";
import CustomLink from "./ui/CustomLink";

const MenuMobile = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${isOpen ? "block" : "hidden"}
       bg-black/10 backdrop-blur-sm w-full h-screen fixed
        top-0 left-0 z-50 md:hidden 
       `}
      onClick={onClick}
    >
      <ul
        className={`
        absolute  top-0 px-2 py-10 h-screen
        ${isOpen ? "left-0 animate-fade-right" : "left-[-100vw]"}
        w-[250px] flex flex-col gap-4  items-start bg-neutral-900 text-apple-50 shadow-md shadow-black/10
      `}
      >
        {data["MENU_LINKS"].map((link) => (
          <li key={link.id} className="p-2" onClick={onClick}>
            <CustomLink href={link.href}>{link.text}</CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MenuMobile;
