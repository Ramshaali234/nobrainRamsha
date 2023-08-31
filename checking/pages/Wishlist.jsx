import React, { useEffect } from "react";
import { useState } from "react";

import Styles2 from "../styles/Wishlist.module.css";

const Wishlist=()=> {

const[color,setColor]=useState("blue");

const click = color =>{
  setColor(color)
}


  



    return (
        <>
     <div className={Styles2.sectionss10}
       
        >

        
            
        <div  className={Styles2.img33}>
   <img
             src="/4 (1).jpg"
             alt="About2"
             className={Styles2.pics990}
             
           />
         
           <h2 className={Styles2.pics1100}>
           Country Style House with beautiful garden and terrace
   
   </h2>
   <div className={Styles2.cart}>
    < button  className={Styles2.wish} onClick={
      ()=> click("Red")
    } >
    <img
          src="/heart (2).png"
             alt="About2"
             className={`${Styles2.hearts} btn1`}
             
           />
        </button>
   </div>

   
 
   </div>
   
   
   <div  className={Styles2.img33}>
   
   <img
             src="/2 (4).jpg"
             alt="About2"
             className={Styles2.pics990}
             

             
           />
         
           <h2 className={Styles2.pics1100}>
           Country Style House with beautiful garden and terrace
   </h2>
   
   <p className={Styles2.pic501}>
   A strong economy causes an increase in the demand for housing; the increased demand for housing drives real-estate prices and rentals through the roof. And then affordable housing becomes completely inaccessible
   </p>
   
   </div>
   
   
   <div  className={Styles2.img33}>
   
   <img
             src="/1 (2).jpg"
             alt="About2"
             className={Styles2.pics990}
          
             
           />
        
           <h2 className={Styles2.pics1100} >
           Country Style House with beautiful garden and terrace
   
   </h2>
   
   <p className={Styles2.pic501}>
   In the housing projects, people talked of ways to reduce crime, relieve overcrowding, and they were good ideas that we plan to study, and possibly implement.
   </p>
   </div>
   
   
   
   
   </div>
   
  
   
   
   
     
         
         </>
 
  )
    };
    

export default Wishlist;






