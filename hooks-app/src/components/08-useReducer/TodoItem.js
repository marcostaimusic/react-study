import React from "react";

export const TodoItem = ({ todo, i, handleDelete, handleToggle }) => {
  return (
    <div>
      <li key={todo.id} className="list-group-item ">
        <p
          className={`${todo.done && "complete"}`}
          onClick={() => handleToggle(todo.id)}
        >
          {i + 1} - {todo.description} - {todo.done ? "Completed" : "Pending"}
        </p>
        <button
          onClick={() => handleDelete(todo.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </li>
    </div>
  );
};
