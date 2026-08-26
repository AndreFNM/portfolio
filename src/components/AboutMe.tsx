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
              src="/ImagemAndre.jpg"
              alt="Profile photo"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </Slide>

        <Slide direction="right" triggerOnce delay={200}> 
          <div className="max-w-xl">
            <p className="mb-6 text-gray-300 leading-relaxed">
                I&apos;m a Computer Science graduate and Software Developer with professional
                experience working on enterprise software solutions. At NTT DATA, I worked
                as a Junior Software Consultant, developing application features and
                backend business logic using JavaScript and C#, while investigating
                application incidents and analyzing technical requirements.
                <br /><br />
                I also have experience building full-stack web applications using React,
                Next.js, TypeScript, and modern web technologies. I&apos;m passionate about
                learning, solving technical problems, and building reliable software.
            </p>

            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-200">
              <p><span className="font-semibold">Email:</span> andrefnmagalhaes@gmail.com</p>
              <p><span className="font-semibold">Nationality:</span> Portugal</p>
              <p><span className="font-semibold">Location:</span> Porto, Portugal</p>
              <p><span className="font-semibold">Education:</span> Lusófona university</p>
              <p><span className="font-semibold">Age:</span> 23</p>
              <p><span className="font-semibold">Degree:</span> Computer science</p>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
