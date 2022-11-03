import {NavbarPublic} from "./NavbarPublic";
import {BreadCrumb} from "./BreadCrumb";
import {RenderWorkPage} from "./RenderWorkPage";
import {Footer} from "./Footer";

export const Blog = () => {
    return (
        <>
            <NavbarPublic/>
            <BreadCrumb pageName={'Blog'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div>
                            <h1 className={'text-center'}>Our Blog</h1>
                            <h6 className={'text-center'}>about Freelancing...</h6>
                        </div>
                        <br/><br/><br/>
                        <div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card card-cascade mb-5">
                                        <div className="view view-cascade overlay">
                                            <img className="card-img-top" src="images/blog_post_1.png" alt="Card image cap" height={'200px'} width={'200px'}/>
                                        </div>
                                        {/* Card content */}
                                        <div className="card-body card-body-cascade text-center" style={{height: "265px"}}>
                                            {/* Title */}
                                            <h4 className="card-title"><strong>What Is Freelancing? How To Become A Freelancer?</strong></h4>
                                            {/* Subtitle */}
                                            <h6 className="font-weight-bold text-success py-2"><a href='https://www.feedough.com/what-is-freelancing-how-to-become-a-freelancer-the-actionable-guide/'>feedough.com</a></h6>
                                            {/* Text */}
                                            <p className="card-text">The phrase ‘I am a freelancer’ gets thrown about a lot nowadays when someone is asked about what he does for a living.
                                            </p><br/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card card-cascade mb-5">
                                        <div className="view view-cascade overlay">
                                            <img className="card-img-top" src="images/blog_post_1.png" alt="Card image cap" height={'200px'} width={'200px'}/>
                                        </div>
                                        {/* Card content */}
                                        <div className="card-body card-body-cascade text-center" style={{height: "265px"}}>
                                            {/* Title */}
                                            <h4 className="card-title"><strong>Freelancing 101: What Every Potential Freelancer Should Know</strong></h4>
                                            {/* Subtitle */}
                                            <h6 className="font-weight-bold text-success py-2"><a href='https://www.businessnewsdaily.com/5242-freelancer-tips.html'>www.businessnewsdaily.com</a></h6>
                                            {/* Text */}
                                            <p className="card-text">The gig economy is booming. According to Forbes, between 2005 and 2015, 94 percent of 10 million jobs created were either freelance or temporary gigs.
                                            </p><br/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card card-cascade mb-5">
                                        <div className="view view-cascade overlay">
                                            <img className="card-img-top" src="images/blog_post_1.png" alt="Card image cap" height={'200px'} width={'200px'}/>
                                        </div>
                                        {/* Card content */}
                                        <div className="card-body card-body-cascade text-center" style={{height: "265px"}}>
                                            {/* Title */}
                                            <h4 className="card-title"><strong>How To Start Freelancing (Complete Beginner’s Guide)</strong></h4>
                                            {/* Subtitle */}
                                            <h6 className="font-weight-bold text-success py-2"><a href='https://freelancinghacks.com/how-to-start-freelancing/'>freelancinghacks.com</a></h6>
                                            {/* Text */}
                                            <p className="card-text">Thinking about getting started in freelancing but don’t know where to start? Then this guide is for you.
                                            </p><br/>
                                        </div>
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