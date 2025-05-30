import { motion } from "framer-motion"; 

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#111]">
      <div className="text-blue-500 font-bold text-xl">AM</div>
      <ul className="flex gap-6 text-sm">
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#education">education</a></li>
        <li><a href="#contact">contact</a></li>
        <li>
          <motion.a 
            href="/cv.pdf"
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
    </nav>
  );
}