import React from "react";
import "./index.scss";
import MyInputText from "../myInputText";
import { MyButton } from "../myButton";

type State = {
    errorMsg: String;
};

class Login extends React.Component<{}, State> {
    constructor(props: any){ 
        super(props);
        this.state = {
            errorMsg :''
        };
    }
    
    doLogin(){
        this.setState({
            errorMsg: 'SuperError'
        }); 
    }

    render(){
        return (
            <>
                <div className="modal-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <p className="title">Welcome!</p>
                            </div>
                            <div className="col-sm-12">
                                <MyInputText type={"text"} placeHolder={"Enter Email"}></MyInputText>  
                            </div>
                            <div className="col-sm-12 mt-3">
                                <MyInputText type={"password"} placeHolder={"Enter Password"}></MyInputText>  
                            </div>
                            <div className="col-sm-12 text-center">
                                <p style={{marginTop: "15px", marginBottom: "0px"}} className="error">{ this.state.errorMsg }</p>
                            </div>
                            <div className="col-sm-12 mt-3">
                                <MyButton text={"Login"} onClickAction={() => this.doLogin()}></MyButton>   
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;