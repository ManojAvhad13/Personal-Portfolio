import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaJava } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa6';
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
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
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Best Skill On
        </h2>
        <div className="flex gap-4">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="React"
          >
            <FaReact />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="JavaScript"
          >
            <SiJavascript />
          </a>
          <a
            href="https://www.java.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="Java"
          >
            <FaJava />
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
            title="Tailwind CSS"
          >
            <SiTailwindcss />
          </a>
        </div>
      </div>
    </div>


  )
}

export default Media