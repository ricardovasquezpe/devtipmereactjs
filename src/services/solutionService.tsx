import { FIND_SOLUCTIONS_API_URL } from "../utils/constants";

const axios = require('axios');

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL 
});

export function postFindSolutions(payload: any) {
    return client.post(FIND_SOLUCTIONS_API_URL, payload);    
}