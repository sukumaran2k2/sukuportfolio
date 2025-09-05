import React from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="py-16 bg-white/50 dark:bg-slate-800/40"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold font-display">Education</h3>
        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-lg border bg-white/60 dark:bg-slate-900/60">
            <div className="mt-1 text-2xl text-brand">
              <FaGraduationCap />
            </div>
            <div>
              <h4 className="font-semibold">B.Sc. Computer Science</h4>
              <div className="text-sm text-neutral-600 dark:text-neutral-300">
                Hindustan College of Arts and Science, Coimbatore
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                <FaCalendarAlt className="inline mr-2" />
                2020 - 2023
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg border bg-white/60 dark:bg-slate-900/60">
            <div className="mt-1 text-2xl text-brand">
              <FaUniversity />
            </div>
            <div>
              <h4 className="font-semibold">MBA</h4>
              <div className="text-sm text-neutral-600 dark:text-neutral-300">
                Alagappa University
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                <FaCalendarAlt className="inline mr-2" />
                2023 - 2025
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg border bg-white/60 dark:bg-slate-900/60">
            <div className="mt-1 text-2xl text-brand">
              <FaSchool />
            </div>
            <div>
              <h4 className="font-semibold">Schooling</h4>
              <div className="text-sm text-neutral-600 dark:text-neutral-300">
                Vidhya Mandhir Matriculation Higher Secondary School, Tirupur
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
