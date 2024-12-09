import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaLinkedin } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { FaGithub } from 'react-icons/fa6';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Manoj Avhad</h3>
        <p className="text-lg font-normal text-gray-400">MERN Stack Developer</p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:
          <a
            href="tel:+919922160959"
            className="text-lightText hover:underline"
          >
            +91 9922160959
          </a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:
          <a
            href="mailto:manojavhad04@gmail.com"
            className="text-lightText hover:underline"
          >
            manojavhad04@gmail.com
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://linkedin.com"
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

export default ContactLeft;
