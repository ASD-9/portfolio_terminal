import { CommandMap } from "../types";

import clear from "./clear";
import help from "./help";
import login from "./login";

const commands: CommandMap = {
  clear,
  login,
};

commands["help"] = help(commands);

export default commands;
