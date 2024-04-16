import data from "../mock/data.json";
import CustomLink from "./ui/CustomLink";

const MenuMobile = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } bg-black/10 backdrop-blur-sm w-full h-screen fixed inset-0 z-40 md:hidden`}
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

// ${isOpen ? "flex" : "hidden"}
// absolute z-10 right-0 top-header p-2
// w-full md:flex flex-col gap-4  items-center bg-secondary shadow-md shadow-black/10
// md:flex-row md:bg-transparent md:relative  md:w-[auto] md:p-0 md:right-0
//  md:top-0 md:h-full md:shadow-none
