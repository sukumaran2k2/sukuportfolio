import React from "react";
import { motion } from "framer-motion";
const skills = [
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "TailwindCSS",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "ReactJS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  {
    name: "Redux",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-16 bg-white/50 dark:bg-slate-800/40"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold font-display">Skills</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((s) => (
            <motion.div
              key={s.name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 p-4 rounded-lg border border-neutral-200/60 bg-white/60 hover:scale-105 transition dark:border-neutral-700/60 dark:bg-slate-900/60"
            >
              <img src={s.src} alt={s.name} className="w-16 h-16" />
              <div className="text-sm font-medium">{s.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
