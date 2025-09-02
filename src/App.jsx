import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState(() => {
    const saved = localStorage.getItem('todoList');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('all');
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(taskList));
  }, [taskList]);

  const addTask = () => {
    if (task.trim() === '') {
      alert('Please enter a task');
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTaskList([...taskList, newTask]);
    setTask('');
  };

  const deleteTask = (id) => {
    const updatedList = taskList.filter((t) => t.id !== id);
    setTaskList(updatedList);
  };

  const toggleTask = (id) => {
    const updatedList = taskList.map((t) => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    setTaskList(updatedList);
  };

  const handleFilter = (type) => {
    setFilter(type);
  };

  const handleSort = () => {
    const sorted = [...taskList].sort((a, b) => {
      return sortAsc
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text);
    });
    setTaskList(sorted);
    setSortAsc(!sortAsc);
  };

  const getFilteredTasks = () => {
    if (filter === 'active') return taskList.filter((t) => !t.completed);
    if (filter === 'completed') return taskList.filter((t) => t.completed);
    return taskList;
  };

  return (
    <div className="App">
      <h2> To-Do List</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="filter-sort">
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('active')}>Active</button>
        <button onClick={() => handleFilter('completed')}>Completed</button>
        <button onClick={handleSort}>Sort {sortAsc ? 'A-Z' : 'Z-A'}</button>
      </div>
      <ul>
        {getFilteredTasks().map((t) => (
          <li key={t.id}>
            <div className="task">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTask(t.id)}
              />
              <span className={t.completed ? 'completed' : ''}>
                {t.text}
              </span>
            </div>
            <button className="delete" onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
