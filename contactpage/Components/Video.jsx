import React from "react";

import Styless from "../styles/Video.module.css";




function Video(){

  let x=1;
const videoControl =()=>{
  const video = document.querySelector(".video");
  if(x%2 ==1){
    video.play();
    // document.querySelector(".").style.display = "none"
  }else{
    video.pause();
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
          className={Styless.pausebutton}
          
        />

        <h1 className={Styless.videoHead}>
          DREAMVILLA
        </h1>
</div>

</div>

 
  
    
)

      
    
}
export default Video;