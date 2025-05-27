import { Command } from "../types";

const project: Command = {
  name: "project",
  args: ["[id]"],
  description: "Ouvre une démo du projet [id].",
  action: async (args: string, __, setProjects) => {
    try {
      const arg = args.split(" ")[0];
      if (!parseInt(arg)) {
        return "Veuillez fournir un identifiant de projet (entier positif).";
      }
      const API_URL = import.meta.env.VITE_PERSONAL_API_URL;
      const response = await fetch(`${API_URL}/projects/${arg}`);
      const data = await response.json();
      if (response.status == 404) {
        return "Projet introuvable, veuillez vérifier l'identifiant.";
      } else if (response.status != 200) {
        return "Problème interne au serveur, réessayez plus tard.";
      }
      setProjects(prev => [...prev, data.data]);
      return "Projet ouvert.";
    } catch {
      return "Une erreur est survenue, veuillez réessayer.";
    }
  },
}

export default project;
