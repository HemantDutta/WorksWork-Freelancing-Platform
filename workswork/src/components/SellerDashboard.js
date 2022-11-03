import {UserNavbar} from "./UserNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Link} from "react-router-dom";
import {Footer} from "./Footer";
import {FreelanceNavbar} from "./FreelanceNavbar";
import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";

export const SellerDashboard = () => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);

    function fetchSeller() {
        axios.get('http://localhost:3000/users/fetch-seller-info')
            .then((res) => {
                console.log(res.data);
                setName(res.data[0].first_name +" "+ res.data[0].last_name);
                setCategory(res.data[0].category);
                setDescription(res.data[0].description);
                setPhoto(res.data[0].cover_photo)
            });
    }

    useEffect(() => {
        fetchSeller()
    }, [])

    return(
        <>
            <FreelanceNavbar/>
            <BreadCrumb pageName={'Seller Dashboard'}/>
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
                                            <h4><a href="#url">Seller Name</a></h4>
                                        </div>
                                    </div>
                                    <p className="mt-3">{name}</p>
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
                                <div className="whybox-wrap-grid mb-lg-5 mb-4">
                                    <div className="whybox-wrap-grid-inf">
                                        <div className="icon">
                                            <span className="fa fa-paper-plane" />
                                        </div>
                                        <div className="info">
                                            <h4><a href="#url">Description</a></h4>
                                        </div>
                                    </div>
                                    <p className="mt-3">{description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 whybox-wrap-img pl-lg-5">
                            <div className="imgw3l-ab mb-md-5 mb-3">
                                <img src={`http://localhost:3000/${photo}`} alt="" className="radius-image img-fluid" width={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /home-services*/}
            <section className="home-services py-5">
                <div className="container py-md-5 py-2">
                    <div className="title-content text-left">
                        <h6 className="title-subhny">SELLER DASHBOARD</h6>
                        <h3 className="title-w3l mb-sm-5 mb-4 pb-lg-2">All Your Needs <br/>In One Place</h3>
                    </div>
                    <div className="row mt-lg-0 mt-5">
                        <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                            <div className="box-wrap-grid text-left">
                                <div className="icon mb-3">
                                    <span className="fa fa-lightbulb-o"/>
                                </div>
                                <div className="info">
                                    <h4><Link to={'/seller-work-page'}>Find Work</Link></h4>
                                </div>
                                <p className="mt-2">Bid on a variety of different work posted on our marketplace.</p>
                            </div>
                        </div>
                        <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                            <div className="box-wrap-grid text-left">
                                <div className="icon mb-3">
                                    <span className="fa fa-paint-brush"/>
                                </div>
                                <div className="info">
                                    <h4><Link to={'/seller-active-jobs'}>Active Jobs</Link></h4>
                                </div>
                                <p className="mt-2">View all your currently active jobs in one place.</p>
                            </div>
                        </div>
                        <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                            <div className="box-wrap-grid text-left">
                                <div className="icon mb-3">
                                    <span className="fa fa-line-chart"/>
                                </div>
                                <div className="info">
                                    <h4><Link to={'#'}>Manage Reviews</Link></h4>
                                </div>
                                <p className="mt-2">Manage all the reviews left on your profile by users.</p>
                            </div>
                        </div>
                        <div className="box-wrap col-lg-4 col-md-6 col-sm-12">
                            <div className="box-wrap-grid text-left">
                                <div className="icon mb-3">
                                    <span className="fa fa-user-pen"/>
                                </div>
                                <div className="info">
                                    <h4><Link to={'/seller-edit-profile'}>Edit Profile</Link></h4>
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
                                    <h4><Link to={'/seller-change-password'}>Change Password</Link></h4>
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
                                    <h4><Link to={'/seller-forgot-pass'}>Forgot Password?</Link></h4>
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