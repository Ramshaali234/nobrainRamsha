import React from "react";
import Styles from "../styles/About.module.css";


import Services2 from "@/Components/Services2";
import Counter from "../Components/Counter";
import Video from "../Components/Video";

import Services from "@/Components/Services";

function About() {
    return (
      <>
      
      <div className={Styles.house1}>
      

<div className={Styles.shop}>



<a href="/home" className={Styles.vector10} ><h2 className={Styles.vector4}>
Home
</h2></a>
  <img src="/Vector6.png" alt="vector2" className={Styles.vector9}/>
 <a href="/About" className={Styles.vector5} ><h2  className={Styles.vector7}>
  About
  </h2></a>


</div>

<h1 className={Styles.HELLO}>
ABOUT US
 </h1>


</div>

<Counter/>
<Video/>


<Services/>

<Services2/>
     </>
  );
}
export default About;