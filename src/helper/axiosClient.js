import axios from 'axios';
import ServerConfigs from '../configs/serverConfig';

const isDevelopment =process.env.NODE_ENV === 'development'
const baseURL = isDevelopment ? ServerConfigs : 'https://linkedin-clone-backend-hl4v.onrender.com'

const axiosClient = axios.create({
    baseURL,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

export default axiosClient;