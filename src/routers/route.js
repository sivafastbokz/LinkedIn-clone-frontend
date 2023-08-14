import React from 'react';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SignUpForm from '../container/SignUpForm';
import SignInForm from '../container/SignInForm';
import UserFeed from '../container/UserFeed';

function RouteWay(){
    return(
         <Router>
            <Routes>
                <Route path='/' element={<SignUpForm/>}></Route>
                <Route path='/signinpage' element={<SignInForm/>}></Route>
                <Route path='/feed' element={<UserFeed/>}></Route>
            </Routes>
         </Router>
    )
}
export default RouteWay;