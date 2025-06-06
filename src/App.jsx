import React, { use, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'

function App() {
  const[tasklist,setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const[task,setTask] =  useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist))

  }, [tasklist]);


  

  return (
    <>
      <div>
      <Header />
      <AddTask 
      tasklist={tasklist} 
      setTasklist={setTasklist}
      task={task}
      setTask={setTask}
      />

      <ShowTask tasklist={tasklist} setTasklist={setTasklist}
      task={task}
      setTask={setTask} />

      
      </div>
      
    </>
  )
}

export default App
