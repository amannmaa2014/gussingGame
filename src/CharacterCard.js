import React, { Component } from "react";
import background from "./img/disney.jpg";

class CharacterCard extends Component {
  state = {
    guessWho: " ",
    msg: "",
    backColor: { backgroundColor: "black" },
    textColor: { color: "black" },
    randomCharacter: this.props.randomChoiseProp,
    texstSize: { fontSize: null },
    background: background
  };

  handleChange = event => {
    this.setState({ guessWho: event.target.value });
  };

  handleClick = () => {
    let name = this.props.randomChoiseProp.actor_name.toLowerCase();
    let input = this.state.guessWho.toLowerCase();
    if (input !== "") {
      if (input === name) {
        this.setState({
          msg: "Hurray! U Win",
          texstSize: { fontSize: "xx-large" }
        });
      } else {
        this.setState({
          msg: "U Lose The Actor is " + name,
          texstSize: { fontSize: "xx-large" }
        });
      }
    }
  };
  render() {
    return (
      <div className="backGroundImg">
        <h2>مين مثّل صوت الشخصية بالدبلجة المصرية؟</h2>
        {this.state.msg !== "" ? (
          <div>
            <h2>{this.props.randomChoiseProp.actor_name}</h2>
            <img
              height="200px"
              width="400px"
              src={this.props.randomChoiseProp.actor_photo}
            />
          </div>
        ) : (
          <div>
            <h1>{this.props.randomChoiseProp.char_name}</h1>
            <img
              height="200px"
              width="400px"
              src={this.props.randomChoiseProp.photo}
            />
          </div>
        )}
        <br />
        <input
          id="inputn"
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        <div style={this.state.backColor}>
          <h4 style={this.state.color}>{this.state.msg}</h4>
        </div>
        <button className="btn btn-dark " onClick={this.handleClick}>
          Guess Hwo
        </button>
      </div>
    );
  }
}
export default CharacterCard;
