import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal"; 

export default function Hero() {
    return(
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center items-center text-center bg-[#1a1a1a] text-white"
        >
          <Fade delay={300} triggerOnce> 
              <div className="w-32 h-32 relative mb-6">
                <Image
                  src="/portfolio/ImagemAndre.jpg"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover border-4 border-blue-600"
                />
              </div>
          </Fade>

          <Slide direction="down" delay={500} triggerOnce> 
              <h1 className="text-4xl font-bold">
                André <span className="text-blue-500">Magalhães</span>
              </h1>
          </Slide>

          <Fade delay={800} triggerOnce> 
              <p className="mt-2 text-gray-400">I do web development.</p> 
          </Fade>

          <div className="mt-10 animate-bounce text-3xl text-blue-500">↓</div>
        </section>
    );
}