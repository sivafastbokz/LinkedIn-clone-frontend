import React from 'react';
import SignUpForm from '../container/SignUpForm';
import SignInForm from '../container/SignInForm';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function RouteWay(){
    return(
        <>
         <Router>
            <Routes>
                <Route path='/' element={<SignUpForm/>}></Route>
                <Route path='/signinpage' element={<SignInForm/>}></Route>
            </Routes>
         </Router>
        </>
    )
}
export default RouteWay;