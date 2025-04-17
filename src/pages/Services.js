import React from "react";
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
  FiShield,
  FiActivity,
  FiDatabase,
  FiCode,
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Innovoid Labs</title>
        <meta
          name="description"
          content="Discover Innovoid Labs' comprehensive software development services including web development, mobile apps, UI/UX design, cloud solutions, and DevOps."
        />
        <meta
          name="keywords"
          content="software development services, web development, mobile app development, UI/UX design, cloud solutions, DevOps services"
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
                Our Innovative Services
              </motion.h1>
              <motion.p
                className="text-xl text-gray-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                Comprehensive software solutions tailored to your business
                needs. From concept to deployment, we deliver excellence at
                every stage.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Introduction */}
        <section className="section">
          <div className="container-custom">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}>
              <h2 className="heading-lg mb-6">End-to-End Digital Solutions</h2>
              <p className="text-gray-700 text-lg">
                At Innovoid Labs, we take pride in offering a comprehensive
                suite of software development services, tailored to meet the
                specific needs of your business. Our team of expert developers,
                designers, and strategists work together to deliver innovative
                solutions that drive growth and efficiency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ServiceCard
                icon={<FiMonitor />}
                title="Web Development"
                description="We build responsive, scalable and high-performance web applications using modern technologies and frameworks."
                features={[
                  "Custom web application development",
                  "E-commerce solutions",
                  "Progressive Web Apps (PWAs)",
                  "CMS development and integration",
                  "API development and integration",
                ]}
                technologies={[
                  "React",
                  "Angular",
                  "Vue.js",
                  "Node.js",
                  "Express",
                  "Django",
                  "Laravel",
                  "MongoDB",
                  "PostgreSQL",
                ]}
              />

              <ServiceCard
                icon={<FiSmartphone />}
                title="Mobile Applications"
                description="Native and cross-platform mobile apps that deliver exceptional user experiences on any device."
                features={[
                  "iOS and Android native development",
                  "Cross-platform development",
                  "Mobile app UI/UX design",
                  "App performance optimization",
                  "App maintenance and support",
                ]}
                technologies={[
                  "React Native",
                  "Flutter",
                  "Swift",
                  "Kotlin",
                  "Firebase",
                  "GraphQL",
                  "Redux",
                  "MobX",
                ]}
              />

              <ServiceCard
                icon={<FiLayout />}
                title="UI/UX Design"
                description="User-centered design that enhances engagement, usability and conversion rates."
                features={[
                  "User research and personas",
                  "Wireframing and prototyping",
                  "Responsive design",
                  "Interaction design",
                  "Usability testing",
                ]}
                technologies={[
                  "Figma",
                  "Adobe XD",
                  "Sketch",
                  "InVision",
                  "Zeplin",
                  "Principle",
                  "Framer",
                ]}
              />

              <ServiceCard
                icon={<FiCloud />}
                title="Cloud Solutions"
                description="Scalable, secure and cost-effective cloud infrastructure and deployment solutions."
                features={[
                  "Cloud migration strategies",
                  "Infrastructure as Code (IaC)",
                  "Serverless architecture",
                  "Multi-cloud solutions",
                  "Cloud cost optimization",
                ]}
                technologies={[
                  "AWS",
                  "Azure",
                  "Google Cloud",
                  "Terraform",
                  "Kubernetes",
                  "Docker",
                  "CloudFormation",
                  "Ansible",
                ]}
              />

              <ServiceCard
                icon={<FiServer />}
                title="DevOps"
                description="Automating and integrating processes between software development and IT operations."
                features={[
                  "CI/CD pipeline setup",
                  "Infrastructure automation",
                  "Microservices architecture",
                  "Containerization",
                  "Monitoring and logging",
                ]}
                technologies={[
                  "Jenkins",
                  "GitHub Actions",
                  "CircleCI",
                  "Docker",
                  "Kubernetes",
                  "Prometheus",
                  "Grafana",
                  "ELK Stack",
                ]}
              />

              <ServiceCard
                icon={<FiDatabase />}
                title="Database Solutions"
                description="Robust database design, optimization, and management for your applications."
                features={[
                  "Database architecture and design",
                  "Database migration and integration",
                  "Performance optimization",
                  "Data modeling",
                  "Database administration",
                ]}
                technologies={[
                  "MySQL",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "DynamoDB",
                  "Cassandra",
                  "Elasticsearch",
                  "SQL Server",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="section">
          <div className="container-custom">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}>
              <h2 className="heading-lg mb-4">Specialized Solutions</h2>
              <p className="text-gray-600 text-lg">
                Beyond our core offerings, we provide specialized solutions to
                address specific business challenges
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}>
              <SpecializedCard
                icon={<FiCode />}
                title="Legacy System Modernization"
                description="Transform outdated systems into modern, scalable applications without disrupting your business operations."
              />
              <SpecializedCard
                icon={<FiActivity />}
                title="AI & Machine Learning"
                description="Harness the power of artificial intelligence and machine learning to gain insights and automate processes."
              />
              <SpecializedCard
                icon={<FiShield />}
                title="Security Assessment"
                description="Comprehensive security audits and implementation of robust security measures to protect your digital assets."
              />
            </motion.div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}>
              <h2 className="heading-lg mb-4">Our Development Process</h2>
              <p className="text-gray-600 text-lg">
                A systematic approach to delivering exceptional software
                solutions
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <ProcessStep
                number="01"
                title="Discovery & Requirements"
                description="We begin by understanding your business goals, user needs, and technical requirements. This phase involves stakeholder interviews, market research, and competitive analysis."
              />
              <ProcessStep
                number="02"
                title="Planning & Architecture"
                description="Based on the gathered requirements, we create a detailed project roadmap, select appropriate technologies, and design the system architecture."
              />
              <ProcessStep
                number="03"
                title="Design & Prototyping"
                description="Our designers create wireframes and interactive prototypes to visualize the user experience before development begins."
              />
              <ProcessStep
                number="04"
                title="Development"
                description="Using agile methodologies, our development team builds your solution in iterative cycles, with regular demos and feedback sessions."
              />
              <ProcessStep
                number="05"
                title="Testing & QA"
                description="Rigorous testing ensures your application is bug-free, secure, and performs well under various conditions."
              />
              <ProcessStep
                number="06"
                title="Deployment & Launch"
                description="We handle the deployment process, ensuring a smooth transition to production environments."
              />
              <ProcessStep
                number="07"
                title="Maintenance & Support"
                description="Post-launch, we provide ongoing maintenance, monitoring, and support to ensure your application continues to run optimally."
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
                Ready to Start Your Project?
              </motion.h2>
              <motion.p
                className="text-xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                Let's discuss how our services can help you achieve your
                business goals.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                <Link to="/contact" className="btn-accent text-lg px-8 py-4">
                  Schedule a Consultation
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description, features, technologies }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-custom"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeIn}>
    <div className="text-3xl text-accent mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-700 mb-6">{description}</p>

    <div className="mb-6">
      <h4 className="text-lg font-bold mb-3 text-primary">What We Offer</h4>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent mr-2">•</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-bold mb-3 text-primary">Technologies</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// Specialized Card Component
const SpecializedCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-custom hover:shadow-lg transition-shadow border border-gray-100"
    variants={fadeIn}>
    <div className="text-3xl text-accent mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

// Process Step Component
const ProcessStep = ({ number, title, description }) => (
  <motion.div
    className="flex items-start mb-12 last:mb-0"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeIn}>
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-lg font-bold mr-6">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default Services;
