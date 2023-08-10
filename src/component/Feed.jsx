import React from 'react';
import Logo from '../reUseComponent/Logo';
import './feed.css'


function Feed(){
    return(
        <>
        <div className='header'>
          <Logo/> <input className='input-search' placeholder='search'></input>
        </div>
        </>
    )
}
export default Feed;