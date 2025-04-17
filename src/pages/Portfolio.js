import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FiExternalLink } from "react-icons/fi";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      description:
        "A modern e-commerce platform with seamless payment integration, user authentication, and product management capabilities.",
      client: "RetailTech Solutions",
    },
    {
      id: 2,
      title: "Health & Fitness App",
      category: "mobile",
      tags: ["React Native", "Firebase", "Expo", "Redux"],
      description:
        "A comprehensive mobile application for tracking fitness goals, nutrition, and workout routines with personalized recommendations.",
      client: "FitLife Innovations",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "web",
      tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      description:
        "A data-driven dashboard for financial analytics with real-time data visualization and reporting features.",
      client: "FinTech Global",
    },
    {
      id: 4,
      title: "Real Estate Platform",
      category: "web",
      tags: ["React", "Django", "GraphQL", "AWS"],
      description:
        "A property management and listing platform with advanced search filters, virtual tours, and agent communication tools.",
      client: "Urban Housing Network",
    },
    {
      id: 5,
      title: "Inventory Management System",
      category: "web",
      tags: ["Angular", "Node.js", "MongoDB", "Docker"],
      description:
        "A scalable inventory management system with barcode scanning, automated reordering, and detailed analytics.",
      client: "LogiTech Enterprises",
    },
    {
      id: 6,
      title: "Travel Companion App",
      category: "mobile",
      tags: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
      description:
        "A feature-rich travel application with itinerary planning, local recommendations, and booking capabilities.",
      client: "Wanderlust Travels",
    },
    {
      id: 7,
      title: "Healthcare Management Platform",
      category: "web",
      tags: ["React", "Express", "PostgreSQL", "Socket.io"],
      description:
        "A HIPAA-compliant healthcare management platform with patient records, appointment scheduling, and secure messaging.",
      client: "MediCare Solutions",
    },
    {
      id: 8,
      title: "Event Management Solution",
      category: "web",
      tags: ["Vue.js", "Laravel", "MySQL", "AWS"],
      description:
        "A comprehensive event management platform with ticketing, attendee management, and analytics capabilities.",
      client: "EventPro Inc.",
    },
    {
      id: 9,
      title: "Food Delivery App",
      category: "mobile",
      tags: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
      description:
        "A food delivery application with real-time order tracking, restaurant partnerships, and seamless payment processing.",
      client: "FoodFast Network",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <Helmet>
        <title>Our Portfolio | Innovoid Labs</title>
        <meta
          name="description"
          content="Explore Innovoid Labs' portfolio of innovative software solutions including web applications, mobile apps, and digital platforms."
        />
        <meta
          name="keywords"
          content="software portfolio, web development projects, mobile app projects, case studies, successful software implementations"
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary to-deepBlue text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                className="heading-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                Our Work
              </motion.h1>
              <motion.p
                className="text-xl text-gray-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                A showcase of our innovative solutions and success stories. Each
                project represents our commitment to excellence and client
                satisfaction.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="section">
          <div className="container-custom">
            {/* Filter Controls */}
            <motion.div
              className="flex flex-wrap justify-center mb-12 space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <button
                className={`px-6 py-2 rounded-full transition-colors mb-2 ${
                  filter === "all"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setFilter("all")}>
                All Projects
              </button>
              <button
                className={`px-6 py-2 rounded-full transition-colors mb-2 ${
                  filter === "web"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setFilter("web")}>
                Web Applications
              </button>
              <button
                className={`px-6 py-2 rounded-full transition-colors mb-2 ${
                  filter === "mobile"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setFilter("mobile")}>
                Mobile Apps
              </button>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}>
              <h2 className="heading-lg mb-4">Featured Case Studies</h2>
              <p className="text-gray-600 text-lg">
                Deep dives into some of our most impactful projects and the
                results they delivered
              </p>
            </motion.div>

            <div className="space-y-16">
              <CaseStudy
                title="E-Commerce Platform Transformation"
                client="RetailTech Solutions"
                challenge="The client was struggling with an outdated e-commerce platform that couldn't handle increasing traffic and had poor mobile responsiveness, resulting in high cart abandonment rates."
                solution="We developed a modern, responsive e-commerce platform using React for the frontend and Node.js for the backend. The solution included optimized product search, streamlined checkout process, and integration with multiple payment gateways."
                results={[
                  "57% increase in mobile conversions",
                  "32% reduction in cart abandonment",
                  "95% improvement in page load time",
                  "42% increase in overall sales within 3 months",
                ]}
              />

              <CaseStudy
                title="Healthcare Management Solution"
                client="MediCare Solutions"
                challenge="The client needed a secure, HIPAA-compliant platform to manage patient records, appointments, and communications between healthcare providers and patients."
                solution="We built a comprehensive healthcare management system with role-based access controls, secure messaging, telemedicine capabilities, and seamless integration with existing hospital management systems."
                results={[
                  "85% reduction in administrative paperwork",
                  "63% improvement in appointment scheduling efficiency",
                  "74% patient satisfaction rating for telemedicine features",
                  "Successful integration with 5 major EHR systems",
                ]}
              />

              <CaseStudy
                title="Mobile Delivery App Expansion"
                client="FoodFast Network"
                challenge="A regional food delivery service wanted to scale their operations and improve their customer experience with better order tracking and restaurant integration capabilities."
                solution="We developed a cross-platform mobile application with real-time GPS tracking, automated notifications, and a robust backend system that could handle thousands of concurrent orders."
                results={[
                  "300% increase in daily orders within 6 months",
                  "68% reduction in delivery time discrepancies",
                  "47% increase in restaurant partnerships",
                  "4.8/5 average rating on app stores",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="section">
          <div className="container-custom">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}>
              <h2 className="heading-lg mb-4">Client Testimonials</h2>
              <p className="text-gray-600 text-lg">
                Hear from our clients about their experience working with us
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TestimonialCard
                quote="The team at Innovoid Labs went above and beyond our expectations. They not only delivered a technically excellent product but also contributed valuable insights that improved our business processes."
                name="Michael Rodriguez"
                title="CTO, RetailTech Solutions"
                project="E-Commerce Platform"
              />
              <TestimonialCard
                quote="Working with Innovoid Labs was a true partnership. Their attention to detail and commitment to our success made them an extension of our team rather than just a vendor."
                name="Sarah Johnson"
                title="CEO, MediCare Solutions"
                project="Healthcare Management Platform"
              />
              <TestimonialCard
                quote="Innovoid Labs transformed our concept into a stunning reality. Their technical expertise, combined with their understanding of user experience, resulted in an app that our customers love."
                name="David Chen"
                title="Product Director, FoodFast Network"
                project="Food Delivery App"
              />
              <TestimonialCard
                quote="The scalability and performance of the solution Innovoid Labs built for us have been crucial to our growth. We've been able to handle 3x the traffic without any performance issues."
                name="Emily Williams"
                title="VP of Technology, EventPro Inc."
                project="Event Management Solution"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-deepBlue text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                className="heading-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                Ready to Create Your Success Story?
              </motion.h2>
              <motion.p
                className="text-xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                Let's discuss how we can bring your vision to life with
                innovative software solutions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/contact" className="btn-accent text-center px-8 py-4">
                  Start Your Project
                </a>
                <a
                  href="/services"
                  className="border-2 border-white hover:border-accent hover:text-accent transition-colors px-8 py-4 rounded-md font-medium text-center">
                  Explore Our Services
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-white rounded-lg overflow-hidden shadow-custom"
    variants={fadeIn}>
    <div className="h-48 bg-gray-200 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
        <span className="text-xl font-bold text-white text-opacity-70">
          Project Image
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <p className="text-sm text-primary mb-4">Client: {project.client}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <a
        href="#"
        className="inline-flex items-center text-accent hover:text-primary transition-colors">
        View Details <FiExternalLink className="ml-1" />
      </a>
    </div>
  </motion.div>
);

// Case Study Component
const CaseStudy = ({ title, client, challenge, solution, results }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-custom"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeIn}>
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-primary mb-6">Client: {client}</p>
        <div className="h-48 bg-gray-200 rounded-lg relative mb-4 lg:mb-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center rounded-lg">
            <span className="text-lg font-medium text-white text-opacity-70">
              Case Study Image
            </span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-3">
        <div className="mb-4">
          <h4 className="text-lg font-bold text-primary mb-2">Challenge</h4>
          <p className="text-gray-700">{challenge}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-bold text-primary mb-2">Solution</h4>
          <p className="text-gray-700">{solution}</p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-primary mb-2">Results</h4>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span className="text-gray-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

// Testimonial Card Component
const TestimonialCard = ({ quote, name, title, project }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-custom"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeIn}>
    <div className="text-4xl text-primary mb-4">"</div>
    <p className="text-gray-700 mb-6 italic">{quote}</p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-gray-500 text-sm">{title}</div>
        <div className="text-accent text-sm">{project}</div>
      </div>
    </div>
  </motion.div>
);

export default Portfolio;
