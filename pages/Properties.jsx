import React from "react";
import Styles from "../styles/Properties.module.css";
import Searchbar from "../Components3/Searchbar";
import Latestprop1 from "../Components3/Latestprop1";




function Properties1() {
    return (
      <>
      
   
        <div className={Styles.Properties}>
        




<h1 className={Styles.property}>
Properties
 </h1>


</div>





<Searchbar/>




<Latestprop1/>

      </>
  );
}
export default Properties1;