import data from "../mock/data.json";

const Solutions = () => {
  const { solutions } = data;

  return (
    <section>
      <h2 className="text-2xl font-bold">{solutions.title}</h2>
      <div className="mt-4">
        {solutions.items.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Solutions;
