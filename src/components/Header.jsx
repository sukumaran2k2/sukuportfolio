import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { IoIosDownload, IoIosMenu, IoMdClose } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 top-4">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between rounded-2xl border border-brand/20 bg-white/70 p-3 backdrop-blur dark:border-brand/30 dark:bg-slate-900/60 relative">
          <div className="text-sm font-semibold font-display">SUKUMARAN S</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">
            <a
              href="/Resume-Sukumaran.pdf"
              className="flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-1.5 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-slate-800"
            >
              <IoIosDownload className="text-lg" />
              RESUME
            </a>
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className="text-2xl text-neutral-600 dark:text-neutral-300"
            >
              {isMenuOpen ? <IoMdClose /> : <IoIosMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-6 right-6 p-4 rounded-2xl border border-brand/20 bg-white/95 backdrop-blur shadow-xl dark:border-brand/30 dark:bg-slate-900/95 flex flex-col gap-4 items-center">
            <a
              href="/Resume1.pdf"
              className="flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-1.5 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoIosDownload className="text-lg" />
              RESUME
            </a>
            <a
              href="#about"
              className="text-sm text-neutral-600 hover:text-brand dark:text-neutral-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-neutral-600 hover:text-brand dark:text-neutral-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-neutral-600 hover:text-brand dark:text-neutral-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-sm text-neutral-600 hover:text-brand dark:text-neutral-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-sm text-neutral-600 hover:text-brand dark:text-neutral-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
