import { Command } from "../types";

const contact: Command = {
  name: "contact",
  args: [],
  description: "Mes informations de contact.",
  action: async () => {
    try {
      const API_URL = import.meta.env.VITE_PERSONAL_API_URL;
      const response = await fetch(`${API_URL}/contact`);
      const data = await response.json();
      if (response.status != 200) {
        return "Problème interne au serveur, réessayez plus tard.";
      }
      return (
        <table className="terminal-table">
          <tbody>
            <tr>
              <td>Email</td>
              <a href={`mailto:${data.data.email}`} target="_blank">
                <td className="terminal-table-link">{data.data.email}</td>
              </a>
            </tr>
            <tr>
              <td>Téléphone</td>
              <a href={`tel:${data.data.email}`} target="_blank">
                <td className="terminal-table-link">{data.data.phone}</td>
              </a>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <a href={data.data.linkedin} target="_blank">
                <td className="terminal-table-link">{data.data.linkedin}</td>
              </a>
            </tr>
          </tbody>
        </table>
      );
    } catch {
      return "Une erreur est survenue, veuillez réessayer.";
    }
  },
}

export default contact;
