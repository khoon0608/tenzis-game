/** @format */
import React from "react";

import Dice from "./dice";

export default function Game() {
  const [diceState, setDiceState] = React.useState({
    number: 1,
    isFreeze: false,
  });

  const [diceArr, setDiceArr] = React.useState([]);

  const diceComponents = diceArr.map((item, index) => (
    <Dice key={index} state={item} />
  ));

  function addDice() {
    setDiceArr((prevDiceArr) => [diceState, ...prevDiceArr]);
  }

  function deleteDice() {
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

  return (
    <section className='game'>
      <div className='game--dice__wrap'>{diceComponents}</div>

      <div className='game--btn'>
        <span>Roll</span>
      </div>
      <div className='game--btn' onClick={addDice}>
        <span>add</span>
      </div>
      <div className='game--btn' onClick={deleteDice}>
        <span>delete</span>
      </div>
    </section>
  );
}
