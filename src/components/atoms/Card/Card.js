import React from "react";
import "./Card.css";
import Icons from "../Icons/Icons";

function Card(props){
  return (
    <div onClick={() => props.onClick()} className={"imageField " + (props.selected ? "selectedCard" : "")}>
        <Icons />
    </div>
  )
};

export default Card;
