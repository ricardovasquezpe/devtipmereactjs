import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class BaseAuthPage extends Component {
    render(){
        return (
            <>
                <h2>Auth Base Page</h2>
                <nav>
                    <Link to="login">login</Link>
                    <Link to="register">register</Link>
                </nav>

                <Outlet />
            </>
        );
    }
}

export default BaseAuthPage;