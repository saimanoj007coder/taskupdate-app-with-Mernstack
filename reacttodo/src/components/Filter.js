import React, { useState } from 'react'



function Filter(props) {
  const [tasks, settask] = useState()


  function search(event) {
    event.preventDefault();
    settask(event.target.value)
    props.searchItems(tasks)
   
  }


  return (

    
      <div className="maincontent2">
        <h1 className="addsize">To-Do List</h1>
        <input onChange={search} className='usesize5' type='text' placeholder='search' value={tasks}></input>
   
    </div>
      
  )
}

export default Filter