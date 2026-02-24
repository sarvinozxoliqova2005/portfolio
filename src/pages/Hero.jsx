import React from "react";
import { Download, MapPin, Globe } from "lucide-react";

const Hero = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="bg-slate-950 relative overflow-hidden">
      <div className="mx-auto px-6  max-w-7xl relative z-10 container">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 animate-soft">
          <div>
            <div className="flex flex-wrap gap-5 mb-6">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="text-[10px] tracking-[0.2em] text-white/55 uppercase hover:text-fuchsia-400 transition-all cursor-pointer font-bold"
              >
                About
              </a>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              A{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">
                creative frontend
              </span>{" "}
              <br />
              that ships fast.
            </h2>
          </div>

          <div className="hidden md:block text-sm text-white/60 max-w-md border-l border-white/10 pl-6">
            Clean code, real UX, measurable performance. Agile work, API
            integrations, and scalable UI architecture.
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-[28px] bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md animate-soft delay-1">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-52 text-center">
                <div className="rounded-md overflow-hidden border border-white/10 bg-white/5 aspect-square relative group">
                  <img
                    src="photo.jpg"
                    alt="Sarvinoz Xoliqova"
                    className="w-[210px] h-[210px] object-cover grayscale hover:grayscale transition duration-700"
                  />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-tight">
                  <span className="px-2 py-2 rounded-xl bg-white/5 border text-white border-white/10 flex items-center justify-center gap-1">
                    <MapPin size={10} /> Toshkent
                  </span>
                  <span className="px-2 py-2 rounded-xl bg-white/5 text-white border border-white/10 flex items-center justify-center gap-1">
                    <Globe size={10} /> Uzbekistan
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-white/70 leading-relaxed text-lg">
                  I’m{" "}
                  <span className="text-white font-semibold">
                    Sarvinoz 
                  </span>{" "}
                  — born in 2005. I build dynamic interfaces using{" "}
                  <span className="text-cyan-400 font-semibold">React</span>{" "}
                  and{" "}
                  <span className="text-cyan-400 font-semibold">
                    Tailwind
                  </span>
                  .
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React.js",
                    "Next.js",
                    "Redux",
                    "Zustand",
                    "Antd Designt",
                    "TansTack Query"
                  ].map((skill, i) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[11px] font-medium animate-soft delay-2`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-white/5 border border-white/10 p-6 sm:p-7 flex flex-col justify-between animate-soft delay-3">
            <div className="grid gap-3">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">
                  Email
                </p>
                <p className="font-semibold text-sm text-white">
                  sarvinoz@example.com
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">
                  Phone
                </p>
                <p className="font-semibold text-sm text-white">
                  +998 (93) 101 11 05
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">
                  Education
                </p>
                <p className="font-semibold text-sm text-cyan-400">
                  TSUOS Academic Lyceum
                </p>
              </div>
            </div>

            <a
              href="/Resume.pdf"
              download
              className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-gradient-to-r bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-bold hover:opacity-90 transition-all active:scale-95"
            >
              <Download size={18} /> <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
