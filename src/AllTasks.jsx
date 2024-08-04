import React, { useState } from 'react';


function AllTasks({taskList}) {
    return (<div>
        <ul>
            {taskList.map(({id, name}) => {
                <li key={id}>
                    <div>
                        <h2>{name}</h2>
                    </div>
                </li>
            })}
        </ul>
    </div>);
}

export default AllTasks;