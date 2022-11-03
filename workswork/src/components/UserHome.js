import {UserNavbar} from "./UserNavbar";
import {Footer} from "./Footer";

export const UserHome = () => {
    return(
        <>
            <UserNavbar/>
            <section id="home" className="w3l-banner py-5">
                <div className="container py-lg-5 py-md-4 mt-lg-0 mt-md-4">
                    <div className="w3l-banner-content py-lg-5 py-4 mt-md-4">
                        <div className="pt-md-5 pt-lg-4 mt-4 align-items-lg-center">
                            <div className="bannerhny-info">
                                <h6 className="title-subhny mb-3">Freelance Platform</h6>
                                <h3 className="">Need Professionals For Your Business?</h3>
                                <a className="btn btn-style btn-outline-light mt-sm-5 mt-4" href="about.html">
                                    Find Sellers Right Now<span className="fa fa-long-arrow-right ml-3" aria-hidden="true"></span></a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Header End  */}
            {/*  Top Categories  */}
            <section className="w3l-clients" id="clients">
                <div className="container">
                    <div className="call-w3">
                        <h2 className={"top-cat-head"}>Top Categories</h2><br/><br/>
                        <div className="company-logos text-center">
                            <div className="row logos">
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 pl-lg-0">
                                    <img src="images/digital_marketing_top_cat.jpg" width={"200px"} alt=""/>
                                    <h6 className={"h6-top-cat"}>Digital Marketing</h6>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 pl-lg-0">
                                    <img src="images/graphic_design_top_cat.jpg" width={"200px"} alt=""/>
                                    <h6 className={"h6-top-cat"}>Graphic Design</h6>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-sm-0 mt-4 pl-lg-0">
                                    <img src="images/voice_over_top_cat.jpg" width={"200px"} alt=""/>
                                    <h6 className={"h6-top-cat"}>Voice Over</h6>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-md-0 mt-4 pl-lg-0">
                                    <img src="images/nft_art_top_cat.jpg" width={"200px"} alt=""/>
                                    <h6 className={"h6-top-cat"}>NFT Art</h6>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-lg-0 mt-4 pl-lg-0">
                                    <img src="images/word_press_top_cat.jpg" width={"200px"} alt=""/>
                                    <h6 className={"h6-top-cat"}>Wordpress</h6>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-lg-0 mt-4 pl-lg-0">
                                    <img src="images/video_editing_top_cat.jpg" width={"200px"} alt=""/>
                                    <h6 className={"h6-top-cat"}>Video Editing</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Top Categories End */}
            {/*  Something, not decided yet  */}
            <section className="home-services py-5">
                <div className="container py-md-5 py-2">
                    <div className="title-content text-left">
                        <h6 className="title-subhny">What We Do</h6>
                        <h3 className="title-w3l mb-sm-5 mb-4 pb-lg-2">We are more than just
                            <br/>a digital agency.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <h5 className="color-3 mb-3 pr-lg-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                                ultrices in ligula. Semper at tempufddfel.Pellen tesque libero ut justo,
                                ultrices in ligula.
                            </h5>
                            <p className="mt-4 pr-lg-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper
                                at
                                tempufddfel. Learn more about our work.
                            </p>
                            <p className="mt-4 pr-lg-5">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.
                                tempufddfel.consectetur adipisicing dolor et amet.
                            </p>
                            <a href="about.html" className="btn btn-style btn-primary mt-lg-5 mt-4">Read More <span
                                className="fa fa-long-arrow-right ml-3" aria-hidden="true"/></a>
                        </div>
                        <div className="col-lg-7 left-wthree-img pl-lg-4 mt-lg-0 mt-5">
                            <div className="row">
                                <div className="box-wrap col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-lightbulb-o"/>
                                        </div>
                                        <div className="info">
                                            <h4><a href="#url">Idea &amp; Analysis </a></h4>
                                        </div>
                                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur ipsum elit.</p>
                                    </div>
                                </div>
                                <div className="box-wrap col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-paint-brush"/>
                                        </div>
                                        <div className="info">
                                            <h4><a href="#url">Designing</a></h4>
                                        </div>
                                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur ipsum elit.</p>
                                    </div>
                                </div>
                                <div className="box-wrap col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-line-chart"/>
                                        </div>
                                        <div className="info">
                                            <h4><a href="#url">Development</a></h4>
                                        </div>
                                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur ipsum elit.</p>
                                    </div>
                                </div>
                                <div className="box-wrap col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-bullhorn"/>
                                        </div>
                                        <div className="info">
                                            <h4><a href="#url">Online marketing</a></h4>
                                        </div>
                                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur ipsum elit. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}