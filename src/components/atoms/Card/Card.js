import React from "react";
import "./Card.css";

function Card(props){
  return (
    <div className="imageField">
        <div>{props.src}</div>
    </div>
  )
};

export default Card;
