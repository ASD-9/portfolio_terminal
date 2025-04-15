import { Command } from "../types";

const login: Command = ({
  name: "login",
  args: ["[username]"],
  description: "Se connecter pour accéder à toutes les commandes.",
  action: async (args: string) => {
    const username = args.split(" ")[0];
    const password = args.split(" ")[1];
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      const data = await response.json();
      if (response.status == 200) {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("userData", JSON.stringify(data.data));
      }
      return data.message;
    } catch {
      return "Échec de la connexion. Veuillez réessayer.";
    }
  }
});

export default login;
