import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FiMonitor,
  FiSmartphone,
  FiLayout,
  FiCloud,
  FiServer,
  FiUsers,
  FiArrowRight,
  FiCheck,
  FiArrowDown,
} from "react-icons/fi";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const textReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// New animations
const parentFloat = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const glowPulse = {
  initial: { boxShadow: "0 0 0 0 rgba(0, 174, 239, 0)" },
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(0, 174, 239, 0)",
      "0 0 20px 5px rgba(0, 174, 239, 0.5)",
      "0 0 0 0 rgba(0, 174, 239, 0)",
    ],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.2 },
    },
  },
};

const Home = () => {
  // Ref for scroll reveal animations
  const revealRefs = useRef([]);
  revealRefs.current = [];

  // Add to refs for scroll animations
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // Handle scroll reveal animations
  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealRefs.current.forEach((ref) => scrollObserver.observe(ref));

    return () => {
      if (revealRefs.current) {
        revealRefs.current.forEach((ref) => {
          if (ref) scrollObserver.unobserve(ref);
        });
      }
    };
  }, []);

  // Scroll to next section
  const scrollToNext = () => {
    const servicesSection = document.getElementById("trusted-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Innovoid Labs | Innovative Software Solutions</title>
        <meta
          name="description"
          content="Innovoid Labs is a cutting-edge software agency specializing in web development, mobile apps, UI/UX design, cloud solutions, and DevOps services."
        />
        <meta
          name="keywords"
          content="software development, web development, mobile apps, UI/UX design, cloud solutions, DevOps"
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-44 md:pb-24 bg-gradient-to-br from-primary via-deepBlue to-midnight text-white overflow-hidden relative min-h-screen flex items-center">
          {/* 3D Grid Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute w-full h-full">
              <svg
                className="absolute opacity-20"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse">
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 2 }}
              className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-purple/30 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/4 blur-3xl"></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
              className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-accent/30 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/4 blur-3xl"></motion.div>
          </div>

          {/* Animated Particles */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  opacity: Math.random() * 0.5 + 0.3,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  y: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                  x: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="lg:col-span-7 lg:pr-8">
                <motion.div
                  className="mb-6 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}>
                  <motion.span
                    className="px-4 py-2 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full inline-block border border-white/20"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.15)",
                    }}>
                    Innovating For The Future
                  </motion.span>
                </motion.div>

                <div className="overflow-hidden">
                  <motion.h1
                    custom={0}
                    variants={textReveal}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    <span className="block mb-2">Transforming Ideas</span>
                    <span className="text-gradient bg-gradient-to-r from-accent via-mint to-teal inline-block">
                      Into Digital Reality
                    </span>
                  </motion.h1>
                </div>

                <div className="overflow-hidden">
                  <motion.p
                    custom={1}
                    variants={textReveal}
                    initial="hidden"
                    animate="visible"
                    className="text-base md:text-lg mb-8 text-gray-300 max-w-xl leading-relaxed">
                    We design and develop innovative software solutions that
                    help businesses grow, scale, and transform in the digital
                    age.
                  </motion.p>
                </div>

                <motion.div
                  custom={2}
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="bg-white text-primary px-8 py-4 rounded-full font-medium text-center block shadow-lg hover:shadow-xl transition-all duration-300">
                      Get a Free Consultation
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/portfolio"
                      className="border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 px-8 py-4 rounded-full font-medium text-center flex items-center justify-center group">
                      View Our Work
                      <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          repeatDelay: 0.5,
                        }}
                        className="ml-2">
                        <FiArrowRight />
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* New Feature Tags */}
                <motion.div
                  variants={fadeIn}
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  className="mt-10 flex flex-wrap gap-3">
                  {[
                    "Web Apps",
                    "Mobile",
                    "UI/UX",
                    "Custom Software",
                    "AI Solutions",
                  ].map((tag, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/10"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(255,255,255,0.2)",
                      }}>
                      {tag}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                variants={parentFloat}
                initial="initial"
                animate="animate"
                className="hidden lg:block lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative perspective-800">
                  <motion.div
                    variants={glowPulse}
                    initial="initial"
                    animate="animate"
                    className="absolute -inset-3 bg-accent/20 rounded-3xl blur-xl opacity-70 z-0"></motion.div>

                  {/* 3D Card Effect */}
                  <div className="relative w-full h-[460px] bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform-style-3d rotate-y-8 shadow-3d hover:rotate-y-0 transition-transform duration-700">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-purple/20 to-deepBlue/20 rounded-xl shadow-glow flex items-center justify-center overflow-hidden relative backdrop-blur-sm transform-style-3d hover:scale-[1.02] transition-transform duration-700">
                      <div className="absolute inset-0 bg-gradient-shine animate-shine"></div>
                      <div className="p-8 text-center z-10">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.7, duration: 0.6 }}
                          className="w-24 h-24 bg-gradient-to-r from-accent/20 to-purple/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-glow">
                          <span className="text-4xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                            IL
                          </span>
                        </motion.div>
                        <motion.h3
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.8, duration: 0.6 }}
                          className="text-3xl font-bold text-white mb-4">
                          Innovoid<span className="text-accent">Labs</span>
                        </motion.h3>
                        <motion.p
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.9, duration: 0.6 }}
                          className="text-gray-300 mb-8">
                          Transforming businesses through technology
                        </motion.p>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 1, duration: 0.6 }}
                          className="flex flex-wrap justify-center gap-3">
                          {["Web", "Mobile", "Design", "Cloud"].map(
                            (tag, i) => (
                              <motion.span
                                key={i}
                                whileHover={{
                                  scale: 1.1,
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                }}
                                className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium border border-white/10 transition-all duration-300">
                                {tag}
                              </motion.span>
                            )
                          )}
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.3, duration: 0.6 }}
                          className="absolute top-8 right-8 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                          <motion.div
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-full h-full">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 100 100"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <motion.circle
                                cx="50"
                                cy="50"
                                r="45"
                                stroke="rgba(255,255,255,0.5)"
                                strokeWidth="0.5"
                                strokeDasharray="1 5"
                                variants={drawPath}
                                initial="hidden"
                                animate="visible"
                              />
                            </svg>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              onClick={scrollToNext}
              whileHover={{ y: 5 }}
              whileTap={{ scale: 0.9 }}>
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium mb-2 text-white/70">
                  Scroll Down
                </span>
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}>
                  <FiArrowDown className="text-2xl text-white/70" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Hero Wave Divider */}
          <div className="absolute w-full bottom-0 left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 200"
              className="w-full h-auto translate-y-1 fill-gray-50">
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                d="M0,160L48,160C96,160,192,160,288,154.7C384,149,480,139,576,122.7C672,107,768,85,864,85.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></motion.path>
            </svg>
          </div>
        </section>

        {/* Trusted By Section */}
        <section id="trusted-section" className="py-16 bg-gray-50 relative">
          <div className="container-custom max-w-[90%] lg:max-w-[85%] mx-auto px-8">
            <div className="reveal-on-scroll" ref={addToRefs}>
              <h2 className="text-center text-gray-500 text-lg mb-8">
                Trusted By Innovative Companies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                    <div className="h-12 bg-gray-200 rounded-md w-24 md:w-32"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section py-20 overflow-hidden">
          <div className="container-custom max-w-[90%] lg:max-w-[85%] mx-auto px-8">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll"
              ref={addToRefs}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 inline-block">
                What We Do
              </span>
              <h2 className="heading-lg mb-4">Our Innovative Services</h2>
              <p className="text-gray-600 text-lg">
                We deliver end-to-end digital solutions that address complex
                business challenges
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}>
              <ServiceCard
                icon={<FiMonitor />}
                title="Web Development"
                description="We build responsive, scalable and high-performance web applications using modern technologies."
                delay={0}
              />
              <ServiceCard
                icon={<FiSmartphone />}
                title="Mobile Applications"
                description="Native and cross-platform mobile apps that deliver exceptional user experiences on any device."
                delay={0.1}
              />
              <ServiceCard
                icon={<FiLayout />}
                title="UI/UX Design"
                description="User-centered design that enhances engagement, usability and conversion rates."
                delay={0.2}
              />
              <ServiceCard
                icon={<FiCloud />}
                title="Cloud Solutions"
                description="Scalable, secure and cost-effective cloud infrastructure and deployment solutions."
                delay={0.3}
              />
              <ServiceCard
                icon={<FiServer />}
                title="DevOps"
                description="Automating and integrating processes between software development and IT operations."
                delay={0.4}
              />
              <ServiceCard
                icon={<FiUsers />}
                title="IT Consultation"
                description="Strategic technology consulting to help businesses leverage the latest innovations."
                delay={0.5}
              />
            </motion.div>

            <div className="text-center mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Link
                  to="/services"
                  className="btn-primary inline-flex items-center">
                  Explore All Services
                  <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="section py-24 bg-gray-50 relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-lavender/10 rounded-blob-2 -translate-y-1/4 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint/10 rounded-blob -translate-x-1/4 translate-y-1/4"></div>

          <div className="container-custom max-w-[90%] lg:max-w-[85%] mx-auto px-8 relative z-10">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll"
              ref={addToRefs}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 inline-block">
                How We Work
              </span>
              <h2 className="heading-lg mb-4">Our Process</h2>
              <p className="text-gray-600 text-lg">
                A systematic approach to delivering high-quality software
                solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-0"></div>

              <ProcessStep
                number="01"
                title="Discovery"
                description="We understand your business needs, goals and requirements."
                addToRefs={addToRefs}
              />
              <ProcessStep
                number="02"
                title="Planning"
                description="Detailed project roadmap and strategy for successful implementation."
                addToRefs={addToRefs}
              />
              <ProcessStep
                number="03"
                title="Development"
                description="Agile and iterative approach to building your solution."
                addToRefs={addToRefs}
              />
              <ProcessStep
                number="04"
                title="Delivery"
                description="Thorough testing, deployment and continuous support."
                addToRefs={addToRefs}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-deepBlue to-midnight text-white animate-gradient">
          <div className="container-custom max-w-[90%] lg:max-w-[85%] mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "120+", label: "Projects Completed" },
                { value: "50+", label: "Happy Clients" },
                { value: "15+", label: "Team Members" },
                { value: "5+", label: "Years of Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="reveal-on-scroll"
                  ref={addToRefs}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2 animate-pulse-primary">
                    {stat.value}
                  </div>
                  <div className="text-gray-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-[90%] lg:max-w-[85%] mx-auto px-8">
            <div className="bg-gradient-to-br from-primary via-deepBlue to-midnight rounded-2xl p-8 md:p-12 shadow-3d overflow-hidden relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="text-white">
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>
                    Ready to Transform Your Digital Presence?
                  </motion.h2>
                  <motion.p
                    className="text-gray-200 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}>
                    Get in touch with our team and let's discuss how we can help
                    you achieve your digital goals.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="btn-accent inline-flex items-center">
                      Start Your Project
                      <FiArrowRight className="ml-2" />
                    </Link>
                  </motion.div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <ul className="space-y-4">
                    {[
                      "Free initial consultation",
                      "Custom-tailored solutions",
                      "Transparent pricing",
                      "Ongoing support",
                      "Dedicated project manager",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start text-white stagger-item"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          duration: 0.5,
                        }}>
                        <FiCheck className="mt-1 mr-3 text-accent" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const ServiceCard = ({ icon, title, description, delay }) => (
  <motion.div
    variants={fadeIn}
    custom={delay}
    className="bg-white p-6 rounded-xl shadow-custom hover:shadow-soft-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
    <div className="mb-4 inline-block p-3 bg-primary/10 text-primary rounded-lg transition-all duration-300 group-hover:bg-primary group-hover:text-white">
      <span className="text-2xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Link
        to="/services"
        className="text-primary hover:text-accent inline-flex items-center font-medium hover-underline-animation">
        Learn More <FiArrowRight className="ml-1" />
      </Link>
    </div>
  </motion.div>
);

const ProcessStep = ({ number, title, description, addToRefs }) => (
  <div className="reveal-on-scroll" ref={addToRefs}>
    <div className="bg-white p-6 rounded-xl shadow-custom border border-gray-100 h-full flex flex-col items-center text-center z-10 relative">
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-glow">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Home;
