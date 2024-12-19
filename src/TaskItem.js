import React, { useState } from 'react';

function TaskItem({ task, onEdit, onDelete, onToggleCompletion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task.id, { name: taskName, description: taskDescription });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)} 
            placeholder="Task name"
          />
          <textarea 
            value={taskDescription} 
            onChange={(e) => setTaskDescription(e.target.value)} 
            placeholder="Task description"
          />
        </>
      ) : (
        <>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
        </>
      )}

      <button onClick={() => onToggleCompletion(task.id)}>
        {task.completed ? 'Undo' : 'Mark as Completed'}
      </button>
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
