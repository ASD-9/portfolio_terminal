import { Command, Project } from "../types";

const projectsList: Command = {
  name: "projects-list",
  args: [],
  description: "Liste de mes projets.",
  action: async () => {
    try {
      const API_URL = import.meta.env.VITE_PERSONAL_API_URL;
      const response = await fetch(`${API_URL}/projects`);
      const data = await response.json();
      if (response.status != 200) {
        return "Problème interne au serveur, réessayez plus tard.";
      }
      return (
        <div>
          {data.data.map((project: Project, index: number) => (
            <div>
              <p>{project.id} - {project.title}</p>
              <p>{project.description}</p>
              <p>Stack: {project.technologies.join(", ")}</p>
              {index !== data.data.length - 1 && <hr />}
            </div>
          ))}
        </div>
      );
    } catch {
      return "Une erreur est survenue, veuillez réessayer.";
    }
  },
}

export default projectsList;
