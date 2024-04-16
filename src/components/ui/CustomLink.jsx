const CustomLink = ({ href, children }) => {
  return (
    <a href={href} className="cursor-pointer  p-2  hover:text-apple-800">
      {children}
    </a>
  );
};
export default CustomLink;
