import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import "./style.css";
import { useForm } from "../../hooks/useForm";
import { TodoItem } from "./TodoItem";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];

  // return [
  //   {
  //     id: new Date().getTime(),
  //     description: "todo item one",
  //     done: false,
  //   },
  // ];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => {
              return (
                // <li key={todo.id} className="list-group-item ">
                //   <p
                //     className={`${todo.done && "complete"}`}
                //     onClick={() => handleToggle(todo.id)}
                //   >
                //     {i + 1} - {todo.description} -{" "}
                //     {todo.done ? "Completed" : "Pending"}
                //   </p>
                //   <button
                //     onClick={() => handleDelete(todo.id)}
                //     className="btn btn-danger"
                //   >
                //     Delete
                //   </button>
                // </li>

                <TodoItem
                  todo={todo}
                  i={i}
                  handleToggle={handleToggle}
                  handleDelete={handleDelete}
                />
              );
            })}
          </ul>
        </div>
        <div className="col-5">
          <h4>Add</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Add..."
              autoComplete="off"
              onChange={handleInputChange}
              value={description}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Add task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
