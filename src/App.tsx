import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import Fondo from "@/assets/Fondo.png";
import { About } from "./components/pages/About";
import { Support } from "./components/pages/Support";
import { Contact } from './components/pages/Contact';

function App() {
  const bgImagen: React.CSSProperties = {
    backgroundImage: `url(${Fondo})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="pt-20">
        <About />
      </section>
      <section id="support" className="pt-20">
        <Support />
      </section>
      <section id="contact" className="pt-20">
        <Contact />
      </section>
    </div>
  );
}

export default App;
