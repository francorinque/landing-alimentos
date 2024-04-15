import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Solutions from "./components/Solutions";

// PLATAFORMA PARA LA REDUCCIÓN DE MERMAS EN LA DISTRIBUCIÓN DE ALIMENTACIÓN

function App() {
  return (
    <main className="bg-[#F5F5F5] w-full min-h-screen">
      <NavBar />
      <div className="px-2 max-w-[1440px] mx-auto">
        <Hero />
        <Solutions />
      </div>
    </main>
  );
}

export default App;
