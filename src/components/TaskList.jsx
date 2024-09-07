import React from 'react';
import "../index.css";
import TaskItem from './TaskItem';



const TaskList = ({ tasks, hendLeDelete }) => (
    
    <div className="tasks">
        
  <ol id="plusTask">
    {tasks.map(task => (
      <TaskItem  key={task.id} task={task} hendLeDelete = {hendLeDelete}  />
      
    ))}
    
  </ol>
  
  </div>
  
);

export default TaskList;