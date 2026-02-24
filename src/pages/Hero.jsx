import React, { useState, useEffect } from "react";
import { Download, MapPin, Globe, Menu, X } from "lucide-react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Blog", id: "blog" },
   { name: "Contact", id: "contact" }
  ];

  return (
    <section id="about" className="bg-slate-950 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="md:hidden fixed top-6 right-0 z-[50]">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-white active:scale-90 transition-all shadow-xl"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className={`fixed inset-0 z-[90] bg-slate-950 flex flex-col items-center justify-center gap-10 transition-all duration-500 md:hidden ${
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        {navLinks.map((link, index) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleScroll(e, link.id)}
            className={`text-4xl font-bold text-white hover:text-cyan-400 max-[600px]:text-2xl transition-all duration-300 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="mx-auto px-6 max-w-7xl relative z-10 container">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 animate-soft">
          <div>
            <div className="hidden md:flex flex-wrap gap-5 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className="text-[10px] tracking-[0.2em] text-white/55 uppercase hover:text-cyan-400 transition-all cursor-pointer font-bold"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <h2 className="text-4xl max-[600px]:text-3xl font-extrabold text-white leading-tight">
              A <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">creative frontend</span> <br /> that ships fast.
            </h2>
          </div>

          <div className="hidden md:block text-sm text-white/60 max-w-md border-l border-white/10 pl-6">
            Clean code, real UX, and scalable UI architecture. Specialized in React.js and modern web technologies.
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-[32px] bg-white/5 border border-white/10 p-6 sm:p-10 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              <div className="w-full sm:w-52">
                <div className="rounded-2xl overflow-hidden border border-white/10 aspect-square">
                  <img src="photo.jpg" alt="Sarvinoz" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] text-white font-bold uppercase">
                  <span className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-1"><MapPin size={10}/> Tashkent</span>
                  <span className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-1"><Globe size={10}/> Uzbekistan</span>
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <p className="text-white/70 text-lg max-[600px]:text-sm leading-relaxed">
                  I’m <span className="text-white font-semibold ">Sarvinoz Xoliqova</span> — a Junior Frontend Developer born in 2005. I build dynamic interfaces using <span className="text-cyan-400 font-bold">React.js</span> and <span className="text-cyan-400 font-bold">Tailwind CSS</span>.
                </p>
                <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-2">
                  {["React.js", "Next.js", "TypeScript", "Redux", "Zustand", "Antd Design", "TanStack Query"].map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-white/80">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] bg-white/5 border border-white/10 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[10px] text-white/40 uppercase font-bold mb-1">Email</p>
                <p className="font-semibold text-white text-sm">sarvinoz@example.com</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-[10px] text-white/40 uppercase font-bold mb-1">Education</p>
                <p className="font-semibold text-sm text-cyan-400 uppercase">IT TIME ACADEMY</p>
              </div>
            </div>
            <a href="/Resume.pdf" download className="mt-6 flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold active:scale-95 transition-all shadow-lg shadow-cyan-500/10">
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;