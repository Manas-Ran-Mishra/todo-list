import React from 'react';
import '../Styles/Todo.css';
import TodoItem from '../Components/TodoItem.jsx';

export default function Todo(props) {
  const { todos, deleteItem, toggleCheck } = props;

  return (
    <>
      <div className="todo-list">
        To do:
        {todos.map((todo) => {
          return !todo.isComplete ? (
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
