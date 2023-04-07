import React from 'react'
import { useState, useHistory, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import toast, { Toaster } from 'react-hot-toast';
const AddUser = () => {
    const [emp, updateempData] = useState({
        name: "",
        email: "",
        phone: "",
        whatsappno: "",
        dob: "",
        address: "",
        workingExp: "",
        company: "",
        coursename:'',
        fee:"",
    })
    const [course , setcourse]=useState([])
    const handleInput = (e) => {
        updateempData({ ...emp, [e.target.name]: e.target.value });
    }
    /*const handlecourse=async(e)=>{
        setcourse(e.target.value)
    }*/
    useEffect(()=>{
        async function getcoursedata()
        {
            var res=await axios.get("http://localhost:5779/getcourse")
            setcourse(res.data)
        }
        getcoursedata()
    })
    let Navigate = useNavigate()
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-primary text-white text-center'>
                    <h1>Add Deatils</h1>
                </div>
            </div>
            <div className='bg-primary form'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    async function Adduser() {
                        var res = await axios.post("http://localhost:5779/addstudents", emp)
                        if (res.status === 200) {
                            Navigate("/")
                        }
                    }
                    Adduser()
                    updateempData({
                        name: "",
                        email: "",
                        phone: "",
                        whatsappno: "",
                        gender: "",
                        dob: "",
                        address: "",
                        workingExp: "",
                        company: "",
                        course:'',
                         fee:"",
                    })


                }}>
                    <div className='text-center '>
                        <label className='form-label'>Name:
                            <input className='form-control' ype="text" name="name" value={emp.name} onChange={handleInput} />
                        </label>
                    </div>
                    <div className='text-center'>
                        <label className='form-label'>Email:
                            <input className='form-control' type="text" name="email" value={emp.email} onChange={handleInput} />
                        </label>
                    </div>
                    <div className='text-center'>
                                <label className='form-label'>Phone:
                            <input className='form-control' type="number" name="phone" value={emp.phone} onChange={handleInput} />
                        </label>
                    </div>
                    <div className='text-center '>
                        <label className='form-label'>whatsappno:
                            <input className='form-control' type="number" name="whatsappno" value={emp.whatsappno} onChange={handleInput} />
                        </label>
                    </div>
                    <div className='text-center '>
                        <label className='form-label'>Dob:
                            <input className='form-control' type="date" name='dob' value={emp.dob} onChange={handleInput} />
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
                    <label className='form-label'>Courses</label>
                    <select className="form-select" name="course" value={emp.course} onChange={handleInput}>
                        {course.map((courses)=>
                        {
                         return <option select value={courses.coursename} >{courses.coursename}</option>})}
                   </select>
                        
                    </div>
                    <div className='text-center '>
                        <label className='form-label'>Fee
                            <input className='form-control' type="number" name="fee" value={emp.fee} onChange={handleInput} />
                        </label>
                    </div>
                    <div className='text-center '>
                        <button className="btn btn-secondary text-center">Registration</button></div>
                </form>
            </div>
        </>
    )
}
export default AddUser
