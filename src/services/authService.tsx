import { LOGIN_API_URL } from "../utils/constants";

const axios = require('axios');

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL 
});

export function doLogin(payload: any) {
    return client.post(LOGIN_API_URL, payload);    
}