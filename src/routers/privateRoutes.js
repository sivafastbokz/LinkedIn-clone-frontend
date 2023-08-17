import React, {useState,useEffect} from 'react';
import { Outlet,Navigate } from 'react-router-dom';

function PrivateRoutes(){
    const[authenticate,setauthenticate]=useState(true);
    const token = localStorage.getItem('token');

    useEffect(()=>{
        if(token){
            setauthenticate(true)
        }
    },[token])
    if(!authenticate ||!token){
        return <Navigate to='/signinpage' replace/>
    }
    return(
        <>
          <Outlet/>
        </>
    )
}
export default PrivateRoutes;