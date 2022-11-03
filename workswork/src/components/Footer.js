import {Link} from "react-router-dom";

export const Footer = () => {
    return(
        <>
            <section className="w3l-footer-29-main">
                <div className="footer-29 py-5">
                    <div className="container py-lg-3">
                        <div className="row footer-top-29">
                            <div className="col-lg-4 footer-list-29 footer-2 mt-lg-0 mt-md-5 mt-4 pr-lg-5">
                                <div className="footer-logo mb-3">
                                    <h2>
                                        <Link to={'/'} className={'navbar-brand'}>Work<span className="sub-logo">S</span>Work</Link>
                                    {/*    <a className="navbar-brand" href="index.html">*/}
                                    {/*    Work<span className="sub-logo">S</span>Work*/}
                                    {/*</a>*/}
                                    </h2>
                                </div>
                                <p>Experience True Freedom With Freelance!
                                </p>
                            </div>
                            <div className="col-lg-8 footerw3l-right pl-lg-5">
                                <div className="row no-gutters">
                                    <div className="col-lg-4 col-sm-6 footer-list-29 footer-2 mt-lg-0 mt-md-5 mt-4">
                                        <h6 className="footer-title-29">Are you a business?</h6>
                                        <p className="mt-2"> <Link to={'/user-signup'}>Join us now!</Link></p>
                                        <p className="mt-2"> <Link to={'/user-login'}>Already a user? Log In!</Link></p>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 footer-list-29 footer-2 mt-lg-0 mt-md-5 mt-4">
                                        <h6 className="footer-title-29">Want to say hi?</h6>
                                        <p className="mt-2"> <Link to={'/contact-us'}>Contact Us!</Link></p>
                                        <p className="mt-2"> <Link to={'#'}>Mail Us At: wsw.test.email@gmail.com</Link></p>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 footer-list-29 footer-2 mt-lg-0 mt-md-5 mt-4">
                                        <h6 className="footer-title-29">Find us on social media.</h6>
                                        <p className="mt-2">Social Media</p>
                                        <div className="main-social-footer-29 mt-2">
                                            <a href="#facebook" className="facebook"><span className="fa fa-facebook" /></a>
                                            <a href="#twitter" className="twitter"><span className="fa fa-twitter" /></a>
                                            <a href="#instagram" className="instagram"><span className="fa fa-instagram" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mt-5">
                                    <div className="col-lg-4 col-sm-6 footer-list-29 footer-2 mt-lg-0 mt-md-5 mt-4">
                                        <ul>
                                            <h6 className="footer-title-29">Are you a freelancer?</h6>
                                            <p className="mt-2"> <Link to={'/freelance-signup'}>Join us now!</Link></p>
                                            <p className="mt-2"> <Link to={'/freelance-login'}>Already a seller? Log In!</Link></p>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 footer-list-29 footer-2 mt-lg-0 mt-md-5 mt-4">
                                        <h6 className="footer-title-29">What We Do!</h6>
                                        <ul>
                                            <p className="mt-2"> <Link to={'/about'}>About Us!</Link></p>
                                            <p className="mt-2"> <Link to={'/blog'}>Our Blog!</Link></p>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 footer-list-29 footer-2 mt-lg-0 mt-md-5 mt-4">
                                        <h6 className="footer-title-29">Quick Links</h6>
                                        <ul>
                                            <p className="mt-2"> <Link to={'/seller-page'}>Find Sellers!</Link></p>
                                            <p className="mt-2"> <Link to={'/work-page'}>Find Work!</Link></p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}