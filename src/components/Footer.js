import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deepBlue text-white mt-auto">
      {/* Main Footer */}
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Innovoid</span>
              <span className="text-accent">labs</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming ideas into innovative digital solutions. Your vision,
              our expertise.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-accent transition-colors w-8 h-8 rounded-full flex items-center justify-center">
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-accent transition-colors w-8 h-8 rounded-full flex items-center justify-center">
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/innovoid-labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-accent transition-colors w-8 h-8 rounded-full flex items-center justify-center">
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/innovoidlabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-accent transition-colors w-8 h-8 rounded-full flex items-center justify-center">
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/919344853263"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 transition-colors w-8 h-8 rounded-full flex items-center justify-center">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-300 hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-accent transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-accent transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-accent transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-accent transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-accent transition-colors">
                  DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  99, Sri Ram Nagar,
                  <br />
                  Narasimhanaickenpalayam,
                  <br />
                  Coimbatore 641031, India
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-accent mr-3 flex-shrink-0" />
                <a
                  href="tel:+919344853263"
                  className="text-gray-300 hover:text-accent transition-colors">
                  +91 9344 853 263
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="text-accent mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@nnovoidlabs.com"
                  className="text-gray-300 hover:text-accent transition-colors">
                  info@nnovoidlabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} nnovoid labs. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                to="/privacy-policy"
                className="text-gray-400 text-sm hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 text-sm hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
