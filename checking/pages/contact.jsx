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
        <p className={styles.contactsparagraph}>198 West 21th <br/>Street, Suite 721 New York<br/> NY 10016</p>
      </div>
    </div>


    <div className={styles.contactbox}>
      <div className={styles.contacticons}>
      <img src="/phone.png" alt="noimage" className={styles.contactimg}/>
      </div>
      <div className={styles.contacttext}>
        <h3 className={styles.contacttexts}>PHONE </h3>
        <p className={styles.contactsparagraph}>507-475-0094</p>
      </div>
    </div>




    <div className={styles.contactbox}>
      <div className={styles.contacticons}>
      <img src="/email2.png" className={styles.contactimg}/>
      </div>
      <div className={styles.contacttext}>
        <h3 className={styles.contacttexts}>Email</h3>
        <p className={styles.contactsparagraph}>@yoursite.com</p>
      </div>
    </div>

  </div>
  <div className={styles.contactinput}>
<div className={styles.inputbox}>
  <input type="text" required="required"/>
  <span >Firstname</span>
</div>


<div className={styles.inputbox}>
  <input type="text" required="required"/>
  <span className="">Lastname</span>
</div>



<div className={styles.inputbox}>
  <input type="text" required="required"/>
  <span >Email</span>
</div>


<div className={styles.inputbox}>

<textarea  required="required"/>
  <span>Messgae</span>
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

