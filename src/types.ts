import { JSX } from "react";

export type CommandFunction = (args: string, setHistory: React.Dispatch<React.SetStateAction<HistoryEntry[]>>) => string | Promise<string | JSX.Element> | JSX.Element;

export type Command = {
  name: string;
  args: string[];
  description: string;
  action: CommandFunction;
}

export type CommandMap = {
  [key: string]: Command
}

export type HistoryEntry = {
  text: string | JSX.Element;
  type: 'system' | 'command' | 'output';
}

export type Language = {
  language: string;
  level: string;
  comment: string;
}

export type Experience = {
  title: string;
  company: string;
  place: string
  startDate: string;
  endDate: string;
  details: string[];
}

export type Education = {
  title: string;
  school: string;
  place: string;
  startDate: string;
  endDate: string;
  details: string[];
}

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  url: string;
}
