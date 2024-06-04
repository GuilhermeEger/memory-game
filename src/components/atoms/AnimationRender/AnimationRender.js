import React from "react"
import animations from "../../../utils/animationsMap";
import Lottie from "lottie-react";

function AnimationRender(props){
  return (
    <div>
      <Lottie className={props.className} animationData={animations[props.name]} />
    </div>
  )
};

export default AnimationRender;
