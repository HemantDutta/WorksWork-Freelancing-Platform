import {FreelanceNavbar} from "./FreelanceNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

export const SendBidPage = () => {

    const navigate = useNavigate();
    let {id} = useParams();
    console.log(id);
    const [bidAmount, setBidAmount] = useState('');
    const [message, setMessage] = useState('');
    const [workID, setWorkId] = useState('');
    const [freelancerID, setFreelancerID] = useState('');

    useEffect(()=>{
        setWorkId(id);
        axios.get('http://localhost:3000/users/fetch-seller-info')
            .then((res) => {
                console.log(res.data);
                    setFreelancerID(res.data[0].id);
            });
    },[])


    function BidSubmit() {

        let formdata = new FormData();
        formdata.append('bidAmount', bidAmount);
        formdata.append('message', message);
        formdata.append('workID', workID);
        formdata.append('freelancerID', freelancerID);

        axios.post('http://localhost:3000/users/send-bid', formdata)
            .then((res)=>{
                console.log(res);
                    if(res.data==='sent'){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Bid Sent Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(`/work-view-page/${id}`)
                    }
            })
    }
    return (
        <>
            <FreelanceNavbar/>
            <BreadCrumb pageName={'Send a Bid'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        {/*Form Start*/}
                        <section className="vh-100 gradient-custom">
                            <div className="container py-5 h-100">
                                <div className="row justify-content-center align-items-center h-100">
                                    <div className="col-12 col-lg-9 col-xl-7">
                                        <div className="card shadow-2-strong card-registration" style={{borderRadius: '15px'}}>
                                            <div className="card-body p-4 p-md-5">
                                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Send A Bid</h3>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e)=>setBidAmount(e.target.value)} type="text" id="title"
                                                                       className="form-control form-control-lg"/>
                                                                <label className="form-label" htmlFor="bid_amount">Bid Amount</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <textarea onChange={(e)=>setMessage(e.target.value)}
                                                                      id="message" className="form-control form-control-lg"
                                                                      placeholder="Why do you think you are fit for this job?"/>
                                                            <label className="form-label">Message to Work Provider</label>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 pt-2">
                                                        <input onClick={BidSubmit} className="btn btn-outline-success btn-lg" type="button"
                                                               defaultValue="Add"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*Form End*/}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}