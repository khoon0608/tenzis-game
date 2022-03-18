/** @format */
import React from "react";

import Dice from "./dice";

export default function Game() {
  const [currentDiceId, setCurrentDiceId] = React.useState(null);

  const [diceArr, setDiceArr] = React.useState([]);

  const diceComponents = diceArr.map((item, index) => (
    <Dice
      key={index}
      state={item}
      clickEvent={doFreezeDice}
      hoverEvent={findCurrnetDice}
    />
  ));

  function addDice(event) {
    event.preventDefault();
    const diceState = {
      id: Math.random(),
      number: Math.ceil(Math.random() * 6),
      isFreeze: false,
    };
    setDiceArr((prevDiceArr) => [...prevDiceArr, diceState]);
    setCurrentDiceId(diceState.id);
  }

  function deleteDice(event) {
    event.preventDefault();
    if (diceArr.length > 0) {
      setDiceArr((prevDiceArr) => {
        let newDiceArr = [...prevDiceArr];
        newDiceArr.pop();
        return newDiceArr;
      });
    } else {
      alert("제거 할 주사위가 없습니다.");
    }
  }

  function findCurrnetDice(event) {
    setCurrentDiceId((prevDiceId) =>
      prevDiceId !== event.target.id ? event.target.id : prevDiceId
    );
  }

  function doFreezeDice() {
    setDiceArr((prevDiceArr) =>
      prevDiceArr.map((dice) => {
        return dice.id === +currentDiceId
          ? {
              ...dice,
              isFreeze: !dice.isFreeze,
            }
          : dice;
      })
    );
  }

  function rollDice(event) {
    event.preventDefault();
    setDiceArr((prevDiceArr) =>
      prevDiceArr.map((dice) =>
        dice.isFreeze ? dice : { ...dice, number: Math.ceil(Math.random() * 6) }
      )
    );
  }

  return (
    <form className='game'>
      <div className='game--dice__wrap'>{diceComponents}</div>
      <section className='game--btn__wrap'>
        <button className='game--btn' onClick={addDice}>
          <span>add</span>
        </button>
        <button className='game--btn'>
          <span onClick={rollDice}>Roll</span>
        </button>
        <button className='game--btn' onClick={deleteDice}>
          <span>delete</span>
        </button>
      </section>
    </form>
  );
}
