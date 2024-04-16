const CustomLink = ({ href, children }) => {
  return (
    <a href={href} className="cursor-pointer  p-2  hover:text-[#3b3b3b]">
      {children}
    </a>
  );
};
export default CustomLink;
