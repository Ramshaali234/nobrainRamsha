import React from "react";
import Styles2 from "../styles/blogss.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
 const Search=() => {
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
     <motion.div className={Styles2.sectionss10}onViewportEnter={() => {
          setAnimeFlag(true);
        }}
        variants={variant}
        initial={"hidden"}
        animate={animeflag ? "animate" : "hidden"}
       
        >

        
            
        <motion.div  className={Styles2.img33}variants={childVariant}>
   <img
             src="/45.jpg"
             alt="About2"
             className={Styles2.pics990}
             
           />
         
           <h2 className={Styles2.pics110}>
         Your Gateway to Exceptional Homes
   
   </h2>
   
   <p className={Styles2.pic501}>
   We believe the 36, nearly 40, billion pound discount given for a right to buy houses took a million houses out of the public housing sector which is desperately needed for rent.
   </p>
   
 
   </motion.div>
   
   
   <motion.div  className={Styles2.img33}variants={childVariant}>
   
   <img
             src="/46.jpg.jpg"
             alt="About2"
             className={Styles2.pics990}
             
           />
         
           <h2 className={Styles2.pics110}>
        Unlock The Door To Your Dream Home
   </h2>
   
   <p className={Styles2.pic501}>
   A strong economy causes an increase in the demand for housing; the increased demand for housing drives real-estate prices and rentals through the roof. And then affordable housing becomes completely inaccessible
   </p>
   
   </motion.div>
   
   
   < motion.div  className={Styles2.img33}variants={childVariant}>
   
   <img
             src="/47.jpg.jpg"
             alt="About2"
             className={Styles2.pics990}
             variants={childVariant}
             
           />
        
           <h2 className={Styles2.pics110} variants={childVariant}>
       Your Path to Homeownership Starsts Here
   
   </h2>
   
   <p className={Styles2.pic501}variants={childVariant}>
   In the housing projects, people talked of ways to reduce crime, relieve overcrowding, and they were good ideas that we plan to study, and possibly implement.
   </p>
   </motion.div>
   
   
   
   
   </motion.div>
   
  
   
   
   
     
         
         </>
 
  );
    }

export default Search;