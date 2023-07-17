import "./Headline.css";
import Input from "./Input.jsx";
import ToDoList from "./ToDoList.jsx";
import { useEffect, useState, useReducer } from "react";

// initial State
const initialState =
  JSON.parse(localStorage.getItem("liste")) !== null
    ? JSON.parse(localStorage.getItem("liste"))
    : [];

// reducer
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "addTodo": {
      return [...state, action.payload];
    }
    case "toggleDone": {
      return [
        ...state.map((task) =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      ];
    }
    case "deleteTodo": {
      return action.newList;
    }
    default:
      return state;
  }
};

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const [date, setDate] = useState("");

  const openTasks = state.filter((task) => task.done === false);
  const finishedTasks = state.filter((task) => task.done === true);

  useEffect(() => {
    localStorage.setItem("liste", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <div>
        <h1 className="headline"> My ToDo List for the week!</h1>
        <Input
          idNew={state.length}
          date={date}
          setDate={setDate}
          dispatch={dispatch}
        />
        <ToDoList
          tasksList={state}
          tasks={openTasks}
          isDone={false}
          date={date}
          dispatch={dispatch}
        />
        <ToDoList
          tasksList={state}
          tasks={finishedTasks}
          isDone={true}
          date={date}
          dispatch={dispatch}
        />
      </div>
      {/* <div>
        <h5> Made with with love & passion by Carola Zapp in 2022 </h5>
      </div> */}
    </>
  );
};

export default Main;
