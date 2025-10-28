import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="mx-auto max-w-5xl"
        >
          <div className="cta-card relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-dark to-accent shadow-2xl border border-primary-light/20">
            <div className="absolute inset-0 opacity-20 ">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white blur-3xl"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent-light blur-3xl"
              ></motion.div>
            </div>

            <div className="relative text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-8 md:mb-10 text-3xl font-bold text-white md:text-5xl lg:text-6xl px-4"
              >
                Ready to Explore?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-10 md:mb-12 text-lg text-white/90 md:text-xl lg:text-2xl px-4"
              >
                Start discovering cinemas across Argentina today
              </motion.p>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/map")}
                className="button group rounded-full bg-white px-12 py-5 md:px-14 md:py-6 text-lg md:text-xl font-semibold text-dark shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                Get Started Now
                <FaArrowRight className="ml-3 inline transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
