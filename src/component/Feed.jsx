import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProfileImg from '../reUseComponent/ProfileImg';
import TagReUse from '../reUseComponent/TagReUse';
import userPostGetApi from '../service/userGetPostApi';
import './feed.css'

function Feed(){
    const[userName,setUserName]=useState('');
    const[userPost,setUserPost]=useState([]);

    useEffect(()=>{
        setUserName(localStorage.getItem('name'))
    },[])
     
    const userPosts = async()=>{
        try {
            const response = await userPostGetApi()
            setUserPost(response)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
         userPosts()
    },[])

    return(
        <>
        <Header/>
        <div className='post-field'>
            <div className='profile-img'>
            <ProfileImg/>
            <TagReUse label={userName} className='profile-name'/>
            </div>
         {userPost.map((post)=>(
             <div className='post-content' key={post._id}>
              {post.postContent}
             </div>
         ))}
        </div>
        </>
    )
}
export default Feed;