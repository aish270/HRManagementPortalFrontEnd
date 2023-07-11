import React from 'react'
import { useState } from 'react'
import './login.css'

import { Link } from 'react-router-dom'




function Signup() {
    const [name,setName]=useState('')
    const [id,setId]=useState('')  
    const [password,setPassword]=useState('')
  return (
    <>
    <div className='login'>
        <form className='login_form'>
            <h1>Add Employee</h1>
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='name' className='form-control'
            placeholder='name'
            value={name} id='nm'
            onChange={(e)=>setName(e.target.value)} />
            <label for='nm'>Name</label>
            </div>
            </div>
           
            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='id' className='form-control'
            placeholder='id'
            value={id} id='id'
            onChange={(e)=>setId(e.target.value)}/>
            <label for='id'>Id</label>
            
            </div>
            </div>

            <div className='loginbox'>
            <div className='form-floating mb-3'>
            <input type='password' className='form-control'
            placeholder='password' id='pwd'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <label for='pwd'>Department Name</label>
            </div>
            </div>
            <Link to='/home'><button  type='submit' className='btn btn-success' style={{background:' #7baf1b',color:'black',width:400,height:50,margin:40}}>sign in</button></Link>

        </form>
    </div>
    </>
  )
}

export default Signup