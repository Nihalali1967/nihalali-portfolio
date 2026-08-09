import HeroImg from "@/assets/images/hero.jpeg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full Stack Developer, PHP Laravel Specialist, API Architect
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
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
              <p className="text-white">
                Hello! I'm Nihal Ali, a{" "}
                <span className="font-bold text-white">
                  Full Stack PHP/Laravel Developer
                </span>{" "}
                experienced in building scalable web applications for fintech, ERP,
                HRMS, and enterprise solutions. I specialize in Laravel, REST APIs,
                MySQL, JavaScript, React, Livewire, payment integrations, and
                responsive web development.
              </p>
              <p className="text-white">
                I'm experienced in developing secure, maintainable applications,
                optimizing performance, and delivering features end-to-end. Proficient
                in Laravel, MySQL, PostgreSQL, Redis, Docker, CI/CD, Microsoft Azure,
                and Linux server administration, with a strong emphasis on SOLID
                principles, design patterns, and clean, maintainable code.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
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
                      <span className="text-white">Building the future, one API at a time</span>
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
