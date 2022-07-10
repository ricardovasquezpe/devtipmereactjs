import { useState } from "react";
import { useDispatch } from "react-redux";
import { onToggle } from "../../store/sideNavBar/sideNavBarAction";
import store from "../../store/store";
import CustomModal from "../customModal";
import { Login } from "../login";
import { Register } from "../register";
import SideNavBarContent from "../sideNavBarContent";
import "./index.scss";

export function SideNavBar(props: any){
    const dispatch = useDispatch();
    const [showSideNavBar, setShowSideNavBar] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const getSideNavBarStyle = () => {
        let navBarStyle: any = {};
        navBarStyle.transition = props.direction + ' ' + props.duration + 's, visibility ' + props.duration + 's';
        navBarStyle.width = props.navWidth + 'px';
        navBarStyle[props.direction] = (showSideNavBar ? 0 : (props.navWidth * -1)) + 'px';
        return navBarStyle;
    }

    store.subscribe(() => {
        var storeSideNavBarShow = store.getState().sideNavBar.isShowing;
        setShowSideNavBar(storeSideNavBarShow);
        var storeLoggedIn = store.getState().auth.isLoggedIn;
        setLoggedIn(storeLoggedIn);
    });

    const onCloseSidebar = () => {
        dispatch(onToggle(false));
    }

    return (
        <>
            <div className={"side-nav-bar " + ((!showSideNavBar) ? "side-nav-bar-collapsed" :  "" )}>
                <div className={"side-nav-bar-overlay " + ((!showSideNavBar) ? "side-nav-bar-overlay-collapsed": "")}
                    onClick={onCloseSidebar} 
                    style={{transition: 'background-color ' + props.duration + 's, visibility ' + props.duration + 's'}}></div>

                <div className="side-nav-bar-menu-container" style={getSideNavBarStyle()}>
                    <div><span className="material-icons side-nav-bar-close" onClick={onCloseSidebar}>clear</span></div>

                    <div className="side-nav-bar-content-container">
                        {!loggedIn && <p className="username-login" onClick={() => {setLoginModal(true)}}>Login</p>}
                        {loggedIn && <p className="username-login">Ricardo</p>}
                        {!loggedIn && <p className="register" onClick={() => {setRegisterModal(true)}}>Register</p>}
                        
                        <SideNavBarContent></SideNavBarContent>
                    </div>
                </div>
            </div>

            <CustomModal show={registerModal}
                         handleClose={() => setRegisterModal(false)}
                         size="sm"
                         verticalCenter={true}>
                <Register handleClose={() => setRegisterModal(false)}></Register>
            </CustomModal>

            <CustomModal show={loginModal}
                         handleClose={() => setLoginModal(false)}
                         size="sm"
                         verticalCenter={true}>
                <Login handleClose={() => setLoginModal(false)}></Login>
            </CustomModal>
        </>
    );
}

export default SideNavBar;