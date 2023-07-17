import "./Input.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Input = ({ idNew, date, setDate, dispatch }) => {
  const [inputTodo, setInputTodo] = useState("");

  const datum = new Date();

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (inputTodo) {
            const newTodo = {
              text: inputTodo,
              done: false,
              id: idNew,
              date: date,
            };
            // addTodo(newTodo);
            dispatch({ type: "addTodo", payload: newTodo });
            setInputTodo("");
          }
        }}
      >
        <div>
          <label htmlFor="input-todo">New To Do: </label>
          <input
            type="text"
            placeholder="Please insert your task"
            id="input-todo"
            onChange={(event) => setInputTodo(event.target.value)}
            value={inputTodo}
          />
          <input
            type="date"
            name="toDoDate"
            id="toDoDate"
            onChange={(event) => setDate(event.target.value)}
            value={date}
          />
        </div>
        <button>Add</button>
      </form>
      <p className="today">
        Today is {datum.toLocaleDateString("en-GB", { dateStyle: "full" })}
      </p>
    </div>
  );
};

export default Input;
