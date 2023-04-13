import React, { useState } from "react";
import uuid from "react-uuid";

import Button from "../Button/Button.component";
import styles from "../../containers/ToDo.module.css";

const Form = ({ handleSubmit }) => {
  const [userInput, setUserInput] = useState("");
  const [validation, setValidation] = useState(false);

  const handleOnClick = () => {
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
      <input
        className={`${styles.form} ${
          validation ? "shake validation" : "active"
        }`}
        type='text'
        htmlFor='task'
        id='task'
        placeholder='Insert Task'
        onChange={(event) => setUserInput(event.target.value)}
        value={userInput}
      ></input>
      <Button
        className={styles.btn}
        textButton='Add Task'
        handleOnClick={handleOnClick}
      />
    </div>
  );
};

export default Form;
