import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import NavCss from './Navbar.module.css';
import logo from './logo.jpg';

function Navbar() {
  return (
    <>
      <div className={NavCss.mainBox}>
        <div className={NavCss.logoDiv}>
          <img className={NavCss.logo} src={logo} alt="Logo" />
        </div>
        <div className={NavCss.navDiv}>
          <h2>About</h2>
          {/* Use Link to navigate to the '/login' route */}
          <h2><Link to="/login">Login</Link></h2>
        </div>
      </div>
    </>
  );
}

export default Navbar;
