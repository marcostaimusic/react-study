import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";
import { Small } from "./Small";
export const Memorize = () => {
  const { state, increment } = useCounter(10);

  return (
    <div>
      <h1>
        Counter: <Small value={state} />
      </h1>
      <hr />
      <button onClick={increment}> +1 </button>
    </div>
  );
};
