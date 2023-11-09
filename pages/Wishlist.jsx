import React from "react";
import style from "../styles/Wishlist.module.css";
import Card from "../Components4/Card";
import Explore  from "@/Components5/Explore";

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




      <Card/>
      <Explore/>
      </>
  );
}
export default Wishlist;

