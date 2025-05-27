import { createContext, useState, ReactNode } from "react";
import { Project } from "../types";

type ProjectsContextType = {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
};

const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  setProjects: () => {},
});

const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider, ProjectsContext };