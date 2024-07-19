import {motion} from "framer-motion";
import { useState } from "react";


function Navbar(){


    const [animeflag, setAnimeFlag] = useState(false);
    const variant = {
        hidden: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            repeatCount: 0,
            transition: {
                duration: 0.1,
                repeatCount: 0,
                staggerChildren: 0.1,
                repeat: 0,
            },
        },
    };
    const childVariant = {
        hidden: {
            opacity: 0,
            y: "10rem",
        },
        animate: {
            opacity: 1,
            y: "0rem",
            repeatCount: 0,
            transition: {
                type: "tween",
                stiffness: 120,
                damping: 10,
                duration: 0.4,
                repeat: 0,
            },
        },
    };

    return(
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand" href="#">
                    <img src="./images/video.png" alt=""/>
                    <img src="./images/facebook.png" alt=""/>
                    <img src="./images/facebook.png" alt=""/>
                </a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <a className="navbar-brand" className="hello ms-auto " href="#">
                        <img src="./images/logo.png" alt=""/>
                    </a>
                    <ul className="navbar-nav ms-auto">
                        <a href="#" className="btn_2">Call Us: +10 783 346 4378</a>
                    </ul>
                </div>
            </nav>


            <nav className="navbar navbar-expand-lg  bg-dark ">

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav  m-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/Home">HOME </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Cakes">CAKES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">ABOUT</a>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                BLOG
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">CONTACT</a>
                        </li>

                    </ul>
                </div>
            </nav>
            <motion.div className="backgroundimage">
                <motion.div className="image" onViewportEnter={() => {
                    setAnimeFlag(true);
                }}
                            variants={variant}
                            initial={"hidden"}

                            animate={animeflag ? "animate" : "hidden"}>

                    <motion.h1 className="heading" variants={childVariant}>
                        Healthy Made
                        <br/>
                        Delicious Cake
                    </motion.h1>


                    <motion.a href="#" className="btn_3" variants={childVariant}
                    >Order Now
                    </motion.a>
                </motion.div>

            </motion.div>


        </>
    )
}

export default Navbar;