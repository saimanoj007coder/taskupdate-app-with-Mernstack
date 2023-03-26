import React, { useState } from "react"
import axios from 'axios'

function Edit(props) {
  const initialFormState = { id: null, name: '', username: '' }

  const [names, setnames] = useState(initialFormState)


  const handleChange = (event) => {
    const { name, value } = event.target

    setnames({ ...names, [name]: value })

  }

  function UpdateUser(event) {
    event.preventDefault();

    if (!names.name || !names.username) return;
    axios.post('http://localhost:8000/api/tasks', {
      task: names.name,
      time: names.username,
      isComplete:false
    }).then(res => {
      setnames(initialFormState)
      props.addUser(res.data)



    }).catch(err => console.log(err))


  }

  return (

    <form onSubmit={UpdateUser}>
      <div className="addsize1"><input className="usesize3" onChange={handleChange} type='text' name="name" placeholder="task" value={names.name} />
        <input className="usesize4" onChange={handleChange} type='time' name="username" placeholder="time" value={names.username} />
        <button className="btnsize3">submit</button></div>
    </form>

  );
}


export default Edit