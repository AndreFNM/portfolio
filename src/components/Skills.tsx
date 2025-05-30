import { skills } from "../data/skills";
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal"; 

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-[#1a1a1a] text-white">
      <div className="bg-[#1a1a1a] text-white py-16 px-6" id="skills">
        <Fade triggerOnce> 
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Skills</h2>
              <div className="w-12 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, i) => (
            <Zoom key={i} delay={i * 100} triggerOnce> 
                <div className="flex items-start bg-[#262626] p-4 rounded shadow-sm hover:shadow-md transition">
                    <div className="w-16 h-16 bg-white rounded flex items-center justify-center mr-4">
                    <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    </div>
                    <div>
                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                    <p className="text-sm text-gray-400">{skill.experience}</p>
                    </div>
              </div>
            </Zoom>
            ))}
        </div>
      </div>
    </section>
  );
}