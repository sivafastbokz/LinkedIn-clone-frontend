import React from 'react';
import App from '../profile-user-svgrepo-com.svg';

function ProfileImg({className}){
    return(
        <>
        <img src={App} alt='ProfileIcon' className={className}></img>
        </>
    )
}

export default ProfileImg;