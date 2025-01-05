import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  const [project, setProject] = useState([]);

  useEffect(() => {
    axios.get(`https://protfolio-server-ccg8.onrender.com/portfolio/${id}`).then((res) => {
      setProject(res.data);
    });
  }, []);
  return (
    <div className="flex justify-center py-10">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={project?.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {project?.name}
            
          </h2>
          <p>{project?.Description}</p>
          <div className="flex gap-4 font-bold">
            {
                project?.mainTechStack?.map(techStack => <p>{techStack}</p>)
            }
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline"><a href={project?.liveLink}>liveLink</a></div>
            <div className="badge badge-outline"><a href={project?.githubLink}>githubLink</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
