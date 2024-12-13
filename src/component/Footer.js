import React from "react";
import { Link } from "react-router-dom";

function Footer({ setServiceTab }) {
  return (
    <footer className="bg-blue-900 text-white pt-8 pb-4 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section: Gglass Construction Info */}
        <div className="flex flex-col space-y-4 md:w-1/3">
          <h2 className="text-lg font-semibold text-orange-400">
            Gglass Construction
          </h2>
          <p>
            G-Class Construction Corp. is a leading construction and renovation
            company. We specialize in Legal Basements constructed according to
            city guidelines.
          </p>
        </div>

        {/* Middle Section: Menu */}
        <div className="flex flex-col sm:mt-0 mt-8 space-y-4 md:w-1/3 md:text-center">
          <h2 className="text-lg font-semibold text-orange-400">Menu</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="hover:text-orange-300 transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#service"
                className="hover:text-orange-300 transition duration-200"
                onClick={() => {
                  if (setServiceTab) {
                    setServiceTab((prev) => prev + 1);
                  }
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-orange-300 transition duration-200"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-orange-300 transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div className="flex flex-col sm:mt-0 mt-8 space-y-4 md:w-1/3 ">
          <h2 className="text-lg font-semibold text-orange-400">
            Contact Information
          </h2>
          <p>+1(416)-670-2671</p>
          <p>+1(705)-500-8485</p>
          <p>+1(437)-365-9549</p>
          <p>33 Palm Tree Rd, Brampton, ON, L6V 4N5, Canada</p>
          <p>9:00 AM – 6:00 PM (Mon – Fri)</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-orange-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" className="hover:text-orange-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
        <p>
          Copyright © 2024 Gglass Construction | Website by Mishaar Solutions
        </p>
      </div>
    </footer>
  );
}

export default Footer;