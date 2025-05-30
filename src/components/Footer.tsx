import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111] text-white py-8 px-6 text-center">
      <Fade triggerOnce>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/AndreFNM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/andré-magalhães-757a53275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="mailto:andrefnmagalhaes@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition duration-300"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} André Magalhães. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">Built with React, Next.js and Tailwind CSS.</p>
        </div>
      </Fade>
    </footer>
  );
}