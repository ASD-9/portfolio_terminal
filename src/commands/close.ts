import { Command } from "../types";

const close: Command = {
  name: "close",
  args: ["[id]"],
  description: "Ferme la démo du projet [id].",
  action: async (args: string, __, setProjects) => {
    try {
      const arg = args.split(" ")[0];
      if (!parseInt(arg)) {
        return "Veuillez fournir un identifiant de projet (entier positif).";
      }
      setProjects(prev => prev.filter(project => project.id !== parseInt(arg)));
      return "Projet fermé.";
    } catch {
      return "Une erreur est survenue, veuillez réessayer.";
    }
  },
}

export default close;
