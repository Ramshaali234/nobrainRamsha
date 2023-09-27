import React from "react";

import style from "../styles/About.module.css";




import Counter from "../Aboutcomponent/Counter";
import Video from "../Aboutcomponent/Video";
import Services2 from "../Aboutcomponent/Services2";
import Services from "../Aboutcomponent/Services";

function About() {
    return (
      <>
      
      <div className={style.Containers}>
      

<div className={style.shop}>



<a href="/" className={style.homeLink}>Home <span className={style.arrow}>&gt;</span> </a>
          <span className={style.ABOUTText} style={{
            marginLeft:"0.2rem"
          }} >About <span className={style.aboutarrow}>&gt;</span></span>
        </div>
        <div className={style.ABOUTHeading}>About</div>
        </div>



<Counter/>
<Video/>


<Services/>

<Services2/>
     </>
  );
}
export default About;