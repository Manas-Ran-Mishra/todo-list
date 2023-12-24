import React from 'react';
import '../Styles/Todo.css';
import TodoItem from './TodoItem.jsx';

export default function CompletedTask(props) {
  const { todos, deleteItem, toggleCheck } = props;

  return (
    <>
      <div className="todo-list">
        Completed:
        {todos.map((todo) => {
          return todo.isComplete ? (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteItem={deleteItem}
              toggleCheck={toggleCheck}
            />
          ) : null;
        })}
      </div>
    </>
  );
}
