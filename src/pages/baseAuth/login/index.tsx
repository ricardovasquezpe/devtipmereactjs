import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../../../redux/store";
import { useEffect, useState } from "react";
import { onLogin, onLogout } from "../../../redux/auth/authAction";

export function LoginPage (props: any){
    let navigate = useNavigate();
    const [loggedIn, setloggedIn] = useState(false);
    const dispatch = useDispatch();

    store.subscribe(() => {
        var storeLoggedIn = store.getState().auth.isLoggedIn;
        console.log(storeLoggedIn);
        setloggedIn(storeLoggedIn);
    });

    useEffect(() => {
        // This gets called after every render, by default
        // (the first one, and every one after that)
        console.log('render!');
    
        // If you want to implement componentWillUnmount,
        // return a function from here, and React will call
        // it prior to unmounting.
        return () => console.log('unmounting...');
      })

    const goToRegister = () => {
        navigate("/auth/register");
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
                {loggedIn.toString()}
            </h3>
            <button onClick={login}>Login Action</button>
            <button onClick={logout}>Logout Action</button>
            <button onClick={goToRegister}>GoToRegister</button>
        </>
    );
}