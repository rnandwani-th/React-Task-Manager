import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: 'Grocery Shop',
      day: 'May 14th',
      reminder: false,
    },
  ])

  // Delete Task 
  const deleteTask = (id) => { 
    console.log('deelete', id);
  }

  return (
    <div className="container">
        <Header />
        <Tasks tasks = {tasks} onDelete = {deleteTask} />
    </div>
  );
}

export default App;
 