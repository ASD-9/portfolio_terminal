import { useContext } from "react";
import Smartphone from "./Smartphone";
import { Project } from "./types";
import { ProjectsContext } from "./ProjectsContext";

const ProjectsList = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <div>
      {projects.map((project: Project) => (
        <Smartphone key={project.id} projectTitle={project.title}>
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
