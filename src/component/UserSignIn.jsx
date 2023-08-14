import React, { useState } from 'react';
import SignInApi from '../service/signInApi';
import { useNavigate } from 'react-router-dom';
import Logo from '../reUseComponent/Logo';
import TagReUse from '../reUseComponent/TagReUse';
import ButtonReUse from '../reUseComponent/ButtonReUse';
import './userSignIn.css'

function UserSignIn(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');
    // const[success,setSuccess]=useState('');
    const[invalid,setInvalid]=useState('');
    const navigate = useNavigate();

   const signIn = async(e)=>{
    e.preventDefault();
    if(!email || !password){
        setError('Fill The Required Fields');
        return;
    }
    try {
        const response = await SignInApi(email,password);
        const{status,data}=response
        if(status === 'logged in successfully'){
            localStorage.setItem('token',data)
                // setSuccess('Sign In Successfull')
                navigate('/feed')
        }else{
            setInvalid('invalid Email or Password')
        }
    } catch (error) {
        console.log(error)
        setInvalid('invalid Email or Password')
    }
   }

   const signUpPage = (event)=>{
      event.preventDefault();
      navigate('/')
   }

    return(
        <>
        <div className='logo'>
        <Logo/>
        </div>
        <div className='heading'>
        <TagReUse label='Stay upto date on Professional trends'/>
        </div>
        <div className='container'>
             <div className='container-item'> 
             <TagReUse label='Sign in' className='signin-heading'/>
             <label>Email</label>
               <br/>
               <input type='email' className='input-box1' onChange={(event)=>setEmail(event.target.value)}></input>
               <br/>
               <label>Password</label>
               <br/>
               <input type='password' className='input-box1' onChange={(event)=>setPassword(event.target.value)}></input>
               <br/>
               {error && <p className='error-msg-signin'>{error}</p>}
               {/* {success && <p>{success}</p>} */}
               <ButtonReUse label='Sign In' className='signin-btn' onClick={signIn}/>
               {invalid &&  <p className='invalid'>{invalid}</p>}
               <hr className='line'/>
               <label className='new'>New to LinkedIn?<a href='/'onClick={signUpPage} >Sign up</a></label>
             </div>
        </div>
        </>
    )
}
export default UserSignIn;