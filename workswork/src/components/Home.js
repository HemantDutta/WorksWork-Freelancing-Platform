import {NavbarPublic} from "./NavbarPublic";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();
    return (

        <>
            <NavbarPublic/>
            {/*{Header}*/}
            <section id="home" className="w3l-banner py-5">
                <div className="container py-lg-5 py-md-4 mt-lg-0 mt-md-4">
                    <div className="w3l-banner-content py-lg-5 py-4 mt-md-4">
                        <div className="pt-md-5 pt-lg-4 mt-4 align-items-lg-center">
                            <div className="bannerhny-info">
                                <h6 className="title-subhny mb-3">Freelance Platform</h6>
                                <h3 className="">Need Professionals For Your Business?</h3>
                                <Link to={'/seller-page'} className='btn btn-style btn-outline-light mt-sm-5 mt-4'>Find Sellers Right Now<span className="fa fa-long-arrow-right ml-3" aria-hidden="true"></span></Link>

                                {/*<a className="btn btn-style btn-outline-light mt-sm-5 mt-4" href="about.html">*/}
                                {/*    </a>*/}

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
                                    <img src="images/digital_marketing_top_cat.jpg" width={"200px"} alt="" id={'dgm-pic'}/>
                                    <label className={'ml-4 text-dark font-weight-bold'} htmlFor="{'dgm-pic'}">Digital Marketing</label>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 pl-lg-0">
                                    <img src="images/graphic_design_top_cat.jpg" width={"200px"} alt="" id={'gd-pic'}/>
                                    <label className={'ml-2 text-dark font-weight-bold'} htmlFor="{'gd-pic'}">Graphic Design</label>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-sm-0 mt-4 pl-lg-0">
                                    <img src="images/voice_over_top_cat.jpg" width={"200px"} alt="" id={'vo-pic'}/>
                                    <label className={'mr-4 text-dark font-weight-bold'} htmlFor="{'vo-pic'}">Voice Over</label>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-md-0 mt-4 pl-lg-0">
                                    <img src="images/nft_art_top_cat.jpg" width={"200px"} alt="" id={'nft-pic'}/>
                                    <label className={'mr-5 text-dark font-weight-bold'} htmlFor="{'nft-pic'}">NFT Art</label>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-lg-0 mt-4 pl-lg-0">
                                    <img src="images/word_press_top_cat.jpg" width={"200px"} alt="" id={'wp-pic'}/>
                                    <label className={'mr-3 text-dark font-weight-bold'} htmlFor="{'wp-pic'}">WordPress</label>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-lg-0 mt-4 pl-lg-0">
                                    <img src="images/video_editing_top_cat.jpg" width={"200px"} alt="" id={'ve-pic'}/>
                                    <label className={'mr-1 text-dark font-weight-bold'} htmlFor="{'ve-pic'}">Video Editing</label>
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
                            <br/>a Freelancing Platform.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <h5 className="color-3 mb-3 pr-lg-5">With our three-way approval system, we are able to make sure that only the legitimate businesses, sellers and services make it onto our platform.
                            </h5>
                            <p className="mt-4 pr-lg-5">Are you a business? Go ahead and post anything that you need help with! Our talented sellers from all across the globe will take care of your requests!
                            </p>
                            <p className="mt-4 pr-lg-5">Are you a seller? Welcome to the best freelance market-place! Find work from all around the world and work flexibly with freedom! All The Best!
                            </p>
                            <Link to={'/about'} className="btn btn-style btn-primary mt-lg-5 mt-4">Read More <span
                                className="fa fa-long-arrow-right ml-3" aria-hidden="true"/></Link>
                        </div>
                        <div className="col-lg-7 left-wthree-img pl-lg-4 mt-lg-0 mt-5">
                            <div className="row">
                                <div className="box-wrap col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-building-o"/>
                                        </div>
                                        <div className="info">
                                            <h4><Link to={'/user-signup'}>Join as a Business</Link></h4>
                                        </div>
                                        <p className="mt-2">Join now and collaborate with our large pool of talents!</p>
                                    </div>
                                </div>
                                <div className="box-wrap col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-user"/>
                                        </div>
                                        <div className="info">
                                            <h4><Link to={'/freelance-signup'}>Join as a Seller</Link></h4>
                                        </div>
                                        <p className="mt-2">Join our large pool of talents and works for major brands!</p>
                                    </div>
                                </div>
                                <div className="box-wrap col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-people-group"/>
                                        </div>
                                        <div className="info">
                                            <h4><Link to={'/seller-page'}>Find Sellers</Link></h4>
                                        </div>
                                        <p className="mt-2">Visit our seller page and surf through the talents!</p>
                                    </div>
                                </div>
                                <div className="box-wrap col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-house-laptop"/>
                                        </div>
                                        <div className="info">
                                            <h4><Link to={'/work-page'}>Find Work</Link></h4>
                                        </div>
                                        <p className="mt-2">Visit our work page and surf through our catalog of work!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Something, not decided yet End  */}
            {/*  Something, not decided yet 2 */}
            <section className="w3l-gallery py-5" id="projects">
                <div className="container py-md-5 py-2">
                    <div className="title-content text-left">
                        <h6 className="title-subhny">Brands that work with us!</h6>
                        <h3 className="title-w3l mb-sm-5 mb-4 pb-lg-2">Take A Look At The<br /> Brands That Work With Us!</h3>
                    </div>
                    <div className="row w3l-galprojects no-gutters">
                        <div className="col-md-6 galprojects-gd mt-md-0 mt-5">
                            <div className="galprojects-gd-content">
                                <div className="crd crd--effect-3">
                                    <div className="crd-img" style={{backgroundImage: 'url(images/la.jpg)', backgroundPosition: 'bottom'}} />
                                    <div className="crd-info text-left">
                                        <h2 className="crd-heading">Trash To Treasures</h2>
                                        <p className="crd-text">WordPress</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 galprojects-gd mt-md-0 mt-5">
                            <div className="galprojects-gd-content">
                                <div className="crd crd--effect-3">
                                    <div className="crd-img" style={{backgroundImage: 'url(images/chicago.jpg)', backgroundPosition: 'bottom'}} />
                                    <div className="crd-info text-left">
                                        <h2 className="crd-heading">Evento</h2>
                                        <p className="crd-text">Graphic Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 galprojects-gd mt-5">
                            <div className="galprojects-gd-content">
                                <div className="crd crd--effect-3">
                                    <div className="crd-img" style={{backgroundImage: 'url(images/ny.jpg)', backgroundPosition: 'bottom'}} />
                                    <div className="crd-info text-left">
                                        <h2 className="crd-heading">WorkSpace</h2>
                                        <p className="crd-text">Branding</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 galprojects-gd mt-5">
                            <div className="galprojects-gd-content">
                                <div className="crd crd--effect-3">
                                    <div className="crd-img" style={{backgroundImage: 'url(images/la.jpg)', backgroundPosition: 'center'}} />
                                    <div className="crd-info text-left">
                                        <h2 className="crd-heading">The Big Three</h2>
                                        <p className="crd-text">App Development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Something, not decided yet 2End  */}
            {/*/address*/}
            <section className="home-w3l-content py-5">
                <div className="container">
                    <div className="row home-w3l-content-grids">
                        <div className="col-lg-4 home-w3l-content-grid mt-lg-0 mt-4">
                            <h5 className>Call Our Support</h5>
                            <p className="home-w3l-content-grid-inf">
                                24 / 7 Support Line : <span className="fa fa-phone mr-1" /> <a href="tel:+1(21) 234 4567">+91 987XXXXXX0</a>
                            </p>
                        </div>
                        <div className="col-lg-4 home-w3l-content-grid px-lg-4 mt-lg-0 mt-4">
                            <h5 className>Our Location</h5>
                            <p>Amritsar, Punjab</p>
                        </div>
                        <div className="col-lg-4 home-w3l-content-grid mt-lg-0 mt-4">
                            <h5 className>Send Us A Message!</h5>
                            <form action="#" className="subscribe d-flex text-lg-right" method="post">
                                <button onClick={()=>{navigate('/contact-us')}} className="btn btn-style btn-primary">Contact Us!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*//address*/}
            <Footer/>
        </>
    )
}