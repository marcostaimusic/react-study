import React, { useState, useMemo } from "react";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { state, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  const heavyProcess = (rounds) => {
    for (let i = 0; i < rounds; i++) {
      console.log("ciaone");
    }

    return `${rounds}`;
  };

  const memoHeavyProcess = useMemo(() => heavyProcess(state), [state]); //ricordati di spostare la funzione heavyProcess in un altro file come nel tutorial

  return (
    <div>
      <h1>Counter: {state}</h1>
      <hr />

      <p>{memoHeavyProcess}</p>

      <button onClick={increment}> +1 </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show is set to {JSON.stringify(show)}
      </button>
    </div>
  );
};
