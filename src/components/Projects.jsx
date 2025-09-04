import React from 'react'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'

const tagColors = {
  HTML: "bg-orange-300 text-orange-900",
  JavaScript: "bg-yellow-300 text-yellow-900",
  React: "bg-sky-300 text-sky-900",
  Local: "bg-green-300 text-green-900",
  default: "bg-gray-300 text-gray-900",
};

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="py-16" 
      initial={{ opacity: 0, y: 12 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl font-semibold font-display">Projects</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <motion.div 
              key={p.title} 
              whileHover={{ y: -6 }} 
              className="rounded-lg border p-4 bg-white/60 dark:bg-slate-900/60"
            >
              <img src={p.image} alt={p.title} className="h-40 w-full object-cover rounded-md" />
              <h4 className="mt-3 font-semibold">{p.title}</h4>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
              
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((tag, i) => {
                  const color = tagColors[tag] || tagColors.default;
                  return (
                    <span key={i} className={`px-3 py-1 rounded text-sm ${color}`}>
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div className="mt-3 flex gap-2">
                <a href={p.demo} className="px-3 py-1 rounded bg-brand text-white text-sm">Live</a>
                <a href={p.code} className="px-3 py-1 rounded border text-sm">Code</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
