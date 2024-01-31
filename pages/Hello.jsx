import React from "react";
import style from "@/styles/Hello.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Hello = () =>{
    const images = [
        {
          original: "home.jpg",
          thumbnail: "home.jpg",
        },
        {
          original: "hero.jpg",
          thumbnail: "hero.jpg",
        },
        {
          original: "home.jpg",
          thumbnail: "home.jpg",
        },

        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
          },


          {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
          },


          {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
          },
      ];
return(
    <>

 <ImageGallery items={images} />;
    </>
);
}
export default Hello;