import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

export default function AboutMe() {
    return (
    <section id="about" className="py-16 text-center">
        <Fade triggerOnce> 
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
        </Fade>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
        <Slide direction="left" triggerOnce> 
          <div className="w-48 h-48 relative shadow-lg">
            <Image
              src="/portfolio/ImagemAndre.jpg"
              alt="Profile photo"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </Slide>

        <Slide direction="right" triggerOnce delay={200}> 
          <div className="max-w-xl">
            <p className="mb-6 text-gray-300 leading-relaxed">
                            As a Web Developer with a Bachelors degree in Computer Science, I am passionate about creating intuitive and engaging web experiences. I have made practical projects in React, TypeScript, and UI development. My work includes building full-stack applications like CookSpace, where I focused on responsive design with Tailwind CSS and integrated robust features such as user authentication and email-based account recovery. I am eager to apply my skills in challenging environments and contribute to impactful projects.
            </p>

            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-200">
              <p><span className="font-semibold">Email:</span> andrefnmagalhaes@gmail.com</p>
              <p><span className="font-semibold">Nationality:</span> Portugal</p>
              <p><span className="font-semibold">Location:</span> Porto, Portugal</p>
              <p><span className="font-semibold">Education:</span> Lusófona university</p>
              <p><span className="font-semibold">Age:</span> 22</p>
              <p><span className="font-semibold">Degree:</span> Computer science</p>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}