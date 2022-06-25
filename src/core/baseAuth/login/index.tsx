import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "./../../redux/store";
import { onLogin, onLogout } from "../../redux/auth/authAction";

export function LoginPage (props: any){
    //let navigate = useNavigate();
    //const authUser = useSelector((x : any) => x);
    const dispatch = useDispatch();

    store.subscribe(() => {
        console.log( store.getState() );
    });

    /*const goToRegister = () => {
        navigate("/auth/register");
    }*/

    const login = () => {
        dispatch(onLogin());
    }

    const logout = () => {
        dispatch(onLogout());
    }

    return (
        <>
            <h3>
                Login Page
            </h3>
            <button onClick={login}>Login Action</button>
            <button onClick={logout}>Logout Action</button>
        </>
    );
}