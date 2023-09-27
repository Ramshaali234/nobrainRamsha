import React from "react";

import Styless from "../styles/Video.module.css";




const Video=()=>{

  

  let x=1;
const videoControl =()=>{
  const video = document.querySelector(".video");
  if(x%2 ==1){
    video.play();
  document.querySelector(".play").style.display = "none"
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


  <div className={Styless.videowidth}>
        <video src="/realestate.mp4" className={`${Styless.videowidth} video`}  />


<div className={Styless.play} onClick={()=>{
            videoControl();
            }}>
<img
          src="/button.png"
          alt="About1"
          className={`${Styless.pausebutton} play`}
          
        />
              <img
          src="/pause.png"
          alt="About1"
        className={`${Styless.playbutton} pause`}
          
        />
    
    </div>
   

   <h1 className={Styless.videoHead}>
          DREAMVILLA
        </h1>
    
        </div>
    
)

   
    
}
export default Video;