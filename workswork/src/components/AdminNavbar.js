import {Link} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

export const AdminNavbar = () => {

    const navigate = useNavigate();

    function logoutAdmin() {
        axios.get('http://localhost:3000/admin/admin-logout')
            .then(res=>{
                console.log(res.data);
                if(res.data==='loggedOut'){
                    Swal.fire(
                        'Logged Out!',
                        'success'
                    )
                    navigate('/admin-login');
                }
            })
    }

    useEffect(() => {
        axios.get('http://localhost:3000/admin/admin-auth')
            .then(res => {
                console.log(res.data);
                if (res.data === 'fail') {
                    navigate('/admin-login');
                }
            });
    }, [])
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
                                    <Link to={'/admin-home'} className="nav-link">Home<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <Link to={"#"} className="nav-link dropdown-toggle" data-toggle="dropdown">
                                            Manage
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link to={'/add-admin'} className="dropdown-item">Manage Admins</Link>
                                            <Link to={'/seller-applications'} className="dropdown-item">Manage Sellers</Link>
                                            <Link to={'/add-category'} className="dropdown-item">Manage Categories</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <div className="dropdown">
                                        <Link to={"#"} className="nav-link dropdown-toggle" data-toggle="dropdown">
                                            Profile
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link to={'/admin-change-password'} className="dropdown-item">Change Password</Link>
                                            <Link to={'/admin-forgot-pass'} className="dropdown-item">Forgot Password</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/messages'} className="nav-link">Messages</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"#"} className="nav-link"><button onClick={logoutAdmin} className={"btn btn-outline-success btn-sm"} type={"button"}>Logout</button></Link>
                                </li>
                            </ul>

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