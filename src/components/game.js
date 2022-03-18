import Dice from './dice';

export default function Game() {

  return (
    <section className = "game">
      <Dice/><Dice/><Dice/><Dice/><Dice/><Dice/><Dice/><Dice/><Dice/><Dice/><Dice/>
      <button>Roll</button>
    </section>
  );
}