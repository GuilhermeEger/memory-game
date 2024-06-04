import React, { useEffect, useState } from "react";
import Card from "../../atoms/Card/Card";
import "./MemoryGame.css";

function MemoryGame(props) {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecongChoice] = useState(null);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    let images = [
      { src: "anchor", matched: false },
      { src: "apple", matched: false },
      { src: "avocado", matched: false },
      { src: "balloon", matched: false },
      { src: "bird", matched: false },
      { src: "bomb", matched: false },
      { src: "boat", matched: false },
      { src: "bone", matched: false },
      { src: "butterfly", matched: false },
      { src: "cake", matched: false },
    ];

    let suffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(suffledCards);
  }, []);
  
useEffect(() => {

  if (cards.length == 0)
    return

  const allMatched = cards.every(card => card.matched === true);

  if(allMatched)
    return alert("Game finished!")

},[cards])

  useEffect(() => {
    if (firstChoice && secondChoice) {
      checkCarMatch();
    }
  }, [firstChoice, secondChoice]);

  function handleChoice(card) {
    if (!firstChoice) setFirstChoice(card);
    else if (!secondChoice) setSecongChoice(card);
    else checkCarMatch(card);
  }

  function checkCarMatch() {

    if (firstChoice.src == secondChoice.src) {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.src == firstChoice.src) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
      });

      resetTurn();
    } else {
      setTimeout(() => resetTurn(), 1000);
    }
  }

  function resetTurn() {
    //console.log("cards", cards);
    setFirstChoice(null);
    setSecongChoice(null);
    setTurns(turns + 1);
  }

  return (
    <div>
      <div className="cardsField">
        {cards.map((card) => {
          return (
            <Card
              selected={
                firstChoice == card ||
                secondChoice == card ||
                card.matched == true
              }
              onClick={() => handleChoice(card)}
              src={card.src}
            />
          );
        })}
      </div>
      <div>{turns}</div>
    </div>
  );
}

export default MemoryGame;
