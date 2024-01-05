import { motion } from "framer-motion";
import { useState } from "react";

import cstyle  from "../styles/Card0.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";




const Card0 = (props) => {
  const [cardhead, setCardHead] = useState(false);
    const [cardflag, setCardFlag] = useState(false);

  const cardParent = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.2,
        repeat: 0,
      },
    },
  };

  const cardChild = {
    hidden: {
      opacity: 0,
      y: "5rem",
    },
    animate: {
      opacity: 1,
      y: "0rem",
      transition: {
        type: "spring",
        stiffness: 150,
        duration: 0.15,
        damping: 13,
        repeat: 0,
      },
    },
  };


return ( 
  <>
  

 
      
            

      
     
</>
              
)
                  

                  }
           




 
export default Card0;