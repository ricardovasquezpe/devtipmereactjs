import SideNavBarContent from "../sideNavBarContent";
import "./index.scss";

export function SideNavBar(props: any){

    const getSideNavBarStyle = () => {
        let navBarStyle: any = {};
    
        navBarStyle.transition = props.direction + ' ' + props.duration + 's, visibility ' + props.duration + 's';
        navBarStyle.width = props.navWidth + 'px';
        navBarStyle[props.direction] = (props.show ? 0 : (props.navWidth * -1)) + 'px';
        
        return navBarStyle;
    }

    const onSidebarClose = () => {
        console.log("SidebarClosed");
    }

    return (
        <>
            <div className={"side-nav-bar " + ((!props.show) ? "side-nav-bar-collapsed" :  "" )}>
                <div className={"side-nav-bar-overlay " + ((!props.show) ? "side-nav-bar-overlay-collapsed": "")}
                    onClick={onSidebarClose} 
                    style={{transition: 'background-color ' + props.duration + 's, visibility ' + props.duration + 's'}}></div>

                <div className="side-nav-bar-menu-container" style={getSideNavBarStyle()}>
                    <div><span className="material-icons side-nav-bar-close" onClick={onSidebarClose}>clear</span></div>

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