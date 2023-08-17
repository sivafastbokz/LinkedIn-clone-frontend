import React, { useState } from 'react';
import Logo from '../reUseComponent/Logo';
import ButtonReUse from '../reUseComponent/ButtonReUse';
import { useNavigate } from 'react-router-dom';
import { Logout,Search,AccountCircle,ArrowDropDown,AddCircle,Close} from '@mui/icons-material';
import './header.css'


function Header(){
    const[showProfileMenu,setShowProfileMenu]=useState(false);
    const[showCreateBox,setShowCreateBox]=useState(false);
    const navigate = useNavigate();

    const logOut =()=>{
        localStorage.removeItem('token')
        navigate('/')
    }
    return(
        <>
        <div className='header'>
        <Logo className='logo-feed'/> 
        <input className='input-search' placeholder='     Search' type='text'></input>
        <Search className='search-btn'/>
        <AccountCircle className='profile-btn' fontSize='medium'/>
        <ButtonReUse className='small-text' onClick={()=>{setShowProfileMenu(!showProfileMenu)}} label='Me'/>
        <ArrowDropDown  className='dropdown'onClick={()=>{setShowProfileMenu(!showProfileMenu)}} />
        <div className={showProfileMenu ? 'profile-menu expend' : 'profile-menu'}>
            <h1>sivaharshan</h1>
            <hr/>
            <Logout className='logout-btn' onClick={logOut} titleAccess='SignOut'/><label onClick={logOut} className='signout-label'>SignOut</label>
        </div>
        <AddCircle className='create-btn' onClick={()=>{setShowCreateBox(!showCreateBox)}}/>
        <ButtonReUse className='create-label' onClick={()=>{setShowCreateBox(!showCreateBox)}} label='Create'/>
        <div className={showCreateBox ? 'post-textarea expand' : 'post-textarea'}>
               <Close className='close-btn' onClick={()=>{setShowCreateBox(!showCreateBox)}}/>
               <h1>sivaharshan</h1>
               <textarea  className='textarea' rows='13' cols='64' placeholder='What do you want to talk about?'></textarea>
               <hr className='line3'/>
               <ButtonReUse className='post-btn' label='Post'/>
        </div>
        </div>
        </>
    )
}
export default Header;