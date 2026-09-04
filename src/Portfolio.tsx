import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen bg-[#EDEAE2] text-[#24261F] font-['Inter',sans-serif] text-[17px] leading-[1.6] antialiased scroll-smooth selection:bg-[#3F5D50] selection:text-white">
      
      {/* ===== ESTILOS GLOBALES & ANIMACIONES ===== */}
      <style>{`
        @keyframes rise {
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-rise {
          opacity: 0;
          transform: translateY(10px);
          animation: rise 700ms ease forwards;
        }
      `}</style>

      {/* ===== NAV ===== */}
      <header className="sticky top-0 z-10 bg-[#EDEAE2]/85 backdrop-blur-md border-b border-[#C9C4B5]">
        <nav className="max-w-[780px] mx-auto px-[6vw] md:px-0 py-4 flex items-center justify-between" aria-label="Primary">
          <a href="#top" className="font-['Fraunces',serif] text-[1.1rem] font-medium text-[#24261F] no-underline">EG</a>
          
          <ul className="hidden md:flex list-none gap-8 m-0 p-0">
            <li><a href="#about" className="text-[0.95rem] text-[#5B5C50] no-underline transition-colors duration-200 hover:text-[#3F5D50]">About</a></li>
            <li><a href="#experience" className="text-[0.95rem] text-[#5B5C50] no-underline transition-colors duration-200 hover:text-[#3F5D50]">Experience</a></li>
            <li><a href="#projects" className="text-[0.95rem] text-[#5B5C50] no-underline transition-colors duration-200 hover:text-[#3F5D50]">Projects</a></li>
            <li><a href="#contact" className="text-[0.95rem] text-[#5B5C50] no-underline transition-colors duration-200 hover:text-[#3F5D50]">Contact</a></li>
          </ul>
          
          <a className="no-underline text-[0.9rem] text-[#24261F] border-b border-[#24261F] pb-[1px]" href="assets/Ethan_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ===== HERO ===== */}
        <section className="max-w-[780px] mx-auto px-[6vw] md:px-0 py-[6rem] md:py-[5rem] pb-[4rem]">
          <div className="animate-rise">
            <p className="text-[0.95rem] text-[#2C4238] m-0 mb-[1.1rem]">
              Software Developer, based in Morelia, Mexico
            </p>
            <h1 className="font-['Fraunces',serif] text-[clamp(2.75rem,8vw,4.6rem)] leading-[1.02] tracking-[-0.01em] text-[#24261F] font-medium m-0 mb-[1.4rem]">
              Ethan Ginori
            </h1>
            <p className="text-[1.15rem] max-w-[52ch] text-[#5B5C50] m-0">
              I build full‑stack applications with React and TypeScript on the front end
              and Spring Boot on the back — from financial dashboards to training tools —
              and I care more about writing code that's easy to change than code that's clever.
            </p>
            
            <div className="flex gap-4 mt-8 flex-wrap">
              <a className="inline-block no-underline px-6 py-3 rounded-[3px] text-[0.95rem] transition-all duration-200 bg-[#3F5D50] text-[#EDEAE2] hover:bg-[#2C4238]" href="#projects">
                See my work
              </a>
              <a className="inline-block no-underline px-6 py-3 rounded-[3px] text-[0.95rem] transition-all duration-200 text-[#24261F] border border-[#C9C4B5] hover:border-[#3F5D50] hover:text-[#2C4238]" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
          <div className="h-[1px] bg-[#C9C4B5] max-w-[780px] mx-auto mt-[4rem] md:mt-[5rem]" aria-hidden="true"></div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="max-w-[780px] mx-auto px-[6vw] md:px-0 py-[5.5rem] md:py-[4rem] grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-['Fraunces',serif] text-[clamp(1.6rem,3vw,2.1rem)] text-[#24261F] font-medium m-0 mb-8">About</h2>
            <p className="max-w-[62ch] text-[#5B5C50] m-0 mb-6">
              I'm a Computer Systems Engineer graduating from Instituto Tecnológico de Morelia
              with a specialization in Software Development. Most of my hands-on experience
              comes from three complete projects taken from first line of code to production:
              a financial dashboard used by a real finance team, a cybersecurity training
              platform built with a university research group, and a full-stack microservices-based
              backend system for warehouse inventory management.
            </p>
            <p className="max-w-[62ch] text-[#5B5C50] m-0">
              I like the parts of the job that don't always show up in a demo — designing a
              database so it doesn't fight you later, writing an API that's obvious to use,
              automating the tedious steps out of a workflow. I'm looking for a junior role
              where I can keep building that judgment alongside people who've been doing this
              longer than I have.
            </p>
          </div>
          
          <dl className="m-0 border-t border-[#C9C4B5] pt-6 grid gap-6 content-start">
            <div>
              <dt className="text-[0.82rem] text-[#5B5C50] mb-1">Focus</dt>
              <dd className="m-0 font-['Fraunces',serif] text-[1.05rem]">React · TypeScript · Spring Boot</dd>
            </div>
            <div>
              <dt className="text-[0.82rem] text-[#5B5C50] mb-1">Education</dt>
              <dd className="m-0 font-['Fraunces',serif] text-[1.05rem]">B.S. Computer Systems Engineering, ITM — 3.72 GPA</dd>
            </div>
            <div>
              <dt className="text-[0.82rem] text-[#5B5C50] mb-1">Languages</dt>
              <dd className="m-0 font-['Fraunces',serif] text-[1.05rem]">Spanish (native), English (C2)</dd>
            </div>
            <div>
              <dt className="text-[0.82rem] text-[#5B5C50] mb-1">Availability</dt>
              <dd className="m-0 font-['Fraunces',serif] text-[1.05rem]">Open to remote &amp; relocation</dd>
            </div>
          </dl>
        </section>

        {/* ===== SKILLS ===== */}
        <section id="skills" className="max-w-[780px] mx-auto px-[6vw] md:px-0 py-[5.5rem] md:py-[4rem]">
          <h2 className="font-['Fraunces',serif] text-[clamp(1.6rem,3vw,2.1rem)] text-[#24261F] font-medium m-0 mb-8">What I work with</h2>
          <div className="grid gap-10 grid-cols-2 md:grid-cols-4">
            
            <div>
              <h3 className="font-sans text-[1rem] text-[#2C4238] font-semibold m-0 mb-[0.9rem]">Languages</h3>
              <ul className="list-none m-0 p-0 grid gap-2">
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">JavaScript</li>
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">TypeScript</li>
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">Python</li>
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">Java</li>
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">SQL</li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-[1rem] text-[#2C4238] font-semibold m-0 mb-[0.9rem]">Frameworks</h3>
              <ul className="list-none m-0 p-0 grid gap-2">
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">React</li>
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">Node.js</li>
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">Spring Boot</li>
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">FastAPI</li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-[1rem] text-[#2C4238] font-semibold m-0 mb-[0.9rem]">Databases</h3>
              <ul className="list-none m-0 p-0 grid gap-2">
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">MySQL</li>
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">PostgreSQL</li>
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">Prisma</li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-[1rem] text-[#2C4238] font-semibold m-0 mb-[0.9rem]">Tooling</h3>
              <ul className="list-none m-0 p-0 grid gap-2">
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">Docker</li>
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">Git</li>
                <li className="text-[0.95rem] text-[#5B5C50] pb-2 border-b border-[#C9C4B5]">CI/CD</li>
              </ul>
            </div>

          </div>
        </section>

        {/* ===== EXPERIENCE ===== */}
        <section id="experience" className="max-w-[780px] mx-auto px-[6vw] md:px-0 py-[5.5rem] md:py-[4rem]">
          <h2 className="font-['Fraunces',serif] text-[clamp(1.6rem,3vw,2.1rem)] text-[#24261F] font-medium m-0 mb-8">Experience</h2>
          <ol className="list-none m-0 p-0 border-t border-[#C9C4B5]">
            
            <li className="grid gap-[0.4rem] md:gap-8 md:grid-cols-[200px_1fr] py-[2.2rem] border-b border-[#C9C4B5]">
              <div className="text-[0.88rem] text-[#5B5C50] whitespace-nowrap">Jan 2026 — May 2026</div>
              <div>
                <h3 className="font-['Fraunces',serif] text-[1.15rem] font-medium m-0 mb-[0.6rem]">
                  Full Stack Developer, Intern <span className="font-sans text-[0.95rem] text-[#5B5C50] font-normal">· Zitheonsoft</span>
                </h3>
                <p className="max-w-[62ch] text-[#5B5C50] m-0">
                  Built an interactive financial dashboard in React and TypeScript for
                  capital tracking and annual reporting, used directly by the finance team.
                  Designed the Spring Boot backend and REST APIs behind it, supporting
                  dynamic report loading from multiple relational data sources, and managed
                  the database and test environments ahead of each deployment.
                </p>
                <a className="inline-block mt-[0.7rem] text-[0.9rem] text-[#2C4238] no-underline border-b border-[#3F5D50] hover:text-[#3F5D50]" href="https://github.com/ChapaRacer/Proyecto_Zitheonsoft_v2.2" target="_blank" rel="noopener noreferrer">
                  View repository
                </a>
              </div>
            </li>

            <li className="grid gap-[0.4rem] md:gap-8 md:grid-cols-[200px_1fr] py-[2.2rem] border-b border-[#C9C4B5]">
              <div className="text-[0.88rem] text-[#5B5C50] whitespace-nowrap">Dec 2024 — Jun 2025</div>
              <div>
                <h3 className="font-['Fraunces',serif] text-[1.15rem] font-medium m-0 mb-[0.6rem]">
                  Software Developer, Social Service <span className="font-sans text-[0.95rem] text-[#5B5C50] font-normal">· IIES-UNAM, Campus Morelia</span>
                </h3>
                <p className="max-w-[62ch] text-[#5B5C50] m-0">
                  Joined a multidisciplinary team to build a gamification tool that trains
                  students in cybersecurity fundamentals, implementing both backend and
                  frontend modules alongside design, testing, and deployment.
                </p>
              </div>
            </li>

          </ol>
        </section>

        {/* ===== PROJECTS ===== */}
        <section id="projects" className="max-w-[780px] mx-auto px-[6vw] md:px-0 py-[5.5rem] md:py-[4rem]">
          <h2 className="font-['Fraunces',serif] text-[clamp(1.6rem,3vw,2.1rem)] text-[#24261F] font-medium m-0 mb-8">Personal projects</h2>
          <ul className="list-none m-0 p-0 border-t border-[#C9C4B5]">
            
            <li className="py-[2rem] border-b border-[#C9C4B5]">
              <div className="flex flex-wrap items-baseline justify-between gap-[0.6rem] mb-[0.6rem]">
                <h3 className="font-['Fraunces',serif] text-[1.2rem] font-medium m-0">
                  <a className="no-underline text-[#24261F] bg-[linear-gradient(#3F5D50,#3F5D50)] bg-no-repeat [background-position:0_100%] [background-size:0%_1px] transition-[background-size] duration-200 ease-in pb-[2px] hover:[background-size:100%_1px] hover:text-[#2C4238]" href="https://github.com/ChapaRacer/distributed-inventory-system" target="_blank" rel="noopener noreferrer">
                    Distributed Inventory System
                  </a>
                </h3>
                <span className="text-[0.85rem] text-[#5B5C50]">Java · Spring Boot · SQL</span>
              </div>
              <p className="max-w-[62ch] text-[#5B5C50] m-0">
                A distributed system for tracking inventory across multiple nodes, built to explore consistency and coordination problems beyond a typical CRUD app.
              </p>
            </li>

            <li className="py-[2rem] border-b border-[#C9C4B5]">
              <div className="flex flex-wrap items-baseline justify-between gap-[0.6rem] mb-[0.6rem]">
                <h3 className="font-['Fraunces',serif] text-[1.2rem] font-medium m-0">
                  <a className="no-underline text-[#24261F] bg-[linear-gradient(#3F5D50,#3F5D50)] bg-no-repeat [background-position:0_100%] [background-size:0%_1px] transition-[background-size] duration-200 ease-in pb-[2px] hover:[background-size:100%_1px] hover:text-[#2C4238]" href="https://github.com/ChapaRacer/gameverse" target="_blank" rel="noopener noreferrer">
                    Gameverse
                  </a>
                </h3>
                <span className="text-[0.85rem] text-[#5B5C50]">JavaScript</span>
              </div>
              <p className="max-w-[62ch] text-[#5B5C50] m-0">
                A JavaScript application built to sharpen fundamentals in state management and interactive UI logic outside of a framework's guardrails.
              </p>
            </li>

            <li className="py-[2rem] border-b border-[#C9C4B5]">
              <div className="flex flex-wrap items-baseline justify-between gap-[0.6rem] mb-[0.6rem]">
                <h3 className="font-['Fraunces',serif] text-[1.2rem] font-medium m-0">
                  <a className="no-underline text-[#24261F] bg-[linear-gradient(#3F5D50,#3F5D50)] bg-no-repeat [background-position:0_100%] [background-size:0%_1px] transition-[background-size] duration-200 ease-in pb-[2px] hover:[background-size:100%_1px] hover:text-[#2C4238]" href="https://github.com/ChapaRacer" target="_blank" rel="noopener noreferrer">
                    More on GitHub
                  </a>
                </h3>
                <span className="text-[0.85rem] text-[#5B5C50]">Python · Automation</span>
              </div>
              <p className="max-w-[62ch] text-[#5B5C50] m-0">
                Including a set of Python scripts using BeautifulSoup for automated metadata extraction from web platforms.
              </p>
            </li>

          </ul>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="max-w-[780px] mx-auto px-[6vw] md:px-0 py-[5.5rem] md:py-[4rem]">
          <h2 className="font-['Fraunces',serif] text-[clamp(1.6rem,3vw,2.1rem)] text-[#24261F] font-medium m-0 mb-8">Get in touch</h2>
          <p className="max-w-[62ch] text-[#5B5C50] m-0">
            I'm currently looking for a junior full-stack role, open to remote work or
            relocation. If any of the above is a fit, I'd like to hear from you.
          </p>
          <ul className="list-none m-0 mt-8 p-0 grid gap-[1.1rem]">
            
            <li className="grid grid-cols-[100px_1fr] gap-4 items-baseline pb-4 border-b border-[#C9C4B5]">
              <span className="text-[0.85rem] text-[#5B5C50]">Email</span>
              <a className="no-underline text-[#24261F] border-b border-transparent transition-colors duration-200 hover:border-[#3F5D50] hover:text-[#2C4238]" href="mailto:ethan.ginori@gmail.com">
                ethan.ginori@gmail.com
              </a>
            </li>
            
            <li className="grid grid-cols-[100px_1fr] gap-4 items-baseline pb-4 border-b border-[#C9C4B5]">
              <span className="text-[0.85rem] text-[#5B5C50]">LinkedIn</span>
              <a className="no-underline text-[#24261F] border-b border-transparent transition-colors duration-200 hover:border-[#3F5D50] hover:text-[#2C4238]" href="https://linkedin.com/in/ethan-ginori" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/ethan-ginori
              </a>
            </li>
            
            <li className="grid grid-cols-[100px_1fr] gap-4 items-baseline pb-4 border-b border-[#C9C4B5]">
              <span className="text-[0.85rem] text-[#5B5C50]">GitHub</span>
              <a className="no-underline text-[#24261F] border-b border-transparent transition-colors duration-200 hover:border-[#3F5D50] hover:text-[#2C4238]" href="https://github.com/ChapaRacer" target="_blank" rel="noopener noreferrer">
                github.com/ChapaRacer
              </a>
            </li>
            
            <li className="grid grid-cols-[100px_1fr] gap-4 items-baseline pb-4 border-b border-[#C9C4B5]">
              <span className="text-[0.85rem] text-[#5B5C50]">Location</span>
              <span className="text-[#24261F]">Morelia, Mexico</span>
            </li>

          </ul>
        </section>
      </main>

      <footer className="border-t border-[#C9C4B5] py-[2.5rem] px-[6vw] text-center">
        <p className="m-0 text-[0.85rem] text-[#5B5C50]">
          Ethan Alfonso Ginori Rodríguez — © {year}
        </p>
      </footer>
    </div>
  );
}