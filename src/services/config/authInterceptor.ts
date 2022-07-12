import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onLogout } from "../../store/auth/authAction";
import { clearSession, retrieveToken, verifyAuth } from "../sessionManagerService";

const updateHeaderInterceptor = (axiosInstance: any) => {
    axiosInstance.interceptors.request.use((config: any) => {
        let token = retrieveToken();
        if (token.length > 0) {
            if(!verifyAuth()){
                clearSession();
                let navigate = useNavigate();
                navigate("/");
                const dispatch = useDispatch();
                dispatch(onLogout());
            }
            config.headers["Authorization"] = token;
        }
        
        return config;
    },(error: any) => {});
};
export default updateHeaderInterceptor;