import React, { useState } from "react";
import uuid from "react-uuid";

import Button from "../Button/Button.component";
import styles from "../../containers/ToDo.module.css";

const Form = ({ handleSubmit }) => {
  const [userInput, setUserInput] = useState("");
  const [validation, setValidation] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (userInput === "") {
      return setValidation(true);
    } else {
      handleSubmit({
        id: uuid(),
        task: userInput,
        complete: false,
      });
    }
    setUserInput("");
    return setValidation(false);
  };

  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form} onSubmit={handleAddTask}>
        <input
          className={`${styles.input} ${
            validation ? "shake validation" : "active"
          }`}
          type='text'
          htmlFor='task'
          id='task'
          placeholder='Insert Task'
          onChange={(event) => setUserInput(event.target.value)}
          value={userInput}
        ></input>
        <Button className={styles.btn} textButton='Add Task' />
      </form>
    </div>
  );
};

export default Form;
