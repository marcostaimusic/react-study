import React, {useState, useLayoutEffect, useRef } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";
export const Layout = () => {
  const { state, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );
  const [boxSize, setBoxSize] = useState({})
  const pTag = useRef();
  const { quote } = !!data && data[0];

  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientRect());
  }, [quote]);

  console.log(quote);
  return (
    <div>
      <h1>useLayout</h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p ref={pTag} className="mb-4">
          {quote}
        </p>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};
