import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => { 
    const getTasks = async () => { 
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])

  // Fetch tasks from db
  const fetchTasks = async () => { 
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();

    return data;
    }
  
  // Fetch single task
  const fetchTask = async (id) => { 
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
  
    return data;
    }    

  // Add Tasks
  const addTask = async (task) => { 
    const response = await fetch('http://localhost:5000/tasks', { 
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      }, 
      body: JSON.stringify(task)
    })

    const data = await response.json();
    setTasks([...tasks,data]);
  }
  
  // Delete Task 
  const deleteTask = async (id) => { 
    await fetch(`http://localhost:5000/tasks/${id}`, { 
      method: 'DELETE'
    })
    // Uses filter to show only tasks that don't match id of task 
    // to delete
    setTasks(tasks.filter((task) => task.id !== id ));
  }

  // Toggle reminder 
  const toggleReminder = async (id) => { 
    const tasktoUpdate = await fetchTask(id);
    const updatedTask = { ...tasktoUpdate, reminder: !tasktoUpdate.reminder};

    const response = await fetch(`http://localhost:5000/tasks/${id}`, { 
      method: 'PUT',
      headers: { 
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(updatedTask)
    }); 

    const data = await response.json()

    // Uses map to change reminder if id matches that passed in
    setTasks(tasks.map((
      task) => task.id === id ? 
        {...task, reminder: data.reminder} 
        :
        task
        ))
  }

  return (
    <div className="container">
        <Header 
            onAdd = {() => setShowAddTask(!showAddTask)}
            showAdd = {showAddTask}
            />
        {showAddTask && <AddTask onAdd = {addTask} />}
        {tasks.length > 0 ? 
        (<Tasks tasks = {tasks} onDelete =  {deleteTask} onToggle = {toggleReminder} /> 
        ): ( 
        'No tasks yet, create a new one'
        )}
    </div>
  );
}

export default App;
 