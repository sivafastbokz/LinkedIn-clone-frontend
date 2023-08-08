import React from 'react';


function ButtonReUse({label,className,onClick}){
    return(
        <React.Fragment>
         <button className={className} onClick={onClick}>{label}</button>
        </React.Fragment>
    )
}
export default ButtonReUse;