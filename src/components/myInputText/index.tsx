import React, { Component } from "react";
import "./index.scss";

type MyProps = {
    type?: string, 
    placeHolder?: string
};

class MyInputText extends React.Component<MyProps>{
    render(){
        return (
            <>
                <form>
                    <input className="myInput" type={this.props.type} placeholder={this.props.placeHolder} />
                </form>
            </>
        );
    }
}

export default MyInputText;