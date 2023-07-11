import React from 'react'
import { useState,useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import './login.css'

import { Link } from 'react-router-dom'

const Login = () => {
 const [name,setName]=useState('')
 const [id,setId]=useState('')  
 const [password,setPassword]=useState('')
 const [errors, setErrors] = useState({});
 const[isSubmit,setIsSubmit]=useState(false);
 const navigate =useNavigate();

 const handleName=(event)=>{
    event.preventDefault();
    setName(event.target.value)
  }
 
  const handleId=(event)=>{
    event.preventDefault();
    setId(event.target.value)
  }
  const handlePassword=(event)=>{
    event.preventDefault();
    setPassword(event.target.value)
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(validateForm({name,id,password}));
    // setIsSubmit(true);
    if(isSubmit===true){
        navigate('/home');
    }
}
  

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Name is required';
      setIsSubmit(false);
    }

    else if (values.id.trim() === '') {
      errors.id = 'id is required';
      setIsSubmit(false);
    } 

    else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }
    else{
        setIsSubmit(true)
    }
    return errors;

    // setErrors(errors);
  };

  

  return (
    <>
  
    <div className='login'>
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>login</h1>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='name' className='form-control'
            placeholder='name'
            value={name} id='nm'
            onChange={handleName} />
            <label for='nm'>Name</label>
            </div>
            {errors.name}
            </div>
           
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='id' className='form-control'
            placeholder='id'
            value={id} id='id'
            onChange={handleId}/>
            <label for='id'>Id</label>
            </div>
            {errors.id && <span >{errors.id}</span>}
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='password' className='form-control'
            placeholder='password' id='pwd'
            value={password}
            onChange={handlePassword}/>
            <label for='pwd'>Password</label>
            </div>
            {errors.password && <span>{errors.password}</span>}
            </div>
            <button  type='submit' className='btn btn-success' style={{background:' #7baf1b',color:'black',width:400,height:50,margin:40}}>sign in</button>

        </form>
    </div>
    </>
  )
}

export default Login