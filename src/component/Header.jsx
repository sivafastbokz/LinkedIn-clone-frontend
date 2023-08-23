import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logout,Search,AccountCircle,ArrowDropDown,AddCircle,Close} from '@mui/icons-material';
import Logo from '../reUseComponent/Logo';
import ButtonReUse from '../reUseComponent/ButtonReUse';
import TagReUse from '../reUseComponent/TagReUse';
import userPost from '../service/userPostApi';
import ProfileImg from '../reUseComponent/ProfileImg';
import SuccessMsg from '../reUseComponent/SuccessMsg';
import './header.css'

function Header({updatePost}){
    const[showProfileMenu,setShowProfileMenu]=useState(false);
    const[showCreateBox,setShowCreateBox]=useState(false);
    const[successMsg,setSuccessMsg]=useState(false);
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
            updatePost();
            setPost('')
            setSuccessMsg(true)
            setTimeout(()=>{
                setSuccessMsg(false)
            },2000)
            setShowCreateBox(!showCreateBox)
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
            <hr className='line3'/>
            <Logout className='logout-btn' onClick={logOut} titleAccess='SignOut'/><label onClick={logOut} className='signout-label'>SignOut</label>
        </div>
        <AddCircle className='create-btn' onClick={()=>{setShowCreateBox(!showCreateBox)}}/>
        <ButtonReUse className='create-label' onClick={()=>{setShowCreateBox(!showCreateBox)}} label='Create'/>
        <div className={showCreateBox ? 'post-textarea expand' : 'post-textarea'}>
               <ProfileImg className='profile-img'/>
               <Close className='close-btn' onClick={clearAndClosePost}/>
               <TagReUse label={userName} className='post-textarea-h1'/>
               <textarea  className='textarea' rows='15' cols='63' value={post} placeholder='What do you want to talk about?' onChange={(event)=>setPost(event.target.value)}></textarea>
               <ButtonReUse className={post === '' ? 'post-btn disabled' : 'post-btn'} label='Post' disabled={post === ''} onClick={createPost}/>
        </div>
        <SuccessMsg className={successMsg ? 'success-msg show' : 'success-msg'} label='Successfully posted!'/>
        </div>
        </>
    )
}
export default Header;