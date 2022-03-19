/** @format */

export default function Dice({ state, clickEvent,  }) {
  return (
    <div
      className='dice'
      onClick={clickEvent}
      id={state.id}
      value={state.number}
      style={state.isFreeze ? { background: "rgb(89, 227, 145)" } : null}
      isfreeze={state.isFreeze.toString()}>
      {state.number}
    </div>
  );
}
