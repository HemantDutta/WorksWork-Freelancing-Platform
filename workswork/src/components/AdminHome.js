import {AdminNavbar} from "./AdminNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export const AdminHome = () => {


    const [adminName, setAdminName] = useState('');
    const [adminType, setAdminType] = useState('');

    function getAdminInfo() {
        axios.get('http://localhost:3000/admin/get-admin-info')
            .then((res)=>{
                console.log(res.data);
                setAdminName(res.data[0].fullname);
                setAdminType(res.data[0].admintype);
            })
    }

    useEffect(()=>{
        getAdminInfo()
    },[])
    return(
        <>
            <AdminNavbar/>
            <BreadCrumb pageName={'Admin Dashboard'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <section className="w3l-contact-7 py-5">
                        <div className="container py-md-5 py-2">
                            <div className="title-content text-left">
                                <h6 className="title-subhny">Your Profile`</h6>
                                <h3 className="title-w3l mb-sm-5 mb-4 pb-lg-2">Your Public Information</h3>
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
                                                    <h4><a href="#url">Admin Name</a></h4>
                                                </div>
                                            </div>
                                            <p className="mt-3">{adminName}</p>
                                        </div>
                                        <div className="whybox-wrap-grid mb-lg-5 mb-4">
                                            <div className="whybox-wrap-grid-inf">
                                                <div className="icon">
                                                    <span className="fa fa-paper-plane" />
                                                </div>
                                                <div className="info">
                                                    <h4><a href="#url">Admin Type</a></h4>
                                                </div>
                                            </div>
                                            <p className="mt-3">{adminType}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /home-services*/}
                    <section className="home-services py-5">
                        <div className="container py-md-5 py-2">
                            <div className="title-content text-left">
                                <h6 className="title-subhny">ADMIN DASHBOARD</h6>
                                <h3 className="title-w3l mb-sm-5 mb-4 pb-lg-2">All Your Needs <br/>In One Place</h3>
                            </div>
                            <div className="row mt-lg-0 mt-5">
                                <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-lightbulb-o"/>
                                        </div>
                                        <div className="info">
                                            <h4><Link to={'/add-category'}>Manage Categories</Link></h4>
                                        </div>
                                        <p className="mt-2">Add, edit & Delete Categories of Work present in the marketplace!</p>
                                    </div>
                                </div>
                                <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-paint-brush"/>
                                        </div>
                                        <div className="info">
                                            <h4><Link to={'/add-admin'}>Manage Admins</Link></h4>
                                        </div>
                                        <p className="mt-2">Add More Admins to the website and set their type.</p>
                                    </div>
                                </div>
                                <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-line-chart"/>
                                        </div>
                                        <div className="info">
                                            <h4><Link to={'/seller-applications'}>Manage Sellers</Link></h4>
                                        </div>
                                        <p className="mt-2">Approve, Reject & Block sellers that are signed up or trying to sign up!</p>
                                    </div>
                                </div>
                                <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-user-pen"/>
                                        </div>
                                        <div className="info">
                                            <h4><Link to={'/messages'}>Messages</Link></h4>
                                        </div>
                                        <p className="mt-2">View messages sent by the users using the contact us page.</p>
                                    </div>
                                </div>
                                <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-lock"/>
                                        </div>
                                        <div className="info">
                                            <h4><Link to={'/admin-change-password'}>Change Password</Link></h4>
                                        </div>
                                        <p className="mt-2">Change your currently set password for your account.</p>
                                    </div>
                                </div>
                                <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                                    <div className="box-wrap-grid text-left">
                                        <div className="icon mb-3">
                                            <span className="fa fa-key"/>
                                        </div>
                                        <div className="info">
                                            <h4><Link to={'/admin-forgot-pass'}>Forgot Password?</Link></h4>
                                        </div>
                                        <p className="mt-2">Have you forgotten your password? Recover it right here!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* //home-services*/}
                </div>
            </section>
            <Footer/>
        </>
    )
}