import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../../../store/store";
import { useEffect, useState } from "react";
import { onLogin, onLogout } from "../../../store/auth/authAction";
import CustomModal from "../../../components/customModal";
import { Register } from "../../../components/register";

export function LoginPage (props: any){
    let navigate = useNavigate();

   /*useEffect(() => {
        // This gets called after every render, by default
        // (the first one, and every one after that)
        console.log('render!');
    
        // If you want to implement componentWillUnmount,
        // return a function from here, and React will call
        // it prior to unmounting.
        return () => console.log('unmounting...');
    })*/

    return (
        <>
            <h3>
                Login Page
            </h3>
        </>
    );
}