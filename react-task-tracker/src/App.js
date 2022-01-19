import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
  const[tasks, setTasks] = useState(
    [
        {
          "id": 1,
          "text": "Doctors Appointment",
          "day": "Feb 5th at 2:30pm",
          "reminder": true
        },
        {
          "id": 2,
          "text": "Meeting at School",
          "day": "Feb 6th at 1:30pm",
          "reminder": true
        },
        {
            "id": 3,
            "text": "Sleep",
            "day": "Feb 6th at 3:30pm",
            "reminder": true
        },
        {
            "id": 4,
            "text": "Basketball game",
            "day": "Feb 8th at 9:30pm",
            "reminder": true
        }
    ]
  )

  const toggleReminder = (id) => {
    setTasks(
       tasks.map(
         (task) => task.id === id ? { ...task, reminder: !task.reminder }: task
       )
    )
    console.log('remind me', id)
  }
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <h1>Hello From App</h1>
      <Header/>
      { tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) :
      ( 'No Tasks To Show')
      } 
    </div>
  );
}

export default App;
