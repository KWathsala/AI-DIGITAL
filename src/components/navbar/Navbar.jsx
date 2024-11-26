import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-lg font-bold">MyLogo</div>

        {/* Menu toggle button (for mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`absolute inset-0 bg-gray-800 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform md:static md:translate-x-0 md:flex md:items-center`}
        >
          <ul className="flex flex-col space-y-4 p-4 md:flex-row md:space-y-0 md:space-x-6 md:p-0">
            <li>
              <a
                href="#home"
                className="block px-2 py-1 hover:bg-gray-700 rounded md:hover:bg-transparent"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-2 py-1 hover:bg-gray-700 rounded md:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block px-2 py-1 hover:bg-gray-700 rounded md:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-2 py-1 hover:bg-gray-700 rounded md:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
