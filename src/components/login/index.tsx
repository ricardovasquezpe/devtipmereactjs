import React, { useState } from "react";
import "./index.scss";
import { MyButton } from "../myButton";
import { useForm } from "react-hook-form";
import { MyInputText } from "../myInputText";
import LoadingModal from "../loadingModal";
import { useDispatch } from "react-redux";
import { onLogin } from "../../store/auth/authAction";
import { storeNewToken } from "../../services/sessionManagerService";
import { postLogin } from "../../services/authService";

export function Login(props: any){
    const dispatch = useDispatch();
    
    const [ loading, setLoading ] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState("");

    const { register: login, trigger: loginTrigger, getValues: loginGetvalues } = useForm();

    const goLogin = async () => {
        const isValid = await loginTrigger(["email", "password"], { shouldFocus: true });
        if(isValid){
            setLoading(true);
            postLogin(loginGetvalues()).then((response:any) => {
                var data = response.data;
                if(data.error){
                    setErrorMsg(data.error);
                    setLoading(false);
                    return;
                }

                storeNewToken(data.token, loginGetvalues().email, data.name);
                dispatch(onLogin());
                setLoading(false);
                props.handleClose();
            }).catch((err: any) => {
                setErrorMsg(err);
                setLoading(false);
            });
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
                            <MyButton text={"Login"} type={"button"} onClickAction={goLogin}></MyButton>   
                        </div>
                    </div>
                </div>
            </form>
            <LoadingModal show={loading}></LoadingModal>
        </>
    );
    
}