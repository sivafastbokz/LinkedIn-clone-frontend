import axiosClient from '../helper/axiosClient';

const FormApi = async(userEmail,userFirstName,userLastName,userPassword)=>{
   return await axiosClient.post('/usersignup',{userEmail,userFirstName,userLastName,userPassword}).then(res=>res.data);
}
export default FormApi;

