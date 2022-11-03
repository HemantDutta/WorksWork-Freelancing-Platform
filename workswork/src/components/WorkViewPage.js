import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useParams} from "react-router-dom";
import {NavbarPublic} from "./NavbarPublic";
import {useEffect} from "react";
import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


export const WorkViewPage = () => {

    const navigate = useNavigate();
    let {id} = useParams();
    console.log(id);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [workingHour, setWorkingHour] = useState('');
    const [budgetPerHour, setBudgetPerHour] = useState('');
    const [lastDateApply, setLastDateApply] = useState('');
    const [category, setCategory] = useState('');
    const [brandTitle, setBrandTitle] = useState('');

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/work-view?id=${id}`)
            .then((res)=>{
                console.log(res.data);
                setTitle(res.data[0].title);
                setDescription(res.data[0].description);
                setPhoto(res.data[0].cover_photos);
                setWorkingHour(res.data[0].working_hour);
                setBudgetPerHour(res.data[0].budget_per_hour);
                setLastDateApply(res.data[0].last_date_apply)
                setBrandTitle(res.data[0].brandTitle);
                setCategory(res.data[0].work_category);

            });
    },[])

    function sendWorkID(id) {
        navigate(`/send-bid-page/${id}`);
    }

    return(
        <>
            <NavbarPublic/>
            <BreadCrumb pageName={'Seller Profile'}/>
            <section className="w3l-content-2 w3l-stats-1 py-5">
                <div className="container py-md-5 py-2">
                    <div className="title-content text-left">
                        <h6 className="title-subhny">Work Details</h6>
                        <h3 className="title-w3l mb-sm-5 mb-4 pb-lg-2">All the details<br />About This Job</h3>
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
                                            <h4><a href="#url">Job Name</a></h4>
                                        </div>
                                    </div>
                                    <p className="mt-3">{title}</p>
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
                                            <h4><a href="#url">Details</a></h4>
                                        </div>
                                    </div>
                                    <p className="mt-3">{"Working Hours: "+workingHour}</p>
                                    <p className="mt-3">{"Budget Per Hour: $"+budgetPerHour}</p>
                                    <p className="mt-3">{"Last Date To Apply: "+lastDateApply}</p>
                                </div>
                                <div className="whybox-wrap-grid mb-lg-5 mb-4">
                                    <div className="whybox-wrap-grid-inf">
                                        <div className="icon">
                                            <span className="fa fa-laptop" />
                                        </div>
                                        <div className="info">
                                            <h4><a href="#url">The Job Is Posted By: </a></h4>
                                        </div>
                                    </div>
                                    <p className="mt-3">{"Business Name: "+brandTitle}</p>
                                    <p className="mt-3">{"Category: "+category}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 whybox-wrap-img pl-lg-5">
                            <div className="imgw3l-ab mb-md-5 mb-3">
                                <img src={`http://localhost:3000/${photo}`} alt="" className="radius-image img-fluid" />
                            </div>
                        </div>
                        <button type="button" onClick={()=>sendWorkID(id)} className="btn btn-outline-success btn-block mb-4 mt-2">
                        Bid on this job
                    </button>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}