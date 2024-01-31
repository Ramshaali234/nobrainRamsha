import React from "react";
import style from "@/styles/Detail.module.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const Detail = () =>{
  const images = [
    {
      original: "houses4.jpg",
      thumbnail: "houses4.jpg",
    },
    {
      original: "houses4.jpg",
      thumbnail: "houses4.jpg",
    },
    {
      original: "houses4.jpg",
      thumbnail: "houses4.jpg",
    },

    {
        original: "houses4.jpg",
        thumbnail: "houses4.jpg",
      },


      {
        original: "houses6.jpg",
        thumbnail: "houses6.jpg",
      },


      {
        original: "houses6.jpg",
        thumbnail: "houses6.jpg",
      },
  ];
  
  
    return(
    <>
<div className={style.detailpage}>
<div className={style.detailpage2}>


<div className={style.pics}>

<ImageGallery items={images} />

  
 
</div>
 </div>
  



<div className={style.details}>
        <h1 className={style.detailheading}>
            Realter:Ramsha Ali
        </h1>
        <div className={style.explain}>
<img
          src="/homes.png"
          alt="About"
          className={style.icons}
         
        />
        No of rooms


        <img
          src="/homes.png"
          alt="About"
          className={style.icons}
         
        />
        No of floors


        <img
          src="/homes.png"
          alt="About"
          className={style.icons}
         
        />
        No of kitchens


      
        <img
          src="/homes.png"
          alt="About"
          className={style.icons}
         
        />
        Storerooms


      

  
</div>
 
        <h1 className={style.detailhead}>
            Description
        </h1>
        
        <p className={style.paradetail}>
        Welcome to this enchanting residence nestled in the heart of a peaceful neighborhood, offering a perfect blend of comfort and style. This meticulously maintained [number of bedrooms] bedroom,  home is a true gem, combining modern amenities with timeless elegance.
        </p>


      

</div>
</div>


<div className={style.btnss}>

    

<button className={style.btns}>
           
<img
          src="/wishlist.png"
          alt="About"
          className={style.iconss}
         
        />
            Add Wishlist
      
            </button>

            <button className={style.btns}>

            <img
          src="/email.png"
          alt="About"
          className={style.iconss}
         
        />
              
            Send Email
         
            </button>

            <button className={style.btns}>

            <img
          src="/email.png"
          alt="About"
          className={style.iconss}
         
        />
              
            Chat Now
            </button>

            <button className={style.btns}>
            <img
          src="/email.png"
          alt="About"
          className={style.iconss}
         
        />
              
            Contact Now
            </button>
            </div>


    </>
    );
}


export default Detail;

