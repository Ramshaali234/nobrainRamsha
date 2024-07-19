import "../About.css"
function About() {
    return(
        <>
            <div className="headings text-center text-white mb-5">
                <p className="text">
                    This is Schilers. Awesome Food Theme.
                    <br/>
                    Purchase it and eat Burgers.
                </p>
            </div>

            <div className="flexcontainer">
                <div className="flexitem">
                    <p className="para">
                        This is Schilers. Awesome Food Theme.
                        <br/>
                        Purchase it and eat Burgers.
                    </p>

                    <p className="para2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit esse
                        cillum.
                        <br/>
                        Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum.


                    </p>
                </div>





                <div className="flexitem">
                    <img src="./images/about1.jpg" className="imgs"/>
                </div>


            </div>

        </>
    )
}

export default About;