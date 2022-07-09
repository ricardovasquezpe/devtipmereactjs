const axios = require('axios');

const client = axios.create({
    baseURL: "http://localhost:5000" 
});

export function doLogin(payload: any) {
    const options = { headers: { 'content-type': 'application/json'} };
    return client.post('/user/login', payload);
    /*try{
        const response = await axios.get('/api/users');
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }*/
    
}