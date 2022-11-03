import {NavbarPublic} from "./NavbarPublic";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useEffect} from "react";
import load from "load-script";
// import load from "load-script";

export const FreelancerSignup = () => {

    load('script.js', function (err, script) {
        if (err) {
            // print useful message
        } else {
            console.log(script.src);// Prints 'foo'.js'
            // use script
            // note that in IE8 and below loading error wouldn't be reported
        }
    });


    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [qualification, setQualification] = useState('');
    const [photo, setPhoto] = useState(null);
    const [vphoto, setVPhoto] = useState(null);
    const [description, setDescription] = useState('');
    const [cat, setCat] = useState([]);
    const [category, setCategory] = useState('');

    function UserSignup(e) {
        e.preventDefault();
        // console.log(firstName, lastName, mobile, email, password, confirmPassword, qualification, photo, description)
        let formdata = new FormData();
        formdata.append("firstname", firstName);
        formdata.append("lastname", lastName);
        formdata.append("mobile", mobile);
        formdata.append("email", email);
        formdata.append("qualification", qualification);
        formdata.append("description", description);
        formdata.append("password", password);
        formdata.append("confirmpassword", confirmPassword);
        formdata.append("photo", photo);
        formdata.append("vphoto", vphoto);
        formdata.append("category", category);
        // console.log(formdata);

        axios.post('http://localhost:3000/freelance-signup', formdata).then(res => {
            console.log(res.data);

            if (res.data === 'success') {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign Up Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                document.getElementById('sellerSignup').reset();

            } else if (res.data === 'noMatch') {
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Password and Confirm password do not match!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        });
    }

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

    return (
        <>
            <NavbarPublic/>
            <BreadCrumb pageName={'Seller Sign Up!'}/>
            <section className="w3l-contact-7 py-5 mb-5 ">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container mb-5">
                        {/*Form Start*/}
                        <section className="vh-100 gradient-custom">
                            <div className="container py-5 h-100">
                                <div className="row justify-content-center align-items-center h-100">
                                    <div className="col-12 col-lg-9 col-xl-7'">
                                        <div className="card shadow-2-strong card-registration" style={{borderRadius: '15px'}}>
                                            <div className="card-body p-4 p-md-5">
                                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Register as a Seller</h3>
                                                <form id={'sellerSignup'} onSubmit={UserSignup}>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input data-rule-required="true" onChange={(e) => setFirstName(e.target.value)}
                                                                       type="text" id="firstName"
                                                                       className="form-control form-control-lg" required="required"/>
                                                                <label className="form-label" htmlFor="firstName">First Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input data-rule-required="true" onChange={(e) => setlastName(e.target.value)}
                                                                       type="text" id="lastName"
                                                                       className="form-control form-control-lg" required="required"/>
                                                                <label className="form-label" htmlFor="lastName">Last Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setMobile(e.target.value)} type="text" id="Mobile"
                                                                       className="form-control form-control-lg" required="required"/>
                                                                <label className="form-label" htmlFor="Mobile">Mobile</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setEmail(e.target.value)} type="email" id="emailAddress"
                                                                       className="form-control form-control-lg" required="required"/>
                                                                <label className="form-label" htmlFor="emailAddress">Email</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 ">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setPassword(e.target.value)} type="password"
                                                                       className="form-control form-control-lg" id="password" required="required"/>
                                                                <label htmlFor="password" className="form-label">Password</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password"
                                                                       id="confirmPassword" className="form-control form-control-lg" required="required"/>
                                                                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setQualification(e.target.value)} type="text"
                                                                       id="qualification"
                                                                       className="form-control form-control-lg" required="required"/>
                                                                <label className="form-label" htmlFor="qualification">Qualification</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setPhoto(e.target.files[0])} type="file" id="photo"
                                                                       className="form-control-lg" required="required"/>
                                                                <label className="form-label" htmlFor="photo">Photo</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setVPhoto(e.target.files[0])} type="file" id="vphoto"
                                                                       className="form-control-lg" required="required"/>
                                                                <label className="form-label" htmlFor="photo">Student ID Photo</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <textarea onChange={(e) => setDescription(e.target.value)}
                                                                      id="description" className="form-control form-control-lg"
                                                                      placeholder="Describe yourself here.." required="required"/>
                                                            <label className="form-label">Description</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <label className="form-label select-label">Choose option</label>
                                                            <select onChange={(e) => setCategory(e.target.value)}
                                                                    className="custom-select form-control-lg" required="required">
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
                                                            // onClick={UserSignup}
                                                            className="btn btn-outline-success btn-lg" type="submit"
                                                               defaultValue="Sign Up!"/>
                                                    </div>
                                                    <div className="mt-4 pt-2">
                                                        <span className={'text-dark'}>Already a user? <Link
                                                            to={'/freelance-login'}>Log in!</Link></span>
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