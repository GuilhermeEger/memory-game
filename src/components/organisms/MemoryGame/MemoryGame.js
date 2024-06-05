import React, { useEffect, useState } from "react";
import Card from "../../atoms/Card/Card";
import AnimationRender from "../../atoms/AnimationRender/AnimationRender";
import Button from "../../atoms/Button/Button";
import "./MemoryGame.css";

function MemoryGame(props) {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecongChoice] = useState(null);
  const [turns, setTurns] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState("hard");

  useEffect(() => {
    suffledCards(gameDifficulty);
  }, []);

  useEffect(() => {
    if (firstChoice && secondChoice) {
      checkCarMatch();
    }
  }, [firstChoice, secondChoice]);

  useEffect(() => {
    if (cards.length == 0) return;

    const allMatched = cards.every((card) => card.matched === true);

    if (allMatched) return setGameFinished(true);
  }, [cards]);

  useEffect(() => {
    restartGame();
  }, [gameDifficulty]);

  function suffledCards() {
    let images = setImagesList(gameDifficulty);

    let suffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(suffledCards);
  }

  function setImagesList() {
    let images = [];

    if (gameDifficulty == "hard")
      return (images = [
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
      ]);

    if (gameDifficulty == "easy")
      return (images = [
        { src: "anchor", matched: false },
        { src: "apple", matched: false },
        { src: "avocado", matched: false },
        { src: "balloon", matched: false },
        { src: "bird", matched: false },
      ]);
  }

  function handleChoice(card) {
    if (!firstChoice) setFirstChoice(card);
    else if (!secondChoice) setSecongChoice(card);
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
    setFirstChoice(null);
    setSecongChoice(null);
    setTurns(turns + 1);
  }

  function restartGame() {
    resetTurn();
    suffledCards();
    setGameFinished(false);
    setTurns(0);
  }

  function changeDifficult(gameMode) {
    setGameDifficulty(gameMode);
  }

  return (
    <div>
      <div
        className={
          "cardsField " +
          (gameFinished ? "cardsFieldRotate" : "") +
          (gameDifficulty + "GameModeGrid")
        }
      >
        <div className="gameHeader">
          <Button
            iconName="baby"
            onClick={() => changeDifficult("easy")}
            label="Easy"
          />
          <Button
            iconName="smileXEyes"
            onClick={() => changeDifficult("hard")}
            label="Hard"
          />
        </div>

        <>
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
        </>

        {gameFinished && (
          <>
            <AnimationRender className="leftConfetti" name="confetti" />
            <AnimationRender className="rightConfetti" name="confetti" />
            <AnimationRender className="congratulation" name="congratulation" />
          </>
        )}

        <div className="gameFooter">
          <div className="turnsPanel">
            <div>{"Turns: " + turns}</div>
          </div>
          <Button onClick={() => restartGame()} label="Restart" />
        </div>
      </div>
    </div>
  );
}

export default MemoryGame;
