import {FreelanceNavbar} from "./FreelanceNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useNavigate, useParams} from "react-router-dom";
import {UserNavbar} from "./UserNavbar";
import {NavbarPublic} from "./NavbarPublic";
import {useEffect} from "react";
import axios from "axios";
import {useState} from "react";


export const SellerViewPage = () => {

    let {id} = useParams();
    console.log(id);

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [qualification, setQualification] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [photo, setPhoto] = useState('');

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/seller-view?id=${id}`)
            .then((res)=>{
               console.log(res.data);
                setFirstName(res.data[0].first_name);
                setLastName(res.data[0].last_name);
                setCategory(res.data[0].category);
                setDescription(res.data[0].description);
                setPhoto(res.data[0].cover_photo)
                setQualification(res.data[0].qualification);
                setMobile(res.data[0].mobile);
                setEmail(res.data[0].email);
            });
    })

    return(
        <>
            <NavbarPublic/>
            <BreadCrumb pageName={'Seller Profile'}/>
                        <section className="w3l-content-2 w3l-stats-1 py-5">
                            <div className="container py-md-5 py-2">
                                <div className="title-content text-left">
                                    <h6 className="title-subhny">Seller Profile</h6>
                                    <h3 className="title-w3l mb-sm-5 mb-4 pb-lg-2">Meet This<br />Professional Freelancer</h3>
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
                                                <p className="mt-3">{firstName+" "+lastName}</p>
                                            </div>
                                            <div className="whybox-wrap-grid mb-lg-5 mb-4">
                                                <div className="whybox-wrap-grid-inf">
                                                    <div className="icon">
                                                        <span className="fa fa-lightbulb-o" />
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
                                                        <h4><a href="#url">Qualifications</a></h4>
                                                    </div>
                                                </div>
                                                <p className="mt-3">{qualification}</p>
                                            </div>
                                            <div className="whybox-wrap-grid mb-lg-5 mb-4">
                                                <div className="whybox-wrap-grid-inf">
                                                    <div className="icon">
                                                        <span className="fa fa-laptop" />
                                                    </div>
                                                    <div className="info">
                                                        <h4><a href="#url">Description</a></h4>
                                                    </div>
                                                </div>
                                                <p className="mt-3">{description}</p>
                                            </div>
                                            <div className="whybox-wrap-grid mb-lg-5 mb-4">
                                                <div className="whybox-wrap-grid-inf">
                                                    <div className="icon">
                                                        <span className="fa fa-laptop" />
                                                    </div>
                                                    <div className="info">
                                                        <h4><a href="#url">Contact Info.</a></h4>
                                                    </div>
                                                </div>
                                                <p className="mt-3">{"Phone Number: "+mobile}</p>
                                                <p className="mt-3">{"Email: "+email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 whybox-wrap-img pl-lg-5">
                                        <div className="imgw3l-ab mb-md-5 mb-3">
                                            <img src={`http://localhost:3000/${photo}`} alt="" className="radius-image img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
            <Footer/>
        </>
    )
}