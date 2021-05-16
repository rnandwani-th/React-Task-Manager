import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  // Default tasks for testing 
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: 'Grocery Shop',
      day: 'May 14th',
      reminder: false,
    },
    {
      id: 2,
      text: 'Dentist Appointment',
      day: 'May 17th',
      reminder: true,
    },
  ])

  // Add Tasks
  const addTask = (task) => { 
    // Random id for now
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks,newTask]);
  }
  
  // Delete Task 
  const deleteTask = (id) => { 
    // Uses filter to show only tasks that don't match id of task 
    // to delete
    setTasks(tasks.filter((task) => task.id !== id ));
  }

  // Toggle reminder 
  const toggleReminder = (id) => { 
    // Uses map to change reminder if id matches that passed in
    setTasks(tasks.map((
      task) => task.id === id ? 
        {...task, reminder: !task.reminder} 
        :
        task
        ))
  }

  return (
    <div className="container">
        <Header />
        {tasks.length > 0 ? 
        (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} /> 
        ): ( 
        'No tasks yet, create a new one'
        )}
        <AddTask onAdd = {addTask}/> 
    </div>
  );
}

export default App;
 