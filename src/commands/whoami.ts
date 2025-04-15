import { Command } from "../types";

const whoami: Command = {
  name: "whoami",
  args: [],
  description: "Qui suis-je ? [Connexion requise]",
  action: () => {
    const data = sessionStorage.getItem("userData");
    if (data) {
      return JSON.parse(data).description;
    }
    return "Accès refusé : vous devez être connecté pour utiliser cette commande.";
  },
}

export default whoami;
