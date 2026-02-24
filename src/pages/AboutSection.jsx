import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Send,
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  MousePointer2,
  Globe,
  User,
} from "lucide-react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { GrContact } from "react-icons/gr";

const AboutSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "React Engineer",
    "UI / UX Builder",
    "Tailwind Wizard",
    "Api Integrator",
    "Frontend Developer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <div className="bg-[#020617]">
      <section>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="min-h-[85vh] text-white font-sans selection:bg-cyan-500/30 overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full"></div>
          </div>

          <motion.nav
            variants={itemVariants}
            className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto"
          >
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform">
                <Zap size={20} fill="white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Sarvinoz
                <span className="text-gray-500 text-sm font-normal block leading-3">
                  Frontend • React
                </span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              {["About", "Services", "Projects", "Blog", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>

            <button className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-sm font-semibold hidden md:flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95 backdrop-blur-md">
              <Send size={16} className="text-cyan-400" />
              Let's talk
            </button>
          </motion.nav>

          <main className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-12 lg:pt-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-6"
              >
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                Available for projects
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl  max-[900px]:text-[40px] max-[600px]:text-[32px] font-black mb-6 leading-[1.1] tracking-tight"
              >
                I craft{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  premium UI
                </span>{" "}
                with React.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-[32px] max-[900px]:text-[24px] max-[600px]:text-[18px] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                I'm <span className="text-white font-semibold">Sarvinoz</span> —
                frontend developer creating fast, responsive, and beautiful web
                applications.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
              >
                <a
                  href="#experience"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 max-[600px]:px-5 max-[600px]:py-3 max-[600px]:text-[14px] rounded-2xl font-bold shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all"
                >
                  See Projects
                </a>

                <a
                  href="#about"
                  className="w-30 h-14 flex items-center justify-center gap-2 max-[600px]:w-25 max-[600px]:h-12 max-[600px]:text-[12px] bg-white/5 border border-white/10 rounded-2xl  hover:bg-white/10 transition-al font-bold text-white"
                >
                  <IoPersonOutline />
                  About me
                </a>

                <a
                  href="#contact"
                  className="w-30 h-14 flex items-center justify-center gap-2 max-[600px]:w-25 max-[600px]:h-12 max-[600px]:text-[12px] bg-white/5 border border-white/10 rounded-2xl  hover:bg-white/10 transition-al font-bold text-white"
                >
                  <GrContact />
                  Contact
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-[600px]:px-4 max-[600px]:py-2"
              >
                {[
                  { label: "Experience", val: "1+ months" },
                  { label: "Focus", val: "React" },
                  { label: "Stack", val: "UI/UX" },
                  { label: "Performance", val: "Fast" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">
                      {stat.label}
                    </div>
                    <div className="text-lg font-bold text-white">
                      {stat.val}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex-1 w-full max-w-lg lg:max-w-none relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[32px] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-[#0F172A]/80 border border-white/10 rounded-[32px] backdrop-blur-xl p-8 shadow-2xl overflow-hidden">
                <div className="flex gap-1.5 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>

                <div className="mb-8 ">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-2">
                    Coding...
                  </label>
                  <div className="text-3xl max-[900px]:text-2xl max-[600px]:text-xl font-bold border-l-2 border-cyan-400 pl-4 h-10 flex items-center min-w-[200px]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                      {text}
                    </span>
                    <span className="animate-pulse ml-1 text-cyan-400">_</span>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-3">
                    Stack
                  </label>
                  <div className="flex flex-wrap gap-2 text-[11px]">
                    {[
                      "React.js",
                      "Next.js",
                      "Tailwind",
                      "TypeScript",
                      "Zustand",
                      "Redux",
                      "Api / Axios",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium hover:bg-cyan-500/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {[
                    { Icon: Github, link: "https://github.com/Sarvinoz05" },
                    {
                      Icon: Instagram,
                      link: "https://instagram.com/_seyran11_",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgb(6, 182, 212)",
                      }}
                      className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:text-white transition-all cursor-pointer"
                    >
                      <social.Icon size={18} />
                    </motion.a>
                  ))}
                </div>

                <div className="absolute top-10 right-[-10px] w-20 h-20 bg-cyan-400/10 rounded-2xl backdrop-blur-md border border-white/10 rotate-12 flex items-center justify-center animate-bounce">
                  <MousePointer2 size={28} className="text-cyan-400" />
                </div>
              </div>
            </motion.div>
          </main>
        </motion.div>
      </section>

      <section>
        <Hero />
      </section>
      <section
        id="services"
        className="py-10 bg-[#020617] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              Services
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              What I can build for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                your business
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Modern landing pages, admin dashboards, scalable UI components,
              and performance-focused frontend.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Frontend Tutor",
                desc: "Teaching fundamentals and real-world practices: components, hooks, state, styling, and API integration.",
                icon: <Globe size={20} className="text-cyan-400" />,
                tags: ["React", "Tailwind"],
              },
              {
                title: "Admin Panel / Dashboard",
                desc: "Complex dashboards for CRM/ERP/LMS: tables, filters, charts UI, permissions, roles, and scalable structure.",
                icon: <User size={20} className="text-cyan-400" />,
                tags: ["Data UI", "UX"],
              },
              {
                title: "Performance & SEO",
                desc: "Fast load times, responsive layouts, clean markup, and conversion-focused UI. Lighthouse-friendly builds.",
                icon: <Zap size={20} className="text-cyan-400" />,
                tags: ["Speed", "SEO"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
                  },
                }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[32px] blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative h-full bg-[#0F172A]/50 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl flex flex-col items-start transition-all duration-300 group-hover:bg-[#0F172A]/80">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <div className="flex gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-300 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="experience" className="py-10 bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16"
          >
            <div>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                Experience
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Project types I{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  worked on
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
                Jamoaviy loyihalarda qatnashib, turli tizimlar uchun frontend
                qismini ishlab chiqqanman.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all shadow-xl"
            >
              <MessageCircle size={18} />
              Let's work
            </motion.button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3  gap-8"
          >
            {[
              {
                title: "CRM / Admin Panel",
                role: "Role: Tables, forms, dashboard UI, API integration",
                tech: ["React", "Redux Toolkit", "Ant Design", "REST API"],
                previewText: "CRM System",
              },
              {
                title: "Learning Management System",
                role: "Role: Video pages, lesson UI, auth, responsive layout",
                tech: ["React", "SCSS", "JWT Auth", "Axios"],
                previewText: "LMS Platform",
              },
              {
                title: "Bot Admin Dashboard",
                role: "Role: Bot users table, statistics UI, filtering",
                tech: ["React", "Chart UI", "REST API", "Responsive"],
                previewText: "Telegram Bot Panel",
              },
              {
                title: "Service Booking Web App",
                role: "Role: Auth pages, calendar UI, API integration",
                tech: ["React", "Calendar", "Axios", "JWT"],
                previewText: "Web Application",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="group rounded-[32px] bg-[#0F172A]/50 border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="aspect-[16/10] bg-white/5 flex items-center justify-center relative border-b border-white/5 group-hover:bg-white/10 transition-colors">
                  <span className="text-white font-medium text-sm tracking-widest uppercase">
                    {project.previewText}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-6 leading-relaxed">
                    {project.role}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-bold text-gray-400 hover:text-white transition-colors cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="blog" className="py-10 bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              Blog
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Notes about{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                UI engineering
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Example blog section. Later you can dynamically load posts or
              connect CMS.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                category: "UI Framework",
                title: "Bootstrap vs Tailwind",
                desc: 'Why Tailwind feels like "design system in code" and how to ship faster.',
                readTime: "5 min read",
                badge: "New",
                badgeColor: "text-cyan-400",
              },
              {
                category: "Performance",
                title: "Make UI feel instant",
                desc: "Preload, lazy-load, and create smooth transitions that users love.",
                readTime: "6 min read",
                badge: "Hot",
                badgeColor: "text-blue-500",
              },
              {
                category: "Architecture",
                title: "Scalable React folders",
                desc: "A clean approach to structure apps so features stay modular.",
                readTime: "7 min read",
                badge: "Pro",
                badgeColor: "text-indigo-400",
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#0F172A]/40 border border-white/5 rounded-[32px] p-8 hover:bg-[#0F172A]/80 transition-all duration-300 hover:border-white/10 flex flex-col h-full cursor-pointer"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span
                    className={`text-[10px] font-black uppercase tracking-tighter ${post.badgeColor}`}
                  >
                    {post.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {post.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-[11px] text-white font-medium">
                    {post.readTime}
                  </span>
                  <motion.span
                    initial={{ x: -5, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="text-cyan-400 text-xs font-bold"
                  >
                    Read more →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      </section>

      <section
        id="contact"
        className="py-10 bg-[#020617] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#0F172A]/50 border border-white/10 rounded-[32px] p-10 backdrop-blur-md"
          >
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              Contact
            </p>
            <h2 className="text-4xl max-[600px]:text-3xl font-black text-white mb-8">
              Let's build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                amazing.
              </span>
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8 ">
              {[
                { label: "Location", val: "Uzbekistan • Tashkent" },
                { label: "Email", val: "seyranseyran120@gmail.com" },
                { label: "Telegram", val: "s_noz1_o5" },
                { label: "GitHub", val: "Sarvinoz05" },
              ].map((info, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                  className="p-4 bg-white/5 rounded-2xl border border-white/5 transition-colors "
                >
                  <p className="text-gray-500 text-[10px] uppercase mb-1 ">
                    {info.label}
                  </p>
                  <p className="text-white text-sm truncate max-[600px]:text-[10px]">{info.val}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-[#0F172A]/50 border border-white/10 rounded-[32px] p-10 backdrop-blur-md"
          >
            <p className="text-gray-500 text-[10px] font-bold uppercase mb-4">
              Message
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-white/5 border border-white/10 rounded-xl p-4 max-[600px]:text-[14px] text-white outline-none focus:border-cyan-400 transition-all focus:bg-white/10"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white/5 border border-white/10  max-[600px]:text-[10px]  rounded-xl p-4 text-white outline-none focus:border-cyan-400 transition-all focus:bg-white/10"
                />
              </div>
              <textarea
                placeholder="Write your message..."
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-cyan-400 focus:bg-white/10 resize-none transition-all"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-white text-[10px] mt-12 pb-8 relative z-10"
        >
          © 2026 Sarvinoz Xoliqova. All Rights Reserved.
        </motion.footer>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      </section>
    </div>
  );
};

export default AboutSection;
