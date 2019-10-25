import React, { Component } from "react";
import "./Footer.css";

const Footer = props => (
  <img
    key={props.name}
    src={props.photo}
    alt={props.name}
    onClick={() => props.handleClick(props.name)}
  />
);

export default Footer;
