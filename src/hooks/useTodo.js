import { useState } from "react";

export const useTodo = (initialValues) => {
  const [tasks, setTasks] = useState([...initialValues]);

  const addTask = (values) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        body: values.body,
        isDone: false,
      },
    ]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }; //filter
  const setIsDone = (id) => {
    const newTasks = [...tasks];
    newTasks.map((task) =>
      task.id === id ? (task.isDone = !task.isDone) : (task.isDone = false)
    );
    setTasks(newTasks);
  }; //map

  return { tasks, addTask, deleteTask, setIsDone };
};
