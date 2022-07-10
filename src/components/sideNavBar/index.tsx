import { useState } from "react";
import { useDispatch } from "react-redux";
import { onToggle } from "../../store/sideNavBar/sideNavBarAction";
import store from "../../store/store";
import SideNavBarContent from "../sideNavBarContent";
import "./index.scss";

export function SideNavBar(props: any){
    const dispatch = useDispatch();
    const [showSideNavBar, setShowSideNavBar] = useState(false);

    const getSideNavBarStyle = () => {
        let navBarStyle: any = {};
        navBarStyle.transition = props.direction + ' ' + props.duration + 's, visibility ' + props.duration + 's';
        navBarStyle.width = props.navWidth + 'px';
        navBarStyle[props.direction] = (showSideNavBar ? 0 : (props.navWidth * -1)) + 'px';
        return navBarStyle;
    }

    store.subscribe(() => {
        var storeLoggedIn = store.getState().sideNavBar.isShowing;
        setShowSideNavBar(storeLoggedIn);
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
                        <p className="username-login">Login</p>
                        <p className="username-login">Ricardo</p>
                        <p className="register">Register</p>
                        <SideNavBarContent></SideNavBarContent>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideNavBar;