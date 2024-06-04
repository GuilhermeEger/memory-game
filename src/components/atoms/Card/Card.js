import React from "react";
import "./Card.css";
import Icon from "../Icon/Icon";

function Card(props) {
  return (
    <div className={"cardsWrap "}>
      <div
        className={"imageFieldFront " + (props.selected ? "flippledCard" : "")}
      >
        <Icon src={props.src} />
      </div>
      <div
      className={"imageFieldBack"}
      onClick={() => props.onClick()}
      />
    </div>
  );
}

export default Card;
