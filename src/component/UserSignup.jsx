import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormApi from '../service/formApi';
import Logo from '../reUseComponent/Logo';
import ButtonReUse from '../reUseComponent/ButtonReUse';
import TagReUse from '../reUseComponent/TagReUse';
import SuccessMsg from '../reUseComponent/SuccessMsg';
import './userSignup.css'

function UserSignup(){
    const[email,setEmail]=useState('');
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');
    const[emailError,setEmailError]=useState('');
    const[successMsg,setSuccessMsg]=useState(false);
    
    const navigate = useNavigate();

    const Register = async(e)=>{
        e.preventDefault();
        if(!email || !firstName || !lastName || !password){
            setError('Fill The Required Fields')
            return;
        }
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            setEmailError('Enter a valid email');
            return;
        }
        try {
            await FormApi(email,firstName,lastName,password);
            localStorage.setItem('name',firstName)
            setSuccessMsg(!successMsg)
            setTimeout(()=>{
                navigate('/signinpage')
            },1000)   
        } catch (error) {
            console.log(error)
        }
    }

    const SignInPage = (event)=>{
      event.preventDefault();
      navigate('/signinpage')
    } 

    return(
        <>
        <div className='logo'>
        <Logo/>
        </div>
        <div className='heading'>
            <TagReUse label='Make the most of your professional life'/>
        </div>
        <div className='container'>
            <div className='container-item'>
               <label>Email</label>
               <br/>
               <input type='email' className='input-box' onChange={(event)=>setEmail(event.target.value)}></input>
               <br/>
               {emailError && <p className='error-msg-email'>{emailError}</p>}
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
               {error &&<p className='error-msg'>{error}</p>}
               <ButtonReUse label='Register' className='register-btn'  onClick={Register}/>
               <hr className='line'/>
               <label className='already'>Already on LinkedIn?<a href='signinpage'onClick={SignInPage}>Sign in</a></label>
            </div>
        </div>
        <SuccessMsg label='Account Successfully Created!' className={successMsg ? 'signup-success-msg show' : 'signup-success-msg'}/>
        </>
    )
}
export default UserSignup;