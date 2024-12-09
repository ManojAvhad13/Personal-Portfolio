import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div>
        <div className="py-8 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left">
            Certificates
          </h2>
        </div>
        <div className="mt-8 lg:mt-14 w-full h-auto lg:h-[550px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 lg:gap-10">
          <ResumeCard
            title="Full Stack Developer Training"
            subTitle="TNS Foundation"
            result="Completed"
          />
          <ResumeCard
            title="HTML | CSS | JavaScript Essential Training"
            subTitle="LinkedIn Learning"
            result="Completed"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
