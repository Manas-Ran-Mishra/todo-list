import React from 'react';
import '../Styles/Todo.css';
import DeleteIcon from '../Icons/DeleteIcon.js';
import CheckIcon from '../Icons/CheckIcon.js';
import XmarkIcon from '../Icons/XmarkIcon.js';

export default function TodoItem(props) {
  const { taskItem, deleteItem, toggleCheck } = props;
  function handleClick(itemID) {
    toggleCheck(itemID);
  }

  return (
    <div className="todo-container">
      <h1 className={taskItem.isComplete ? 'todo-item stroke' : 'todo-item'}>
        {taskItem.taskId}.{taskItem.task}
      </h1>
      <p className={taskItem.isComplete ? 'todo-desc stroke' : 'todo-desc'}>
        {taskItem.desc}
      </p>
      <button
        className="btn delete-btn"
        onClick={() => deleteItem(taskItem.taskId)}
      >
        {DeleteIcon}
      </button>
      <button
        className="btn check-btn"
        onClick={() => handleClick(taskItem.taskId)}
      >
        {taskItem.isComplete ? XmarkIcon : CheckIcon}
      </button>
    </div>
  );
}
