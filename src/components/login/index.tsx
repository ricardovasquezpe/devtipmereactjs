import { Component } from "react";
import MyButton from "../myButton";
import "./index.scss";
import MyInputText from "../myInputText";

class Login extends Component {
    render(){
        return (
            <>
                <div className="modal-body">
                    <form>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <p className="title">Welcome!</p>
                                </div>
                                <div className="col-sm-12">
                                    <MyInputText></MyInputText>  
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <MyInputText></MyInputText>  
                                </div>
                                <div className="col-sm-12 text-center">
                                    <p style={{marginTop: "15px", marginBottom: "0px"}} className="error">error message</p>
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <MyButton></MyButton>   
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default Login;