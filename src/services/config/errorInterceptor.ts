import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onLogout } from "../../store/auth/authAction";

const errorInterceptor = (axiosInstance: any) => {
    axiosInstance.interceptors.response.use((response: any) => {
        return response;
    },(error: any) => {
        if(error.response.status === 403) {
            let navigate = useNavigate();
            navigate("/");
            const dispatch = useDispatch();
            dispatch(onLogout());
        }
    });
};
export default errorInterceptor;