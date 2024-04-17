import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Layout from "./components/ui/Layout";
import Solutions from "./components/Solutions";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";

// PLATAFORMA PARA LA REDUCCIÓN DE MERMAS EN LA DISTRIBUCIÓN DE ALIMENTACIÓN

function App() {
  return (
    <main className=" main-gradient w-full min-h-screen min-w-[250px]">
      <NavBar />
      <Layout>
        <section>
          <Hero />
        </section>
        <section className="py-[150px]">
          <Solutions />
        </section>
        <section className="py-[90px]">
          <Gallery />
        </section>
        <section className="py-[90px]">
          <Contact />
        </section>
        <section className="py-[90px]">
          <Quotes />
        </section>
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
