import React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import style from "@/styles/Wishlistpage/cards3.module.css";

const Cards3=()=>{
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

        <motion.div className={style.wishlistpics}
        onViewportEnter={() => {
            setAnimeFlag(true);
          }}
          variants={variant}
          initial={"hidden"}
          animate={animeflag ? "animate" : "hidden"}
          whileInView={{ repeatCount: 0 }}>

            <div className={style.wishliststyling}>

            <motion.img
          src="/g.jpg"
          alt="About"
          className={style.house}
          variants={childVariant}
         
        />

            </div>


            <div className={style.wishliststyling}>

<motion.img
src="/hero.jpg"
alt="About"
className={style.house}
variants={childVariant}

/>

</div>





<div className={style.wishliststyling}>

<motion.img
src="/hero.jpg"
alt="About"
className={style.house}
variants={childVariant}

/>

</div>




<div className={style.wishliststyling}>

<motion.img
src="/hero.jpg"
alt="About"
className={style.house}
variants={childVariant}

/>

</div>



<div className={style.wishliststyling}>

<motion.img
src="/hero.jpg"
alt="About"
className={style.house}
variants={childVariant}

/>

</div>





        </motion.div>

        </>
    )

}



export default Cards3;