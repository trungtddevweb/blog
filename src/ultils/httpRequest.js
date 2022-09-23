import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest(path, options);
    return response.data;
};

export default httpRequest;
