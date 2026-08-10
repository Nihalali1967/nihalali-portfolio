import HeroImg from "@/assets/images/hero.jpeg";

export default function About() {
  return (
    <>
      <section id="about" className="py-12 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          {/* Section badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-xs text-gray-400 font-medium">About Me</span>
          </div>
          <h2 className="relative z-10 max-w-xl text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Full Stack Developer, PHP Laravel Specialist, API Architect
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-gradient-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Nihal Ali - Best PHP Laravel Developer and Senior Full Stack Developer from Kerala India"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Hello! I'm Nihal Ali, a{" "}
                <span className="font-bold text-white">
                  Full Stack PHP/Laravel Developer
                </span>{" "}
                experienced in building scalable web applications for fintech, ERP,
                HRMS, and enterprise solutions. I specialize in Laravel, REST APIs,
                MySQL, JavaScript, React, Livewire, payment integrations, and
                responsive web development.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I'm experienced in developing secure, maintainable applications,
                optimizing performance, and delivering features end-to-end. Proficient
                in Laravel, MySQL, PostgreSQL, Redis, Docker, CI/CD, Microsoft Azure,
                and Linux server administration, with a strong emphasis on SOLID
                principles, design patterns, and clean, maintainable code.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-blue-500/50 pl-4">
                  <p className="text-gray-300 leading-relaxed">
                    Passionate about writing clean, maintainable code and continuously
                    improving system performance. From backend APIs to full-stack
                    solutions, I focus on delivering scalable, high-quality applications
                    that solve real-world problems.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Nihal Ali — Full Stack Developer
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-teal-400 text-lg">⚡</span>
                      <span className="text-gray-400">Building the future, one API at a time</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
