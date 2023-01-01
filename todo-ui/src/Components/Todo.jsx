import React from 'react';
import '../Styles/Todo.css';
import TodoItem from '../Components/TodoItem.jsx';

export default function Todo(props) {
  const { todo, setTodo, deleteItem, toggleCheck } = props;

  return (
    <div className="todo-list">
      {todo.map((taskItem) => {
        return (
          <TodoItem
            taskItem={taskItem}
            deleteItem={deleteItem}
            toggleCheck={toggleCheck}
          />
        );
      })}
      <button className="btn" id="clear-btn" onClick={()=>setTodo([])}>
        Clear All
      </button>
    </div>
  );
}
