import React, { useState } from 'react'

const EditToDoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id);
        setValue("");
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' placeholder='Update Task' value={value} onChange={handleChange} />
            <button type='submit' className='todo-btn'>Update</button>
        </form>
    )
}

export default EditToDoForm
