import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-8 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-6 md:gap-8">
      <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
        <img className="w-24 md:w-32" src={logo} alt="logo" />
        <div className="flex gap-6 md:gap-10">
          <a
            href="https://github.com/ManojAvhad13"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/manoj-avhad-6a9728232"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
