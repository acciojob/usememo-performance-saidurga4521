import React, { useState, useMemo, useCallback } from "react";
import "./../styles/App.css";

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map((item, index) => (
      <li key={index} style={{ color: item.completed ? "green" : "red" }}>
        {item.name}
      </li>
    ))}
  </ul>
);

const App = () => {
  const [data] = useState([
    { name: "Todo 1", completed: true },
    { name: "Todo 2", completed: false },
    { name: "Todo 3", completed: true },
    { name: "Todo 4", completed: false },
    { name: "Todo 5", completed: true },
    { name: "Todo 6", completed: false },
    { name: "Todo 7", completed: true },
    { name: "Todo 8", completed: false },
    { name: "Todo 9", completed: true },
    { name: "Todo 10", completed: false },
    { name: "Todo 11", completed: true },
    { name: "Todo 12", completed: false },
    { name: "Todo 13", completed: true },
    { name: "Todo 14", completed: false },
    { name: "Todo 15", completed: true },
    { name: "Todo 16", completed: false },
    { name: "Todo 17", completed: true },
    { name: "Todo 18", completed: false },
    { name: "Todo 19", completed: true },
    { name: "Todo 20", completed: false },
    { name: "Todo 21", completed: true },
    { name: "Todo 22", completed: false },
    { name: "Todo 23", completed: true },
    { name: "Todo 24", completed: false },
    { name: "Todo 25", completed: true },
    { name: "Todo 26", completed: false },
    { name: "Todo 27", completed: true },
    { name: "Todo 28", completed: false },
    { name: "Todo 29", completed: true },
    { name: "Todo 30", completed: false },
    { name: "Todo 31", completed: true },
    { name: "Todo 32", completed: false },
    { name: "Todo 33", completed: true },
    { name: "Todo 34", completed: false },
    { name: "Todo 35", completed: true },
    { name: "Todo 36", completed: false },
    { name: "Todo 37", completed: true },
    { name: "Todo 38", completed: false },
    { name: "Todo 39", completed: true },
    { name: "Todo 40", completed: false },
    { name: "Todo 41", completed: true },
    { name: "Todo 42", completed: false },
    { name: "Todo 43", completed: true },
    { name: "Todo 44", completed: false },
    { name: "Todo 45", completed: true },
    { name: "Todo 46", completed: false },
    { name: "Todo 47", completed: true },
    { name: "Todo 48", completed: false },
    { name: "Todo 49", completed: true },
    { name: "Todo 50", completed: false },
  ]);

  const [step, setStep] = useState(1);

  const allTasks = useMemo(() => data, [data]);
  const activeTasks = useMemo(
    () => data.filter((item) => !item.completed),
    [data]
  );
  const completedTasks = useMemo(
    () => data.filter((item) => item.completed),
    [data]
  );

  const handleClick = useCallback((value) => {
    setStep(value);
  }, []);

  let tasksToRender = useMemo(() => {
    if (step === 1) return allTasks;
    if (step === 2) return activeTasks;
    if (step === 3) return completedTasks;
    return [];
  }, [step, allTasks, activeTasks, completedTasks]);

  return (
    <div>
      <button onClick={() => handleClick(1)}>All</button>
      <button onClick={() => handleClick(2)}>Active</button>
      <button onClick={() => handleClick(3)}>Completed</button>
      <TaskList tasks={tasksToRender} />
    </div>
  );
};

export default App;
