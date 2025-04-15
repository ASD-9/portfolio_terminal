import { Command, Language } from "../types";

const languages: Command = {
  name: "languages",
  args: [],
  description: "Liste de mes compétences.",
  action: async () => {
    try {
      const API_URL = import.meta.env.VITE_PERSONAL_API_URL;
      const response = await fetch(`${API_URL}/languages`);
      const data = await response.json();
      if (response.status != 200) {
        return "Problème interne au serveur, réessayez plus tard.";
      }
      return (
        <table className="terminal-table">
          <thead>
            <tr>
              <th>Langages</th>
              <th>Niveau</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((language: Language) => (
              <tr>
                <td>{language.language}</td>
                <td>{language.level}<br />{language.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } catch {
      return "Une erreur est survenue, veuillez réessayer.";
    }
  },
}

export default languages;
