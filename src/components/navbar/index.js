// referenced from: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/

import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavBarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/main" >
                        Main
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;