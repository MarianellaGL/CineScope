import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Map", path: "/map" },
    { name: "Data", path: "/data" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "#", label: "GitHub" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-gray-800 py-12 md:py-16 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  CineScope
                </span>
              </h3>
              <p className="text-gray-400 text-base md:text-lg">
                Your Complete Guide to Argentine Cinemas
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">
                Quick Links
              </h4>
              <div className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-base md:text-lg"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="text-center md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">
                Connect With Us
              </h4>
              <div className="flex gap-6 justify-center md:justify-end">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    aria-label={social.label}
                    className="text-3xl text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-500 text-base md:text-lg">
            &copy; 2025 CineScope. Exploring cinemas across Argentina.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
