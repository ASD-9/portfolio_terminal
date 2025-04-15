import { useContext } from "react";
import { ProjectsContext } from "../../context/ProjectsContext"

export const useHeader = () => {
  const { setProjects } = useContext(ProjectsContext);

  const handleCloseClick = (projectId: number) => {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId));
  }

  return {
    handleCloseClick
  }
}
