import React from "react";
import "./style.css";

const FriendCard = props => (
  <div className="card remove" onClick={() => props.clickedImage(props)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong></strong> {props.name}
        </li>
      </ul>
    </div>
    {/* <span className="remove" onClick={()=> props.removeFriend(props.id)} >𝘅</span> */}
  </div>
);

export default FriendCard;
