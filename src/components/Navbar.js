import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Enhanced animations
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    hover: {
      y: -4,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.07,
      filter: "brightness(1.1)",
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Mobile menu item animation
  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
    exit: {
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-9">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className={`rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3"
            : "bg-gradient-to-r from-primary via-deepBlue to-midnight py-3"
        }`}>
        <div className="w-[99%] sm:w-[100%] md:w-[95%] mx-auto px-9 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div
              variants={logoVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}>
              <Link to="/" className="flex items-center">
                <div className="flex items-center gap-3">
                  <motion.img
                    src="/Innovoid-logo.jpg"
                    alt="Innovoid Labs Logo" 
                    className={`h-10 md:h-10 object-cover rounded ${
                      scrolled ? "" : "filter brightness-150"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  />
                  <span className={`font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r ${
                    scrolled 
                      ? "from-primary via-deepBlue to-midnight"
                      : "from-white via-gray-200 to-gray-100"
                  }`}>
                    nnovoid Labs
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center space-x-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  custom={index}
                  variants={navItemVariants}
                  whileHover="hover">
                  <Link
                    to={link.path}
                    className={`font-medium transition-all duration-300 text-sm relative group ${
                      location.pathname === link.path
                        ? scrolled
                          ? "text-accent"
                          : "text-accent"
                        : scrolled
                        ? "text-gray-800 hover:text-accent"
                        : "text-white hover:text-accent"
                    }`}>
                    {link.name}
                    <motion.span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-accent ${
                        location.pathname === link.path ? "w-full" : "w-0"
                      }`}
                      initial={{
                        width: location.pathname === link.path ? "100%" : "0%",
                      }}
                      animate={{
                        width: location.pathname === link.path ? "100%" : "0%",
                      }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}></motion.span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                custom={navLinks.length}
                variants={navItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className={`${
                    scrolled
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-sm hover:shadow-lg"
                      : "bg-white text-primary hover:bg-opacity-90 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  } px-6 py-2 rounded-full font-medium text-sm transition-all duration-300`}>
                  Get Started
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile Navigation Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl focus:outline-none"
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}>
              {isOpen ? (
                <FiX className={scrolled ? "text-gray-800" : "text-white"} />
              ) : (
                <FiMenu className={scrolled ? "text-gray-800" : "text-white"} />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`md:hidden mt-4 rounded-2xl p-7 ${
                  scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-md"
                    : "bg-gradient-to-b from-deepBlue/90 to-midnight/90 backdrop-blur-md"
                }`}>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      custom={index}
                      variants={mobileItemVariants}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}>
                      <Link
                        to={link.path}
                        className={`block py-2 px-4 rounded-lg ${
                          location.pathname === link.path
                            ? scrolled
                              ? "bg-primary/10 text-primary font-medium"
                              : "bg-white/10 text-white font-medium"
                            : scrolled
                            ? "text-gray-700 hover:bg-gray-100"
                            : "text-gray-100 hover:bg-white/10"
                        } transition-all duration-300`}>
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    custom={navLinks.length}
                    variants={mobileItemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-2 pt-2 border-t border-gray-200/20">
                    <Link
                      to="/contact"
                      className={`block py-3 px-4 rounded-xl text-center font-medium ${
                        scrolled
                          ? "bg-gradient-to-r from-primary to-accent text-white"
                          : "bg-white text-primary"
                      } transition-all duration-300`}>
                      Get Started
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
