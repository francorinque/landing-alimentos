import data from "../mock/data.json";

const Solutions = () => {
  return (
    <div id="soluciones">
      <h2 className="subtitle title-gradient">{data["02"].title}</h2>
      <div className="mt-4 grid grid-cols-solutions-grid gap-5 place-content-center">
        {data["02"].items.map((item) => (
          <div key={item.id} className="text-center">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-pretty text-sm md:text-md my-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
