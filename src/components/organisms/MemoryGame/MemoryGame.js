import React, { useEffect, useState } from "react";
import Card from "../../atoms/Card/Card";
import "./MemoryGame.css";

function MemoryGame(props) {
  const [cards, setCards] = useState([]);
  const [firstChoice,setFirstChoice] = useState(null);
  const [secondChoice,setSecongChoice] = useState(null);

  useEffect(() => {

    let images = [
      { src: "anchor" },
      { src: "apple" },
      { src: "avocado" },
      { src: "balloon" },
      { src: "bird" },
      { src: "boat" },
      { src: "bone" },
      { src: "butterfly" },
      { src: "cake" },
    ];

    let suffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(suffledCards);
  }, []);

  function handleChoice(card){

    console.log(card);

    if(!firstChoice)
      setFirstChoice(card)
    else if (!secondChoice)
      setSecongChoice(card)
    else 
     checkCarMatch();


  }

  function checkCarMatch(){

    console.log(firstChoice,secondChoice);

    if(firstChoice.src == secondChoice.src)
    alert("Win!!")

    setFirstChoice(null);
    setSecongChoice(null);

  }

  return (
    <div>
      <div className="cardsField">
        {cards.map((card) => {
          return <Card selected={firstChoice == card || secondChoice == card} onClick={() => handleChoice(card)} src={card.src} />;
        })}
      </div>
    </div>
  );
}

export default MemoryGame;
