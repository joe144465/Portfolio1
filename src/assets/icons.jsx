import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTelegram, FaMailBulk } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Gmail from "./gmail.png";

const SocialIcons = () => {
  return (
    <div className="flex gap-6 md:gap-18 justify-center lg:justify-start">
      <a href="https://t.me/whimsyrift" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl lg:text-3xl">
        <FaTelegram />
      </a>
      <a href="https://www.facebook.com/share/1EHFvfrQDS/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl lg:text-3xl">
        <FaFacebookF />
      </a>
      <a href="https://www.linkedin.com/in/minhtetmoeyan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-pink-700 text-2xl lg:text-3xl">
        <FaLinkedinIn />
      </a>
       <a
        href="mailto:minhtetmoeyan6@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-6 h-6 lg:w-8 lg:h-8 overflow-hidden  hover:opacity-80">
        <img src={Gmail} alt="Gmail" className="w-full h-full object-cover"/>
      </a>
    </div>
  );
};

export default SocialIcons;

