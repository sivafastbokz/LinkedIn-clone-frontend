import React from 'react';

function ButtonReUse({label,className,onClick,tittle,disabled}){
    return(
        <React.Fragment>
         <button className={className} onClick={onClick} title={tittle} disabled={disabled}>{label}</button>
        </React.Fragment>
    )
}
export default ButtonReUse;