import {NavbarPublic} from "./NavbarPublic";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

export const FreelancerLogin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function freelancerLogin() {
        axios.post('http://localhost:3000/freelance-login', {
            email,
            password
        }).then((res)=>{
            console.log(res.data);
            if(res.data==='invalidPass'){
                let timerInterval
                Swal.fire({
                    icon: "warning",
                    title: 'Incorrect Password!',
                    timer: 2000,
                    timerProgressBar: false,
                    didOpen: () => {
                        // Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })
            }
            else if(res.data==='invalidEmail'){
                let timerInterval
                Swal.fire({
                    icon: "warning",
                    title: 'Invalid Email!',
                    timer: 2000,
                    timerProgressBar: false,
                    didOpen: () => {
                        // Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })
            }
            else if(res.data==='success'){
                navigate('/seller-dashboard');
            }
            else if(res.data==='Pending'){
                Swal.fire({icon:'warning',
                    title:'Your application is still pending!'})
                navigate('/');
            }
            else if(res.data==='Blocked'){
                Swal.fire({icon:'error',
                    title:'Your application was reviewed and your account has been blocked!'})
                navigate('/');
            }
        });
    }
    return(
        <>
            <NavbarPublic/>
            <BreadCrumb/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="card">
                            <div className="card-body p-5 shadow-5 text-center">
                                <h2 className="fw-bold mb-5">Seller Login</h2>
                                <form>
                                    {/* 2 column grid layout with text inputs for the first and last names */}

                                    {/* Email input */}
                                    <div className="form-outline mb-4">
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3" className="form-control"/>
                                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    </div>
                                    {/* Password input */}
                                    <div className="form-outline mb-4">
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="form3Example4"
                                               className="form-control"/>
                                        <label className="form-label" htmlFor="form3Example4">Password</label>
                                    </div>
                                    {/* Checkbox */}

                                    {/* Submit button */}
                                    <button type="button" onClick={freelancerLogin} className="btn btn-outline-success btn-block mb-4">
                                        Login
                                    </button>
                                    {/* Register buttons */}
                                    <div className="mt-4 pt-2">
                                        <span className={'text-dark'}>Not a user yet? <Link to={'/freelance-signup'}>Join Now</Link></span>
                                    </div>
                                    <div className="mt-4 pt-2">
                                        <span className={'text-dark'}>Forgot Password? <Link to={'/seller-forgot-pass'}>Recover it here!</Link></span>
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