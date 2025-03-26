import { Command, CommandMap } from "../types";

const help = (commands: CommandMap): Command => ({
  name: "help",
  args: [],
  description: "Affiche la liste des commandes disponibles.",
  action: () => {
    return [
      "Commandes disponibles:",
      ...Object.values(commands)
        .map(command => {
          const argsString: string = command.args.length > 0 ? ` ${command.args.join(" ")}` : "";
          return `${command.name}${argsString} - ${command.description}`;
        })
    ].join("\n");
  }
})

export default help;
