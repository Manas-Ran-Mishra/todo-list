import './App.css';
import React, { useState } from 'react';
import Todo from './Components/Todo.jsx';
import Navbar from './Components/Navbar.jsx';
import TodoForm from './Components/TodoForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';

let itemID = 1;

function App() {
  const [userInputTask, setUserInputTask] = useState('');
  const [userInputDesc, setUserInputDesc] = useState('');
  const [todo, setTodo] = useState([]);
  const [lightTheme, setLightTheme] = useState(true);

  function toggleTheme() {
    if (
      getComputedStyle(document.documentElement).getPropertyValue(
        '--bg-color'
      ) === 'white' &&
      getComputedStyle(document.documentElement).getPropertyValue(
        '--text-color'
      ) === 'black' &&
      lightTheme === true
    ) {
      setLightTheme(false);
      document.documentElement.style.setProperty(
        '--bg-color',
        'hsl(202,100%,10%)'
      );
      document.documentElement.style.setProperty('--text-color', 'white');
    } else {
      setLightTheme(true);
      document.documentElement.style.setProperty('--bg-color', 'white');
      document.documentElement.style.setProperty('--text-color', 'black');
    }
  }

  function addTodo(e) {
    e.preventDefault();
    setTodo((oldTask) => {
      return [
        ...oldTask,
        {
          task: userInputTask,
          desc: userInputDesc,
          taskId: itemID++,
          isComplete: false,
        },
      ];
    });
    setUserInputTask('');
    setUserInputDesc('');
  }

  function toggleCheck(iD) {
    let copy = todo;
    copy = copy.map((item) => {
      return item.taskId === iD
        ? { ...item, isComplete: !item.isComplete }
        : item;
    });
    setTodo(copy);
  }

  function renderInputTask(e) {
    setUserInputTask(e.currentTarget.value);
  }

  function renderInputDesc(e) {
    setUserInputDesc(e.currentTarget.value);
  }

  function deleteItem(taskID) {
    setTodo(todo.filter((items) => items.taskId !== taskID));
  }

  return (
    <Router>
      <div className="app">
        <Navbar toggleTheme={toggleTheme} lightTheme={lightTheme} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/"
            element={<>
              <TodoForm
                addTodo={addTodo}
                renderInputTask={renderInputTask}
                renderInputDesc={renderInputDesc}
                userInputTask={userInputTask}
                userInputDesc={userInputDesc}
                />
              <Todo
                todo={todo}
                setTodo={setTodo}
                deleteItem={deleteItem}
                toggleCheck={toggleCheck}
                />
                </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
