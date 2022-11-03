import axios from "axios";
import {useState} from "react";
import {NavbarPublic} from "./NavbarPublic";
import {BreadCrumb} from "./BreadCrumb";
import Swal from "sweetalert2";
import {Link, useNavigate} from "react-router-dom";

export const AdminLogin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleForm() {
        console.log(`${email}, ${password}`);

        axios.post('http://localhost:3000/admin-login', {
            email,
            password
        }).then(res => {
            console.log(res.data);
            if (res.data === 'Success') {
                navigate('/admin-home');
            } else if (res.data === 'IncorrectPassword') {
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
            } else {
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
        });
    }


    return (
        <>
            <NavbarPublic/>
            <BreadCrumb pageName={'Login'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container mb-5">
                        <div className="card" >
                            <div className="card-body p-5 shadow-5 text-center">
                                <h2 className="fw-bold mb-5">Admin Login</h2>
                                <form>
                                    {/* 2 column grid layout with text inputs for the first and last names */}

                                    {/* Email input */}
                                    <div className="form-outline mb-4">
                                        <input onChange={(e)=> setEmail(e.target.value)} type="email" id="form3Example3" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    </div>
                                    {/* Password input */}
                                    <div className="form-outline mb-4">
                                        <input onChange={(e)=> setPassword(e.target.value)} type="password" id="form3Example4" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example4">Password</label>
                                    </div>
                                    {/* Checkbox */}

                                    {/* Submit button */}
                                    <button type="button" onClick={handleForm} className="btn btn-outline-success btn-block mb-4">
                                        Login
                                    </button>
                                    {/* Register buttons */}
                                    <div className="mt-4 pt-2">
                                        <span className={'text-dark'}>Forgot Password? <Link to={'/admin-forgot-pass'}>Recover it here!</Link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer/>
        </>
    )
}