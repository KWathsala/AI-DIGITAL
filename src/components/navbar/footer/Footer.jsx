import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold mb-2">AT DIGITAL</h2>
          <p>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Technologies</h3>
          <ul className="space-y-2">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <ul className="space-y-2">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-400 pt-4 text-center text-sm">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
