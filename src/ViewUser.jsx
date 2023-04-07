import React from 'react'
import { useState } from 'react'
import axios from 'axios'       
import { useEffect,useNavigate } from 'react'
import { useParams } from 'react-router-dom'

const ViewUser =  () => {  
    const[datas ,updatesdata]=useState({})                                

    const{ studentId}=useParams()
    //const Navigate=useNavigate()
    //console.log({studentId})
    useEffect(()=>
    {
        async function show()
        {
            var r=await axios.get(`http://localhost:5779/student/${studentId}`);
            console.log(studentId)
            //console.log(r.data)
            updatesdata(r.data)
        }
        show()
    },[])

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">Name:{datas.name}</li>
                <li className="list-group-item">Email:{datas.email}</li>
                <li className="list-group-item">Phone:{datas.phone}</li>
                <li className="list-group-item">whatsapp:{datas.whatsappno}</li>
                <li className="list-group-item">dob:{datas.dob}</li>
                <li className="list-group-item">workingexp:{datas.workingExp}</li>
                <li className="list-group-item">address:{datas.address}</li>
                <li className="list-group-item">company:{datas.company}</li>
                <li className="list-group-item">coursename:{datas.course}</li>
                <li className="list-group-item">Fees:{datas.fee}</li>
            </ul>
        </>
    )
}
export default ViewUser
