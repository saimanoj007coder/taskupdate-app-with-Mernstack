import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Form from './components/form';
import Edit from './components/Adduser';
import Update from './components/update';
import Header from './components/Header';


function App() {
  const initialFormState = { id: null, name: '', username: '' }
  const [list, setlist] = useState([])

  useEffect(() => {

    axios.get('http://localhost:8000/api/tasks').then(res => {
      setlist(res.data)
    }).catch(err => console.log(err))


  }, [])

  const [editlist, seteditlist] = useState(false)

  const [change, setchange] = useState(initialFormState)

// adding value for the function

  function addUser(n) {
    setlist([...list, n])

  }

  //edit list 
  function userDetails(_id, name, username) {
    seteditlist(true)
    setchange({ _id: _id, name: name, username: username });

  }

  //Edit the value and the value adedd to the todolist

  function updatelistvalues(updatelist) {
    setlist(list.map((li) => (li._id === updatelist._id ? updatelist : li)))
    seteditlist(false)

  }
//delete the value from todolist

  function deleteDetails(li) {
    setlist(list.filter((lis) => (lis._id !== li._id)))
    seteditlist(false)

  }

  // cross the text while it is completed

  function textcross(li) {

    const newList = [...list]
    newList.forEach(item => {
      if (item._id === li._id) {
        item.isComplete = li.isComplete
      }
    })
    setlist(newList)
  }
//cancel the edit form
  function cancelEvent() {
    seteditlist(false);
  }


  return (
    <div>
      <Header />

      <Form
        list={list}
        userDetails={userDetails}
        editlist={editlist}
        deleteDetails={deleteDetails}
        textcross={textcross}
        />
      {editlist ? <Update change={change} cancelEvent={cancelEvent} updatelistvalues={updatelistvalues} /> : <Edit change={change} addUser={addUser} />}
    </div>);
}

export default App;
