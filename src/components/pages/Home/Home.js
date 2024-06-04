import React from "react"
import MemoryGame from "../../organisms/MemoryGame/MemoryGame";
import "./Home.css";

function Home(props){
  return (
    <div className="home">
      <MemoryGame />
    </div>
  )
};

export default Home;
