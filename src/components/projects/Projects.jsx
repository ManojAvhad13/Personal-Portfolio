import React from 'react'
import Title from '../layouts/Title'
import projectOne from "../../assets/images/projects/projectOne.jpg";
import projectTwo from "../../assets/images/projects/projectTwo.png";
import projectThree from "../../assets/images/projects/projectThree.jpeg";
import projectFour from "../../assets/images/projects/projectFour.png";
import projectFive from "../../assets/images/projects/projectFive.png";




import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Web Based-E-Commerce"
          des=" • Developed a responsive web-based e-commerce platform using the MERN stack, implementing product
browsing, shopping cart functionality, secure authentication using JWT Auth, ensuring data protection and
enabling admin functionality for manage products (add, update, delete)..."
          src={projectOne}
        />
        <ProjectsCard
          title="Job Portal"
          des=" • Developed a Job Portal using ReactJs and Tailwind CSS and Firebase: Built a platform to connect job seekers
with employers, featuring responsive design for both desktop and mobile users.
• User can job search and filter job, job listings, and application management."
          src={projectTwo}
        />
        <ProjectsCard
          title="Weather App"
          des="• Developed a web-based Weather App using HTML, CSS, and JavaScript, offering a user-friendly interface.
• Integrated the Rapid Weather API to provide real-time weather information, like temperature, atmospheric
pressure, cloud formation, wind, humidity."
          src={projectThree}
        />
        <ProjectsCard
          title="ATM system"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFour}
        />
        <ProjectsCard
          title="Student Registration Form"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectFive}
        />
        <ProjectsCard
          title="PDF-to-Word converter"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
      </div>
    </section>
  );
}

export default Projects