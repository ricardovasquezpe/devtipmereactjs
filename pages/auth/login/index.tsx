import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthLayout from "../../../components/authLayout";
import { onLogin, onLogout } from "../../../redux/auth/authAction";
import store from "../../../redux/store";

export default function index() {
    const navigate = useRouter();
    const dispatch = useDispatch();
    const [loggedIn, setLoggedIn] = useState(false);

    store.subscribe(() => {
        var isLoggedIn = store.getState();
        console.log(isLoggedIn.auth.isLoggedIn);
        setLoggedIn(isLoggedIn.auth.isLoggedIn);
    }); 

    const isLoggedIn = useSelector((state:any) => state.auth.isLoggedIn);

    useEffect(() => {
        console.log('render!');
        return () => console.log('unmounting...');
    })

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
            <AuthLayout>
                <h3>
                    Login Page {loggedIn.toString()}
                    {isLoggedIn.toString()}
                </h3>
                <button onClick={login}>Login Action</button>
                <button onClick={logout}>Logout Action</button>
                <button onClick={goToRegister}>Go To register</button>
            </AuthLayout>
        </>
    );
}

//index.Layout = AuthLayout;