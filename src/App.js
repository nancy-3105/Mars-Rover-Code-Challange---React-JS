import React from "react";
import "./styles.css";
import Mars from "./Mars";

class App extends React.Component {
  state = {
    commands: "",
    commandsToExecute: "",
    execute: false,
    startPosition: "00N",
  };

  addCommand = (e) => {
    this.setState({
      commands: this.state.commands + e.target.value,
    });
  };

  runSample = (e) => {
    this.setState({
      commands: e.target.value,
    });
  };

  execute = () => {
    let startPosition = this.startInput.value;
    if (/^[0-4][0-4][NEWS]$/.test(startPosition)) {
      this.setState({
        execute: true,
        commandsToExecute: this.state.commands,
        startPosition,
      });
    } else {
      alert("Invalid start position.");
    }
  };

  clear = () => {
    this.setState({
      commands: "",
      execute: false,
      commandsToExecute: "",
    });
  };

  validateStartPosition = (e) => {
    e.target.checkValidity();
  };

  stopExecute = () => {
    this.setState({
      execute: false,
    });
  };

  render() {
    let position = this.state.startPosition || "00N";
    position = position.split("").join(" ");
    return (
      <div className={"app"}>
        <h1 className={"app-name"}>Mars Rover in JavaScript / React</h1>
        <div className={`control-panel`}>
          <div className={"start-position"}>
            <label htmlFor="startPosition">Start Position (Eg; 00N):</label>
            <input
              type="text"
              id="startPosition"
              data-testid="startPosition"
              maxLength={3}
              required
              pattern={"^[0-4][0-4][NEWS]$"}
              defaultValue={"00N"}
              onBlur={this.validateStartPosition}
              ref={(elm) => {
                this.startInput = elm;
              }}
            />
          </div>
          <div className="commands">
            <button value="M" onClick={this.addCommand}>
              Move
            </button>
            <button value="L" onClick={this.addCommand}>
              Left
            </button>
            <button value="R" onClick={this.addCommand}>
              Right
            </button>
          </div>
          <div className="execution">
            <button onClick={this.clear} className="secondary">
              ✖
            </button>
            <input
              type="text"
              data-testid="commands-input"
              readOnly
              value={this.state.commands}
            />
            <button className={"cta"} onClick={this.execute}>
              Execute
            </button>
          </div>
        </div>
        <Mars
          size={5}
          position={position}
          commands={this.state.commandsToExecute}
          execute={this.state.execute}
          onDone={this.stopExecute}
        />
      </div>
    );
  }
}

export default App;
