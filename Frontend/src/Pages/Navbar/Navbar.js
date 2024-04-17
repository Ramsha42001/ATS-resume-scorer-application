import React from "react";
import { Link } from "react-router-dom";
import NavCss from './Navbar.module.css';
import logo from './logo.jpg';

function Navbar() {
  // Function to scroll to a specific position in pixels
  const scrollToPosition = (position) => {
    window.scrollTo({
      top: 1400,
      behavior: 'smooth' // You can set it to 'auto' for instant scrolling
    });
  };

  const scrollToTop = (position) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // You can set it to 'auto' for instant scrolling
    });
  };

  return (
    <>
      <div className={NavCss.mainBox}>
        <div className={NavCss.logoDiv} onClick={() => scrollToTop(0)}>
          <img className={NavCss.logo} src={logo} alt="Logo" />
        </div>
        <div className={NavCss.navDiv}>
          {/* Use onClick to call scrollToPosition function with the target position */}
          <h2 className={NavCss.navLink} onClick={() => scrollToPosition(1000)}>About</h2>
          {/* Use Link for other links */}
          <h2 className={NavCss.navLink}><Link className={NavCss.navLink} to="/upload">Resumes</Link></h2>
          <h2 className={NavCss.navLink}>Contact</h2>
        </div>
      </div>
    </>
  );
}

export default Navbar;
