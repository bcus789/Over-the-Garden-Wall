import React from 'react';
import "./navBar.css";

const NavBar = props => (
  <nav className="navBar navbar-expand-lg">
    <h3 className = "score">Your Score: {props.total}</h3>
    <h3 className = "message">{props.message}</h3>
  </nav>
)

export default NavBar
