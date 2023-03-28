import React from "react";
import { useTodo } from "../../hooks/useTodo";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import styles from "./Todo.module.scss";

const Todo = () => {
  const { tasks, addTask, deleteTask, setIsDone } = useTodo([]);
  return (
    <section className={styles.container}>
      <h1 className={styles.text}>Read your plans ...</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} setIsDone={setIsDone} />
    </section>
  );
};

export default Todo;
