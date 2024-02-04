// TaskItem.jsx
import React from "react";
import "./TaskItem.css"; // Import a CSS file for styling

function TaskItem(props) {
  const { item, deleteTask, toggleTask } = props;

  return (
    <div>
      <h2>Task Item</h2>
      <p>{item.id}</p>
      <p className={item.completed ? "completed" : "incomplete"}>{item.task}</p>
      <p>{item.taskAssignedTo}</p>
      <button onClick={() => deleteTask(item.id)}>Delete</button>
      <button type="button" onClick={toggleTask} className={item.completed ? "completed" : "incomplete"}>
        {item.completed ? "Incomplete" : "Complete"}
      </button>
    </div>
  );
}

export default TaskItem;

  





