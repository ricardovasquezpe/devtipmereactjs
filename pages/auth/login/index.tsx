import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import AuthLayout from "../../../components/authLayout";
import { onLogin, onLogout } from "../../../redux/auth/authAction";
import store from "../../../redux/store";

export default function index() {
    const navigate = useRouter();
    const dispatch = useDispatch();

    store.subscribe(() => {
        console.log(store.getState());
    }); 

    const goToRegister = () => {
        navigate.replace("/auth/register");
    }

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
            <button onClick={goToRegister}>Go To register</button>
        </>
    );
}

index.Layout = AuthLayout;