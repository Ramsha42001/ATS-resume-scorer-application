import React from "react";
import HomeCss from './Home.module.css'
import resume from './resume1.jpg';
function Home()
{
    return (
<>
   <div className={HomeCss.main}>
   <div className={HomeCss.left}>
   <h1 className={HomeCss.heading}>
     Improve Your Resume shortlisting chances.
   </h1>
    <h3 className={HomeCss.description}>
    Designed by top recruiters, our AI-powered platform instantly gives you tailored feedback on your resume and LinkedIn profile.
Land 5x more interviews, opportunities and job offers
    </h3>

    <div className={HomeCss.buttonDiv}>
       <button className={HomeCss.button}>Upload Resume</button>
    </div>
   </div>
   <div className={HomeCss.right}>
   <img src={resume} className={HomeCss.image}/>
   </div>
   </div>
</>
    );
  
}

export default Home;