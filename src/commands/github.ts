import { Command } from "../types";

const github: Command = {
  name: "github",
  args: ["[go]"],
  description: "Lien vers mon GitHub ([go] pour ouvrir dans un nouvel onglet).",
  action: async (args: string) => {
    try {
      const API_URL = import.meta.env.VITE_PERSONAL_API_URL;
      const response = await fetch(`${API_URL}/github`);
      const data = await response.json();
      if (response.status != 200) {
        return "Problème interne au serveur, réessayez plus tard.";
      }
      const arg = args.split(" ")[0];
      if (arg === "go") {
        window.open(data.data, "_blank");
      }
      return data.data;
    } catch {
      return "Une erreur est survenue, veuillez réessayer.";
    }
  },
}

export default github;
