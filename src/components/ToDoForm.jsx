import React, { useState } from 'react'

const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(value);
        addTodo(value);
        setValue("");
    }

    const handleChange = (e) => {
        // console.log(e.target.value);
        setValue(e.target.value);
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' placeholder='I will do...' value={value} onChange={handleChange} />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}

export default ToDoForm
