import axios from 'axios';
import ServerConfigs from '../configs/serverConfig';

const axiosClient = axios.create({
    baseURL:ServerConfigs,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

export default axiosClient;