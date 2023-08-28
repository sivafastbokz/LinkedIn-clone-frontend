import axiosClient from '../helper/axiosClient';

const allUserPost = async()=>{
  return await axiosClient.get('/alluserpost').then(res => res.data)
}

export default allUserPost;