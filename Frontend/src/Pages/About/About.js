import React from "react";
import AboutCss from './About.module.css';
import Image2 from './gif1.gif'

function About(){

    return(
        <>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#8C1515" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,213.3C480,203,600,149,720,117.3C840,85,960,75,1080,80C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
        <div className={AboutCss.main}>
        <div className={AboutCss.left}>
            <img src={Image2} className={AboutCss.image2} />
        </div>
        <div className={AboutCss.right}>
            <h1 className={AboutCss.heading}>About</h1>
            <p className={AboutCss.content}>Struggling to write your resume? Don't worry. We have over 250+ sample bullet points from top resumes across all industries and skills. Use our templates and sample lines to quickly write an effective resume from scratch.</p>
        </div>
        </div>
 

        </>
    );

}

export default About;