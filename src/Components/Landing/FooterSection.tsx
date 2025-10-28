import { motion } from "framer-motion";

export const FooterSection = () => {
  return (
    <footer className="border-t border-gray-800 py-12 md:py-16">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-500 text-base md:text-lg px-4"
        >
          &copy; 2025 CineScope. Exploring cinemas across Argentina.
        </motion.p>
      </div>
    </footer>
  );
};
