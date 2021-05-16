import React from 'react'
import { useState } from 'react';

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    // Form control to ensure a task description is entered.
    const onSubmit = (e) => { 
        e.preventDefault();

        if(!text) { 
            alert('Enter a task name');
            return;
        }
        
        onAdd({ text, day, reminder});

        // Clear form after submitting
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className = "add-form" onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input 
                    type = "text" 
                    placeholder = "Add your task" 
                    value = {text} onChange = {(e) => setText(e.target.value)}>
                </input>
            </div>
            <div className = 'form-control'>
                <label>Day</label>
                <input 
                    type = "text" 
                    placeholder = "Add Day and Time" 
                    value = {day} onChange = {(e) => setDay(e.target.value)}>
                </input>
            </div>
            <div className = 'form-control form-control-check'>
                <label>Reminder</label>
                <input 
                    type = "checkbox" 
                    checked = {reminder}
                    value = {reminder}
                    onChange = {(e) => setReminder(e.currentTarget.checked)}
                ></input>
            </div>

            <input className = "btn btn-block" type="submit" value='Save'></input>
        </form>
    )
}

export default AddTask
