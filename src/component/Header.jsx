import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logout,Search,AccountCircle,ArrowDropDown,AddCircle,Close} from '@mui/icons-material';
import Logo from '../reUseComponent/Logo';
import ButtonReUse from '../reUseComponent/ButtonReUse';
import TagReUse from '../reUseComponent/TagReUse';
import userPost from '../service/userPostApi';
import ProfileImg from '../reUseComponent/ProfileImg';
import './header.css'

function Header(){
    const[showProfileMenu,setShowProfileMenu]=useState(false);
    const[showCreateBox,setShowCreateBox]=useState(false);
    const[post,setPost]=useState('');
    const[userName,setUserName]=useState('');
    const navigate = useNavigate();

    const logOut =()=>{
        localStorage.removeItem('token')
        navigate('/')
    }
    
    const clearAndClosePost = ()=>{
        setShowCreateBox(!showCreateBox)
        setPost('')
    }

    const createPost = async(e)=>{
        e.preventDefault();
        try {
            await userPost(post)
        } catch (error) {
            console.log(error)
        }
    }

      useState(()=>{
        setUserName(localStorage.getItem('name'))
      },[])
  
   
    return(
        <>
        <div className='header'>
        <Logo className='logo-feed'/> 
        <input className='input-search' placeholder='Search' type='text'></input>
        <Search className='search-btn'/>
        <AccountCircle className='profile-btn' fontSize='medium'/>
        <ButtonReUse className='small-text' onClick={()=>{setShowProfileMenu(!showProfileMenu)}} label='Me'/>
        <ArrowDropDown  className='dropdown'onClick={()=>{setShowProfileMenu(!showProfileMenu)}} />
        <div className={showProfileMenu ? 'profile-menu expend' : 'profile-menu'}>
            <ProfileImg className='profile-img' />
            <TagReUse label={userName} className='profile-menu-h1'/>
            <hr/>
            <Logout className='logout-btn' onClick={logOut} titleAccess='SignOut'/><label onClick={logOut} className='signout-label'>SignOut</label>
        </div>
        <AddCircle className='create-btn' onClick={()=>{setShowCreateBox(!showCreateBox)}}/>
        <ButtonReUse className='create-label' onClick={()=>{setShowCreateBox(!showCreateBox)}} label='Create'/>
        <div className={showCreateBox ? 'post-textarea expand' : 'post-textarea'}>
               <ProfileImg className='profile-img'/>
               <Close className='close-btn' onClick={clearAndClosePost}/>
               <TagReUse label={userName} className='post-textarea-h1'/>
               <textarea  className='textarea' rows='13' cols='62' value={post} placeholder='What do you want to talk about?' onChange={(event)=>setPost(event.target.value)}></textarea>
               <hr className='line3'/>
               <ButtonReUse className='post-btn' label='Post' onClick={createPost}/>
        </div>
        </div>
        </>
    )
}
export default Header;