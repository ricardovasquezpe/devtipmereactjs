import { Component } from "react";
import "./index.scss";

class SearchInput extends Component {
    render(){
        return (
            <>
               <div className="inner-addon right-addon">
                    <form>
                        <span className="material-icons" style={{color:"black", fontSize: "20px"}}>search</span>
                        <input type="text" placeholder="Search a solution"/>
                    </form>
                </div> 
            </>
        );
    }
}

export default SearchInput;