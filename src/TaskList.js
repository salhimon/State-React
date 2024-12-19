import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onEditTask, onDeleteTask, onToggleCompletion }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? <p>vide</p> : 
        tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onEdit={onEditTask} 
            onDelete={onDeleteTask} 
            onToggleCompletion={onToggleCompletion} 
          />
        ))
      }
    </div>
  );
}

export default TaskList;
