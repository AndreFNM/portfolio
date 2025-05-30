import { Fade, Slide } from "react-awesome-reveal"; 

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-[#1a1a1a] text-white">
      <Fade triggerOnce> 
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
      </Fade>

      <div className="max-w-3xl mx-auto space-y-8">
        <Slide direction="up" triggerOnce> 
          <div className="bg-[#262626] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400">Bachelor in Computer Science</h3>
            <p className="text-lg text-gray-300">Lusófona University, Porto, Portugal</p>
            <p className="text-sm text-gray-400">October 2020 - June 2024</p>
            <p className="mt-4 text-gray-300">
              During my Bachelors degree in Computer Science, I developed a strong foundation through various practical projects. These projects provided me with hands-on experience in software development. This experience was crucial for building my core skills in web development. I was also a member of the Computer Science Student Group, where I assisted in the foundation and initial organization of the group, contributing to its structure and solving early-stage challenges, ensuring smooth operations and student engagement.
            </p>
          </div>
        </Slide>
        <Slide direction="up" triggerOnce delay={200}> 
          <div className="bg-[#262626] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400">English Language Certificate (B2)</h3>
            <p className="text-lg text-gray-300">Independent User</p>
            <p className="text-sm text-gray-400">Achieved B2 level in Listening, Reading, Writing, Spoken production, and Spoken interaction.</p>
            <div className="mt-4">
              <a
                href="/certificate-b2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 text-sm"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}