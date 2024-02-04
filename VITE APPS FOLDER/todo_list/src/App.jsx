import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    const { name, value, checked, type } = event.target;
    let newInput = type === "checkbox" ? event.target.checked : event.target.value;
    setFormState({
      ...formState,
      [name]: newInput,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    let newTask = { ...formState, id: Date.now() + Math.random() };
    let addTask = [...tasks, newTask];
    setTasks(addTask);
    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  }

  function deleteTask(id) {
    let updateList = tasks.filter((item) => item.id !== id);
    setTasks(updateList);
  }

  function toggleTask(id) {
    let updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasks(updatedTasks);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" value={formState.task} placeholder="Add Task" onChange={handleChange} />
          <label>
            Completed:
            <input name="completed" type="checkbox" checked={formState.completed} onChange={handleChange} />
          </label>
          <select name="taskAssignedTo" value={formState.taskAssignedTo} onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit" >Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} deleteTask={deleteTask} toggleTask={() => toggleTask(item.id)}/>
      ))}
    </>
  );
}

export default App;
