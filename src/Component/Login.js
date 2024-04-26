import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {

  let navigate = useNavigate();



  let [loginData,setLoginData] = useState({Email : "" , passward: ""});

  const handleChange = (field,value) => {
    setLoginData({ ...value, [field]: value})
  }

  return (

    <>
    <form className='formContainer'>
     <h2> Login</h2>
     <input 
     onChange={ (e) => {
      handleChange ("Email" , e.target.value)
     }}
     type='text' name='email' placeholder='Enter Your Email!!' />
     <br/> 
    <input
     onChange={ (e) => {
      handleChange ("Passward" , e.target.value)
     }}
    type='text' name='passward' placeholder='Enter Your Password!!'/>

    <h5 style={{textAlign:"center"}}>Forgot Passward?</h5>

    <button 
    id='login-btn'
    onClick={()=> {
        navigate(`/`) 
        let loginBtn = document.getElementById("login-btn")
       loginBtn.style.opacity=0.4
  }}
    className='loginbtn'>Login</button>
    </form>
    </>
  )
}

export default Login;

