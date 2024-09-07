import React, { useState } from 'react';
import Vector from '../assets/Vector.svg';



const TaskForm = ({ onAddTask }) => {
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskStatus, setNewTaskStatus] = useState('');

    //const handleNameChange = (event) => {
    //    setNewTaskName(event.target.value);
    //};

    const handleStatusChange = (event) => {
        setNewTaskStatus(event.target.value);
    };

    const handleSubmit = () => {
        if ( newTaskStatus.trim() === '') {
            alert('Пожалуйста, заполните  поле Задача.');
            return;
        }
 const secureID = crypto.randomUUID();
        const newTask = {
            id: secureID, // Здесь  определения уникального ID
            task_name: newTaskName,
            status: newTaskStatus
        };

        onAddTask(newTask);
        setNewTaskName('');
        setNewTaskStatus('');
    };

   


    
    return (
        <div className='input'>
            <h2>Добавить новую задачу</h2>
             <label htmlFor="#"><textarea   type="text"
                value={newTaskStatus}
                onChange={handleStatusChange} className="textarea" id="task" placeholder="Задача*"
                                required></textarea></label>
          
              <button onClick={handleSubmit} type="submit" className="btn" id="plus"><img src={Vector} alt="" />
                        </button>
          
        </div>
    );
};

export default TaskForm;