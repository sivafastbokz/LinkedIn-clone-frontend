import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../reUseComponent/Logo';
import { Logout } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import './header.css'

function Header(){
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
        <Logout className='logout-btn' onClick={logOut} titleAccess='logout'/>
        </div>
        </>
    )
}
export default Header;