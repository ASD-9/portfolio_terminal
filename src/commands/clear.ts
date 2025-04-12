import { Command } from "../types";

const clear: Command = {
  name: "clear",
  args: [],
  description: "🧹 Nettoie l'écran du terminal.",
  action: (_, setHistory) => {
    setHistory([]);
    return "";
  },
}

export default clear;
