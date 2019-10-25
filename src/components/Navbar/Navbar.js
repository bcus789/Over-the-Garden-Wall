import React, { Component } from "react";
import Logo from "./logo.png";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark sticky-top justify-content-between text-light">
    <a className="navbar-brand d-flex flex-row" href="#">
      <img src={Logo} className="mr-2" style={{height: "60px"}}/>
      <h3 className="d-flex flex-column">
        <span>Clicky Game</span>
        <small>Spongebob Edition</small>
      </h3>
    </a>
    <span className="nav-item">
      <h2>{props.message}</h2>
    </span>
    <span className="nav-item">
      <h3>
        Score: {props.score} | Top Score: {props.topScore}
      </h3>
    </span>
  </nav>
);

export default Navbar;
