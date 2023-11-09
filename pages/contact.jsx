import React from "react";
import styles from "../styles/Contact.module.css";



function Contact() {
 

    return (
      <>
 



<div className={styles.contactcontainer}>
  <div className={styles.contacttitle}>
    <h2 className={styles.titles}>Contact Us</h2>
    <p className={styles.contactparagraph}>We're open for any suggestion  or just to have a chat</p>
  </div>


<div className={styles.contactcontainers}>
 
  <div className={styles.containerhead}>
 
    <div className={styles.contactbox}>
      <div className={styles.contacticons}>
        <img src="/location.png" alt="noimage" className={styles.contactimg}/>
      </div>
      <div className={styles.contacttext}>
        <h3 className={styles.contacttexts}>Address</h3>
        <p className={styles.contactssite}>Islampura,Lahore</p>
      </div>
    </div>


    <div className={styles.contactbox}>
      <div className={styles.contacticons}>
      <img src="/phone.png" alt="noimage" className={styles.contactimg}/>
      </div>
      <div className={styles.contacttext}>
        <h3 className={styles.contacttexts}>PHONE </h3>
        <a href="tel:+507-475-00094" className={styles.contactssite}>+507-475-0094</a>
      </div>
    </div>




    <div className={styles.contactbox}>
      <div className={styles.contacticons}>
      <img src="/email2.png" className={styles.contactimg}/>
      </div>
      <div className={styles.contacttext}>
        <h3 className={styles.contacttexts}>Email</h3>
        <a href ="mailto:@yoursite.com"className={styles.contactssite}>@yoursite.com</a>
      </div>
    </div>

  </div>
 
 
  
  <div className={styles.contactinput}>
<div className={styles.inputbox}>
  <input className={styles.forms}type="text" required="required"/>
  <span className={styles.names}>Firstname</span>
</div>


<div className={styles.inputbox}>
  <input className={styles.forms}type="text" required="required"/>
  <span className={styles.names}>Lastname</span>
</div>


<div className={styles.inputbox}>
  <input className={styles.forms}type="text" required="required"/>
  <span className={styles.names}>Email</span>
</div>







<div className={styles.inputbox}>

<textarea  required="required"/>
  <span className={styles.names1}>Messges</span>
</div>


 <div className={styles.submit}>
  <button className={styles.btn}>
    Submit
  </button>
 </div>
  </div>


</div>
</div>






 
 </>
    )
}

export default Contact;

