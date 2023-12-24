import React, { useState } from 'react';
import Todo from '../Components/Todo.jsx';
import TodoForm from '../Components/TodoForm';
import CompletedTask from '../Components/CompletedTask.jsx';

let id = 1;

export default function Home() {
  const [todos, setTodos] = useState([]);

  function addTodo(todoTask) {
    // using spread syntax to destructure todos array of objects
    // adding a new object with todo task set to value passed to the function

    setTodos([
      ...todos,
      {
        id: id,
        task: todoTask,
        isComplete: false,
      },
    ]);
    id++;
  }

  function toggleCheck(iD) {
    // using map method to apply a condition that results to TRUE when id of the todo item and id passed to the function matches otherwise it results to FALSE
    // when condition is TRUE for the todo item whose id matches to the id passed to this function, isComplete property is set to TRUE for that todo item and rest of the properties remain as is
    // in case condition is FALSE, the todo item is returned without any modifications

    let copy = todos;
    copy = copy.map((todo) => {
      return todo.id === iD ? { ...todo, isComplete: !todo.isComplete } : todo;
    });
    setTodos(copy);
  }

  function deleteItem(taskID) {
    // using filter method to filter out(delete) the todo item whose id matches with the clicked todo item id
    // rest of the todo items are passed to setTodos setter function

    setTodos(todos.filter((todo) => todo.id !== taskID));
  }

  return (
    <>
      <TodoForm addTodo={addTodo} setTodos={setTodos} />
      <div className="todo-tasks">
        <Todo todos={todos} deleteItem={deleteItem} toggleCheck={toggleCheck} />
        <CompletedTask
          todos={todos}
          deleteItem={deleteItem}
          toggleCheck={toggleCheck}
        />
      </div>
    </>
  );
}
