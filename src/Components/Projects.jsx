import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react"

const Projects = () => {
    const [projects, setProjects]= useState([])
    // console.log(projects);
    useEffect(()=>{
        axios.get("https://protfolio-server-ccg8.onrender.com/portfolio")
        .then(res=>{
            setProjects(res.data)
        })
    },[])

    return (
        <div className="bg-gray-950 ">
            <div className="w-11/12 mx-auto">
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0, y: -100 }}
            transition={{duration:1.5}}
            className="md:text-5xl text-3xl font-semibold text-center text-white pt-14">Projects</motion.h1>

            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3 py-16">
                {
                    projects.map(project => <motion.div
                        initial={{ x: -100, opacity:0 }} 
                        animate={{ x:0, opacity:1}}
                        transition={{duration:0.5,delay:1}}
                    key={project?._id} className="card bg-purple-100 shadow-xl">
                        <figure className="px-10 pt-10">
                          <img
                            src={project?.image}
                            alt="Shoes"
                            className="rounded-xl h-[200px] w-[500px] object-cover" />
                        </figure>
                        <div className="card-body items-center text-center ">
                          <h2 className="card-title">{project?.name}</h2>
                          <p>{project?.Description}</p>
                          <div className="card-actions">
                            <Link  to={`/projectDetails/${project?._id}`} className="btn bg-purple-600 hover:bg-purple-800 text-white">Details</Link>
                          </div>
                        </div>
                      </motion.div>)
                }
            </div>
            
            </div>
        </div>
    );
};

export default Projects;