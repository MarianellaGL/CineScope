import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden pt-32 md:pt-48 pb-24 md:pb-40">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16 md:mb-24 lg:mb-32"
          >
            <h1 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-6xl font-bold text-transparent md:text-8xl lg:text-9xl">
              CineScope
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-8 md:mb-12 lg:mb-16 text-2xl text-gray-300 md:text-4xl lg:text-5xl px-4"
          >
            Your Complete Guide to
            <span className="text-primary"> Argentine Cinemas</span>
          </motion.h2>

          <div className="flex flex-col gap-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mx-auto mb-12 md:mb-16 text-lg text-gray-400 md:text-xl lg:text-2xl px-4 xl:text-center"
            >
              Explore every cinema across Argentina with interactive maps
              and comprehensive data. Find your next movie experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8 p-12"
            >
              <button
                onClick={() => navigate("/map")}
                className="button group flex items-center gap-3 rounded-full bg-gradient-to-r mt-8 from-primary to-primary-dark px-10 py-5 text-lg md:text-xl font-semibold text-white shadow-lg shadow-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/70 m-12 z-50 "
              >
                Explore Cinemas
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate("/data")}
                className="button rounded-full border-2 border-accent px-10 py-5 text-lg md:text-xl font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105 z-50 "
              >
                View Data
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
