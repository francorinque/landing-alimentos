import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Solutions from "./components/Solutions";
import Layout from "./components/ui/Layout";

// PLATAFORMA PARA LA REDUCCIÓN DE MERMAS EN LA DISTRIBUCIÓN DE ALIMENTACIÓN

function App() {
  return (
    <main className=" main-gradient w-full min-h-screen">
      <NavBar />
      <Layout>
        <section className="py-[90px]">
          <Hero />
        </section>
        <section className="py-[90px]">
          <Solutions />
        </section>
        <section className="py-[90px]">
          <Gallery />
        </section>
      </Layout>
    </main>
  );
}

export default App;
