const CustomLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className={`
      cursor-pointer  p-2  text-apple-50 hover:text-apple-800
     
      `}
      onClick={() => setActiveLink(children)}
    >
      {children}
    </a>
  );
};
export default CustomLink;
