import axiosClient from "../helper/axiosClient";

const userPostGetApi = async()=>{
    const token = localStorage.getItem('token')
    return await axiosClient.get('/getuserpost',{
        headers:{
            'Content-Type':'application/json',
             Authorization:`Bearer ${token}`
        }
    }).then(res=>res.data)
}

export default userPostGetApi;