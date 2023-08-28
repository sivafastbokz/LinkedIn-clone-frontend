import React from 'react';

function SuccessMsg({label,className}){
    return(
     
        <div className={className}>
          {label}
        </div>
     
    )
}

export default SuccessMsg;