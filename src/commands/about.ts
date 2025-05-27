import { Command } from "../types";

const about: Command = {
  name: "about",
  args: [],
  description: "En savoir plus sur mon profil.",
  action: async () => {
    try {
      const API_URL = import.meta.env.VITE_PERSONAL_API_URL;
      const response = await fetch(`${API_URL}/about`);
      const data = await response.json();
      if (response.status != 200) {
        return "Problème interne au serveur, réessayez plus tard.";
      }
      return data.data;
    } catch {
      return "Une erreur est survenue, veuillez réessayer.";
    }
  },
}

export default about;
