import React from "react";
import  stylees from "../styles/Aboutpage/Services.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
const Services=() => {
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
        type: "tween",
        stiffness: 120,
        damping: 9,
        duration: 0.4,
        repeat: 0,
      },
    },
  };

    return(
        <>
<div className={stylees.serviceSections}>
    <h1 className={stylees.serviceHead}>
      SPECIAL SERVICES
    </h1>
</div>
<motion.div className={stylees.serviceContainer}onViewportEnter={() => {
          setAnimeFlag(true);
        }}
        variants={variant}
        initial={"hidden"}
        animate={animeflag ? "animate" : "hidden"}
        >
    <motion.div className={stylees.ContainerCard} variants={childVariant}>
    <img
             src="/developer (1).png"
             alt="About2"
             className={stylees.serviceIcons}
             
           />
           <h1 className={stylees.servicetxt}>
            Development
           </h1>
           <p className={stylees.ServiceParagraph}>
        Development in real estate involve acquiring land, designing and constructing properties,and enhancing their value
        through strategic planing
           </p>

    </motion.div>




    <motion.div className={stylees.ContainerCard}variants={childVariant}>
    <img
             src="/economy.png"
             alt="About2"
             className={stylees.serviceIcons}
             
           />
           <h1 className={stylees.servicetxt}>
           Sales Marketing
           </h1>
           <p className={stylees.ServiceParagraph}>
          Sales marketing in real estate focuses on promoting properties to
          potential buyers,using effective strategies to highlight features and benefits that align with customers needs
          .
           </p>
    </motion.div>






    <motion.div className={stylees.ContainerCard}variants={childVariant}>
    <img
             src="/property.png"
             alt="About2"
             className={stylees.serviceIcons}
             
           />
           <h1 className={stylees.servicetxt}>
           Brokerage
           </h1>
           <p className={stylees.ServiceParagraph}>
           Real estate brokerage refers to the business of acting as an intermediary between buyers and sellers of real property. Real estate brokers are licensed professionals who facilitate the buying, selling, or leasing of properties.
           </p>
       
    </motion.div>




    <motion.div className={stylees.ContainerCard}variants={childVariant}>
    <img
             src="/manager.png"
             alt="About2"
             className={stylees.serviceIcons}
             
           />
           <h1 className={stylees.servicetxt}>
           Property Management
           </h1>
           <p className={stylees.ServiceParagraph}>
            project management in real estate involve coordinating various stakeholders,ensuring timelines and 
            budgets are met,and overseeing the successful execution of property developement projects.
           </p>
    </motion.div>
</motion.div>

        </>
    )
}
export default Services