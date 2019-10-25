import React, {Component} from "react";
import "./Character.css";

const Character = props => (
  <img
    className="img-thumbnail img"
    key={props.name}
    src={props.photo}
    alt={props.name}
    onClick={() => props.handleClick(props.name)}
    style={{cursor: "pointer"}}
  />
);

export default Character;
