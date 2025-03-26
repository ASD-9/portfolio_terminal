export type CommandFunction = (args: string, setHistory: React.Dispatch<React.SetStateAction<HistoryEntry[]>>) => string | Promise<string>;

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
  text: string;
  type: 'system' | 'command' | 'output';
}

export type Data = {
  id: number;
  name: string;
}
