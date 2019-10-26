import React from 'react';
import "./navBar.css";

const NavBar = props => (
  <nav className="navbar navbar-light bg-light">
      <h1>Clicky Game</h1>
    <h3 className = "score">Your Score: {props.total}</h3>
    <h3 className = "message">{props.message}</h3>
  </nav>
)

export default NavBar
