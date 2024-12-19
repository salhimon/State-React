import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      setError('Both fields are required!');
      return;
    }
    onAddTask({ name, description });
    setName('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
