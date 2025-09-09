import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import Fondo from "@/assets/Fondo.png";

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
      <Hero />
    </div>
  );
}

export default App;
