import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiStar,
  FiHeart,
  FiCheckCircle,
} from "react-icons/fi";
import AboutCompanyImage from "../assets/images/stock/about-company.svg";
import TeamImage from "../assets/images/stock/team.svg";

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

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Innovoid Labs</title>
        <meta
          name="description"
          content="Learn about Innovoid Labs, our mission, values, and the talented team behind our innovative software solutions."
        />
        <meta
          name="keywords"
          content="about Innovoid Labs, software agency, development team, company values, technology experts"
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
                Crafting Digital Excellence
              </motion.h1>
              <motion.p
                className="text-xl text-gray-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}>
                We're a team of passionate technologists dedicated to building
                innovative software solutions that help businesses thrive in the
                digital world.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}>
                <h2 className="heading-lg mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2018, Innovoid Labs began with a simple mission: to
                  help businesses leverage technology for growth and innovation.
                  What started as a small team of developers has grown into a
                  full-service software agency with expertise across web,
                  mobile, cloud, and emerging technologies.
                </p>
                <p className="text-gray-700 mb-4">
                  Our founders recognized that many businesses struggle to keep
                  pace with rapidly evolving technologies. We built Innovoid
                  Labs to bridge this gap, providing cutting-edge solutions that
                  are both innovative and practical.
                </p>
                <p className="text-gray-700">
                  Today, we're proud to have helped dozens of companies across
                  various industries transform their digital presence and
                  operations. Our success is measured by the success of our
                  clients, and we're committed to delivering excellence in every
                  project we undertake.
                </p>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}>
                <div className="h-96 rounded-lg overflow-hidden relative shadow-xl">
                  <img
                    src={AboutCompanyImage}
                    alt="Innovoid Labs company"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Mission and Vision */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                className="bg-white p-8 rounded-lg shadow-custom"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}>
                <div className="text-3xl text-accent mb-4">
                  <FiTarget />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To empower businesses with innovative software solutions that
                  solve complex problems, enhance user experiences, and drive
                  sustainable growth. We strive to be a trusted technology
                  partner that transforms ideas into impactful digital
                  realities.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-lg shadow-custom"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}>
                <div className="text-3xl text-accent mb-4">
                  <FiTrendingUp />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be recognized globally as a leader in creating software
                  solutions that push the boundaries of innovation while
                  maintaining the highest standards of quality, security, and
                  user-centered design. We aim to shape the future of digital
                  experiences across industries.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section">
          <div className="container-custom">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}>
              <h2 className="heading-lg mb-4">Our Core Values</h2>
              <p className="text-gray-600 text-lg">
                The principles that guide our work and define our culture
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}>
              <ValueCard
                icon={<FiCheckCircle />}
                title="Excellence"
                description="We are committed to delivering the highest quality in everything we do, from code to client communication."
              />
              <ValueCard
                icon={<FiStar />}
                title="Innovation"
                description="We embrace creativity and forward-thinking solutions that push the boundaries of what's possible."
              />
              <ValueCard
                icon={<FiUsers />}
                title="Collaboration"
                description="We believe in the power of teamwork, both internally and with our clients, to achieve extraordinary results."
              />
              <ValueCard
                icon={<FiHeart />}
                title="Integrity"
                description="We operate with honesty, transparency, and ethical practices in all our business relationships."
              />
              <ValueCard
                icon={<FiTarget />}
                title="Client Focus"
                description="We prioritize understanding and meeting our clients' needs, ensuring their success is our success."
              />
              <ValueCard
                icon={<FiTrendingUp />}
                title="Continuous Growth"
                description="We are dedicated to ongoing learning and improvement as individuals and as an organization."
              />
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}>
              <h2 className="heading-lg mb-4">Our Team</h2>
              <p className="text-gray-600 text-lg">
                Meet the talented professionals behind our innovative solutions
              </p>
            </motion.div>

            <div className="mb-12">
              <img
                src={TeamImage}
                alt="Innovoid Labs team"
                className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <TeamMember name="Alex Johnson" role="Founder & CEO" />
              <TeamMember name="Sophia Chen" role="CTO" />
              <TeamMember name="David Kim" role="Lead Developer" />
              <TeamMember name="Maria Rodriguez" role="UX/UI Director" />
              <TeamMember name="James Wilson" role="DevOps Engineer" />
              <TeamMember name="Aisha Patel" role="Project Manager" />
              <TeamMember name="Michael Thompson" role="Mobile Developer" />
              <TeamMember name="Emily Davis" role="Marketing Specialist" />
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="section">
          <div className="container-custom">
            <motion.div
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}>
              <h2 className="heading-lg mb-4">Our Journey</h2>
              <p className="text-gray-600 text-lg">
                Key milestones in our growth and evolution
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

              {/* Timeline Items */}
              <TimelineItem
                year="2018"
                title="Company Founded"
                description="Innovoid Labs was established with a team of 3 developers focused on web solutions."
                position="left"
              />
              <TimelineItem
                year="2019"
                title="First Major Client"
                description="Partnered with a leading e-commerce company to revamp their digital platform."
                position="right"
              />
              <TimelineItem
                year="2020"
                title="Expanded Services"
                description="Added mobile development and UI/UX design to our service offerings."
                position="left"
              />
              <TimelineItem
                year="2021"
                title="Team Growth"
                description="Reached 10 team members and moved to a larger office space."
                position="right"
              />
              <TimelineItem
                year="2022"
                title="Cloud Solutions"
                description="Launched our specialized cloud services and DevOps division."
                position="left"
              />
              <TimelineItem
                year="2023"
                title="International Expansion"
                description="Began serving clients across multiple countries and time zones."
                position="right"
              />
              <TimelineItem
                year="Present"
                title="Innovating Forward"
                description="Continuing to grow and evolve with cutting-edge technologies and solutions."
                position="left"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Value Card Component
const ValueCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-custom hover:shadow-lg transition-shadow"
    variants={fadeIn}>
    <div className="text-3xl text-accent mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

// Team Member Component
const TeamMember = ({ name, role }) => (
  <motion.div
    className="bg-white rounded-lg overflow-hidden shadow-custom"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeIn}>
    <div className="h-64 bg-gray-200 relative">
      <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg font-medium">
        Team Member Photo
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </motion.div>
);

// Timeline Item Component
const TimelineItem = ({ year, title, description, position }) => (
  <motion.div
    className={`relative z-10 mb-12 flex items-center ${
      position === "left" ? "flex-row-reverse" : ""
    }`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeIn}>
    <div className="flex-1"></div>
    <div className="mx-4 h-8 w-8 rounded-full bg-accent flex items-center justify-center text-white text-sm font-bold">
      {year.substring(2)}
    </div>
    <div
      className={`flex-1 p-6 bg-white shadow-custom rounded-lg ${
        position === "left" ? "text-right" : ""
      }`}>
      <div className="text-accent font-bold mb-1">{year}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default About;
