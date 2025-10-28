import { motion } from "framer-motion";
import { FaMap, FaTable, FaTheaterMasks, FaArrowRight } from "react-icons/fa";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <FaMap className="text-4xl" />,
      title: "Interactive Maps",
      description:
        "Explore all cinemas across Argentina with our interactive map interface. Find the nearest cinema to you.",
      color: "primary",
    },
    {
      icon: <FaTable className="text-4xl" />,
      title: "Detailed Data",
      description:
        "Access comprehensive cinema data in organized tables. Filter, sort, and analyze cinema information.",
      color: "accent",
    },
    {
      icon: <FaTheaterMasks className="text-4xl" />,
      title: "Complete Coverage",
      description:
        "Discover every cinema in Argentina. From major chains to independent theaters.",
      color: "primary",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="mb-16 md:mb-20 lg:mb-24 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 md:mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl px-4"
          >
            Discover Every{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cinema
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto text-lg md:text-xl lg:text-2xl text-gray-400 px-4 text-center
                "
          >
            Powerful tools to explore and analyze cinema data across
            Argentina
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              className={`feature-card group relative overflow-hidden rounded-2xl bg-gradient-to-br ${
                feature.color === "primary"
                  ? "from-primary/10 to-primary-dark/5"
                  : "from-accent/10 to-accent-dark/5"
              } shadow-xl backdrop-blur-md border border-slate-700/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-${feature.color === "primary" ? "primary" : "accent"}/50`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  feature.color === "primary"
                    ? "from-primary/20 to-transparent"
                    : "from-accent/20 to-transparent"
                } opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              ></div>

              <div className="relative">
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  className={`mb-8 md:mb-10 inline-block rounded-xl ${
                    feature.color === "primary"
                      ? "bg-primary/20 text-primary"
                      : "bg-accent/20 text-accent"
                  } p-5 md:p-6`}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                  className="mb-5 md:mb-6 text-2xl md:text-3xl font-bold text-white"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  className="text-gray-400 text-base md:text-lg leading-relaxed"
                >
                  {feature.description}
                </motion.p>
              </div>

              <div className="absolute bottom-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                <FaArrowRight
                  className={
                    feature.color === "primary"
                      ? "text-primary"
                      : "text-accent"
                  }
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
