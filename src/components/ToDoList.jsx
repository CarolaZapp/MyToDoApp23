/* eslint-disable react/prop-types */
import "./ToDoList.css";
import ToDoItem from "./ToDoItem.jsx";

const ToDoList = ({
  tasks,
  tasksList,
  toggleDone,
  isDone,
  setTasks,
  dispatch,
}) => {
  return (
    <div>
      <h2>{isDone ? "Tasks already done:" : "Tasks to do:"}</h2>
      <ul className="ulList">
        {tasks.map((taskObj) => (
          <ToDoItem
            text={taskObj.text}
            done={taskObj.done}
            key={taskObj.id}
            id={taskObj.id}
            toggleDone={toggleDone}
            date={taskObj.date}
            taskObj={taskObj}
            tasksList={tasksList}
            setTasks={setTasks}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
