import React from "react";
import Styles4 from "../styles/Properties1.module.css";
import Searchbar from "../Components3/Searchbar";
import Cards from "../Components3/Cards";
import Choosehome from "../Components3/Choosehome";
import Latestprop from "../Components3/Latestprop";

function Properties1() {
    return (
      <>
      
   
        <div className={Styles4.Properties}>
        

<div className={Styles4.blogimage}>


<h1 className={Styles4.section290}>
Properties
 </h1>

</div>
</div>





<Searchbar/>
<Choosehome/>
<Cards/>

<Latestprop/>

      </>
  );
}
export default Properties1;