import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center md:fixed w-full z-10">
      <div>
        <img src={Logo} alt="Logo" className="lg:ml-30 md:ml-10"/>
      </div>

      {/* Hamburger icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12" // X icon when open
                : "M4 6h16M4 12h16M4 18h16" // Hamburger when closed
            }
          />
        </svg>
      </div>

      {/* Navigation links */}
      <ul
        className={`lg:mr-30 md:ml-30 md:flex md:items-center md:gap-10 absolute md:static bg-black w-full left-0 md:w-auto md:bg-transparent transition-all duration-300 ease-in ${
          isOpen ? "top-16 block" : "top-[-490px] hidden"
        }`}
      >
        <a href="#home" className="px-4 py-2 hover:text-white-400 hover:bg-blue-600 cursor-pointer text-xl font-semibold">Home</a>
        <a href="#about" className="px-4 py-2 hover:text-white-400 hover:bg-blue-600 cursor-pointer text-xl font-semibold">About</a>
        <a href="#education" className="px-4 py-2 hover:text-white-400 hover:bg-blue-600 cursor-pointer text-xl font-semibold">Education</a>
         <a href="#experiences" className="px-4 py-2 hover:text-white-400 hover:bg-blue-600 cursor-pointer text-xl font-semibold">Work Experiences</a>
        <a href="#project" className="px-4 py-2 hover:text-white-400 hover:bg-blue-600 cursor-pointer text-xl font-semibold">Projects</a>
        <a href="#contact" className="px-4 py-2 hover:text-white-400 hover:bg-blue-600 cursor-pointer text-xl font-semibold">Contact</a>
      </ul>
    </nav>
  );
};

export default Nav;
