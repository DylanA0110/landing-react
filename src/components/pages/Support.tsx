"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { blurIn } from "../../utility/animation";

export const Support = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="support" className="py-20 text-white">
      <div ref={ref} className="container mx-auto px-4 text-center">
        <motion.h2
          initial={blurIn(0).initial}
          animate={isInView ? blurIn(0).animate : {}}
          className="text-3xl sm:text-5xl font-bold mb-6"
        >
          Soporte
        </motion.h2>
        <motion.p
          initial={blurIn(0).initial}
          animate={isInView ? blurIn(0).animate : {}}
          className="text-lg sm:text-xl max-w-3xl mx-auto"
        >
          En Magic Quest estamos aquí para ayudarte a tener la mejor experiencia
          posible. Si encuentras algún problema, tienes preguntas sobre el juego
          o necesitas orientación, nuestro equipo de soporte está listo para
          asistirte de manera rápida. Contáctanos vía correo electrónico, redes
          sociales o nuestro sistema de ayuda dentro del juego, y nos
          aseguraremos de que obtengas las respuestas que necesitas.
        </motion.p>
      </div>
    </section>
  );
};
