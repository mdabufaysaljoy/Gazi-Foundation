import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Blue Elegant Concept Foundation Logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 shadow-lg sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center w-auto">
            <Link to="/" className="flex items-center text-white sm:text-xl xl:text-2xl font-bold">
              <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
              <span className="ml-2">Gazi Foundation</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-white hover:text-blue-200">
              Home
            </Link>
            <Link
              to="/saving-details"
              className="text-white hover:text-blue-200"
            >
              Saving Details
            </Link>
            <Link to="/members" className="text-white hover:text-blue-200">
              Members
            </Link>
            <Link
              to="/payment-options"
              className="text-white hover:text-blue-200"
            >
              Payment Options
            </Link>
            <Link to="/contacts" className="text-white hover:text-blue-200">
              Contacts
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 focus:outline-none focus:text-blue-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <Link to="/" className="block text-white hover:text-blue-200 py-2">
            Home
          </Link>
          <Link
            to="/saving-details"
            className="block text-white hover:text-blue-200 py-2"
          >
            Saving Details
          </Link>
          <Link
            to="/members"
            className="block text-white hover:text-blue-200 py-2"
          >
            Members
          </Link>
          <Link
            to="/payment-options"
            className="block text-white hover:text-blue-200 py-2"
          >
            Payment Options
          </Link>
          <Link
            to="/contacts"
            className="block text-white hover:text-blue-200 py-2"
          >
            Contacts
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
