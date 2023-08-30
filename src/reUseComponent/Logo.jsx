import React from 'react';
import App from '../icons8-linkedin.svg';

function Logo({className}){
    return(
        <>
        <img src={App} alt='LinkedIn-logo'className={className}></img>
        </>
    )
}
export default Logo 