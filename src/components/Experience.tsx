import { Fade, Slide } from "react-awesome-reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 px-6 bg-[#1a1a1a] text-white"
    >
      <Fade triggerOnce>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
      </Fade>

      <div className="max-w-4xl mx-auto space-y-8">
        <Slide direction="up" triggerOnce>
          <div className="bg-[#262626] p-6 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-xl font-semibold text-blue-400">
                  NTT DATA
                </h3>

                <p className="text-lg font-medium">
                  Junior Software Consultant
                </p>
              </div>

              <p className="text-sm text-gray-400">
                February 2026 - August 2026
              </p>
            </div>

            <ul className="mt-5 space-y-2 text-gray-300 text-sm leading-relaxed list-disc list-inside">
              <li>
                Investigated and resolved application incidents involving
                complex business logic in an enterprise software system.
              </li>

              <li>
                Performed technical analysis of user stories, identifying
                implementation requirements and required code changes.
              </li>

              <li>
                Developed application features and improvements primarily
                using JavaScript.
              </li>

              <li>
                Developed and modified backend business logic using C#
                plugins.
              </li>

              <li>
                Worked with technical and functional team members throughout
                development, testing, and issue resolution.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 text-xs rounded-full bg-blue-600/20 text-blue-400">
                JavaScript
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-blue-600/20 text-blue-400">
                C#
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-blue-600/20 text-blue-400">
                Backend Development
              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-blue-600/20 text-blue-400">
                Incident Resolution
              </span>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
