import { useContext } from "react";
import Smartphone from "./Smartphone";
import { Project } from "../../types";
import { ProjectsContext } from "../../context/ProjectsContext";

const ProjectsList = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <div>
      {projects.map((project: Project) => (
        <Smartphone key={project.id} project={project}>
          <iframe
            src={project.url}
            title={project.title}
            style={{ width: "100%", height: "100%", border: "none" }}
            />
        </Smartphone>
      ))}
    </div>
  )
};

export default ProjectsList;
