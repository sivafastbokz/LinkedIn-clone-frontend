import React from 'react';


function ButtonReUse({label,className,onClick,tittle}){
    return(
        <React.Fragment>
         <button className={className} onClick={onClick} title={tittle}>{label}</button>
        </React.Fragment>
    )
}
export default ButtonReUse;