import {useEffect} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export const UserNavbar = () => {
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/users/user-auth')
            .then(res => {
                console.log(res.data);
                if (res.data === 'fail') {
                    navigate('/user-login');
                }
            })
    })

    function logoutUser() {
        axios.get('http://localhost:3000/users/user-logout')
            .then((res)=>{
                console.log(res.data);
                if(res.data==='loggedOut!'){
                navigate('/user-login')
                }
            })
    }
    return (
        <>
            <header id="site-header" className="fixed-top">
                <div className="container">

                    <nav className="navbar navbar-expand-lg stroke px-0 py-lg-0">
                        <h1><Link to={'/'} style={{color: 'white', textDecoration: 'none', backgroundColor: 'transparent'}}>
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
                                    <Link to={'/user-home'} className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <div className="dropdown">
                                        <Link to={"#"} className="nav-link dropdown-toggle" data-toggle="dropdown">
                                            Manage Profile
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link to={'/user-dashboard'} className="dropdown-item">User Dashboard</Link>
                                            <Link to={'/add-work'} className="dropdown-item">Forgot Password</Link>
                                            <Link to={'/user-change-password'} className="dropdown-item">Change Password</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <div className="dropdown">
                                        <Link to={"#"} className="nav-link dropdown-toggle" data-toggle="dropdown">
                                            Work
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link to={'/add-work'} className="dropdown-item">Post Work</Link>
                                            <Link to={'/user-jobs'} className="dropdown-item">View Jobs</Link>
                                            <Link to={'/view-bids'} className="dropdown-item">View Bids</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <Link to={"#"} className="nav-link"><button onClick={logoutUser} className={"btn btn-outline-success btn-sm"} type={"button"}>Logout</button></Link>
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
                                <Link to={'/seller-page'} className="btn btn-style btn-white mr-lg-5">Find Sellers <span className="fa fa-long-arrow-right ml-3" aria-hidden="true"/></Link>
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