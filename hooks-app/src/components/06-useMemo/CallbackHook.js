import React, { useState, useCallback } from "react";
import "../02-useEffect/effects.css";
import { ShowIncrement } from "./ShowIncrement";
export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  const increment = useCallback(
    (num) => {
      //va di pari passo con React.memo in ShowIncrement
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>Callback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
