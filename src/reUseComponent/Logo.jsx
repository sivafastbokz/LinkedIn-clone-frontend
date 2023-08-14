import React from 'react';
import App from '../icons8-linkedin.svg';

function Logo({className}){
    return(
        <React.Fragment>
        <img src={App} alt='LinkedIn logo'className={className}></img>
        </React.Fragment>
    )
}
export default Logo 