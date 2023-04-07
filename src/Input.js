import React, { useState } from 'react'
import axios from 'axios';

const Input = () => {
  const [emp, updateData]=useState({
    name:"",
    email:"",
    password:"",
    phone:""
  })
const [records ,setrecords]=useState([])
//console.log(records)
  const handleInput=(e)=>{
  updateData({...emp ,[e.target.name]:e.target.value});
  
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
     const newrecord={...emp}
     console.log(records)
     setrecords([...records , newrecord]);
    console.log(records)
   function adddata(records)
    {
      axios.post("http://localhost:7584/user",records).then(()=>{
            console.log("data sent to api")
      }).catch((err)=>{
        console.log(err);
      })

    }
    adddata()
        updateData({
        name:"",
        email:"",
        password:"",
        phone:""
})

  }
  return (
    <>
     <div className='container-fluid'>
        <div  className='row bg-primary text-white text-center'>
           <h1>Welcome to geeksdoor</h1>
        </div>
     </div>
      <div className='bg-primary form'>
        <form  method='post'>
        <div className='text-center '>
            <label className='form-label'>Name:
              <input className='form-control' name="name" value={emp.name} onChange={handleInput}/>
            </label>  
        </div>  
        <div className='text-center'>       
            <label className='form-label'>Email:
              <input className='form-control'  name="email" value={emp.email} onChange={handleInput} />
            </label>
        </div>
        <div className='text-center'>    
            <label className='form-label'>PassWord:
              <input className='form-control'  name="password" value={emp.password} onChange={handleInput}/>
            </label>
        </div> 
        <div className='text-center'> 
            <label className='form-label'>Phone:
              <input className='form-control' name="phone" value={emp.phone} onChange={handleInput}/>
            </label>
        </div >
                 </form>
          </div>
    <div>
      <table className='table table-bordered text-center tabel-hover'>
        <thead>
        <tr>
          <th>username</th>
          <th>email</th>
          <th>password</th>
          <th>phone</th>
        </tr>
        </thead>
        <tbody>
          {records.map((v)=>{
            return(
              <tr key={v._Id}>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.password}</td>
                <td>{v.phone}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>    
    </>
  )
}

export default Input
