import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return ( 
  	<nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navi">
       
        <NavLink to = './Home'>Home  </NavLink>
      	<NavLink to = './About'>Character Sheet   </NavLink>
        <NavLink to = './SignUp'>Sign Up    </NavLink>
        <NavLink to = './Login'>Login    </NavLink>
       
        
      </div>
    </nav>
  );
 };
 
 export default Navbar;