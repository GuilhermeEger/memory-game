import React from "react";
import projectIcons from "../../../utils/iconsMap";
import "./Icon.css";

function Icon(props) {
  return (
    <div className={props.className ? props.className : "icon"}>
      {projectIcons[props.src]}
    </div>
  );
}

export default Icon;
