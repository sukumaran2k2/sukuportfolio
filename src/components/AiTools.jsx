import React from "react";
import { motion } from "framer-motion";

const aiTools = [
  {
    name: "Claude",
    src: "claude-ai-icon.svg",
  },
  {
    name: "Antigravity",
    src: "Google_Antigravity-logo_brandlogos.net_e23c83.svg", // Generic robot/AI icon
  },
  {
    name: "Copilot",
    src: "github-copilot-icon-logo-brandlogos.net_2b2xhz1k6.svg",
  },
];

export default function AiTools() {
  return (
    <motion.section
      id="ai-tools"
      className="py-16 bg-white/50 dark:bg-slate-800/40"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold font-display">AI Tools</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {aiTools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 p-4 rounded-lg border border-neutral-200/60 bg-white/60 hover:scale-105 transition dark:border-neutral-700/60 dark:bg-slate-900/60"
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="w-16 h-16 object-contain"
              />
              <div className="text-sm font-medium">{tool.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
