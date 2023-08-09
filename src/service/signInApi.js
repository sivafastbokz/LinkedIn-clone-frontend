import axiosClient from "../helper/axiosClient";

const SignInApi = async(userEmail,userPassword)=>{
    return await axiosClient.post('/usersignin',{userEmail,userPassword}).then(res=>res.data)
 }
 export default SignInApi;