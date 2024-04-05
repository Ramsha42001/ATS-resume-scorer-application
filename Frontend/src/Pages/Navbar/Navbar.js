import React from "react";
import NavCss from './Navbar.module.css';
import logo from './logo.jpg';
function Navbar()
{
    return (
     <>
    <div className={NavCss.mainBox}>
      <div className={NavCss.logoDiv}>
        <img className={NavCss.logo} src={logo}/>
      </div>
      <div className={NavCss.navDiv}>
        <h2>Home</h2>
        <h2>Login</h2>
      </div>
       </div>
     </>
    );
}

export default Navbar;