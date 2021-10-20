import React, { useRef } from "react";
import "../02-useEffect/effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };
  return (
    <div>
      <div>focus screen</div>
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="your name"
      />
      <button className="btn btn-outline-primary mt-2" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
