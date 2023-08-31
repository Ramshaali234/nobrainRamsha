import React from "react";
import  stylees from "../styles/Services.module.css";
const Services=() => {
    return(
        <>
<div className={stylees.serviceSections}>
    <h1 className={stylees.serviceHead}>
      SPECIAL SERVICES
    </h1>
</div>
<div className={stylees.serviceContainer}>
    <div className={stylees.ContainerCard}>
    <img
             src="/developer (1).png"
             alt="About2"
             className={stylees.serviceIcons}
             
           />
           <h1 className={stylees.servicetxt}>
            Development
           </h1>
           <p className={stylees.ServiceParagraph}>
        Development in real estate involve acquiring land, designing and constructing properties,and enhancing their value
        through strategic planing
           </p>

    </div>




    <div className={stylees.ContainerCard}>
    <img
             src="/economy.png"
             alt="About2"
             className={stylees.serviceIcons}
             
           />
           <h1 className={stylees.servicetxt}>
           Sales Marketing
           </h1>
           <p className={stylees.ServiceParagraph}>
          Sales marketing in real estate focuses on promoting properties to
          potential buyers,using effective strategies to highlight features and benefits that align with customers needs
          .
           </p>
    </div>






    <div className={stylees.ContainerCard}>
    <img
             src="/property.png"
             alt="About2"
             className={stylees.serviceIcons}
             
           />
           <h1 className={stylees.servicetxt}>
           Brokerage
           </h1>
           <p className={stylees.ServiceParagraph}>
           Real estate brokerage refers to the business of acting as an intermediary between buyers and sellers of real property. Real estate brokers are licensed professionals who facilitate the buying, selling, or leasing of properties.
           </p>
       
    </div>




    <div className={stylees.ContainerCard}>
    <img
             src="/manager.png"
             alt="About2"
             className={stylees.serviceIcons}
             
           />
           <h1 className={stylees.servicetxt}>
           Property Management
           </h1>
           <p className={stylees.ServiceParagraph}>
            project management in real estate involve coordinating various stakeholders,ensuring timelines and 
            budgets are met,and overseeing the successful execution of property developement projects.
           </p>
    </div>
</div>

        </>
    )
}
export default Services