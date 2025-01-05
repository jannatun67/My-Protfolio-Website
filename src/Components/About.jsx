import girl from "../assets/girl.png";
import { motion } from "motion/react"

const About = () => {
  return (
    <div className="bg-gray-950 text-white">
      <motion.h2 
      initial={{ x: -100, opacity:0 }} 
      animate={{ x:0, opacity:1}}
      transition={{duration:0.5,delay:1}}
      className=" text-center pt-6 md:text-6xl text-3xl">About 
      <span className="text-neutral-500">Me</span></motion.h2>

      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:flex-1 md:mr-10 md:w-[400px]">
            <motion.img 
            initial={{ x: -100, opacity:0 }} 
            animate={{ x:0, opacity:1}}
            transition={{duration:0.5,delay:1}}
            src={girl} className=" rounded-lg shadow-2xl w-full " />
          </div>
          <div className="md:flex-1">
            <motion.p
            initial={{ x: 100, opacity:0 }} 
            animate={{ x:0, opacity:1}}
            transition={{duration:0.5,delay:1}}
            className="py-6   ">
              Hi, I’m Jannatun Fima, a Junior Frontend Developer with a passion
              for creating visually appealing and user-friendly websites. My
              programming journey began a few years ago when I first stumbled
              upon HTML and CSS. As a kid, I was always curious about technology
              and how websites worked. This curiosity sparked my interest in
              learning how to build and design websites myself. 
              <br />
             <p className=" mt-2"> Currently, I
              specialize in working with React.js, JavaScript, and CSS
              frameworks like Bootstrap and Tailwind. I enjoy crafting
              interactive user interfaces and bringing creative ideas to life
              through code. I find great satisfaction in tackling challenging
              projects, as they push me to learn and grow continuously.</p>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
