import React from "react";
import style from "@/styles/Wishlistpage/Wishlist.module.css";
import Cards3 from "@/Component/Wishlist/Cards3"
import Explore  from "@/Component/Wishlist/Explore";



function Wishlist() {
  return (
    <>
    
    <div className={style.Containers}>
    

<div className={style.shop}>



<a href="/" className={style.homeLink}>Home <span className={style.arrow}>&gt;</span> </a>
        <span className={style.ABOUTText} style={{
          marginLeft:"0.2rem"
        }} >Wishlist <span className={style.aboutarrow}>&gt;</span></span>
      </div>
      <div className={style.ABOUTHeading}>Whistlist</div>
      </div>




      
      <Explore/>
    <Cards3/>
      </>
  );
}
export default Wishlist;

