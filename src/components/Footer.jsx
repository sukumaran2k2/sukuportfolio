import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 mt-12">
      <div className="flex justify-center space-x-8 text-2xl">
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition"> <FaGithub /> </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition"> <FaLinkedin /> </a>
        <a href="mailto:youremail@gmail.com" className="hover:text-red-400 transition"> <FaEnvelope /> </a>
      </div>

      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-brand bg-opacity-70 hover:bg-opacity-100 shadow-lg transition-all duration-300"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-white text-lg" />
          </motion.button>
        )}
      </AnimatePresence>

      <p className="text-center text-sm text-neutral-500 mt-6">© {new Date().getFullYear()} Sukumaran S — All Rights Reserved</p>
    </footer>
  );
}
