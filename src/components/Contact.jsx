import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");
  function send(e) {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .sendForm(
        "service_p4sqhp9",
        "template_s62hiiy",
        e.target,
        "gBEdJ38dCY9q1Zx7-",
      )
      .then(() => setStatus("✅ Message sent!"))
      .catch(() => setStatus("❌ Failed, try again."));
  }
  return (
    <motion.section
      id="contact"
      className="py-16"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h3 className="text-2xl font-semibold font-display">Contact</h3>
        <form
          onSubmit={send}
          className="mt-6 rounded-lg border p-6 bg-white/60 dark:bg-slate-900/60"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Name"
              className="p-3 rounded border bg-white dark:bg-slate-800 text-black dark:text-white"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Email"
              className="p-3 rounded border bg-white dark:bg-slate-800 text-black dark:text-white"
            />
          </div>
          <textarea
            typeof="message"
            name="message"
            required
            placeholder="Message"
            className="mt-4 p-3 rounded border w-full bg-white dark:bg-slate-800 text-black dark:text-white"
            rows="6"
          />
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-neutral-500">
              I'll reply within 24 hours.
            </div>
            <button className="rounded-md bg-brand px-4 py-2 text-white">
              Send
            </button>
          </div>
          {status && <p className="mt-3">{status}</p>}
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://github.com/sukumaran2k2"
              target="_blank"
              rel="noreferrer"
              className="text-2xl"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sukumaran-2k2/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl"
            >
              LinkedIn
            </a>
          </div>
          <div className="pt-4">Mail: Sukumaran2k2@gmail.com</div>
          <div className="pt-4">Contact No: 9655835731</div>
        </form>
      </div>
    </motion.section>
  );
}
