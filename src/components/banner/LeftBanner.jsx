import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Web Developer.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Manoj Avhad</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a web developer with experience in building responsive web applications using HTML, CSS, and JavaScript.
          I have also worked with MERN stack technologies, including MongoDB, Express, React, and Node.js, to develop a full-stack application.
          I have experience with various other technologies such as Bootstrap 5, Firebase, JWT Auth, and Tailwind CSS.
          I am proficient in various programming languages, including Java, JavaScript, MySQL, and MongoDB.
        </p>
        {/* Button to open resume in a new tab */}
        <a
          href="/src/assets/Manoj_Avhad_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block px-6 py-3 bg-designColor text-white font-bold text-lg rounded-md hover:bg-opacity-90 transition duration-300 text-center"
        >
          View My Resume
        </a>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
