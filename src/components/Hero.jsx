import data from "../mock/data.json";
import heroImg from "../assets/hero-img.webp";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section
      className="
    flex flex-col gap-5 md:flex-row md:items-center md:justify-end
    py-[100px]
    "
    >
      <div className="flex-1 px-2 py-5">
        <h1 className="text-3xl md:text-4xl font-bold">{data.hero.title}</h1>
        <p className="mt-2 max-w-[500px] text-pretty">{data.hero.subtitle}</p>
        <Button>Ver más</Button>
      </div>
      <div className="flex-1 max-w-[700px] h-[400px] md:rotate-[-2deg] rounded-md overflow-hidden">
        <img
          src={heroImg}
          alt="picture"
          className="w-full object-cover h-full"
        />
      </div>
    </section>
  );
};
export default Hero;
