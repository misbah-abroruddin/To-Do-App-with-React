import React, { useState } from "react";

import Form from "../components/Form/Form.component";
import List from "../components/List/List.component";
import styles from "./ToDo.module.css";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  const handleOnClick = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTogle = (id) => {
    const mapArr = tasks.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTasks(mapArr);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.text_left}>To do App</h2>
        <Form handleSubmit={handleOnClick} />
      </div>
      <List tasks={tasks} handleTogle={handleTogle} />
    </>
  );
};

export default ToDo;
