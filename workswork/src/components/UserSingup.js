import {NavbarPublic} from "./NavbarPublic";
import {Footer} from "./Footer";
import {BreadCrumb} from "./BreadCrumb";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import {Link} from "react-router-dom";
import useRazorpay from 'react-razorpay';
import {useNavigate} from "react-router-dom";
import load from "load-script";

export const UserSignup = () => {

    load('../script.js', function (err, script) {
        if (err) {
            // print useful message
        } else {
            console.log(script.src);// Prints 'foo'.js'
            // use script
            // note that in IE8 and below loading error wouldn't be reported
        }
    });

    const navigate = useNavigate();
    const Razorpay = useRazorpay();

    let options = {
        key: "rzp_test_A3RM3Asww6uWvF",
        currency: 'INR',
        amount: 0,
        name: "Payment Testing",
        description: "Test Wallet Transaction",
        image: "https://i.pinimg.com/originals/c1/92/9d/c1929d3492c2f64ab65b43808c072043.jpg",
        handler: razorPayHandler,
        prefill: {
            // name: "",
            email: "",
            // email: "user@yahoo.in",
            // contact: "1234567890",
            contact: "",
        },
        theme: {
            "color": "#07ff00"
        }
    };

    function razorPayHandler(response) {
        console.log(response);
        let paymentId = response.razorpay_payment_id;

        if (paymentId !== '') {
            console.log("RazorPay Payment Done", paymentId);
            UserSignup();
        } else {
            Swal.fire('Payment Failed! Try Again!');
        }
    }

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmpassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [cat, setCat] = useState([]);

    function fetchCat() {
        axios.get('http://localhost:3000/admin/get-category')
            .then((res) => {
                console.log(res.data);
                setCat(res.data);
            });
    }

    useEffect(() => {
        fetchCat()
    }, []);


    function handlePayment(e) {
        e.preventDefault();
        options.amount = 1000 * 100;
        let rzp = new Razorpay(options);
        rzp.open();
    }

    function UserSignup() {
        axios.post('http://localhost:3000/user-signup', {
            title,
            firstName,
            lastName,
            email,
            mobile,
            password,
            confirmPassword,
            category
        }).then(res => {
            console.log(res.data);
            if (res.data === 'inserted') {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign Up Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/user-login');
            }
        });
    }

    return (
        <>
            <NavbarPublic/>
            <BreadCrumb pageName={'Business Sign Up!'}/>

            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container mb-5">
                        {/*Form Start*/}
                        <section className="vh-100 gradient-custom">
                            <div className="container py-5 h-100">
                                <div className="row justify-content-center align-items-center h-100">
                                    <div className="col-12 col-lg-9 col-xl-7">
                                        <div className="card shadow-2-strong card-registration" style={{borderRadius: '15px'}}>
                                            <div className="card-body p-4 p-md-5">
                                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Business Registration</h3>
                                                <form id={'user-signup'} onSubmit={handlePayment}>
                                                    <div className="row">
                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setTitle(e.target.value)} type="text" id="title"
                                                                       className="form-control form-control-lg" data-rule-required="true"
                                                                       name="title"/>
                                                                <label className="form-label" htmlFor="title">Title</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setfirstName(e.target.value)} type="text" id="firstName"
                                                                       name="firstName"
                                                                       className="form-control form-control-lg" data-rule-required="true"/>
                                                                <label className="form-label" htmlFor="firstName">First Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setlastName(e.target.value)} type="text" id="lastName"
                                                                       name="lastName"
                                                                       className="form-control form-control-lg" data-rule-required="true"/>
                                                                <label className="form-label" htmlFor="lastName">Last Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 d-flex align-items-center">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setPassword(e.target.value)} type="password"
                                                                       className="form-control form-control-lg" id="password" name="password" data-rule-required="true"/>
                                                                <label htmlFor="password" className="form-label">Password</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setConfirmpassword(e.target.value)} type="password"
                                                                       id="confirmPassword" name="confirmPassword" className="form-control form-control-lg" data-rule-required="true"/>
                                                                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setEmail(e.target.value)} type="email" id="emailAddress"
                                                                       className="form-control form-control-lg" name="emailAddress" data-rule-required="true"/>
                                                                <label className="form-label" htmlFor="emailAddress">Email</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setMobile(e.target.value)} type="tel" id="phoneNumber"
                                                                       name="phoneNumber"
                                                                       className="form-control form-control-lg" data-rule-required="true"/>
                                                                <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <label className="form-label select-label">Choose option</label>
                                                            <select onChange={(e) => setCategory(e.target.value)}
                                                                    className="custom-select form-control-lg" data-rule-required="true">
                                                                <option value="">Choose Category</option>
                                                                {
                                                                    cat.map((value, index) => {
                                                                        return (
                                                                            <>
                                                                                <option value={value.work_category}>{value.work_category}</option>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 pt-2">
                                                        <input
                                                            // onClick={handlePayment}
                                                            className="btn btn-outline-success btn-lg"
                                                               type="submit"
                                                            // type="button"
                                                               defaultValue="Sign Up!"/>
                                                    </div>
                                                    <div className="mt-4 pt-2">
                                                        <span className={'text-dark'}>Already a user? <Link to={'/user-login'}>Log in!</Link></span>
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