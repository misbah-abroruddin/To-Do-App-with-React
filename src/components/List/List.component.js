import React from "react";

import styles from "../../containers/ToDo.module.css";
import Button from "../Button/Button.component";

const List = ({ tasks, handleTogle }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text_center}>Task List</h2>
      {tasks.map((task) => {
        return (
          <div key={task.id} className={styles.list_wrapper}>
            <p
              className={`${styles.list} ${
                task.complete ? "line-through" : "active"
              }`}
            >
              {task.task}
            </p>
            <Button
              className={styles.btn}
              textButton={!task.complete ? "Mark as Done" : "Not Done"}
              handleOnClick={() => handleTogle(task.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default List;
