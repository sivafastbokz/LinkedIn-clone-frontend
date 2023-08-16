import React, { useState } from 'react';
import Logo from '../reUseComponent/Logo';
import { useNavigate } from 'react-router-dom';
import { Logout,Search,AccountCircle,ArrowDropDown,AddCircle} from '@mui/icons-material';

import './header.css'


function Header(){
    const[showProfileMenu,setShowProfileMenu]=useState(false);
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
        <button className='small-text' onClick={()=>{setShowProfileMenu(!showProfileMenu)}}>Me</button>
        <ArrowDropDown  className='dropdown'onClick={()=>{setShowProfileMenu(!showProfileMenu)}}/>
        <div className={showProfileMenu ? 'profile-menu expend' : 'profile-menu'}>
            <h1>sivaharshan</h1>
            <hr/>
            <Logout className='logout-btn' onClick={logOut} titleAccess='SignOut'/><label onClick={logOut} className='signout-label'>SignOut</label>
        </div>
        <AddCircle className='create-btn'/>
        <small className='create-label'>Create</small>
        </div>
        </>
    )
}
export default Header;