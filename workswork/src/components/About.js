import {NavbarPublic} from "./NavbarPublic";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";

export const About = () => {
    return (
        <>
            <NavbarPublic/>
            <BreadCrumb pageName={'About'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                        <div>
                            {/* //w3l-inner-page-breadcrumb*/}
                            <section className="w3l-about-ab" id="about">
                                <div className="midd-w3 py-5">
                                    <div className="container py-lg-5 py-md-4 py-2">
                                        <div className="row">
                                            <div className="col-lg-5 left-wthree-img">
                                                <h6 className="title-subhny">About Us</h6>
                                                <h3 className="title-w3l mb-4">One of the fastest growing Freelance Platform.</h3>
                                            </div>
                                            <div className="col-lg-7 pl-lg-5 align-self">
                                                <p className>Our aim is to provide the best freelancing platform that is out there on the Internet. With our
                                                    various different technologies and services, we are able to provide an environment where genuine businesses can work with
                                                    legitimate sellers from around the world!
                                                </p>
                                                {/*<a href="services.html" className="btn btn-style btn-primary mt-lg-5 mt-4">Read More <span className="fa fa-long-arrow-right ml-3" aria-hidden="true" /></a>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* /w3l-content-2*/}
                            {/* /why*/}
                            <section className="w3l-content-2 w3l-stats-1 py-5">
                                <div className="container py-md-5 py-2">
                                    <div className="title-content text-left">
                                        <h6 className="title-subhny">Why Us</h6>
                                        <h3 className="title-w3l mb-sm-5 mb-4 pb-lg-2">Our Services And Technologies Help <br />You To Boost Your Business!</h3>
                                    </div>
                                    <div className="row whybox-wrap">
                                        <div className="col-lg-6 whybox-wrap-left pr-lg-5 align-self">
                                            <div className="whybox-inner-content">
                                                <div className="whybox-wrap-grid mb-lg-5 mb-4">
                                                    <div className="whybox-wrap-grid-inf">
                                                        <div className="icon">
                                                            <span className="fa fa-thumbs-up" />
                                                        </div>
                                                        <div className="info">
                                                            <h4><a href="#url"> Genuine Sellers</a></h4>
                                                        </div>
                                                    </div>
                                                    <p className="mt-3">Find only the most genuine sellers with our approval technology!</p>
                                                </div>
                                                <div className="whybox-wrap-grid mb-lg-5 mb-4">
                                                    <div className="whybox-wrap-grid-inf">
                                                        <div className="icon">
                                                            <span className="fa fa-lightbulb-o" />
                                                        </div>
                                                        <div className="info">
                                                            <h4><a href="#url">Talent Pool</a></h4>
                                                        </div>
                                                    </div>
                                                    <p className="mt-3">Talents from all over the globe register on our platform! </p>
                                                </div>
                                                <div className="whybox-wrap-grid mb-lg-5 mb-4">
                                                    <div className="whybox-wrap-grid-inf">
                                                        <div className="icon">
                                                            <span className="fa fa-paper-plane" />
                                                        </div>
                                                        <div className="info">
                                                            <h4><a href="#url"> 24x7 Support!</a></h4>
                                                        </div>
                                                    </div>
                                                    <p className="mt-3">Contact our team of experts and they will fulfill your requests around the clock! </p>
                                                </div>
                                                <div className="whybox-wrap-grid mb-lg-5 mb-4">
                                                    <div className="whybox-wrap-grid-inf">
                                                        <div className="icon">
                                                            <span className="fa fa-laptop" />
                                                        </div>
                                                        <div className="info">
                                                            <h4><a href="#url"> Latest Technology</a></h4>
                                                        </div>
                                                    </div>
                                                    <p className="mt-3">Our platform is rigged with all the new technologies to make sure your experience is seamless! </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 whybox-wrap-img pl-lg-5">
                                            <div className="imgw3l-ab mb-md-5 mb-3">
                                                <img src="images/aboutPic.jpg" alt="" className="radius-image img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* //w3l-why*/}
                        </div>

                    <section class="w3l-content-5 py-5">
                        <div class="content-4-main py-lg-5 py-md-4">
                            <div class="container">
                                <div class="content-info-in row">
                                    <div class="content-left col-lg-8">
                                        <h6 class="title-subhny">24/7 Active Suport Team</h6>
                                        <h3 class="title-w3l two">Need Immediate Support Or <br/> Any Help?</h3>
                                    </div>
                                    <div class="content-right col-lg-4 mt-lg-0 mt-4 text-lg-right">
                                        <Link to={'/contact-us'} class="btn btn-style btn-white mt-md-5 mt-4">Contact Us! <span
                                            class="fa fa-long-arrow-right ml-3" aria-hidden="true"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    </div>
            </section>
            <Footer/>
        </>
    )
}