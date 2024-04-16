import data from "../mock/data.json";
import CustomLink from "./ui/CustomLink";

const MenuDesktop = () => {
  const { MENU_LINKS } = data;

  return (
    <ul className=" hidden md:flex items-center">
      {MENU_LINKS.map((link) => (
        <li key={link.id}>
          <CustomLink href={link.href}>{link.text}</CustomLink>
        </li>
      ))}
    </ul>
  );
};
export default MenuDesktop;
