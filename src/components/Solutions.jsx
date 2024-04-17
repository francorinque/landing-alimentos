import data from "../mock/data.json";

//icons
import { BsColumns, BsColumnsGap, BsLayoutTextWindow } from "react-icons/bs";

const icons = {
  arquitectura: <BsColumns />,
  diseno: <BsColumnsGap />,
  raices: <BsLayoutTextWindow />,
};

const Solutions = () => {
  return (
    <div id="soluciones">
      <h2 className="subtitle title-gradient mb-10">
        {data["seccion2-solutions"].title}
      </h2>
      <div className="mt-4 grid grid-cols-solutions-grid gap-8 place-content-center">
        {data["seccion2-solutions"].items.map((item) => (
          <div key={item.id} className="text-center">
            <div
              className="
              bg-secondary
              text-apple-50 
              rounded-full 
              w-10 h-10
              md:text-2xl md:w-16 md:h-16
              flex items-center justify-center
              mb-4 mx-auto
            "
            >
              {icons[item.icon]}
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-pretty text-sm md:text-md my-1  max-w-[350px] mx-auto">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
