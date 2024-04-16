import data from "../mock/data.json";
import CustomLink from "./ui/CustomLink";

const MenuMobile = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } bg-black/10 backdrop-blur-sm w-full h-screen fixed inset-0 z-40 md:hidden`}
      onClick={onClick}
    >
      <ul
        className={`
        fixed z-50 left-0 top-0 px-2 py-5 h-screen
        w-[250px] flex flex-col gap-4  items-start bg-[#ddfcdc] shadow-md shadow-black/10
      
      `}
      >
        {data["MENU_LINKS"].map((link) => (
          <li key={link.id} className="p-2">
            <CustomLink href={link.href}>{link.text}</CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MenuMobile;
