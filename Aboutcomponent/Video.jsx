import React from "react";

import Styles from "../styles/Aboutpage/Video.module.css";




function Video(){

  

  let x=1;
const videoControl =()=>{
  const video = document.querySelector(".video");
  if(x%2 ==1){
    video.play();
  document.querySelector(".play").style. display = "none"
  document.querySelector(".pause").style.display = "block"
  }
  else{
    video.pause();
    document.querySelector(".play").style.display = "block"
    document.querySelector(".pause").style.display = "none"
  }
  x++;
}
 
return(


  <div className={Styles.videowidth}>
        <video src="/realestate.mp4" className={`${Styles.videowidth} video`}  />


<div className={Styles.play} onClick={()=>{
            videoControl();
            }}>
<img
          src="/button.png"
          alt="About1"
          className={`${Styles.pausebutton} play`}
          
        />
              <img
          src="/pause.png"
          alt="About1"
        className={`${Styles.playbutton} pause`}
          
        />
    
    </div>
   

   <h1 className={Styles.videoHead}>
          DREAMVILLA
        </h1>
    
        </div>
    
)

   
    
}
export default Video;