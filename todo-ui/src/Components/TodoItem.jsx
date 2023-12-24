import React from 'react';
import '../Styles/Todo.css';
import DeleteIcon from '../Icons/DeleteIcon.js';

export default function TodoItem(props) {
  const { todo, deleteItem, toggleCheck } = props;

  return (
    <div className="todo-container">
        <input
          type="checkbox"
          name="todo-checkbox"
          className="todo-ckeckbox"
          checked={todo.isComplete}
          onClick={(e) => {
            e.preventDefault();
            toggleCheck(todo.id);
          }}
        />
      <p className={todo.isComplete ? 'todo-item stroke' : 'todo-item'}>
        {todo.id}.{todo.task}
      </p>
      <button className="btn delete-btn" onClick={() => deleteItem(todo.id)}>
        {DeleteIcon}
      </button>
    </div>
  );
}
