
import '../Blog.css';



function Blog(){
    return(
        <>

            <div className="flexcontainers mt-5">
                <div className="flexitems text-white m-lg-5">
                    Our Blogs
                </div>

                <div className="flexitem">
                 <button className="btn_3 mx-5">
                     MORE BLOG
                 </button>
                </div>
            </div>


            <div className="blogbody">
                <div className="blogitem">
                    <div className="cardss mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./images/blog1.jpg" className="img-fluid " alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="cardtitle">Tomato, black olive, feta & anchovy tart ulla mco
                                        laboris</h5>
                                    <p className="cardtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
                                    <a href="blog_details.html" className="browse-btn">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="blogitem">
                    <div className="cardss mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="./images/blog2.jpg" className="img-fluid " alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="cardtitle">Tomato, black olive, feta & anchovy tart ulla mco
                                        laboris</h5>
                                    <p className="cardtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
                                    <a href="blog_details.html" className="browse-btn">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Blog;