
function Contact(){
    return(
        <>

            <div className="contact">
                <div className="content">
                    <h2 className="heading">
                        Contact Us
                    </h2>

                    <p className="contactpara">
                        We're open for any suggestion or just to have a chat
                    </p>
                </div>

                <div className="contactcontainer">
                    <div className="contactinfo">
                        <div className="box">
                            <div className="icon">
                                <img src="/location.png" className="contactimg"/>
                            </div>


                            <div className="text">
                                <h3 className="contachhead">
                                    Address
                                </h3>

                                <p className="contactpara">
                                    Islampura,lahore
                                </p>
                            </div>
                        </div>


                        <div className="box">
                            <div className="icon">
                                <img src="/email2.png" className="contactimg"/>

                            </div>


                            <div className="text">
                                <h3 className="contachhead">
                                    Email
                                </h3>

                                <a href="mailto:@yoursite.com" className="contactpara">@yoursite.com</a>
                            </div>
                        </div>


                        <div className="box">
                            <div className="icon">
                                <img src="/phone.png" className="contactimg"/>
                            </div>


                            <div className="text">
                                <h3 className="contachhead">
                                    Phone
                                </h3>

                                <a href="tel:+507-475-00094" className="contactpara">+507-475-0094</a>
                            </div>
                        </div>


                        <div className="box">
                            <div className="icon">
                                <img src="/email2.png" className="contactimg"/>
                            </div>


                            <div className="text">
                                <h3 className="contachhead">
                                    Address
                                </h3>

                                <p className="contactpara">
                                    Islampura,lahore
                                </p>
                            </div>
                        </div>


                    </div>


                    <div className="contactform">
                        <form className="form">
                            <h2 className="headings">
                                Send Message
                            </h2>

                            <div className="inputbox">
                                <input type="text" name="" required="required"/>
                                <span className="label">
                    FullName
                </span>
                            </div>


                            <div className="inputbox">
                                <input type="text" name="" required="required"/>
                                <span className="label">
                    LastName
                </span>
                            </div>


                            <div className="inputbox">
                                <input type="text" name="" required="required"/>
                                <span className="label">
                    Email
                </span>
                            </div>


                            <div className="inputbox">
                                <textarea required="required"/>
                                <span className="label">
                Message
                </span>
                            </div>


                            <div className="inputbox">
                                <button className="btn">
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