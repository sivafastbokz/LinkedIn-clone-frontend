import React, { useEffect, useState } from 'react';
import ProfileImg from '../reUseComponent/ProfileImg';
import TagReUse from '../reUseComponent/TagReUse';
import allUserPost from '../service/allUserPost';

function DefaultPost(){
    const[userPosts,setUserPosts]=useState([]);

    const allPosts = async()=>{
        try {
            const response = await allUserPost();
            setUserPosts(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        allPosts();
    },[])
    return(
        <>
        {userPosts.map((post)=>(
         <div className='post-field' key={post._id}>
         <div className='profile-img'>
         <ProfileImg/>
         <TagReUse label={post.userName} className='profile-name'/>
         </div>
          <div className='post-content'>
           {post.postContent}
          </div>
     </div>
       ))}
        </>
    )
}

export default DefaultPost;