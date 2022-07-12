import { Component, useEffect } from "react";
import "./index.scss";
import logo from './../../assets/images/logo3.png';
import SearchInput from "../searchInput";
import { useDispatch } from "react-redux";
import { onToggle } from "../../store/sideNavBar/sideNavBarAction";

export function MyHeader(props: any){
    const dispatch = useDispatch();
    useEffect(() => {
    }, [dispatch]);
    const onOpenSidebar = () => {
        dispatch(onToggle(true));
    }
    return (
        <>
            <nav className="navbar navbar-custom py-3">
                <div className="col-3 col-sm-3">
                    <div style={{float: "left"}}>
                        <span className="material-icons menu-icon" style={{color: "white", fontSize: "40px"}} onClick={onOpenSidebar}>menu</span>
                    </div>
                </div>
                <div className="col-6 col-sm-6">
                    <div className="text-center">
                    <SearchInput></SearchInput>
                    </div>
                </div>
                <div className="col-3 col-sm-3">
                    <div style={{float: "right"}}>
                        <img src={logo} alt="logo" style={{width: "65px"}}/>
                    </div>
                </div>
            </nav>
        </>
    );
}