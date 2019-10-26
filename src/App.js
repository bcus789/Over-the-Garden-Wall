import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import NavBar from "./components/NavBar";
import Title from "./components/Title";

class App extends Component {

  state = {
    friends,
    clicked_ids:[],
    score: 0,
    message: ""
  };


  shuffle = () => {
    const friends = this.state.friends.sort( () => Math.random() - 0.5);

    this.setState({ friends });
  };
  
  pickEval = id => {
    let clicked_ids = this.state.clicked_ids;
    
    if(clicked_ids.includes(id)){
      this.setState({ clicked_ids: [], score: 0, message:  "The Beast has claimed his prize in flesh"});
    } else {    
      clicked_ids.push(id);
      this.setState({score: clicked_ids.length, message: "Don' stray from the path"})
      if (this.state.score === 12){
        this.setState({ clicked_ids: [], score: 0, message:  "You have found your way home" });
      }
    }

    this.shuffle();

  };

  render() {
    this.state.friends.sort( () => Math.random() - 0.5)
    return (
      <div className = "App">
      <NavBar 
        total = {this.state.score}
        message = {this.state.message}
      />
      <Wrapper>
      <Title>Over the Garden Wall</Title>
      <h5>select the same and feel the pain</h5>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            handleClick = {this.pickEval}
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
