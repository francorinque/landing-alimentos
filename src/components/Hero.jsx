import data from "../mock/data.json";
import heroImg from "../assets/hero-img.webp";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div
      id="inicio"
      className="
      flex flex-col justify-center gap-5 lg:flex-row lg:items-center lg:justify-end
      "
    >
      {/* text */}
      <div className="flex-1 px-2 py-5 flex flex-col items-center justify-cente">
        <h1
          className="text-4xl md:text-5xl text-balance max-w-[500px] font-bold
          title-gradient leading-[1.5] md:leading-[1.6]  text-center"
        >
          {data["01"].title}
        </h1>
        <p className="mt-2 max-w-[500px] text-pretty  text-center">
          {data["01"].subtitle}
        </p>
        <Button css="mt-4">Ver más</Button>
      </div>
      {/* img */}
      <div className="flex-1 max-w-[700px] h-[400px] mx-auto rounded-custom overflow-hidden">
        <img
          src={heroImg}
          alt="picture"
          className="w-full object-cover h-full"
        />
      </div>
    </div>
  );
};
export default Hero;
