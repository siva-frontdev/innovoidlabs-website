import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    services: [],
  });

  // Form submission status
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Services options
  const serviceOptions = [
    "Web Development",
    "Mobile Applications",
    "UI/UX Design",
    "Cloud Solutions",
    "DevOps Services",
    "Database Solutions",
    "IT Consultation",
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, value],
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter((service) => service !== value),
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log("Form submitted:", formData);
    // Show success message
    setFormSubmitted(true);
    // Reset form after submission (in a real app, you'd do this after successful API response)
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      services: [],
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Innovoid Labs</title>
        <meta
          name="description"
          content="Get in touch with the Innovoid Labs team for your software development needs. We're here to help bring your digital vision to life."
        />
        <meta
          name="keywords"
          content="contact Innovoid Labs, software development consultation, technology consultation, project inquiry"
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
                Let's Connect
              </motion.h1>
              <motion.p
                className="text-xl text-gray-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                We're excited to hear about your project. Get in touch with our
                team and let's create something amazing together.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-custom h-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeIn}>
                  <h2 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-accent text-xl mt-1 mr-4">
                        <FiMapPin />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Main Office</h3>
                        <p className="text-gray-700">
                          123 Innovation Street, Tech Hub,
                          <br />
                          Silicon Valley, CA 94043
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-accent text-xl mt-1 mr-4">
                        <FiPhone />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Phone</h3>
                        <p className="text-gray-700">
                          <a
                            href="tel:+1234567890"
                            className="hover:text-accent transition-colors">
                            +1 (234) 567-890
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-accent text-xl mt-1 mr-4">
                        <FiMail />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-gray-700">
                          <a
                            href="mailto:info@innovoidlabs.com"
                            className="hover:text-accent transition-colors">
                            info@innovoidlabs.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-accent text-xl mt-1 mr-4">
                        <FiClock />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Business Hours</h3>
                        <p className="text-gray-700">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday & Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-bold mb-3">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-primary hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="sr-only">Facebook</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-primary hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-primary hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-custom"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeIn}>
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-start">
                      <div className="text-green-500 mr-4 text-xl">
                        <FiCheckCircle />
                      </div>
                      <div>
                        <h3 className="font-bold text-green-700 mb-1">
                          Message Sent Successfully
                        </h3>
                        <p className="text-green-600">
                          Thank you for contacting us! We've received your
                          message and will get back to you within 1-2 business
                          days.
                        </p>
                        <button
                          className="mt-4 text-primary font-medium hover:text-accent transition-colors"
                          onClick={() => setFormSubmitted(false)}>
                          Send another message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-gray-700 font-medium mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-gray-700 font-medium mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="company"
                            className="block text-gray-700 font-medium mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="subject"
                          className="block text-gray-700 font-medium mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                        />
                      </div>

                      <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">
                          Services You're Interested In
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {serviceOptions.map((service) => (
                            <div key={service} className="flex items-center">
                              <input
                                type="checkbox"
                                id={service.replace(/\s+/g, "-").toLowerCase()}
                                name="services"
                                value={service}
                                checked={formData.services.includes(service)}
                                onChange={handleCheckboxChange}
                                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                              />
                              <label
                                htmlFor={service
                                  .replace(/\s+/g, "-")
                                  .toLowerCase()}
                                className="ml-2 text-gray-700">
                                {service}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          className="block text-gray-700 font-medium mb-2">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required></textarea>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="btn-primary w-full md:w-auto">
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}>
              <h2 className="heading-lg mb-4">Our Locations</h2>
              <p className="text-gray-600 text-lg">
                Visit us at one of our offices or reach out online from anywhere
                in the world
              </p>
            </motion.div>

            <div className="bg-white p-4 rounded-lg shadow-custom overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 h-96 bg-gray-200 rounded-lg relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg">
                  Interactive Map Will Be Displayed Here
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-custom"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}>
                <h3 className="text-xl font-bold mb-3">Silicon Valley HQ</h3>
                <p className="text-gray-700 mb-4">
                  123 Innovation Street, Tech Hub,
                  <br />
                  Silicon Valley, CA 94043
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> +1 (234) 567-890
                  <br />
                  <strong>Email:</strong> sv@innovoidlabs.com
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-custom"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}>
                <h3 className="text-xl font-bold mb-3">New York Office</h3>
                <p className="text-gray-700 mb-4">
                  456 Tech Avenue, Innovation Tower,
                  <br />
                  New York, NY 10001
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> +1 (345) 678-901
                  <br />
                  <strong>Email:</strong> ny@innovoidlabs.com
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-custom"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}>
                <h3 className="text-xl font-bold mb-3">London Office</h3>
                <p className="text-gray-700 mb-4">
                  789 Digital Lane, Tech Park,
                  <br />
                  London, UK EC1A 1BB
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> +44 20 1234 5678
                  <br />
                  <strong>Email:</strong> london@innovoidlabs.com
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container-custom">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}>
              <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">
                Find quick answers to common questions about our services and
                process
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}>
                <FaqItem
                  question="What is the typical timeline for a web development project?"
                  answer="Project timelines vary based on complexity, but most web development projects take between 8-12 weeks from concept to launch. We provide detailed timelines during the proposal phase after understanding your specific requirements."
                />

                <FaqItem
                  question="Do you offer maintenance and support after the project is completed?"
                  answer="Yes, we offer various maintenance and support packages to ensure your application continues to run smoothly. These can include regular updates, security patches, performance monitoring, and technical support."
                />

                <FaqItem
                  question="How do you handle project pricing?"
                  answer="We offer tailored pricing models based on project scope, complexity, and timeline. This can include fixed-price quotes for well-defined projects or time-and-materials for projects with evolving requirements. We provide transparent estimates and regular updates on budget utilization."
                />

                <FaqItem
                  question="What technologies do you specialize in?"
                  answer="Our team has expertise in a wide range of technologies including React, Angular, Vue.js, Node.js, Python, PHP, AWS, Azure, and more. We select the most appropriate tech stack based on your project's specific requirements and goals."
                />

                <FaqItem
                  question="How do you ensure the security of the applications you build?"
                  answer="Security is integral to our development process. We implement industry best practices for secure coding, conduct regular security audits, perform penetration testing, and follow OWASP guidelines. We also stay updated on emerging security threats and mitigation strategies."
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-custom"
    variants={fadeIn}>
    <h3 className="text-lg font-bold mb-3">{question}</h3>
    <p className="text-gray-700">{answer}</p>
  </motion.div>
);

export default Contact;
