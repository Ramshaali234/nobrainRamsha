import React from "react";
import style from "../styles/Delete.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
const Delete = () => {
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
        duration: 0.5,
        repeat: 0,
      },
    },
  };
    return ( 

        <>

<div className={style.Containers1}>
    
</div>

<div className={style.delheading}
        >
    <h1 className={style.Delhead}>
        DELETE PROPERTY
    </h1>
    </div>
    <motion.div className={style.delheading1}onViewportEnter={() => {
          setAnimeFlag(true);
        }}
        variants={variant}
        initial={"hidden"}
        animate={animeflag ? "animate" : "hidden"}
        >
    <motion.div className={style.cardsss} variants={childVariant}>
          <img src="slide3.jpg" alt="About2" className={style.cardImagedel} />

          <button className={style.btn}>
                Delete Property
            </button>
         
        </motion.div>

        <motion.div className={style.cardsss} variants={childVariant}>
          <img src="slide2.jpg" alt="About2" className={style.cardImagedel} />

          <button className={style.btn}>
                Delete Property
            </button>

          
        </motion.div>

        <motion.div className={style.cardsss} variants={childVariant}>
          <img
            src="slide3.jpg"
            alt="About2"
            className={style.cardImagedel}
            variants={childVariant}
          />

<button className={style.btn}>
                Delete Property
            </button>

</motion.div>

            <motion.div className={style.cardsss} variants={childVariant}>
          <img
            src="slide2.jpg"
            alt="About2"
            className={style.cardImagedel}
            variants={childVariant}
          />

<button className={style.btn}>
                Delete Property
            </button>
</motion.div>




            <motion.div className={style.cardsss} variants={childVariant}>
          <img
            src="slide2.jpg"
            alt="About2"
            className={style.cardImagedel}
            variants={childVariant}
          />

<button className={style.btn}>
                Delete Property
            </button>
            </motion.div>





            <motion.div className={style.cardsss} variants={childVariant}>
          <img
            src="/slide3.jpg"
            alt="About2"
            className={style.cardImagedel}
            variants={childVariant}
          />

<button className={style.btn}>
                Delete Property
            </button>

         
        </motion.div>




        <motion.div className={style.cardsss} variants={childVariant}>
          <img
            src="g.jpg"
            alt="About2"
            className={style.cardImagedel}
            variants={childVariant}
          />

<button className={style.btn}>
                Delete Property
            </button>

         
        </motion.div>


        <motion.div className={style.cardsss} variants={childVariant}>
          <img
            src="slide4.jpg"
            alt="About2"
            className={style.cardImagedel}
            variants={childVariant}
          />

<button className={style.btn}>
                Delete Property
            </button>

         
        </motion.div>
        </motion.div>


        </>

            );
        }

        export default Delete;