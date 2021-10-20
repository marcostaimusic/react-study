import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("generated again");

  return (
    <div>
      <button
        onClick={() => {
          increment(2);
        }}
      >
        increment
      </button>
    </div>
  );
});
