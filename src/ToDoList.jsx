import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import AllTasks from './AllTasks';


function ToDoList() {

    const [newTask, setNewTask] = useState({});
    const [allTaskList, setAllTaskList] = useState([]);

    
    
    const handleChange = ({target}) => {
        const { name, value } = target;
        setNewTask((prev) => ({ ...prev, [name]: value, id: Date.now()}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask === '') return;
        setAllTaskList((prev) => [newTask, ...prev]);
        setNewTask(() => '');
    };



    return (
        <div>
            <h1>To Do List</h1>
            
            <AddTask 
                handleChange={handleChange}
                newTask={newTask} />


            <AllTasks 
                taskList={allTaskList} />
        </div>
        
    );
};

export default ToDoList;