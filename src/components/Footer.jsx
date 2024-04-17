import data from "../mock/data.json";

import Logo from "./ui/Logo";
import CustomLink from "./ui/CustomLink";

const Footer = () => {
  const { MENU_LINKS } = data;

  return (
    <footer className="bg-neutral-900 text-apple-50 py-10 px-2">
      {/* top */}
      <div>
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        {/* links */}
        <ul className="flex gap-2 items-center justify-center my-5">
          {MENU_LINKS.map((link) => (
            <li key={link.id} className="text-sm">
              <CustomLink href={link.href}>{link.text}</CustomLink>
            </li>
          ))}
        </ul>
      </div>
      {/* bottom */}
      <div className="border-t border-neutral-50/10 mt-4 py-5">
        <p className="text-center">
          © {new Date().getFullYear()}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
