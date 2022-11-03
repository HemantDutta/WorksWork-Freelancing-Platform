import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'
import {Footer} from "./Footer";
import {AdminNavbar} from "./AdminNavbar";
import {BreadCrumb} from "./BreadCrumb";

export const AdminChangePassword = () => {

    let navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("");
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleform() {
        console.log(`${email}, ${newPassword}, ${oldPassword}, ${confirmPassword}`);

        axios.post("http://localhost:3000/admin/admin-change-password", {
            email,
            oldPassword,
            newPassword,
            confirmPassword
        }).then(res => {
            console.log(res.data);

            if (res.data === 'changed') {
                Swal.fire('Your Password has been changed!');
            } else if (res.data === 'notLoggedIn') {
                navigate('/')
            }
            else if(res.data==='invalid'){
                Swal.fire('Invalid Email!')
            }
        });
    }

    return (
        <>
            <AdminNavbar/>
            <BreadCrumb pageName={'Change Password'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="mask d-flex align-items-center h-100">
                            <div className="container h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                        <div className="card" style={{borderRadius: '15px'}}>
                                            <div className="card-body p-5">
                                                <h2 className="text-uppercase text-center mb-5">Change Password</h2>
                                                <form id={'adminChangePassword'} onSubmit={handleform}>
                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setEmail(e.target.value)} type="text" id="form3Example1cg" data-rule-required="true"
                                                               className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example1cg">Email</label>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setOldPassword(e.target.value)} type="password" id="form3Example3cg" data-rule-required="true"
                                                               className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example3cg">Old Password</label>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setNewPassword(e.target.value)} type="password" id="form3Example4cg" data-rule-required="true"
                                                               className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example4cg">New Password</label>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" data-rule-required="true"
                                                               id="form3Example4cdg" className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example4cdg">Confirm password</label>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <button type="submit"
                                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
};