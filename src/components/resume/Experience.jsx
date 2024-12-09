import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left">
            Internship & Training Experience
          </h2>
        </div>
        <div className="mt-8 lg:mt-14 w-full h-auto lg:h-[750px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 lg:gap-10">
          <ResumeCard
            title="Web Developer Internship"
            subTitle="CodeClause Pvt. Ltd - (2023)"
            result="1 Month"
            des="Completed CodeClause web developer internship with hands-on experience. Developed projects including an ATM system, 
                 student registration form and PDF-to-Word converter. Utilized technologies such as HTML, CSS, and JavaScript for building responsive web applications."
          />
          <ResumeCard
            title="Full Stack Developer Training"
            subTitle="TNS Foundation - (2024)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p> */}
          {/* <h2 className="text-4xl font-bold">Trainer Experience</h2> */}
        </div>
        {/* <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;