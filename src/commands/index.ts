import { CommandMap } from "../types";

import clear from "./clear";
import help from "./help";

const commands: CommandMap = {
  clear,
};

commands["help"] = help(commands);

export default commands;
