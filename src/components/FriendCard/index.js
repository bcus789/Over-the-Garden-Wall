import React from "react";
import "./style.css";

const FriendCard = props => (
  <div className="card remove" onClick={() => props.clickedImage(props)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>{props.name}</li>
      </ul>
    </div>
  </div>
);

export default FriendCard;
