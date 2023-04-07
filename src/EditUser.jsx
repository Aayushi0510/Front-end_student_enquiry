import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

  const EditUser = () => {
  const Navigate=useNavigate();
  const {studentId}=useParams();
  console.log(studentId)
  const [emp, updateempData]=useState({

    name:"",
    email:"",
    phone:"",
    whatsappno:"",
    dob:"",
    address:"",
    workingExp:"",
    company:"",                                  
  })
const {name, email, phone, whatsappno, gender, dob ,address, workingExp, company }=emp

const handleInput=(e)=>{
    updateempData({...emp ,[e.target.name]:e.target.value});
}
useEffect(()=>{
  async function showuser()
  {
    const res=await axios.get(`http://localhost:5779/student/${studentId}`)
    updateempData(res.data)
  
  }
  showuser()
},[])

return (
    <>
       <div className='container-fluid'>
                <div className='row bg-primary text-white text-center'>
                    <h1>Update Details</h1>
                </div>
            </div>
            <div className='bg-primary form'>
                <form>
                  <div className='text-center '>
                        <label className='form-label'>Name:
                            <input className='form-control' name="name" value={emp.name} onChange={handleInput} />
                        </label>
                  </div>
                  <div className='text-center'>
                        <label className='form-label'>Email:
                            <input className='form-control' name="email" value={emp.email} onChange={handleInput} />
                        </label>
                  </div>
                  <div className='text-center'>
                        <label className='form-label'>Phone:
                            <input className='form-control' name="phone" value={emp.phone} onChange={handleInput} />
                        </label>
                  </div>
                  <div className='text-center '>
                        <label className='form-label'>whatsappno:
                            <input className='form-control' name="whatsappno" value={emp.whatsappno} onChange={handleInput} />
                        </label>
                  </div>
                  <div className='text-center '>
                        <label className='form-label'>Dob:
                            <input className='form-control' type="date" name='dob' value={emp.dob} onChange={handleInput}/>
                        </label>
                  </div>
                  <div className='text-center '>
                        <label className='form-label'>Address:
                            <input className='form-control' name="address" value={emp.address} onChange={handleInput} />
                        </label>
                  </div>
                  <div className='text-center '>
                        <label className='form-label'>workingexp:
                            <input className='form-control' name="workingExp" value={emp.workingExp} onChange={handleInput} />
                        </label>
                  </div>
                   <div className='text-center '>
                        <label className='form-label'>Company:
                            <input className='form-control' name="company" value={emp.company} onChange={handleInput} />
                        </label>
                  </div>                                       
                  <div className='text-center '>
                         <button className="btn btn-info text-center" onClick={(e)=>{
                    e.preventDefault();
                  async  function updateuser()
                  {
                    var res=await axios.put(`http://localhost:5779/student/${studentId}`,emp)
                    if(res.status===200)
                    {
                        Navigate("/")
                    }
                  }
                updateuser()
                }}>Update</button>
                  </div>
            </form>
        </div>      
    </>
  )
}
export default EditUser;
