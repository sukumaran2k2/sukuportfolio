import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-[72vh] flex items-center overflow-hidden"
      id="home"
    >
      <div className="particles" aria-hidden>
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-brand font-semibold">Hello, I am</p>
            <h1 className="mt-2 text-4xl md:text-6xl font-bold font-display">
              SUKUMARAN S
            </h1>
            <p className="mt-2 text-xl text-neutral-700 dark:text-neutral-300">
              FRONTEND DEVELOPER
            </p>
            <p className="mt-6 text-neutral-600 dark:text-neutral-300 max-w-xl">
              Passionate Front End Developer eager to begin a career in web
              development. Proficient in key frontend technologies and
              passionate about creating seamless user experiences. Ready to
              collaborate and learn, contributing to innovative web applications
              and applying strong organizational and communication skills.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="rounded-md bg-brand px-4 py-2 text-white font-semibold"
              >
                See Projects
              </a>
              <a
                href="#contact"
                className="rounded-md border border-neutral-200 px-4 py-2"
              >
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="h-64 w-64 rounded-xl bg-gradient-to-br from-brand to-indigo-400 flex items-center justify-center text-white font-bold text-4xl">
              <img
                src="/sukuportfolio/sukumar.jpg"
                alt=""
                className=" rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
