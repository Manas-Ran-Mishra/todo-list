import React, { useState } from 'react';
import '../Styles/TodoForm.css';

export default function TodoForm(props) {
  const [ task, setTask ] = useState('');
  const { addTodo, setTodos } = props;

  function handleTaskInputChange(e) {
    setTask(e.target.value);
  }

  // logic for eliminating additional spaces = text.split(" ").filter(item=>{ return item!=''}).join(' ')
  // same can be applied for new line '\n' and tab '\t'

  function containWhitespace() {
    // returns true in case string is empty or only contains whitespaces, tabs and newlines
    let str = task
      .split(' ')
      .filter((item) => {
        return item !== '';
      })
      .join('')
      .split('\n')
      .filter((item) => {
        return item !== '';
      })
      .join('')
      .split('\t')
      .filter((item) => {
        return item !== '';
      })
      .join('');
    let verdict =
      str === '' || task === null || task === undefined || task === ''
        ? true
        : false;

    return verdict;
  }

  return (
    <div className="todo-form">
      <form>
        <div className="todo-input-container">
          <input
            type="text"
            id="task-item"
            onChange={handleTaskInputChange}
            value={task}
            placeholder="Add todo here..."
            minlength="1"
            maxlength="60"
            required
          />
          <div className="todo-task-buttons-set">
            <button
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                if (!containWhitespace()) {
                  addTodo(task);
                }
              }}
            >
              Add Task
            </button>
            <button
              className="btn"
              id="clear-btn"
              onClick={(e) => {
                e.preventDefault();
                setTodos([]);
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
