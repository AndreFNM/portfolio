import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#111] px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="text-blue-500 font-bold text-xl">AM</div>

        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className="hidden md:flex gap-6 text-sm">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <motion.a
              href="/CV___Andre_Magalhaes.pdf"
              target="_blank"
              className="bg-blue-600 text-white px-4 py-1 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Resume
            </motion.a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-sm md:hidden">
          <li><a href="#experience" onClick={toggleMenu}>experience</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>portfolio</a></li>
          <li><a href="#skills" onClick={toggleMenu}>skills</a></li>
          <li><a href="#about" onClick={toggleMenu}>about</a></li>
          <li><a href="#education" onClick={toggleMenu}>education</a></li>
          <li><a href="#contact" onClick={toggleMenu}>contact</a></li>
          <li>
            <motion.a
              href="/CV___Andre_Magalhaes.pdf"
              target="_blank"
              className="bg-blue-600 text-white px-4 py-1 rounded inline-block w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Resume
            </motion.a>
          </li>
        </ul>
      )}
    </nav>
  );
}
