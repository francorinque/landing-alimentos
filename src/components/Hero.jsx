import data from "../mock/data.json";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div
      id="#"
      className="
      flex flex-col justify-center items-center gap-5 lg:flex-row  lg:justify-end
      h-[100vh]
      "
      style={{
        backgroundImage: `url(${data["section-one"].img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      {/* text */}
      <div className="flex-1  z-20 px-2 py-5 flex flex-col items-center justify-center">
        <h1
          className="text-4xl md:text-5xl text-balance max-w-[700px] font-bold
          title-gradient md:leading-[1.2] mb-4  text-center"
        >
          {data["section-one"].title}
        </h1>
        <p className="mt-2 max-w-[700px] text-pretty  text-center text-apple-50">
          {data["section-one"].subtitle}
        </p>
        <Button css="mt-4">{data["section-one"].cta}</Button>
      </div>
    </div>
  );
};
export default Hero;
