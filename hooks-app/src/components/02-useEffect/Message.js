import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: "", y: "" });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      console.log(":D");
      setCoords({ x: e.x, y: e.y });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <div>
      <h1>ciaone</h1>
      <p>
        {x}, {y}
      </p>
    </div>
  );
};
