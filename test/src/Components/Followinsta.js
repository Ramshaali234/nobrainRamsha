import '../Followinsta.css';

function Followinsta(){
    return(
        <>
            <div className="instadetail text-white text-center">
                <h1 className="instaheading">
                    Follow us on Instagram
                </h1>

                <button className="btn_4 mt-3">
                  <img src="./images/insta.png"/>  Cakeshop
                </button>


                <div className="followflex mt-5">
                    <div className="followcontainer">
                        <img src="./images/instra1.jpg " className="imgg w-90 h-75"/>

                    </div>


                    <div className="followcontainer">
                        <img src="./images/instra2.jpg" className="imgg w-90 h-75"/>


                    </div>


                    <div className="followcontainer">
                    <img src="./images/instra3.jpg" className="imgg w-100 h-75" />

                    </div>


                    <div className="followcontainer">
                        <img src="./images/instra4.jpg" className="imgg w-90 h-75"/>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Followinsta;