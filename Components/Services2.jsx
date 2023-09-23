import React from "react";
import  stylees3 from "../styles/Services2.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
const Services2=() => {


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
<div className={stylees3.abouttxt}>
    <h1 className={stylees3.aboutHead}>
    The smartest way to buy a home
    </h1>
</div>
<motion.div className={stylees3.aboutSections} onViewportEnter={() => {
          setAnimeFlag(true);
        }}
        variants={variant}
        initial={"hidden"}
        animate={animeflag ? "animate" : "hidden"}
        >
    <motion.div className={stylees3.aboutimages}variants={childVariant}>
    <img
             src="/down.png"
             alt="About2"
             className={stylees3.aboutCards}
             
           />
           <h1 className={stylees3.aboutTitle}>
           No Downpayment
           </h1>
           <p className={stylees3.aboutParagraph}>
           "No down payment" refers to a situation where a buyer is not required to make an upfront payment or deposit when purchasing a product or service.This term is commonly used in various contexts.
           </p>

    </motion.div>




    <motion.div className={stylees3.aboutimages}variants={childVariant}>
    <img
             src="/wallet.png"
             alt="About2"
             className={stylees3.aboutCards}
             
           />
           <h1 className={stylees3.aboutTitle}>
          ALL Cash Offer
           </h1>
           <p className={stylees3.aboutParagraph}>
           An "all-cash offer" in the context of real estate refers to a situation in which a prospective buyer offers to purchase a property using only cash, without the need for external financing such as a mortgage loan. 
           </p>
    </motion.div>






    <motion.div className={stylees3.aboutimages}variants={childVariant}>
    <img
             src="/document.png"
             alt="About2"
             className={stylees3.aboutCards}
             
           />
           <h1 className={stylees3.aboutTitle}>
           Experts in Your Corner
           </h1>
           <p className={stylees3.aboutParagraph}>
           "Experts in your corner" is a phrase commonly used in the context of real estate to describe the involvement of professionals who provide guidance, advice, and support throughout the process of buying or selling property. 
           </p>
       
    </motion.div>




    <motion.div className={stylees3.aboutimages}variants={childVariant}>
    <img
             src="/unlock.png"
             alt="About2"
             className={stylees3.aboutCards}
             
           />
           <h1 className={stylees3.aboutTitle}>
           Lokced in Pricing
           </h1>
           <p className={stylees3.aboutParagraph}>
           An "all-cash offer" refers to a situation in which a buyer intends to purchase a property or an asset using only cash, without involving any financing from a mortgage or loan, throughout the process of buying or selling property.
           </p>
    </motion.div>
</motion.div>

        </>
    )
}
export default Services2