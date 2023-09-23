import React from "react";

import designsd from "../styles/Latestprop.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Pagination ,Autoplay } from "swiper";





function Latestprop(){

       
  
      
    
    return(
        <>
        

<div className={designsd.pic3}>
<img
          src="/bed-icon.png"
          alt="About1"
          className={designsd.imagess}
          
        />

     
</div>


<div className={designsd.pic2}>
   <h1 className={designsd.pics4}>
      Our Clients Loves Us
   </h1>
   
 

</div>


<div className={designsd.swiper}>



<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          }
      
        }}


        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >


<div className={designsd.container02}>
<SwiperSlide>
<div className={designsd.container03}>
<div className={designsd.container050}>
<img
          src="/3.png"
          alt="About2"
          className={designsd.imagess00}
          
        />

<p className={designsd.container01} >
Incident deleniti blanditis quas aperiam recusandae consillo ullam quibusdam cum libero illo 
repell endus!
</p>
</div>
<div className={designsd.container052}>
<h3 className={designsd.container09}>
  David Alone
</h3>
<p className={designsd.container000} >
CEO & Founder
</p>
</div>
</div>

     
        </SwiperSlide>
      
<SwiperSlide>
<div className={designsd.container03}>
<div className={designsd.container050}>


<img
          src="/6.png"
          alt="About2"
          className={designsd.imagess00}
          
        />

<p className={designsd.container01} >
Incident deleniti blanditis quas aperiam recusandae consillo ullam quibusdam cum libero illo 
repell endus!
</p>
</div>
<div className={designsd.container052}>
<h3 className={designsd.container09}>
  David Alone
</h3>

<p className={designsd.container000} >
CEO & Founder
</p>
</div>
</div>
        
    

      
  
        </SwiperSlide>








      
        <SwiperSlide>
        <div className={designsd.container03}>
<div className={designsd.container050}>


<img
          src="/3.png"
          alt="About2"
          className={designsd.imagess00}
          
        />

<p className={designsd.container01} >
Incident deleniti blanditis quas aperiam recusandae consillo ullam quibusdam cum libero illo 
repell endus!
</p>
</div>
<div className={designsd.container052}>
<h3 className={designsd.container09}>
  David Alone
</h3>

<p className={designsd.container000} >
CEO & Founder
</p>
</div>
        </div>
    



</SwiperSlide>



<SwiperSlide>
        <div className={designsd.container03}>
<div className={designsd.container050}>


<img
          src="/3.png"
          alt="About2"
          className={designsd.imagess00}
          
        />

<p className={designsd.container01} >
Incident deleniti blanditis quas aperiam recusandae consillo ullam quibusdam cum libero illo 
repell endus!
</p>
</div>
<div className={designsd.container052}>
<h3 className={designsd.container09}>
  David Alone
</h3>

<p className={designsd.container000} >
CEO & Founder
</p>
</div>
        </div>
    



</SwiperSlide>


  
      
<SwiperSlide>
        <div className={designsd.container03}>
<div className={designsd.container050}>


<img
          src="/3.png"
          alt="About2"
          className={designsd.imagess00}
          
        />

<p className={designsd.container01} >
Incident deleniti blanditis quas aperiam recusandae consillo ullam quibusdam cum libero illo 
repell endus!
</p>
</div>
<div className={designsd.container052}>
<h3 className={designsd.container09}>
  David Alone
</h3>

<p className={designsd.container000} >
CEO & Founder
</p>
</div>
        </div>
    



</SwiperSlide>



  

        


        
<SwiperSlide>
        <div className={designsd.container03}>
<div className={designsd.container050}>


<img
          src="/3.png"
          alt="About2"
          className={designsd.imagess00}
          
        />

<p className={designsd.container01} >
Incident deleniti blanditis quas aperiam recusandae consillo ullam quibusdam cum libero illo 
repell endus!
</p>
</div>
<div className={designsd.container052}>
<h3 className={designsd.container09}>
  David Alone
</h3>

<p className={designsd.container000} >
CEO & Founder
</p>
</div>
        </div>
    



</SwiperSlide>



  

        


        
 
 
       
        
     </div>
</Swiper>
       
        


</div>
</>

    )
}
export default Latestprop;