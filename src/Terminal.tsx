import { useTerminal } from "./useTerminal";

const Terminal = () => {
  const {
    input,
    setInput,
    history,
    setHistoryIndex,
    inputRef,
    terminalRef,
    handleSubmit,
    handleKeyDown,
    focusInput
  } = useTerminal();

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="button green"></div>
          <div className="button yellow"></div>
          <div className="button red"></div>
        </div>
      </div>

      <div ref={terminalRef} onClick={focusInput} className="terminal-body">
        <p>Portfolio Terminal</p>
        {history.map((entry, index) => (
          <div key={index} className={`terminal-line ${entry.type}`}>
            <pre>{entry.text}</pre>
          </div>
        ))}
        <form onSubmit={handleSubmit} className="terminal-input-line">
          <span className="prompt">$</span>
          <input
            ref={inputRef}
            className="input"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setHistoryIndex(-1);
            }}
            onKeyDown={handleKeyDown}
            autoFocus
            />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
