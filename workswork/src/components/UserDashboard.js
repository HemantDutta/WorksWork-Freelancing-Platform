import {UserNavbar} from "./UserNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export const UserDashboard = () => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:3000/users/get-user-profile')
            .then((res)=>{
                console.log(res.data);
                setTitle(res.data[0].title);
                setCategory(res.data[0].work_category);
            })
    },[])
    return (
        <>
            <UserNavbar/>
            <BreadCrumb pageName={'Dashboard'}/>
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
                                            <h4><a href="#url">Brand Title</a></h4>
                                        </div>
                                    </div>
                                    <p className="mt-3">{title}</p>
                                </div>
                                <div className="whybox-wrap-grid mb-lg-5 mb-4">
                                    <div className="whybox-wrap-grid-inf">
                                        <div className="icon">
                                            <span className="fa fa-paper-plane" />
                                        </div>
                                        <div className="info">
                                            <h4><a href="#url">Category</a></h4>
                                        </div>
                                    </div>
                                    <p className="mt-3">{category}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 whybox-wrap-img pl-lg-5">
                            <div className="imgw3l-ab mb-md-5 mb-3">
                                <img src="assets/images/ab2.jpg" alt="" className="radius-image img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /home-services*/}
            <section className="home-services py-5">
                <div className="container py-md-5 py-2">
                    <div className="title-content text-left">
                        <h6 className="title-subhny">USER DASHBOARD</h6>
                        <h3 className="title-w3l mb-sm-5 mb-4 pb-lg-2">All Your Needs <br/>In One Place</h3>
                    </div>
                    <div className="row mt-lg-0 mt-5">
                        <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                            <div className="box-wrap-grid text-left">
                                <div className="icon mb-3">
                                    <span className="fa fa-lightbulb-o"/>
                                </div>
                                <div className="info">
                                    <h4><Link to={'/user-jobs'}>View Jobs</Link></h4>
                                </div>
                                <p className="mt-2">View all the jobs that you have posted on the marketplace.</p>
                            </div>
                        </div>
                        <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                            <div className="box-wrap-grid text-left">
                                <div className="icon mb-3">
                                    <span className="fa fa-paint-brush"/>
                                </div>
                                <div className="info">
                                    <h4><Link to={'/add-work'}>Post Work</Link></h4>
                                </div>
                                <p className="mt-2">Post a new job that will be visible on the marketplace.</p>
                            </div>
                        </div>
                        <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                            <div className="box-wrap-grid text-left">
                                <div className="icon mb-3">
                                    <span className="fa fa-line-chart"/>
                                </div>
                                <div className="info">
                                    <h4><Link to={'/view-bids'}>View Bids</Link></h4>
                                </div>
                                <p className="mt-2">View with all the bids that have been posted by the sellers on your jobs.</p>
                            </div>
                        </div>
                        <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                            <div className="box-wrap-grid text-left">
                                <div className="icon mb-3">
                                    <span className="fa fa-user-pen"/>
                                </div>
                                <div className="info">
                                    <h4><Link to={'/user-edit-profile'}>Edit Profile</Link></h4>
                                </div>
                                <p className="mt-2">Edit your public profile that is visible to the users.</p>
                            </div>
                        </div>
                        <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                            <div className="box-wrap-grid text-left">
                                <div className="icon mb-3">
                                    <span className="fa fa-lock"/>
                                </div>
                                <div className="info">
                                    <h4><Link to={'/user-change-password'}>Change Password</Link></h4>
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
                                    <h4><Link to={'/user-forgot-pass'}>Forgot Password?</Link></h4>
                                </div>
                                <p className="mt-2">Have you forgotten your password? Recover it right here!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //home-services*/}
            <Footer/>
        </>
    )
}