import React from 'react';

import styles from '../../containers/ToDo.module.css';
import Button from '../Button/Button.component';

const List = ({ tasks, handleTogle, handleDelete }) => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.text_center}>
        {tasks.length === 0 ? 'No tasks' : 'Task List'}
      </h2>
      {tasks.map((task) => {
        return (
          <div key={task.id} className={styles.list_wrapper}>
            <div className={styles.list}>
              <label
                className={`${styles.container} ${
                  task.complete ? 'line-through' : 'active'
                }`}
              >
                {task.task}
                <input type='checkbox' onClick={() => handleTogle(task.id)} />
                <span className={styles.checkmark}></span>
              </label>
            </div>
            {task.complete && (
              <Button
                className={styles.btn}
                textButton='Delete'
                handleOnClick={() => handleDelete(task.id)}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default List;
