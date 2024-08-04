import React, { useState } from 'react';

function AddTask({newTask, handleChange}) {
        

    return (
        <input 
            name='title'
            type='text'
            placeholder='Type text here'
            value={newTask}
            onChange={handleChange} />
    );

};

export default AddTask;