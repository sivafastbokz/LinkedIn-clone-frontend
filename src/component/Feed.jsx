import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProfileImg from '../reUseComponent/ProfileImg';
import TagReUse from '../reUseComponent/TagReUse';
import userPostGetApi from '../service/userGetPostApi';
import DefaultPost from './DefaultPost';
import './feed.css'

function Feed(){
    const[userName,setUserName]=useState('');
    const[userPost,setUserPost]=useState([]);
    const[userLoggedIn,setUserLoggedIn]=useState(false);

    useEffect(()=>{
        setUserName(localStorage.getItem('name'))
        setUserLoggedIn(!!localStorage.getItem('token'))
    },[])
     
    const userPosts = async()=>{
        try {
            const response = await userPostGetApi()
            setUserPost(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
         userPosts()
    },[])

    return(
        <>
        <Header updatePost={userPosts} postSearch={setUserPost}/>
        {userLoggedIn ? ( 
        userPost.map((post)=>(
        <div className='post-field' key={post._id}>
        <div className='profile-img'>
        <ProfileImg/>
        <TagReUse label={userName} className='profile-name'/>
        </div>
        <div className='post-content'>
        {post.postContent}
        </div>
     </div>
       ))):(
       <DefaultPost/>
       )}
        </>
    )
}
export default Feed;