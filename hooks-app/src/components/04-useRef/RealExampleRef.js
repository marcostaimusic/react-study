import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

import "../02-useEffect/effects.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button className="mt-4" onClick={handleClick}>
        Show/hide
      </button>
    </div>
  );
};
