import {projects} from "../data/projects";
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";

export default function Projects(){
    return (
         <section id="portfolio" className="py-16 px-6 bg-[#1a1a1a] text-white">
      <Fade triggerOnce> 
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Portfolio</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
      </Fade>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Zoom key={index} delay={index * 150} triggerOnce> 
            <div className="bg-[#111] p-4 rounded-md shadow-md">
              <div className="w-full mb-4">
              <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mb-4"
              >
              <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="rounded-md object-cover w-full h-auto"
              />
              </a>
              </div>

              <h3 className="text-blue-500 font-semibold text-lg mb-2">
                  <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold text-lg mb-2 inline-block hover:underline"
                  >
                      {project.title}
                </a>
              </h3>

              <p className="text-sm text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-2 py-1 text-xs rounded text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </section>
    );
}