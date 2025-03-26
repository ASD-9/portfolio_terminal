import { Command } from "../types";

const clear: Command = {
  name: "clear",
  args: [],
  description: "Efface le terminal.",
  action: (_, setHistory) => {
    setHistory([]);
    return "";
  },
}

export default clear;
