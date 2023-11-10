import React from "react";
import Style from "../styles/Contact.module.css";
import { ST } from "next/dist/shared/lib/utils";



function Contact() {
    return (
      <>
<div className={Style.contact}>
    <div className={Style.content}>
        <h2 className={Style.heading}>
            Contact Us 
        </h2>

        <p className={Style.contactpara}>
        We're open for any suggestion  or just to have a chat
        </p>
    </div>

<div className={Style.contactcontainer}>
    <div className={Style.contactinfo}>
        <div className={Style.box}>
            <div className={Style.icon}>
            <img src="/location.png" className={Style.contactimg}/>
            </div>


            <div className={Style.text}>
                <h3 className={Style.contachhead}>
                    Address
                </h3>

                <p className={Style.contactpara}>
                  Islampura,lahore
                </p>
            </div>
        </div>


        <div className={Style.box}>
            <div className={Style.icon}>
            <img src="/email2.png" className={Style.contactimg}/>
          
            </div>


            <div className={Style.text}>
                <h3 className={Style.contachhead}>
                   Email
                </h3>

                <a href ="mailto:@yoursite.com"className={Style.contactpara}>@yoursite.com</a>
            </div>
        </div>



        <div className={Style.box}>
            <div className={Style.icon}>
            <img src="/phone.png" className={Style.contactimg}/>
            </div>


            <div className={Style.text}>
                <h3 className={Style.contachhead}>
                    Phone
                </h3>

                <a href="tel:+507-475-00094" className={Style.contactpara}>+507-475-0094</a>
            </div>
        </div>



        <div className={Style.box}>
            <div className={Style.icon}>
            <img src="/email2.png" className={Style.contactimg}/>
            </div>


            <div className={Style.text}>
                <h3 className={Style.contachhead}>
                    Address
                </h3>

                <p className={Style.contactpara}>
                Islampura,lahore
                </p>
            </div>
        </div>


    </div>


<div className={Style.contactform}>
    <form  className={Style.form}>
        <h2 className={Style.headings}>
            Send Message
        </h2>

        <div className={Style.inputbox}>
            <input type="text"name="" required="required"/>
                <span className={Style.label}>
                    FullName
                </span>
        </div>



        <div className={Style.inputbox}>
            <input type="text"name="" required="required"/>
                <span className={Style.label}>
                    LastName
                </span>
        </div>



        <div className={Style.inputbox}>
            <input type="text"name="" required="required"/>
                <span className={Style.label}>
                    Email
                </span>
        </div>


        <div className={Style.inputbox}>
            <textarea required ="required"/>
                <span className={Style.label}>
                Message
                </span>
        </div>



        <div className={Style.inputbox}>
            <button className={Style.btn}>
                Submit
            </button>
                
        </div>

    </form>
</div>

</div>


</div>
      
      </>
    )
}

export default Contact;