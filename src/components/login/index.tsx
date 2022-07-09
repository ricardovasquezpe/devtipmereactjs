import React, { useState } from "react";
import "./index.scss";
import { MyButton } from "../myButton";
import { useForm } from "react-hook-form";
import { MyInputText } from "../myInputText";

export function Login(props: any){
    const [ errorMsg, setErrorMsg ] = useState("");
    const { register: login, trigger } = useForm();
    const doLogin = async () => {
        const isValid = await trigger(["email", "password"], { shouldFocus: true });
        if(isValid){
            
        }
    }

    return (
        <>
            <form>
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
                            <MyButton text={"Login"} type={"button"} onClickAction={doLogin}></MyButton>   
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
    
}