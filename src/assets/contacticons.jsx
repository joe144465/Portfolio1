import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTelegram, FaMailBulk, FaGithub,FaMedium } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Gmail from "./gmail.png";

const ContactIcons = () => {
  return (
    <div className="flex gap-5 justify-center lg:justify-start">
        <a href="https://github.com/joe144465" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black text-2xl md:text-4xl lg:text-5xl">
        <FaGithub />
      </a>
      <a href="https://t.me/whimsyrift" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-black text-2xl md:text-4xl lg:text-5xl">
        <FaTelegram />
      </a>
      <a href="https://www.facebook.com/share/1EHFvfrQDS/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-black text-2xl md:text-4xl lg:text-5xl">
        <FaFacebookF />
      </a>
      <a href="https://www.linkedin.com/in/minhtetmoeyan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-black text-2xl md:text-4xl lg:text-5xl">
        <FaLinkedinIn />
      </a>
       <a
        href="mailto:minhtetmoeyan6@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-6 h-6 lg:w-12 lg:h-12 md:w-10 md:h-10 overflow-hidden  hover:opacity-80">
        <img src={Gmail} alt="Gmail" className="w-full h-full object-cover"/>
      </a>
        <a href="https://medium.com/@minhtetmoeyan6" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-black text-2xl md:text-4xl lg:text-5xl">
        <FaMedium />
      </a>
    </div>
  );
};

export default ContactIcons;

