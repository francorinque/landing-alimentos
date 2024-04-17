import data from "../../mock/data.json";

const Logo = () => {
  return (
    <div className="w-10 h-10 object-cover flex items-center justify-center">
      <img src={data.logo} alt="imagen del logo" className="w-full " />
    </div>
  );
};
export default Logo;
