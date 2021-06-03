import axios from 'axios';
import config from '../../config/config.json';

// export const key = '8319609d9f35976a534753df9dcf89267f2c7362';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.api}`
    }
});

export default api;