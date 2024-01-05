import React from "react";
import style from "@/styles/Wishlistpage/Explore.module.css";
import { motion } from "framer-motion";
import { useState } from "react";


const Explore =()=>{
    const [flag, setFlag] = useState({
        years: false,
        property: false,
        realtor: false,
      });
      const [animeflag, setAnimeFlag] = useState(false);
      const variant = {
        hidden: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
          repeatCount: 0,
          transition: {
            duration: 0.2,
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
            stiffness: 150,
            damping: 12,
            duration: 0.1,
            repeat: 0,
          },
        },
      };

    return (
        <>


<motion.div
        className={style.containers}
        onViewportEnter={() => {
          setAnimeFlag(true);
        }}
        variants={variant}
        initial={"hidden"}
        animate={animeflag ? "animate" : "hidden"}
        whileInView={{ repeatCount: 0 }}
      >
        <motion.img
          src="/home.jpg"
          alt="About"
          className={style.images}
          variants={childVariant}
        />
           <motion.div className={style.sections} variants={childVariant}>
        <motion.div className={style.searchsection} variants={childVariant}>
         
          <motion.div className={style.searchhead} variants={childVariant}>
          Explore your home 
          </motion.div>
       
        
          <motion.p className={style.searchText} variants={childVariant}>
          Housing is a fundamental aspect of human existence, providing shelter, security, and a sense of belonging. It encompasses a wide range of dwelling options, from apartments and single-family homes to condominiums and co-living spaces, all designed to meet the diverse needs and preferences of individuals and families.
          </motion.p>
          <div className={style.counterContainer}>
         <button  
                    className={style.buttons}>
          Search Property
         </button>
            
      </div>
        </motion.div>
        </motion.div>
      </motion.div>
    
   
 

        </>


    )
}


export default Explore;