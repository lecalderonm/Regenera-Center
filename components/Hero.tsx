import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const carouselData = [
    {
        title: "Regenera Center",
        description:
            "Bienvenid@s a la forma más armónica y coherente de conectar salud y belleza. Te invitamos a conocernos, a encontrar la mejor versión de ti, de dentro hacia fuera.",
    },
];

export default function Hero() {
    const { title, description } = carouselData[0];

    // Referencia para observar la sección
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative h-screen flex items-center justify-center bg-cover bg-center px-6 md:px-12"
            style={{ backgroundImage: "url('/img/fondo.png')" }}
        >
         {/* Capa de difuminado con menor intensidad */}
    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>


            {/* Contenido del Texto con Animación */}
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Inicia oculto y desplazado
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Se anima cuando entra en pantalla
                transition={{ duration: 1, ease: "easeOut" }} // Suavidad en la animación
                className="relative w-full md:w-1/2 text-white text-center md:text-left z-10"
            >
                <h1 className="text-3xl md:text-5xl font-bold text-[#fbd862]">
                    {title}
                </h1>
                <p className="mt-4 text-lg md:text-xl">{description}</p>
                <motion.a
                    href="#servicios"
                    whileHover={{ scale: 1.05 }} // Efecto de escala al pasar el mouse
                    whileTap={{ scale: 0.95 }} // Efecto de presión al hacer clic
                    className="mt-6 inline-block bg-white text-[#135e82] py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition"
                >
                    Explorar Servicios
                </motion.a>
            </motion.div>
        </section>
    );
}
