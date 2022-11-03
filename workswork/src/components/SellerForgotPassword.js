import {NavbarPublic} from "./NavbarPublic";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";


export const SellerForgotPassword = () => {

    const [email, setEmail] = useState('');

    function ForgotPassword(sellerEmail) {
        axios.get(`http://localhost:3000/seller-forgot-password?sellerEmail=${sellerEmail}`)
            .then((res) => {
                console.log(res.data);
                if (res.data === 'success') {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Recovery email sent to your email address',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else if(res.data==='invalidusername'){
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Invalid Email Address',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <>
            <NavbarPublic/>
            <BreadCrumb pageName={'Recover Password'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="card">
                            <div className="card-body p-5 shadow-5 text-center">
                                <h2 className="fw-bold mb-5">Recover Password</h2>
                                <form>
                                    {/* 2 column grid layout with text inputs for the first and last names */}

                                    {/* Email input */}
                                    <div className="form-outline mb-4">
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3" className="form-control"/>
                                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    </div>


                                    {/* Submit button */}
                                    <button type="button" onClick={() => ForgotPassword(email)} className="btn btn-outline-success btn-block mb-4">
                                        Recover Password
                                    </button>
                                    {/* Register buttons */}
                                    <div className="mt-4 pt-2">
                                        <span className={'text-dark'}>Want to login? <Link to={'/freelance-login'}>Click Here!</Link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}