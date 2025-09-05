import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaCalendarAlt,
  FaCertificate,
} from "react-icons/fa";

const Certificate = () => {
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
        <h3 className="text-2xl font-semibold font-display">Certificate</h3>
        {/* 01 */}
        <div className="flex items-start gap-4 p-4 rounded-lg border bg-white/60 dark:bg-slate-900/60">
          <div className="mt-1 text-2xl text-brand">
            <FaCertificate />
          </div>
          <div>
            <h4 className="font-semibold">Git</h4>
            <div className="text-sm text-neutral-600 dark:text-neutral-300">
              Git Full Course
            </div>
          </div>
        </div>
        {/* 02 */}
        <div className="flex items-start gap-4 mt-3 p-4 rounded-lg border bg-white/60 dark:bg-slate-900/60">
          <div className="mt-1 text-2xl text-brand">
            <FaCertificate />
          </div>
          <div>
            <h4 className="font-semibold">Mern Stack</h4>
            <div className="text-sm text-neutral-600 dark:text-neutral-300">
              Introduction to Mern Stack
            </div>
          </div>
        </div>
        {/* 03 */}
        <div className="flex items-start gap-4 mt-3 p-4 rounded-lg border bg-white/60 dark:bg-slate-900/60">
          <div className="mt-1 text-2xl text-brand">
            <FaCertificate />
          </div>
          <div>
            <h4 className="font-semibold">React JS</h4>
            <div className="text-sm text-neutral-600 dark:text-neutral-300">
              React Full Course
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Certificate;
