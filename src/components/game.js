/** @format */

import Dice from "./dice";

export default function Game() {
  return (
    <section className='game'>
      <div className='game--dice__wrap'>
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
        <Dice />
      </div>

      <div className='game--btn'>
        <span>Roll</span>
      </div>
    </section>
  );
}
