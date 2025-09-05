import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold font-display">About Me</h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-3xl">
          Passionate Front End Developer eager to begin a career in web
          development. Proficient in key frontend technologies and passionate
          about creating seamless user experiences. Ready to collaborate and
          learn, contributing to innovative web applications and applying strong
          organizational and communication skills.
        </p>
      </div>
    </motion.section>
  );
}
