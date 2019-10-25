import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import NavBar from "./components/NavBar/navBar";

class App extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    clicked: []
  };
  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };

  clickedImage = props => {
    if (this.state.clicked.includes(props.id) === false) {
      this.state.clicked.push(props.id);
      this.setState({
        score: this.state.score + 1
      });
      if (this.state.score >= this.state.topScore) {
        this.setState(prevState => ({
          topScore: prevState.score,
          topMessage: "You guessed correctly!"
        }));
      }
    } else {
      this.setState({
        score: 0,
        clicked: [],
        topMessage: "You guessed incorrectly!"
      });
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.score });
      }
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <NavBar scores={this.state} />
        <Wrapper>
          <Title>Over the Garden Wall</Title>
          {this.state.friends.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
