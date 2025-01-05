import { DiMongodb } from "react-icons/di";
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { motion } from "motion/react"

const Skills = () => {
  return (
    <div className="bg-gray-950 ">
      <div className="w-11/12 mx-auto">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y: -100 }}
        transition={{duration:1.5}}
        className="text-center md:text-5xl text-3xl  font-semibold text-white mb-10">
          Skills
        </motion.h1>

        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x: -100 }}
        transition={{duration:1.5}}
        className="flex items-center justify-center gap-4 flex-wrap py-10">

          <motion.div
          initial={{y:-10}}
          animate={{y:[11,-11]}}
          transition={{  ease:"linear", repeat:Infinity, repeatType:"reverse", duration:2.5 }}
          className="rounded-2xl border-4 border-neutral-400 p-4">
            <TiHtml5 className="text-7xl text-cyan-400" />
          </motion.div>

          <motion.div
           initial={{y:-10}}
           animate={{y:[11,-11]}}
           transition={{  ease:"linear",repeat:Infinity, repeatType:"reverse", duration:3 }}
          className="rounded-2xl border-4 border-neutral-400 p-4">
            <IoLogoCss3  className="text-7xl text-blue-500" />
          </motion.div>

          <motion.div
           initial={{y:-10}}
           animate={{y:[11,-11]}}
           transition={{  ease:"linear", repeat:Infinity, repeatType:"reverse", duration:5 }}
          className="rounded-2xl border-4 border-neutral-400 p-4">
            <FaJs  className="text-7xl text-yellow-400" />
          </motion.div>

          <motion.div
           initial={{y:-10}}
           animate={{y:[11,-11]}}
           transition={{  ease:"linear", duration: 2,repeat:Infinity, repeatType:"reverse", duration:2 }}
          className="rounded-2xl border-4 border-neutral-400 p-4">
            <FaReact  className="text-7xl text-cyan-500" />
          </motion.div>

          <motion.div
          initial={{y:-10}}
          animate={{y:[11,-11]}}
          transition={{  ease:"linear", duration: 2,repeat:Infinity, repeatType:"reverse", duration:6 }}
          className="rounded-2xl border-4 border-neutral-400 p-4">
            <FaNodeJs  className="text-7xl text-green-500"/>
          </motion.div>

          <motion.div
          initial={{y:-10}}
          animate={{y:[11,-11]}}
          transition={{  ease:"linear", duration: 2,repeat:Infinity, repeatType:"reverse", duration:4 }}
          className="rounded-2xl border-4 border-neutral-400 p-4">
            <RiTailwindCssFill className="text-7xl text-blue-400" />
          </motion.div>

          <motion.div 
          initial={{y:-10}}
          animate={{y:[11,-11]}}
          transition={{  ease:"linear", duration: 2,repeat:Infinity, repeatType:"reverse", duration:3 }}
          className="rounded-2xl border-4 border-neutral-400 p-4">
            <DiMongodb  className="text-7xl text-green-500" />
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
