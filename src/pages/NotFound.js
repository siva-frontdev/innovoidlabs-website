import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Innovoid Labs</title>
        <meta
          name="description"
          content="The page you are looking for doesn't exist. Browse our website to find what you need."
        />
      </Helmet>

      <main>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <h1 className="text-9xl font-bold text-primary mb-2">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Page Not Found
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </p>

                <div className="space-y-4">
                  <p className="text-gray-600">Here are some helpful links:</p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/" className="btn-primary px-8">
                      Go Home
                    </Link>
                    <Link
                      to="/services"
                      className="border border-primary text-primary hover:bg-primary hover:text-white transition-colors px-8 py-3 rounded-md font-medium">
                      Our Services
                    </Link>
                    <Link
                      to="/contact"
                      className="border border-primary text-primary hover:bg-primary hover:text-white transition-colors px-8 py-3 rounded-md font-medium">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="relative mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute inset-0 w-24 h-24 bg-deepBlue rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
                <div className="relative p-4 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-xl mt-8 border border-gray-200">
                  <p className="text-gray-700">
                    If you believe this is an error, please contact our support
                    team at{" "}
                    <a
                      href="mailto:support@innovoidlabs.com"
                      className="text-accent hover:underline">
                      support@innovoidlabs.com
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFound;
