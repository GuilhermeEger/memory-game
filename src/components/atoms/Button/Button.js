import React from "react"
import "./Button.css"
import Icon from "../Icon/Icon";

function Button(props){
  return (
    <div onClick={() => props.onClick()} className="defaultButton">
      {props.iconName && <Icon className="ButtonIcon" src={props.iconName} />}
      <div>{props.label}</div>
    </div>
  )
};

export default Button;
