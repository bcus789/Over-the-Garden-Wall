import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Board from "./components/Board";
import characters from "./img";
import { shuffleArray, genArray } from "./utils/array";

class App extends Component {
  state = {
    topScore: 0,
    score: 0,
    characters,
    order: shuffleArray(genArray(0, characters.length - 1)),
    message: "Click on any picture to begin!",
    won: false,
  };

  handleClick = propsCharName => {
    const charIndex = this.state.characters.findIndex(
      character => character.path === propsCharName
    );

    if (charIndex === -1)
      return this.setMessage("Something went wrong! Try reloading the page.");

    if (this.state.characters[charIndex].clicked === true) {
      this.setMessage("Oops! Click on any picture to start over!");
      this.resetScore();
      this.unClickAllCharacters();
    } else {
      this.setCharacterToClicked(charIndex);
      this.incrementScore();
    }
    this.shuffleCharacters();
  };

  newGame = () => {
    this.unClickAllCharacters();
    this.resetScore();
    this.resetTopScore();
    this.setMessage("Click on any picture to begin!");
    this.setState({ won: false });
  };

  setMessage = message => {
    this.setState({ message });
  };

  setCharacterToClicked = charIndex => {
    this.setState(state => {
      state.characters[charIndex].clicked = true;
      return {
        characters: state.characters,
      };
    });
  };

  unClickAllCharacters = () => {
    this.setState(state => {
      return {
        characters: state.characters.map(character => {
          character.clicked = false;
          return character;
        }),
      };
    });
  };

  incrementScore = () => {
    this.setState(state => {
      const won = state.score + 1 === state.characters.length;

      return {
        score: state.score + 1,
        topScore:
          state.topScore === state.score ? state.topScore + 1 : state.topScore,
        won: won ? true : false,
        message: won
          ? "Congratulations! You've won!"
          : "Don't click on the same picture again!",
      };
    });
  };

  resetScore = () => {
    this.setState({ score: 0 });
  };

  resetTopScore = () => {
    this.setState({ topScore: 0 });
  };

  shuffleCharacters = () => {
    this.setState(state => {
      return { order: shuffleArray(state.order) };
    });
  };

  render() {
    return (
      <div>
        <Navbar
          topScore={this.state.topScore}
          score={this.state.score}
          message={this.state.message}
        />
        <Board
          handleClick={this.handleClick}
          topScore={this.state.topScore}
          score={this.state.score}
          order={this.state.order}
          characters={this.state.characters}
          won={this.state.won}
          newGame={this.newGame}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
