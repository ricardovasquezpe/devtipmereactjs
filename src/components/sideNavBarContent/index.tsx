import { useEffect, useState } from "react";
import "./index.scss";

export function SideNavBarContent(props: any){
    const navItemsNoUser = [
        { label: 'Search', route: '/search'}
    ];
    const [ navItems, setNavItems ] = useState(navItemsNoUser);
    const navItemsUser = [
        { label: 'Search', route: '/search'},
        { label: 'New Solution', route: '/new-solution'},
        { label: 'Logout', route: '/logout'}
    ];

    useEffect(() => {
        console.log('render!');
    });

    const onNavigationSelection = (navItem: any) => {
        console.log(navItem);
        if(navItem.label == "Logout"){
            
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