import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import NavBar from "./components/NavBar";


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
      console.log("wrong!")
      this.setState({ clicked_ids: [], score: 0});
    } else {    
      clicked_ids.push(id);
      this.setState({score: clicked_ids.length,})
      if (this.state.score === 2){
        this.setState({ clicked_ids: [], score: 0 });
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
