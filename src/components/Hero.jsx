import data from "../mock/data.json";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div
      id="#"
      className="
      flex flex-col justify-center gap-5 lg:flex-row lg:items-center lg:justify-end
      "
    >
      {/* text */}
      <div className="flex-1 px-2 py-5 flex flex-col items-center justify-cente">
        <h1
          className="text-4xl md:text-5xl text-balance max-w-[500px] font-bold
          title-gradient md:leading-[1.2] mb-4  text-center"
        >
          {data["section-one"].title}
        </h1>
        <p className="mt-2 max-w-[500px] text-pretty  text-center">
          {data["section-one"].subtitle}
        </p>
        <Button css="mt-4">{data["section-one"].cta}</Button>
      </div>
      {/* img */}
      <div className="flex-1 max-w-[700px] h-[400px] mx-auto rounded-custom overflow-hidden">
        <img
          src={data["section-one"].img}
          alt="picture"
          className="w-full object-cover h-full"
        />
      </div>
    </div>
  );
};
export default Hero;
