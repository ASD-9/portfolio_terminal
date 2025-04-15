import { CommandMap } from "../types";

import clear from "./clear";
import help from "./help";
import about from "./about";
import login from "./login";
import whoami from "./whoami";
import why from "./why";

const commands: CommandMap = {
  clear,
  about,
  login,
  whoami,
  why
};

commands["help"] = help(commands);

export default commands;
