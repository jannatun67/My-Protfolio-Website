import { FaFacebook, FaGithub } from 'react-icons/fa';
import girl from '../assets/girl.png'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Resume from "../assets/Skills/Untitled document.pdf"
import Contact from './Contact';
import { motion } from "motion/react"



const HomePage = () => {
  return (
    <div>
      <div className="hero  bg-gray-950 text-white min-h-screen pt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className='flex-1 md:ml-44'>
         <motion.img
         initial={{ x: 100, opacity:0 }} 
         animate={{ x:0, opacity:1}}
         transition={{duration:1,delay:1.2}}
            src={girl}
            className=" rounded-full shadow-2xl w-full "
          />
         </div>
          <div className='flex-1'>
            <motion.h1  initial={{ x: -100, opacity:0 }} 
             animate={{ x:0, opacity:1}}
             transition={{duration:0.5,delay:0}}
            className="text-4xl font-thin md:text-6xl">Jannatun Fima</motion.h1>
            <motion.h3
            initial={{ x: -100, opacity:0 }} 
            animate={{ x:0, opacity:1}}
            transition={{duration:0.5,delay:0.5}}
            className='bg-gradient-to-r to-purple-800  via-slate-400  from-pink-300 bg-clip-text tracking-tight text-transparent md:text-2xl text-xl md:mt-8 mt-5'>Frontend Developer</motion.h3>
            <motion.p
            initial={{ x: -100, opacity:0 }} 
            animate={{ x:0, opacity:1}}
            transition={{duration:0.5,delay:1}}
            className="py-6   ">
            "I am an enthusiastic junior front-end developer with a strong foundation in HTML5, CSS3, and JavaScript, complemented by hands-on experience with frameworks like React and Next.js. Passionate about creating responsive and user-friendly web interfaces, I enjoy bringing design concepts to life while ensuring optimal performance and accessibility. Eager to learn and grow, I am committed to contributing my skills to build innovative digital experiences and support team success."
            </motion.p>
                <motion.div
                initial={{ x: -100, opacity:0 }} 
                animate={{ x:0, opacity:1}}
                transition={{duration:0.5,delay:1.3}}
                className='mb-5 flex gap-3 text-2xl'>
                    <a href="https://www.facebook.com/alexmafi.chowdhury.3"> <FaFacebook /></a>
                    <a href="https://github.com/jannatun67"><FaGithub /></a>
                </motion.div>
           <motion.a 
           initial={{ x: -100, opacity:0 }} 
           animate={{ x:0, opacity:1}}
           transition={{duration:0.5,delay:1.3}}
           className="btn border-0 text-white bg-purple-500 hover:bg-purple-700" href={Resume} download={Resume}>Resume</motion.a>
          </div>
        </div>
      </div>

      <div>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default HomePage;
