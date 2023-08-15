import React from 'react';
import Logo from '../reUseComponent/Logo';
import { useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { TextField } from '@mui/material';
import {InputAdornment} from '@mui/material';
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
        {/* <input className='input-search' placeholder='     Search' type='text'></input>
        <Search className='search-btn'/> */}
        <TextField 
        placeholder='Search' 
        className='input-search'
        InputProps={{
            startAdornment:(
                <InputAdornment position='start'>
                   <Search className='search-btn'/>
                </InputAdornment>
            )
        }}
        variant='outlined'
        size='small'
        />
        <Logout className='logout-btn' onClick={logOut} titleAccess='logout'/>
        </div>
        </>
    )
}
export default Header;