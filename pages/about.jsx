import React from "react";
import Styles from "../styles/About.module.css";


import Services2 from "@/Components/Services2";
import Counter from "../Components/Counter";
import Video from "../Components/Video";

import Services from "@/Components/Services";

function About() {
    return (
      <>
      
      <div className={Styles.Containers}>
      

<div className={Styles.shop}>



<a href="/" className={Styles.homeLink}>Home <span className={Styles.arrow}>&gt;</span> </a>
          <span className={Styles.ABOUTText} style={{
            marginLeft:"0.2rem"
          }} >About <span className={Styles.aboutarrow}>&gt;</span></span>
        </div>
        <div className={Styles.ABOUTHeading}>About</div>
        </div>



<Counter/>
<Video/>


<Services/>

<Services2/>
     </>
  );
}
export default About;