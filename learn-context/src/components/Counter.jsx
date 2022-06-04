import React, { useReducer } from "react";

const initialState = {
  counter: 0,
  clicks: 0,
};

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
      clicks: state.clicks + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
      clicks: state.clicks + 1,
    };
  } else if (action.type === "RESET") {
    return {
      ...initialState,
    };
  }
  return state;
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>{state.counter}</h1>
        <h1>{state.clicks}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Add</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Remove</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
