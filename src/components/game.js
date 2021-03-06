/** @format */
import React from "react";

import Dice from "./dice";

export default function Game() {
  const [diceArr, setDiceArr] = React.useState([]);
  const [readyToSTart, setReadyToStart] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);

  const diceComponents = diceArr.map((item, index) => (
    <Dice key={index} state={item} clickEvent={doFreezeDice} />
  ));

  function addDice() {
    const diceState = {
      id: Math.random(),
      number: Math.ceil(Math.random() * 6),
      isFreeze: false,
    };
    setDiceArr((prevDiceArr) => [...prevDiceArr, diceState]);
  }

  function deleteDice() {
    if (diceArr.length > 0) {
      setDiceArr((prevDiceArr) => {
        let newDiceArr = [...prevDiceArr];
        newDiceArr.pop();
        return newDiceArr;
      });
    } else {
      alert("제거할 주사위가 없습니다.");
    }
  }

  function doFreezeDice(event) {
    if (readyToSTart)
      setDiceArr((prevDiceArr) =>
        prevDiceArr.map((dice) => {
          return dice.id === +event.target.id
            ? {
                ...dice,
                isFreeze: !dice.isFreeze,
              }
            : dice;
        })
      );
  }

  function rollDice() {
    setDiceArr((prevDiceArr) =>
      prevDiceArr.map((dice) =>
        dice.isFreeze ? dice : { ...dice, number: Math.ceil(Math.random() * 6) }
      )
    );
  }

  function getReady() {
    if (diceArr.length >= 5) setReadyToStart(true);
    else alert(`주사위의 개수는 최소 5개 이상이여야 합니다.`);
  }

  function reset() {
    setDiceArr([]);
    setIsGameOver(false);
    setReadyToStart(false);
  }

  if (
    diceArr.length &&
    isGameOver === false &&
    !diceArr.find(
      (dice) => dice.isFreeze == false || +dice.number !== +diceArr[0].number
    )
  ) {
    setIsGameOver(true);
  }

  return (
    <main className='game'>
      <div className='game--dice__wrap'>{diceComponents}</div>
      {isGameOver ? (
        <section className='game--btn__wrap'>
          <button className='game--btn' onClick={reset}>
            <span>reset</span>
          </button>
        </section>
      ) : readyToSTart ? (
        <section className='game--btn__wrap'>
          <button className='game--btn'>
            <span onClick={rollDice}>Roll</span>
          </button>
        </section>
      ) : (
        <section className='game--btn__wrap'>
          <button className='game--btn' onClick={addDice}>
            <span>add</span>
          </button>
          <button className='game--btn'>
            <span onClick={getReady}>Start</span>
          </button>
          <button className='game--btn' onClick={deleteDice}>
            <span>delete</span>
          </button>
        </section>
      )}
    </main>
  );
}
