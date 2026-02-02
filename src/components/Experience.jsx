import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Floretta India",
    role: "Web Developer Intern",
    period: "6 Oct 2025 - 6 Jan 2026 (3 Months)",
    desc: [
      "Developed and maintained responsive web pages using HTML, CSS, JavaScript, React and modern frameworks.",
      "Assisted in designing user-friendly interfaces to improve user experience and engagement.",
      "Collaborated with senior developers to implement new features and fix bugs.",
      "Gained hands-on experience in full web development lifecycle and version control tools.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-16"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold font-display">Work Experience</h3>
        <div className="mt-6 flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="p-6 rounded-lg border border-neutral-200/60 bg-white/60 dark:border-neutral-700/60 dark:bg-slate-900/60"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <div>
                  <h4 className="text-xl font-bold">{exp.role}</h4>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                {exp.period && (
                  <span className="text-sm text-neutral-500 dark:text-neutral-500 mt-1 sm:mt-0">
                    {exp.period}
                  </span>
                )}
              </div>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                {exp.desc.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
