import React from "react";

function ShowTask({tasklist,setTasklist,task,setTask})
{

  const handleEdit = (id) => 
  {
     const seletedTask = tasklist.find(todo => todo.id === id);
     setTask(seletedTask);

  }

  const handleDelete = (id) =>
  {
      const updatedTaskList = tasklist.filter(todo =>todo.id !== id);
      setTasklist(updatedTaskList);
  }
  
    return(
  <section className="showTask">
    <div className="head">
      <div>
        <span className="title">Todo</span>
        <span className="count">{tasklist.length}</span>
      </div>
      <button className="clearAll" onClick={() => setTasklist([])}>Clear All</button>
    </div>
    <ul>
      {tasklist.map((todo) => (
         <li key={todo.id}>
         <p>
           <span className="Name">{todo.name}</span>
           <span className="time">{todo.time}</span>
         </p>
         <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
         <i onClick={() => handleDelete(todo.id) } className="bi bi-trash"></i>
       </li>
      )) }
     </ul>
  </section>
    );
} 

export default ShowTask;