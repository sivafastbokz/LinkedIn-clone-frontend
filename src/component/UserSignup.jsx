import React, { useState } from 'react';
import FormApi from '../service/formApi';
import Logo from '../reUseComponent/Logo';
import ButtonReUse from '../reUseComponent/ButtonReUse';
import './userSignup.css'

function UserSignup(){
    const[email,setEmail]=useState('');
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[password,setPassword]=useState('');

    const Register = async(e)=>{
        e.preventDefault();
        try {
            const response = await FormApi(email,firstName,lastName,password);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <div className='logo'>
        <Logo/>
        </div>
        <div className='heading'>
            <h1>Make the most of your professional life</h1>
        </div>
        <div className='container'>
            <div className='container-item'>
               <label>Email</label>
               <br/>
               <input type='email' className='input-box' onChange={(event)=>setEmail(event.target.value)}></input>
               <br/>
               <label>FirstName</label>
               <br/>
               <input type='text' className='input-box' onChange={(evevt)=>setFirstName(evevt.target.value)}></input>
               <br/>
               <label>LastName</label>
               <br/>
               <input type='text'className='input-box' onChange={(evevt)=>setLastName(evevt.target.value)}></input>
               <br/>
               <label>Password</label>
               <br/>
               <input type='password'className='input-box' onChange={(evevt)=>setPassword(evevt.target.value)}></input>
               <ButtonReUse label='Register' className='register-btn'  onClick={Register}/>
               <hr className='line'/>
               <label className='already'>Already on LinkedIn?<a href='Signin' >Sign in</a></label>
            </div>
        </div>
        </>
    )
}
export default UserSignup;