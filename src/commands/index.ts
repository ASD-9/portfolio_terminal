import { CommandMap } from "../types";

import clear from "./clear";
import help from "./help";
import about from "./about";
import contact from "./contact";
import skills from "./skills";
import languages from "./languages";
import experiences from "./experiences";
import login from "./login";
import whoami from "./whoami";
import why from "./why";

const commands: CommandMap = {
  clear,
  about,
  contact,
  skills,
  languages,
  experiences,
  login,
  whoami,
  why
};

commands["help"] = help(commands);

export default commands;
