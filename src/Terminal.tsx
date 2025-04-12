import { Rnd } from "react-rnd";
import { useTerminal } from "./useTerminal";

const Terminal = () => {
  const {
    input,
    setInput,
    history,
    setHistoryIndex,
    isWaiting,
    username,
    companyName,
    inputRef,
    terminalRef,
    handleSubmit,
    handleKeyDown,
    focusInput
  } = useTerminal();

  return (
    <Rnd
      default={{
        // Position the terminal in the center of the screen
        x: window.innerWidth / 2 - 300,
        y: window.innerHeight / 2 - 200,
        width: 600,
        height: 400,
      }}
      dragHandleClassName="terminal-header"
      minWidth={500}
      minHeight={300}
      maxWidth={window.innerWidth}
      maxHeight={window.innerHeight}
      bounds="window"
    >
      <div className="terminal-container">
        <div className="terminal-header">
          <p className="terminal-name">{username}@{companyName}</p>
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
            { !isWaiting
              ? <span className="prompt">$</span>
              : <span className="prompt">🔐</span>
            }
            <input
              ref={inputRef}
              className={`input ${isWaiting ? "password" : ""}`}
              type={isWaiting ? "password" : "text"}
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
    </Rnd>
  );
};

export default Terminal;
