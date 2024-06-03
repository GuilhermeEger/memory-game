import React, { useEffect, useState } from "react";
import Card from "../../atoms/Card/Card";
import "./GameField.css";

function GameField(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let images = [
      { src: "aaa" },
      { src: "bbb" },
      { src: "ccc" },
      { src: "ddd" },
      { src: "eee" },
    ];

    let suffledCards = [...images, ...images, ...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(suffledCards);
  }, []);

  return (
    <div>
      <div className="cardsField">
        {cards.map((card) => {
          return <Card src={card.src} />;
        })}
      </div>
    </div>
  );
}

export default GameField;
