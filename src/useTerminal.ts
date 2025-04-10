import { useState, useRef, useEffect, FormEvent, KeyboardEvent } from "react";
import { HistoryEntry } from "./types";
import commands from "./commands";

export const useTerminal = () => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    { text: "Bienvenue dans mon terminal !", type: "system" },
    { text: "Tapez 'help' pour obtenir la liste des commandes disponibles.", type: "system" },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const processCommand = async (command: string): Promise<string> => {
    const parts = command.trim().split(" ");
    const commandName: string = parts[0];
    const args = parts.slice(1).join(" ");
    if (commandName in commands) {
      return await commands[commandName].action(args, setHistory);
    } else if (commandName === "") {
      return "";
    } else {
      return `Commande inconnue: ${commandName}`;
    }
  }

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput) {
      setCommandHistory(prev => [...prev, trimmedInput]);
      setHistoryIndex(-1);
    }
    const newEntry: HistoryEntry = { text: `$ ${input}`, type: "command" }; 
    const result: HistoryEntry = { text: await processCommand(input), type: "output" };
    setHistory(prev => [...prev, newEntry, ...(result.text ? [result] : [])]);
    setInput("");
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex >= 0 ? historyIndex - 1 : historyIndex;
        setHistoryIndex(newIndex);
        if (newIndex === -1) {
          setInput("");
        } else {
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = (): void => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return {
    input,
    setInput,
    history,
    setCommandHistory,
    setHistoryIndex,
    inputRef,
    terminalRef,
    handleSubmit,
    handleKeyDown,
    focusInput
  }
}
