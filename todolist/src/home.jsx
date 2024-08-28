import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './Create';

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='home'>
            <h2>Todo List</h2>
            <Create />
            {
                todos.length === 0
                    ? 
                    <div><h2>No Record</h2></div>
                    :
                     todos.map((todo => (
                        <div className='task'>
                          <p>{todo.task}</p>
                        </div>
                    ))
           ) }
        </div>
    );
}

export default Home;
