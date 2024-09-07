import React, { useEffect, useState } from 'react';
import "./index.css";
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


const App = () => {
    const [tasks, setTasks] = useState([]);
   


//Получаем задачи сохраненные на  сервера
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('https://ce287799e727fe18.mokky.dev/to_do');
                if (!response.ok) {
                    throw new Error('Нет доступа к серверу');
                }
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Ошибка при получении задач:', error);
            }
        };
        fetchTasks();
    }, []);


    //Добовляем новую задачу и сохраняем на  сервере
    const handleAddTask = async (newTask) => {

        try {
            const response = await fetch('https://ce287799e727fe18.mokky.dev/to_do', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            });

            if (!response.ok) {
                throw new Error('Ошибка при добавлении задачи');
            }

            const addTask = await response.json();
            setTasks(prevTasks => [...prevTasks, addTask]);
        } catch (error) {
            console.error('Ошибка при добавлении задачи:', error);
        }
      
       
    }

    


    
//Удаляем задачу с  сервера и получаем новый список
    const hendLeDelete = async (id) => {
    //  console.log(id);
      
        try {
            const response = await fetch(`https://ce287799e727fe18.mokky.dev/to_do/${id}`, {
                method: 'DELETE'
            });
            
            if (!response.ok) {
                throw new Error('Ошибка при удалении задачи');
            }
          
            // Обновляем состояние, удаляя задачу из списка
            setTasks(tasks.filter(task => task.id !== id));
             
            console.log(`Задача с ID ${id} была успешно удалена.`);
           
        } 
        catch (error) {
            
            console.error('Ошибка при удалении задачи:', error);
        }
          
    };

    return (
        <div className='container'>
            <header>
                <h1 className="h1">Планировщик задач</h1>
            </header>
            <main>
                <div className='section'>
                    <div className="form">


                        <TaskForm onAddTask={handleAddTask} />
                        <TaskList tasks={tasks} hendLeDelete={hendLeDelete} />
                       

                    </div>
                </div>

            </main>

        </div>
    );
};

export default App;