import {Link} from "react-router-dom";

export const NavbarPublic = () => {
    return (
        <>
            <header id="site-header" className="fixed-top">
                <div className="container">

                    <nav className="navbar navbar-expand-lg stroke px-0 py-lg-0">
                        <h1><Link to = {'/'} style={{color: 'white', textDecoration: 'none', backgroundColor: 'transparent'}}>
                            Work<span className="sub-logo" style={{color: '#2EFF17FF'}}>S</span>Work
                        </Link></h1>

                        <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo02"
                                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa icon-expand fa-bars"/>
                            <span className="navbar-toggler-icon fa icon-close fa-times"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mx-lg-auto">
                                <li className="nav-item active">
                                    <Link to={'/'} className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/about'} className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <li className="nav-item">
                                        <Link to={'/blog'} className="nav-link">Blog</Link>
                                    </li>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/contact-us'} className="nav-link">Contact</Link>
                                </li>
                                {/*/search-right*/}
                                {/*<li className="nav-item search-right ml-lg-3">*/}
                                {/*    /!* /header-top-inn*!/*/}
                                {/*    <div className="menu-overlay-left">*/}
                                {/*        <div className="two-pops">*/}
                                {/*            /!* overlay-menuv-menu *!/*/}
                                {/*            <div className="overlay-menuv-hny">*/}
                                {/*                <input type="checkbox" id="op"/>*/}
                                {/*                <div className="side-menu-hny mt-lg-3">*/}
                                {/*                    <label htmlFor="op" className="menuopen">*/}
                                {/*                        <span className="fa fa-search" aria-hidden="true"/></label>*/}
                                {/*                </div>*/}
                                {/*                <div className="overlay-menuv overlay-menuv-hugeinc">*/}
                                {/*                    <label htmlFor="op" className="menuclose"><span className="fa fa-times"*/}
                                {/*                                                                    aria-hidden="true"/></label>*/}
                                {/*                    <div className="side-show-content text-left">*/}
                                {/*                        <div className="quick-links-side mb-5 pt-lg-5">*/}
                                {/*                            <h3 className="side-title">Search Here</h3>*/}
                                {/*                            <form action="#" method="post" className="search-box">*/}
                                {/*                                <input type="search" placeholder="Keyword" name="search" required="required"*/}
                                {/*                                       autoFocus/>*/}
                                {/*                                <button type="submit" className="btn btn-style mt-3">Search</button>*/}
                                {/*                            </form>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="quick-links-side follow-us mb-5">*/}
                                {/*                            <h3 className="side-title">Follow Us</h3>*/}
                                {/*                            <ul className="social-icons-top">*/}
                                {/*                                <li><a className="facebook" href="#"><span className="fa fa-facebook"*/}
                                {/*                                                                           aria-hidden="true"/></a>*/}
                                {/*                                </li>*/}
                                {/*                                <li><a className="twitter" href="#"><span className="fa fa-twitter"*/}
                                {/*                                                                          aria-hidden="true"/></a>*/}
                                {/*                                </li>*/}
                                {/*                                <li><a className="google" href="#"><span className="fa fa-google-plus"*/}
                                {/*                                                                         aria-hidden="true"/></a>*/}
                                {/*                                </li>*/}
                                {/*                                <li><a className="instagram" href="#"><span className="fa fa-instagram"*/}
                                {/*                                                                            aria-hidden="true"/></a>*/}
                                {/*                                </li>*/}
                                {/*                            </ul>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*        /!* overlay-menuv-menu *!/*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                                {/*//search-right*/}
                            </ul>
                            {/*/right-btn*/}
                            <div className="top-righthny-buttton">
                                <Link to={'/freelance-signup'}><button style={{color: 'lime'}} className="btn btn-outline-success  mr-lg-5">
                                    Become a Seller<span className="fa fa-long-arrow-right ml-3" aria-hidden="true"/></button></Link>
                            </div>
                            {/*/right-btn*/}
                            {/*/right-btn*/}
                            <div className="top-righthny-buttton">
                                <Link to={'/user-signup'}><button  className="btn btn-style btn-white mr-lg-5">
                                    Join as a Business<span className="fa fa-long-arrow-right ml-3" aria-hidden="true"/></button></Link>
                            </div>
                            {/*/right-btn*/}
                        </div>
                        {/* toggle switch for light and dark theme */}
                        <div className="mobile-position">
                            <nav className="navigation">
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch" htmlFor="checkbox">
                                        <input type="checkbox" id="checkbox"/>
                                        <div className="mode-container">
                                            <i className="gg-sun"/>
                                            <i className="gg-moon"/>
                                        </div>
                                    </label>
                                </div>
                            </nav>
                        </div>
                        {/* //toggle switch for light and dark theme */}
                    </nav>
                </div>
            </header>
        </>
    )
}
