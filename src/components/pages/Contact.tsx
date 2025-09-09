"use client";
import { motion, useInView } from "framer-motion";
import { blurIn } from "../../utility/animation";
import { useRef } from "react";

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="contact" className="py-20 text-white">
      <div ref={ref} className="container mx-auto px-4 text-center">
        <motion.h2
          initial={blurIn(0).initial}
          animate={isInView ? blurIn(0).animate : {}}
          className="text-3xl sm:text-5xl font-bold mb-6"
        >
          Contacto
        </motion.h2>
        <motion.p
          initial={blurIn(0.2).initial}
          animate={isInView ? blurIn(0.2).animate : {}}
          className="text-lg sm:text-xl max-w-3xl mx-auto"
        >
          En Magic Quest, nuestro equipo está disponible para atender cualquier
          consulta o comentario que tengas. Ya sea que quieras reportar un
          problema, sugerir mejoras o simplemente saludar, puedes contactarnos
          vía correo electrónico o a través de nuestras redes sociales. Estamos
          comprometidos a brindarte la mejor experiencia posible.
        </motion.p>
      </div>
    </section>
  );
};
