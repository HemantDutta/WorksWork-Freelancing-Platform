import {useState} from "react";
import axios from "axios";
import {AdminNavbar} from "./AdminNavbar";
import {Footer} from "./Footer";
import {BreadCrumb} from "./BreadCrumb";
import load from "load-script";
import {Link} from "react-router-dom";


//Admin Form Function
export const AddAdmin = () => {

    load('../script.js', function (err, script) {
        if (err) {
            // print useful message
        } else {
            console.log(script.src);// Prints 'foo'.js'
            // use script
            // note that in IE8 and below loading error wouldn't be reported
        }
    });

    //Use State Declaration
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [fullname, setFullName] = useState("");
    const [mobile, setMobile] = useState("");
    const [type, setType] = useState("");

    //form handling
    function handleForm(event) {
        event.preventDefault(); //to remove values from form
        console.log(`${email} ${password} ${confirmpassword} ${fullname} ${mobile} ${type}`);

        //Axios Post Method
        axios.post("http://localhost:3000/addadmin", {
            email,
            password,
            confirmpassword,
            fullname,
            mobile,
            type
        }).then(res => {
            console.log(res.data);
        }); //sent formData to /addadmin in index.js

    }

    //Form
    return (
        <>
            <AdminNavbar/>
            <BreadCrumb pageName={'Add Admin'}/>
            {/*Form Start*/}
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{borderRadius: '15px'}}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Admin</h3>
                                    <form id={'AddAdmin'} onSubmit={handleForm}>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="email"
                                                           className="form-control form-control-lg" data-rule-required="true"/>
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input onChange={(e) => setFullName(e.target.value)} type="text" id="fullname"
                                                           className="form-control form-control-lg" data-rule-required="true"/>
                                                    <label className="form-label" htmlFor="fullname">Full Name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline">
                                                    <input onChange={(e) => setPassword(e.target.value)} type="password"
                                                           className="form-control form-control-lg" id="password" data-rule-required="true"/>
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password"
                                                           id="confirmPassword" className="form-control form-control-lg" data-rule-required="true"/>
                                                    <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input onChange={(e) => setMobile(e.target.value)} type="tel" id="phoneNumber" data-rule-required="true"
                                                           className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="adminType">Admin Type</label>
                                                    <select className={'form-control'} onChange={(e) => setType(e.target.value)} name={'type'} id={'type'} data-rule-required="true">
                                                        <option value={''}>Select Type...</option>
                                                        <option value="Admin">Admin</option>
                                                        <option value="coAdmin">Co-Admin</option>
                                                    </select><br/><br/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <input className="btn btn-outline-success btn-lg" type="submit"
                                                   defaultValue="Add Admin!"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Form End*/}
            <Footer/>
        </>
    )
}

