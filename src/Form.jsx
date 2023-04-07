import React, { useState ,useEffect}from 'react';


import axios from 'axios'

const Form = () => {
const [emp ,updateempdata]=useState([]);
const [data ,updateData]=useState({name:"", email:"" , phone:""})

 useEffect(()=>
 {
     async function show()
      {
        let res= await axios.get("http://localhost:5719/student")
        console.log(res.data)
      }
      show()
})
const change=(e)=>{
   updateData({...data,  [e.target.name]:e.target.value}) ;
}



  return (
    <>
      <form onSubmit={(e)=>{
    e.preventDefault()
    async function adddata()
    {
      var res=  await axios.post("http://localhost:5719/user",data);
      console.log(data)
      if( res.status===201)
      {
        alert("data added sucessfully")
      }
    }
    adddata();
    updateData({name:"", email:"" , phone:""})
  }

  }>
        Name:
        <input name="name" value={data.name} onChange={change}/>        
        Email:
        <input  name="email" value={data.email} onChange={change}/>        
      
        Phone:
        <input  name="phone" value={data.phone} onChange={change}/>
        <button>Registration</button>
      </form>
      
    </>
  )
}

export default Form

