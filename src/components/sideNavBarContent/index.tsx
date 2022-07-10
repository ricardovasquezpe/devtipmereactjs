import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onLogout } from "../../store/auth/authAction";
import store from "../../store/store";
import "./index.scss";

export function SideNavBarContent(props: any){
    const navItemsNoUser = [
        { label: 'Search', route: '/search'}
    ];
    const navItemsUser = [
        { label: 'Search', route: '/search'},
        { label: 'New Solution', route: '/new-solution'},
        { label: 'Logout', route: '/logout'}
    ];

    const dispatch = useDispatch();
    const [ navItems, setNavItems ] = useState(navItemsNoUser);

    store.subscribe(() => {
        var storeLoggedIn = store.getState().auth.isLoggedIn;
        if(storeLoggedIn){
            setNavItems(navItemsUser);
        } else {
            setNavItems(navItemsNoUser);
        }
    });

    useEffect(() => {
        console.log('render!');
    });

    const onNavigationSelection = (navItem: any) => {
        console.log(navItem);
        if(navItem.label == "Logout"){
            dispatch(onLogout());
        } else {
            
        }
    }

    return (
        <>
            <div className="side-nav-bar-content">
                <ul className="side-nav-bar-menu">
                    {
                        navItems.map((navItem: any) => (
                            <li onClick={() => onNavigationSelection(navItem)}>{ navItem.label }</li>
                        ))
                    } 
                </ul>
            </div>
        </>
    );
}

export default SideNavBarContent;