import data from "../mock/data.json";

const Menu = ({ isOpen }) => {
  return (
    <ul
      className={`
        ${isOpen ? "flex" : "hidden"}
       absolute z-10 right-0 top-header p-2 
        w-full md:flex flex-col gap-4  items-center bg-secondary shadow-md shadow-black/10
        md:flex-row md:bg-transparent md:relative  md:w-[auto] md:p-0 md:right-0
         md:top-0 md:h-full md:shadow-none
        ;
      `}
    >
      {data["MENU_LINKS"].map((link) => (
        <li
          key={link.id}
          className="cursor-pointer text-white p-2 hover:opacity-[80%]"
        >
          {link.text}
        </li>
      ))}
    </ul>
  );
};
export default Menu;
