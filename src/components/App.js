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
    { name: "task1", completed: true },
    { name: "task2", completed: false },
    { name: "task3", completed: true },
    { name: "task4", completed: false },
    { name: "task5", completed: true },
    { name: "task6", completed: false },
    { name: "task7", completed: false },
    { name: "task8", completed: true },
    { name: "task9", completed: false },
    { name: "task10", completed: true },
    { name: "task11", completed: false },
    { name: "task12", completed: true },
    { name: "task13", completed: false },
    { name: "task14", completed: true },
    { name: "task15", completed: false },
    { name: "task16", completed: false },
    { name: "task17", completed: true },
    { name: "task18", completed: false },
    { name: "task19", completed: true },
    { name: "task20", completed: false },
    { name: "task21", completed: true },
    { name: "task22", completed: false },
    { name: "task23", completed: false },
    { name: "task24", completed: true },
    { name: "task25", completed: true },
    { name: "task26", completed: false },
    { name: "task27", completed: true },
    { name: "task28", completed: false },
    { name: "task29", completed: true },
    { name: "task30", completed: false },
    { name: "task31", completed: true },
    { name: "task32", completed: false },
    { name: "task33", completed: true },
    { name: "task34", completed: false },
    { name: "task35", completed: true },
    { name: "task36", completed: false },
    { name: "task37", completed: true },
    { name: "task38", completed: false },
    { name: "task39", completed: false },
    { name: "task40", completed: true },
    { name: "task41", completed: false },
    { name: "task42", completed: true },
    { name: "task43", completed: false },
    { name: "task44", completed: true },
    { name: "task45", completed: false },
    { name: "task46", completed: true },
    { name: "task47", completed: true },
    { name: "task48", completed: false },
    { name: "task49", completed: true },
    { name: "task50", completed: false },
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
