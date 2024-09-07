import React from 'react';
import "../index.css";






const TaskItem = ({ task, hendLeDelete }) => (
    
  <li className='li'>
    
    <strong >{task.task_name}</strong>  {task.status}
    
<button id='deleteId' className='button btn' onClick={() => hendLeDelete(task.id)} > Удалить</button>

  </li>
  
);

export default TaskItem;