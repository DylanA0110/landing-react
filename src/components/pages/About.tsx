"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { blurIn } from "../../utility/animation";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="about" className="py-20 text-white">
      <div className="container mx-auto px-4 text-center" ref={ref}>
        <motion.h2
          initial={blurIn(0).initial}
          animate={isInView ? blurIn(0).animate : {}}
          className="text-5xl font-bold mb-6"
        >
          Nosotros
        </motion.h2>

        <motion.p
          initial={blurIn(0).initial}
          animate={isInView ? blurIn(0).animate : {}}
          className="text-xl sm:text-2xl md:text-3xl mt-6"
        >
          Magic Quest ha sido desarrollado por un equipo apasionado de jugadores
          y programadores, con el objetivo de ofrecer la mejor experiencia de
          aventura mágica a todos los jugadores. Nos dedicamos a crear mundos
          fantásticos, emocionantes desafíos y una historia que te mantendrá
          enganchado desde el primer hechizo hasta la última misión.
        </motion.p>
      </div>
    </section>
  );
};
