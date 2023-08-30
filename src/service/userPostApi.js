import axiosClient from '../helper/axiosClient';

const userPost =async(postContent)=>{
       const token = localStorage.getItem('token')
       return await axiosClient.post('/createpost',{postContent},{
        headers:{
            'Content-Type':'application/json',
             Authorization:`Bearer ${token}`
        }
       }).then(res => res.data);
}

export default userPost;