import React from "react"
import { useState, useEffect } from "react"
import axios from 'axios'
import { BASE_URL } from './helper';

function Update(props) {
    
   
    const [updatelist, setupdatelist] = useState(props.change)
    useEffect(() => {

        setupdatelist(props.change)

    }, [props])


    const handleChange = (event) => {
        const { name, value } = event.target

        setupdatelist({ ...updatelist, [name]: value })


    }
    
    function updatelistvalues(event) {

        event.preventDefault();


        if (!updatelist.name || !updatelist.username) return;
        axios.put(`${BASE_URL}/api/tasks/${updatelist._id}`, {
            _id: updatelist._id,
            task: updatelist.name,
            time: updatelist.username
        }).then(res => {
            setupdatelist("")
            props.updatelistvalues(res.data)

        }).catch(err => console.log(err))

    }

    return (
        <form onSubmit={updatelistvalues} >
            <div className="addsize2">
                <input className="usesize3" onChange={handleChange} type='text' name="name" value={updatelist.name} />
                <input className="usesize4" onChange={handleChange} type='date' name="username" value={updatelist.username} />
                <button className="btnsize3" >submit</button>
                <button onClick={() => { props.cancelEvent() }} className="btnsize4">cancel</button></div>
        </form>
    )
}

export default Update