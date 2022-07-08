import { Component } from "react";
import "./index.scss";

class MyInputText extends Component {
    render(){
        return (
            <>
                <form>
                    <input className="myInput" type="{{this.type}}" placeholder="{{this.placeHolder}}" />
                </form>
            </>
        );
    }
}

export default MyInputText;