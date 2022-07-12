import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../../services/sessionManagerService";
import { onLogout } from "../../store/auth/authAction";
import { onToggle } from "../../store/sideNavBar/sideNavBarAction";
import store from "../../store/store";
import "./index.scss";

export function SideNavBarContent(props: any){
    const navItemsNoUser = [
        { label: 'Search', route: '/'}
    ];
    const navItemsUser = [
        { label: 'Search', route: '/search'},
        { label: 'New Solution', route: '/new-solution'},
        { label: 'Logout', route: '/logout'}
    ];

    let navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            var storeLoggedIn = store.getState().auth.isLoggedIn;
            if(storeLoggedIn){
                setNavItems(navItemsUser);
            } else {
                setNavItems(navItemsNoUser);
            }
        });
        
        return () => {
            unsubscribe();
        };
    }, [dispatch]);
    const [ navItems, setNavItems ] = useState(navItemsNoUser);

    const onNavigationSelection = (navItem: any) => {
        if(navItem.label == "Logout"){
            clearSession();
            dispatch(onLogout());
            navigate("/search");
        } else {
            dispatch(onToggle(false));
            navigate(navItem.route);
        }
    }

    return (
        <>
            <div className="side-nav-bar-content">
                <ul className="side-nav-bar-menu">
                    {
                        navItems.map((navItem: any, index) => (
                            <li key={index} onClick={() => onNavigationSelection(navItem)}>{ navItem.label }</li>
                        ))
                    } 
                </ul>
            </div>
        </>
    );
}

export default SideNavBarContent;