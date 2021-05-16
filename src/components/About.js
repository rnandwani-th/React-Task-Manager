import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h4> Version 1.0.0 </h4>
            <p> Click "Add" to add a Task, and fill in the 
                details as required. Click the x button on a task to 
                delete the task. Double click any task to toggle reminder
            </p>
            <Link to = "/">Back</Link>
        </div>
    )
}

export default About
