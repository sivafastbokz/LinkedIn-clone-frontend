import axiosClient from '../helper/axiosClient';

const searchPost = async(post)=>{
    return await axiosClient.get(`/userpost/${post}`).then(res => res.data)
}

export default searchPost;