import React from "react";
import styles from "./TodoList.module.scss";

const TodoList = (props) => {
  const { tasks, setIsDone, deleteTask } = props;
  return (
    <div className={styles.container}>
      <ul>
        {tasks.map(({ id, body, isDone }) => (
          <li key={id}>
            <p>
              {body} {isDone ? "(Done)" : "(Progress)"}
            </p>
            <input
              className={styles.check}
              name="checkDone"
              value={isDone}
              type="checkbox"
              onChange={() => setIsDone(id)}
            />
            <button className={styles.delete} onClick={() => deleteTask(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
