import React from "react";
import axios from 'axios'
import '../App.css';
import { FiEdit2 } from "react-icons/fi"
import { MdDeleteForever } from "react-icons/md"
import { BASE_URL } from './helper';




function Form(props) {

    const list = props.list.map((li, index) => {

        function handleClick(li) {
            axios.put(`${BASE_URL}/api/tasks/${li._id}`, {
                _id: li._id,

                isComplete: !li.isComplete
            }).then(res => props.textcross(res.data)).catch(err => console.log(err))
        }

        function deleteDetails(id) {
            axios.delete(`${BASE_URL}/api/tasks/${id}`)
                .then(res => props.deleteDetails(res.data)).catch(err => console.log(err))

        }

        return <div key={index}>


            <div className="maincontent1">

                <div className="usesize1">
                    <p className={li.isComplete ? 'taskcomplete' : ''} onClick={() => { handleClick(li) }} >{li.task}</p></div>
                <div className="usesize2"> <p>{li.time}</p></div>
                <div className="btnposition">
                    <button className="btnsize1" onClick={() => { props.userDetails(li._id, li.task, li.time) }}><FiEdit2 size="20px" className="edit" /></button>
                    <button className="btnsize2" onClick={() => deleteDetails(li._id)}><MdDeleteForever size="25px" className="edit" /></button>
                </div>
            </div>
        </div>

    })

    return (
        <div >
            <ul>{list}</ul>


        </div>

    )

}

export default Form