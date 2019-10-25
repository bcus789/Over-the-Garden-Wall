import React, { Component } from "react";
import "./Board.css";
import Character from "../Character";

class Board extends Component {
  renderCharacter = character => {
    return (
      <Character
        name={character.path}
        photo={character.img}
        handleClick={this.props.handleClick}
        key={character.path}
      />
    );
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center board">
          {this.props.won ? (
            <button className="btn btn-lg" style={{maxHeight:50, backgroundColor:"#ff6700", color: "#fff"}} onClick={this.props.newGame}>
              Start Over!
            </button>
          ) : (
            this.props.order.map(i =>
              this.renderCharacter(this.props.characters[i])
            )
          )}
        </div>
      </div>
    );
  }
}

export default Board;
