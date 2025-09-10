import Personaje from "@/assets/Personaje.png";
import Logo from "@/assets/Logo.png";
import { Gamepad2, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { slipeUp, slipeInFrom } from "../../utility/animation";

export const Hero = () => {
  return (
    <section className="mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Texto */}
        <div className="px-4 sm:px-6 md:px-10 py-10">
          <motion.img
            variants={slipeUp(0.2)}
            initial="initial"
            animate="animate"
            src={Logo}
            alt="Logo"
          />
          <motion.p
            className="py-10 text-white max-w-2xl mx-auto"
            variants={slipeUp(0.3)}
            initial="initial"
            animate="animate"
          >
            Magic Quest es un emocionante juego de aventuras en un mundo de
            fantasía donde te embarcas en una épica búsqueda mágica. Explora
            reinos misteriosos, domina poderosos hechizos y enfréntate a
            criaturas legendarias mientras desvelas secretos ocultos y te
            conviertes en el héroe supremo. ¡La magia está en tus manos!
          </motion.p>
          <motion.div
            variants={slipeUp(1)}
            initial="initial"
            animate="animate"
            className="flex justify-center gap-4"
          >
            <a
              className="flex items-center justify-center gap-2 bg-purple-600 py-2 px-12 rounded-3xl text-white font-semibold shadow-lg
               hover:bg-purple-700 transition-all duration-300 cursor-pointer"
            >
              Jugar ahora
              <Gamepad2 className="text-xl ml-2" />
            </a>
            <a
              className="text-white flex items-center cursor-pointer"
              href="https://youtu.be/xQXrt0gAM6E?list=RDxQXrt0gAM6E"
              target="blank"
            >
              Ver GamePlay
              <Youtube className="text-xl ml-2" />
            </a>
          </motion.div>
        </div>
        {/* Imagen */}
        <motion.div
          className="sm:p-10 md:p-15 lg:p-30 xl:p-36"
          variants={slipeInFrom(0.5, "right")}
          initial="initial"
          animate="animate"
        >
          <img src={Personaje} alt="Personaje del juego" />
        </motion.div>
      </div>
    </section>
  );
};
