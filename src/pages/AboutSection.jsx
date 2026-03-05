import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Instagram,
  Palette,
  Code2,
  Mail,
  MessageCircle,
  Send,
  Zap,
  MapPin,
} from "lucide-react";
import { MdDashboard } from "react-icons/md";
import { PiBagFill, PiStudentFill } from "react-icons/pi";
import { GiShoppingBag } from "react-icons/gi";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { RiSettings3Fill } from "react-icons/ri";

const PortfolioPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1E]/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-[1400px] w-full mx-auto p-6 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white"
          >
            LOGO
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "Services", "About me", "Portfolio", "Contact me"].map(
              (item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </motion.a>
              ),
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-400 hover:bg-cyan-500 text-[#0A0F1E] px-6 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-cyan-500/20"
          >
            Hire Me
          </motion.button>
        </div>
      </motion.nav>

      <section id="home" className="pt-32 pb-20 px-6 bg-[#0A0F1E]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-[1400px] w-full p-6 mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-2">
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl text-gray-400 font-light"
                >
                  Hi I am
                </motion.h2>
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl font-bold text-white"
                >
                  Sarvinoz
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-3xl md:text-4xl text-cyan-400 font-medium"
                >
                  Frontend Developer
                </motion.p>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-400 hover:bg-cyan-500 cursor-pointer text-[#0A0F1E] px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/20"
                >
                  Get in Touch
                </motion.button>

                <motion.a
                  href="/Sarvinoz_CV.pdf" 
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-lg max-[600px]:text-sm gap-2 text-white hover:text-cyan-400 cursor-pointer group px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/20 bg-white/5 hover:bg-white/10"
                >
                  <Download
                    size={20}
                    className="group-hover:translate-y-1 text-lg max-[600px]:text-sm transition-transform"
                  />
                  Download CV
                </motion.a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center  gap-4 pt-4"
              >
                {[
                  {
                    Icon: Github,
                    link: "https://github.com/Sarvinoz05",
                    color: "hover:text-white",
                  },
                  { Icon: Linkedin, link: "#", color: "hover:text-blue-400" },
                  {
                    Icon: Instagram,
                    link: "https://instagram.com/_seyran11_",
                    color: "hover:text-pink-400",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, x: 2 }}
                    className={`text-gray-500 ${social.color} transition-colors cursor-pointer`}
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-2  cursor-pointer gap-6">
                {[
                  { value: "1+ months", label: "Experience" },
                  { value: "4+", label: "Projects Done" },
                  { value: "100%", label: "Client Satisfaction" },
                  { value: "24/7", label: "Support" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
                  >
                    <div className="text-3xl max-[900px]:text-2xl max-[600px]:text-xl font-bold text-cyan-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="py-20 px-6 bg-[#0F1524]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-[1400px] w-full p-6 mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              felis euismod ultricies. Integer nec orci sed risus dignissim
              sodales. Praesent ac massa id nisi porta volutpat.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 cursor-pointer">
            {[
              {
                title: "Frontend Development",
                desc: "React, Next.js, TypeScript – clean code and modern architecture.",
                icon: <Code2 size={40} />,
                color: "from-blue-400 to-cyan-400",
              },
              {
                title: "UI/UX Implementation",
                desc: "Pixel-perfect designs, smooth animations, and responsive layouts.",
                icon: <Palette size={40} />,
                color: "from-purple-400 to-pink-400",
              },
              {
                title: "Performance & SEO",
                desc: "Fast loading times, optimized Core Web Vitals, and search engine friendly.",
                icon: <Zap size={40} />,
                color: "from-orange-400 to-red-400",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}
                />
                <div className="relative bg-[#1A2335] rounded-2xl p-8 text-center border border-white/5 group-hover:border-white/10 transition-all duration-500">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="aboutme" className="py-20 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-[1400px] w-full p-6 mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-[1400px] w-full mx-auto bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-55  rounded-2xl overflow-hidden border-2 border-cyan-400/30 flex-shrink-0">
                <img
                  src="/photo.jpg"
                  alt="Sarvinoz Xoliqova"
                  className="w-full h-full max-[600px]:w-64 max-[600px]:h-64 cursor-pointer object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-gray-300 text-lg max-[600px]:text-sm leading-relaxed mb-6">
                  I am{" "}
                  <span className="text-cyan-400 font-semibold">Sarvinoz</span>,
                  a frontend developer specializing in creating modern,
                  responsive web applications. My expertise lies in translating
                  design concepts into clean, functional code using HTML, CSS,
                  JavaScript, React, TypeScript and modern frameworks like
                  Next.js.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 max-[600px]:text-sm ">
                  I have experience working with REST APIs, state management
                  libraries (Redux, Zustand), and responsive design principles
                  to deliver seamless user experiences. In addition to my
                  technical skills, I possess excellent communication and
                  problem-solving abilities.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-[600px]:text-sm ">
                  I am passionate about staying up-to-date with the latest
                  frontend trends and technologies, and I am always eager to
                  learn new things. If you are looking for a creative and
                  detail-oriented frontend developer, I would love to hear from
                  you.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center cursor-pointer gap-2 bg-cyan-400 hover:bg-cyan-500 text-[#0A0F1E] px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-cyan-500/20"
                >
                  <Download size={18} /> Download CV
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-[#0F1524]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
            <p className="text-gray-400 max-w-[1400px] w-full p-6 mx-auto">
              "Projects developed by me"
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
            {[
              {
                title: "CRM Dashboard",
                desc: "React, Redux, Ant Design",
                icon: <MdDashboard />,
                color: "from-blue-400 to-cyan-400",
              },
              {
                title: "LMS Platform",
                desc: "Next.js, TypeScript, Tailwind",
                icon: <PiStudentFill />,
                color: "from-purple-400 to-pink-400",
              },
              {
                title: "E-commerce",
                desc: "React, Zustand, Stripe",
                icon: <GiShoppingBag />,
                color: "from-green-400 to-emerald-400",
              },
              {
                title: "Booking System",
                desc: "React, Calendar API, Axios",
                icon: <IoCalendarNumberSharp />,
                color: "from-orange-400 to-red-400",
              },
              {
                title: "Admin Panel",
                desc: "React, Redux Toolkit, AntD",
                icon: <RiSettings3Fill />,
                color: "from-indigo-400 to-blue-400",
              },
              {
                title: "Portfolio Website",
                desc: "React, Framer Motion, Tailwind",
                icon: <PiBagFill />,
                color: "from-cyan-400 to-teal-400",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}
                />
                <div className="relative bg-[#1A2335] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-500">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="text-xs text-cyan-400">🔗 Live Demo</span>
                    <span className="text-xs text-gray-600">|</span>
                    <span className="text-xs text-purple-400">📁 Code</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="py-20 px-6 bg-[#0A0F1E]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-[1400px] w-full mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get in touch with me
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Chap qism - Contact Info */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Info
                </h3>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                      <Mail size={20} className="text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <a
                        href="mailto:seyranseyran120@gmail.com"
                        className="text-white hover:text-cyan-400 transition-colors break-all"
                      >
                        seyranseyran120@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                      <MessageCircle size={20} className="text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-400 mb-1">Telegram</p>
                      <a
                        href="https://t.me/s_noz1_o5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-cyan-400 transition-colors break-all"
                      >
                        @s_noz1_o5
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                      <Github size={20} className="text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-400 mb-1">GitHub</p>
                      <a
                        href="https://github.com/Sarvinoz05"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-cyan-400 transition-colors break-all"
                      >
                        @Sarvinoz05
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                      <Instagram size={20} className="text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-400 mb-1">Instagram</p>
                      <a
                        href="https://instagram.com/_seyran11_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-cyan-400 transition-colors break-all"
                      >
                        @_seyran11_
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                      <MapPin size={18} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">Tashkent, Uzbekistan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h3>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Your Name
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        required
                        type="text"
                        className="w-full bg-[#0F1524] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">
                        Your Email
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        required
                        type="email"
                        className="w-full bg-[#0F1524] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Subject
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      required
                      type="text"
                      className="w-full bg-[#0F1524] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      placeholder="Write your message..."
                      required
                      rows="4"
                      className="w-full bg-[#0F1524] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400 transition-all resize-none"
                    ></motion.textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-[#0A0F1E] px-8 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                  >
                    <Send size={18} /> Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="py-8 px-6 border-t border-white/5"
      >
        <div className="max-w-[1400px] w-full p-6 mx-auto text-center">
          <p className="text-white font-bold text-sm">
            © {new Date().getFullYear()} Sarvinoz Xoliqova
          </p>
          <p className="text-white font-bold text-xs mt-2">
            Frontend Developer | React | Next.js | TypeScript
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default PortfolioPage;
