import { Command } from "../types";

const why: Command = {
  name: "why",
  args: [],
  description: "Ma motivation pour postuler ici. [Connexion requise]",
  action: () => {
    const data = sessionStorage.getItem("userData");
    if (data) {
      return JSON.parse(data).reason;
    }
    return "Accès refusé : vous devez être connecté pour utiliser cette commande.";
  },
}

export default why;
