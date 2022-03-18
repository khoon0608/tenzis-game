/** @format */

export default function Dice({ state, clickEvent, hoverEvent }) {
  return (
    <div
      className='dice'
      onClick={clickEvent}
      onMouseEnter={hoverEvent}
      id={state.id}
      style={state.isFreeze ? { background: "rgb(89, 227, 145)" } : null}
      isfreeze={state.isFreeze.toString()}>
      {state.number}
    </div>
  );
}
