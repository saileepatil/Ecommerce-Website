import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {

   const[inputData,setInputData] = useState({Name: "", Password: "" , Email: ""});

   const handleChange = (field,value) => {
    setInputData({ ...inputData , [field] :value})
     console.log(field,value)
   }
    
  return (
    <>
     {/* <pre>{(details)?<h2 className ="ui-define">Hello{inputData.name},You've  Registered Successfully!</h2>:""}</pre>  */}

    <form className='formContainer'>
        <div className='formheader'><h2 > Registeration Form</h2> </div>
    <input 
    onChange={ (e) => {
        handleChange("Name" , e.target.value)
    }}
    type='text' name='name' placeholder='Enter Your Name!!'/>
    <br/>
    <input
      onChange={ (e) => {
        handleChange("Email" , e.target.value)
    }}
    type='text' name='email' placeholder='Enter Your Email!!'/>
    <br/> 
    <input type='text' name='passward' placeholder='Enter Your Password!!'/>
    <br/> 

      <button 
      id='register-btn'
      onClick={()=> {
        let registerBtn = document.getElementById("register-btn")
        registerBtn.style.opacity=0.3
      }}
      className='formbtn'>Submit</button>
        <p> Have an account already ? Login here <Link to ="/login"> Login</Link></p>
    </form>
    </>
  )
}

export default Register;