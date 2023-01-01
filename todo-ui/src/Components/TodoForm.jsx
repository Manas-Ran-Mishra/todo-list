import React from 'react'
import '../Styles/TodoForm.css';

export default function TodoForm(props) {

    const {
      addTodo,
      renderInputTask,
      renderInputDesc,
      userInputTask,
      userInputDesc,
    } = props;

  return (
    <div className='todo-form'>
      <form onSubmit={ addTodo }>
        <div className="todo-input-container">
            <label htmlFor="task-item">Task:</label>
            <input
              type="text"
              id="task-item"
              onChange={renderInputTask}
              value={userInputTask}
              required
            />
        </div>
        <div className="todo-input-container">
            <label htmlFor="task-desc">Description:</label>
            <textarea
              type="text"
              id="task-desc"
              onChange={renderInputDesc}
              value={userInputDesc}
              required></textarea>
        </div>
        <button className='btn'>Add Task</button>
      </form>
    </div>
  );
}
