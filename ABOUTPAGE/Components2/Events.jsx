
import React from "react";
import Styles3 from "../styles/Events.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
const  Events=()=> {
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
        damping: 10,
        duration: 0.2,
        repeat: 0,
      },
    },
  };

    return (
        <>
       
          <div className={Styles3.sectioO}>
          <h2 className={Styles3.pics10}>
          𝙉𝘼𝙈𝙀𝙎 & 𝙀𝙑𝙀𝙉𝙏𝙎
            </h2>
            

          </div>
         
          <motion.div className={Styles3.sectionss100}onViewportEnter={() => {
          setAnimeFlag(true);
        }}
        variants={variant}
        initial={"hidden"}
        animate={animeflag ? "animate" : "hidden"}
       
       >
 
            
        < motion.div  className={Styles3.img337}variants={childVariant}>
 
   <img
             src="/explore1.png"
             alt="About2"
             className={Styles3.pics9901}
             
           />
       
           <h2 className={Styles3.pics1100}>
           Real Estate Excellence Awaits
   
   </h2>
   
   <p className={Styles3.pic5010} >
   Public housing is more than just a place to live, public housing programs should provide opportunities to residents and their families.
   </p>
   
   </motion.div>
   
   
   
   < motion.div  className={Styles3.img337}variants={childVariant}>
   
   <img
             src="/explore3.png"
             alt="About2"
             className={Styles3.pics9901}
             
           />
      
           <h2 className={Styles3.pics1100}>
         Steps into a World of Luxury
   </h2>
   
   <p className={Styles3.pic5010} >
   People have to take responsibility for themselves. We need to get the housing industry going again. We don't need government intervening in every step.
   </p>
   
   </motion.div>
   
   
   < motion.div  className={Styles3.img337}variants={childVariant}>

   <img
             src="/explore2.png"
             alt="About2"
             className={Styles3.pics9901}
             
           />
       
           <h2 className={Styles3.pics1100}>
        Discover Endless Possibilities
   
   
   </h2>
   
   <p className={Styles3.pic5010} >
   We should concentrate our work not only to a separated housing problem but housing involved in our daily work and all the other functions of the city.
   </p>
   </motion.div>
   
   
   </motion.div>
   
   
   

   
         </>
  );
}
export default Events;