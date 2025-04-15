import { Command } from "../types";

const skills: Command = {
  name: "skills",
  args: [],
  description: "Mes informations de contact.",
  action: async () => {
    try {
      const API_URL = import.meta.env.VITE_PERSONAL_API_URL;
      const response = await fetch(`${API_URL}/skills`);
      const data = await response.json();
      if (response.status != 200) {
        return "Problème interne au serveur, réessayez plus tard.";
      }
      return (
        <table className="terminal-table">
          <tbody>
            <tr>
              <td>Développement Back-end</td>
              <td>{data.data.backend.join(", ")}</td>
            </tr>
            <tr>
              <td>Développement Front-end</td>
              <td>{data.data.frontend.join(", ")}</td>
            </tr>
            <tr>
              <td>DevOps & Outils</td>
              <td>{data.data.devops.join(", ")}, {data.data.tools.join(", ")}</td>
            </tr>
            <tr>
              <td>Méthodologies & Soft Skills</td>
              <td>{data.data.methodology.join(", ")}, {data.data.soft.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      );
    } catch {
      return "Une erreur est survenue, veuillez réessayer.";
    }
  },
}

export default skills;
