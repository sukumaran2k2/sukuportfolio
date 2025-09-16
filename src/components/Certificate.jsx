import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    title: "Udemy",
    desc: "The Ultimate React Course",
    image: "/react-cer.jpg",
  },
  {
    title: "Simplilearn",
    desc: "GIT (Version Control)",
    image: "/Git-cer.jpg",
  },
  {
    title: "Simplilearn",
    desc: "Introduction To MERN Stack",
    image: "/Mern-cer.jpg",
  },
  {
    title: "Simplilearn",
    desc: "JavaScript Fundamentals",
    image: "/certificates/js-fundamentals.png",
  },
];

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <motion.section
      id="certificate"
      className="py-16 bg-white/50 dark:bg-slate-800/40"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold font-display">Certificates</h3>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="p-4 rounded-lg border bg-white/60 dark:bg-slate-900/60 hover:shadow-md hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 text-2xl text-brand">
                  <FaCertificate />
                </div>
                <div className="flex">
                  <h4 className="font-semibold ">{cert.title}</h4>
                  <div className="px-3 py-1 text-sm text-neutral-600 dark:text-neutral-300 ">
                    {cert.desc}
                  </div>

                  
                </div>
              </div>

              {/* View Button */}
              <button
                onClick={() => setSelectedCert(cert.image)}
                className="ml-8 mt-3 w-fit px-3 py-1 text-sm font-medium text-white bg-brand rounded-lg hover:bg-brand/90 transition-colors"
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right-Side Drawer */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)} // click outside to close
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white dark:bg-slate-900 shadow-lg z-50 p-4 overflow-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-4 text-black dark:text-white text-2xl font-bold"
              >
                ✕
              </button>
              <img
                src={selectedCert}
                alt="Certificate"
                className="w-full rounded-lg mt-10"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Certificate;
