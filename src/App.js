/** @format */

import Game from './components/game';

function App() {
  return <div className='App'>
    <h2>Tenzies</h2>
    <p>Roll untill all dice are the Same.
    Click each die to freeze it at its current value between rolls.</p>
    <Game/>
  </div>;
}

export default App;
