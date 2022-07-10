import React, { useState } from "react";
import "./index.scss";
import { MyButton } from "../myButton";
import { useForm } from "react-hook-form";
import { MyInputText } from "../myInputText";
import LoadingModal from "../loadingModal";
import { storeNewToken } from "../../services/sessionManagerService";
import { onLogin } from "../../store/auth/authAction";
import { useDispatch } from "react-redux";
import { postRegister } from "../../services/authService";

export function Register(props: any){
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState("");
    const { register, trigger: registerTrigger, getValues: registerGetValues } = useForm();
    const goRegister = async () => {
        const isValid = await registerTrigger(["email", "name", "password", "repeatPassword"], { shouldFocus: true });
        if(isValid && validateRegisterForm(registerGetValues())){
            setLoading(true);
            postRegister(registerGetValues()).then((response:any) => {
                var data = response.data;
                if(data.error){
                    setErrorMsg(data.error);
                    setLoading(false);
                    return;
                }

                storeNewToken(data.token, registerGetValues().email, registerGetValues().name);
                dispatch(onLogin());
                setLoading(false);
                props.handleClose();
            }).catch((err: any) => {
                setErrorMsg(err);
                setLoading(false);
            });
        }
    }

    const validateRegisterForm = (data: any): boolean => {
        if(data.password != data.repeatPassword){
            setErrorMsg("Passwords should be the same");
            return false;
        }

        if(data.password.length < 6){
            setErrorMsg("Passwords should have more than 6 characters");
            return false;
        }

        return true;
    }

    return (
        <>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <p className="title">Create an account now!</p>
                        </div>
                        <div className="col-sm-12">
                            <MyInputText name={"email"} rules={{ required: true, pattern: /^\S+@\S+$/i }} reactForm={register} type={"text"} placeHolder={"Enter Email"}></MyInputText>  
                        </div>
                        <div className="col-sm-12 mt-3">
                            <MyInputText name={"name"} rules={{ required: true }} reactForm={register} type={"text"} placeHolder={"Enter Name"}></MyInputText>  
                        </div>
                        <div className="col-sm-12 mt-3">
                            <MyInputText name={"password"} rules={{ required: true }} reactForm={register} type={"password"} placeHolder={"Enter Password"}></MyInputText>  
                        </div>
                        <div className="col-sm-12 mt-3">
                            <MyInputText name={"repeatPassword"} rules={{ required: true }} reactForm={register} type={"password"} placeHolder={"Repeat Password"}></MyInputText>  
                        </div>
                        <div className="col-sm-12 text-center">
                            <p style={{marginTop: "15px", marginBottom: "0px"}} className="error">{ errorMsg }</p>
                        </div>
                        <div className="col-sm-12 mt-3">
                            <MyButton text={"Register"} type={"button"} onClickAction={goRegister}></MyButton>   
                        </div>
                    </div>
                </div>
            </form>
            <LoadingModal show={loading}></LoadingModal>
        </>
    );
    
}