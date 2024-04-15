import data from "../mock/data.json";

const Solutions = () => {
  const { solutions } = data;

  return (
    <section>
      <h2 className="text-2xl font-bold md:text-center mb-10">
        {solutions.title}
      </h2>
      <div className="mt-4 grid grid-cols-solutions-grid gap-5 md:place-content-center">
        {solutions.items.map((item) => (
          <div key={item.id}>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-pretty text-sm md:text-md my-1">{item.desc}</p>
            <a href="#" className="text-secondary">
              Now more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Solutions;
