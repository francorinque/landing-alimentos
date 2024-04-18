const CustomLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className={`
      cursor-pointer  p-2  text-apple-50  hover:text-apple-200
      `}
    >
      {children}
    </a>
  );
};
export default CustomLink;
