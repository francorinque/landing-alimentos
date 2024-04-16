import data from "../mock/data.json";
import Button from "./ui/Button";
import CustomLink from "./ui/CustomLink";

const MenuDesktop = () => {
  const { MENU_LINKS } = data;

  return (
    <ul className="hidden md:flex md:items-center md:gap-4">
      {MENU_LINKS.map((link) => (
        <li key={link.id}>
          <CustomLink href={link.href}>{link.text}</CustomLink>
        </li>
      ))}
      <li>
        <Button>
          <a href="mailto:9Gp2K@example.com">Contactar</a>
        </Button>
      </li>
    </ul>
  );
};
export default MenuDesktop;
