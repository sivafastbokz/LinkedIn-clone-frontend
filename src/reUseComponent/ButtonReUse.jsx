import React from 'react';

function ButtonReUse({label,className,onClick,tittle,disabled}){
    return(
        <>
         <button className={className} onClick={onClick} title={tittle} disabled={disabled}>{label}</button>
        </>
    )
}
export default ButtonReUse;