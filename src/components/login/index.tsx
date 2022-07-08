import React, { useState } from "react";
import "./index.scss";
import { MyButton } from "../myButton";
import { useForm } from "react-hook-form";
import { MyInputText } from "../myInputText";

export function Login(props: any){
    const [errorMsg, setErrorMsg] = useState("");
    const { register: login, handleSubmit: handleLogin, formState: { errors }, trigger } = useForm();
    const doLogin = (data: any) => {
        setErrorMsg("Error!!");
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleLogin(doLogin)}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <p className="title">Welcome!</p>
                        </div>
                        <div className="col-sm-12">
                            <MyInputText name={"email"} rules={{ required: true, pattern: /^\S+@\S+$/i }} reactForm={login} type={"text"} placeHolder={"Enter Email"}></MyInputText>  
                        </div>
                        <div className="col-sm-12 mt-3">
                            <MyInputText name={"password"} rules={{ required: true }} reactForm={login} type={"password"} placeHolder={"Enter Password"}></MyInputText>  
                        </div>
                        <div className="col-sm-12 text-center">
                            <p style={{marginTop: "15px", marginBottom: "0px"}} className="error">{ errorMsg }</p>
                        </div>
                        <div className="col-sm-12 mt-3">
                            <MyButton text={"Login"} type={"submit"}></MyButton>   
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
    
}