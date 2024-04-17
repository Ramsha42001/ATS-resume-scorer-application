import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate instead of useHistory

import HomeCss from './Home.module.css';
import resume from './resume1.jpg';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Using useNavigate hook

  const handleButtonClick = () => {
    if (isLoggedIn) {
      // Redirect to the upload resume page if logged in
      navigate('/upload-resume');
    } else {
      // Redirect to the login page if not logged in
      navigate('/login');
    }
  };

  return (
    <>
      <div className={HomeCss.main}>
        <div className={HomeCss.left}>
          <h1 className={HomeCss.heading}>
            Improve Your Resume shortlisting chances.
          </h1>
          <h3 className={HomeCss.description}>
            Our AI-powered platform instantly gives you tailored feedback on your resume and LinkedIn profile.
          </h3>
          <div className={HomeCss.buttonDiv}>
            <button className={HomeCss.button} onClick={handleButtonClick}>
              {isLoggedIn ? 'Upload Resume' : 'Login'}
            </button>
          </div>
        </div>
        <div className={HomeCss.right}>
          <img src={resume} className={HomeCss.image} alt="resume"/>
        </div>
      </div>
    </>
  );
}

export default Home;
