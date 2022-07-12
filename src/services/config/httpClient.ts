import axios from "axios";
import updateHeaderInterceptor from "./authInterceptor";
import errorInterceptor from "./errorInterceptor";

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
errorInterceptor(httpClient);
updateHeaderInterceptor(httpClient);

export default httpClient;