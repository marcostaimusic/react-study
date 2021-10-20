import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";
export const MultipleCustomHooks = () => {
  const { state, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { author, quote } = !!data && data[0];

  console.log(author, quote);
  return (
    <div>
      <h1>Custom hooks</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info">loading..</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-4">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};
