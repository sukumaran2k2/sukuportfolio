import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { IoIosDownload } from "react-icons/io";
export default function Header() {
  return (
    <header className="fixed w-full z-50 top-4">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between rounded-2xl border border-brand/20 bg-white/70 p-3 backdrop-blur dark:border-brand/30 dark:bg-slate-900/60">
          <div className="text-sm font-semibold font-display">SUKUMARAN S</div>
          <nav className="flex items-center gap-4">
            <a href="/RESUME.pdf"
            
               className="rounded-md flex border border-neutral-200 px-3 "
            > <IoIosDownload />RESUME</a>
            <a
              href="#about"
              className="text-sm text-neutral-600 hover:text-brand dark:text-neutral-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-neutral-600 hover:text-brand dark:text-neutral-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-neutral-600 hover:text-brand dark:text-neutral-300"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-sm text-neutral-600 hover:text-brand dark:text-neutral-300"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-sm text-neutral-600 hover:text-brand dark:text-neutral-300"
            >
              Contact
            </a>
            <DarkModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
