import React, { Component } from "react";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">Clicky Game</h1>
        <hr />
        <p className="lead">Spongebob Edition</p>
      </div>
    </div>
  );
};

export default Jumbotron;
