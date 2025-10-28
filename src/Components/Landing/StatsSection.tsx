import { motion } from "framer-motion";
import { MdLocationOn, MdMovie, MdDataExploration } from "react-icons/md";

export const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Cinemas", icon: <MdLocationOn /> },
    { number: "100+", label: "Cities", icon: <MdMovie /> },
    { number: "24/7", label: "Updated", icon: <MdDataExploration /> },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/40 backdrop-blur-md p-10 md:p-12 text-center shadow-xl border border-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                  className="mb-6 md:mb-8 flex justify-center text-5xl md:text-6xl text-primary"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                  className="mb-3 md:mb-4 text-5xl md:text-6xl font-bold text-white"
                >
                  {stat.number}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
                  className="text-xl md:text-2xl text-gray-400"
                >
                  {stat.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
