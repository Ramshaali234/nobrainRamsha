import React from "react";

import Styles from "../styles/Aboutpage/Video.module.css";


import { motion } from "framer-motion";
import { useState } from "react";
 

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


const [animeflag, setAnimeFlag] = useState(false);
const variant = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    repeatCount: 0,
    transition: {
      duration: 0.1,
      repeatCount: 0,
      staggerChildren: 0.1,
      repeat: 0,
    },
  },
};
const childVariant = {
  hidden: {
    opacity: 0,
    y: "10rem",
  },
  animate: {
    opacity: 1,
    y: "0rem",
    repeatCount: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 9,
      duration: 0.2,
      repeat: 0,
    },
  },
};
 
return(


  <motion.div className={Styles.videowidth}onViewportEnter={() => {
    setAnimeFlag(true);
  }}
  variants={variant}
  initial={"hidden"}
  animate={animeflag ? "animate" : "hidden"}
 >
        <motion.video src="/realestate.mp4"variants={childVariant} className={`${Styles.videowidth} video` }  />


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
    
        </motion.div>
    
)

   
    
}
export default Video;