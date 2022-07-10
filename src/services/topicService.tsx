import { TRENDING_TOPICS_API_URL } from "../utils/constants";

const axios = require('axios');

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL 
});

export function getTrendingTopics() {
    return client.get(TRENDING_TOPICS_API_URL);    
}