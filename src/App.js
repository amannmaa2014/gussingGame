import React, { Component } from "react";
import "./App.css";
import characters from "./data";
//import actors from "./actors";

import CharacterCard from "./CharacterCard";

class App extends Component {
  state = {
    currentCharacter: null
  };
  selectCharacter = character => {
    let randomCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    this.setState({ currentCharacter: randomCharacter });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        {this.state.currentCharacter ? (
          <div className="Game container">
            <CharacterCard randomChoiseProp={this.state.currentCharacter} />
          </div>
        ) : (
          <div>
            <br />
            <br />
            <br />
            <br />

            <button
              id="reset"
              class="btn btn-lg btn-block"
              onClick={() => this.selectCharacter(characters)}
            >
              {" "}
              ENTER THE GAME{" "}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
