import {UserNavbar} from "./UserNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

export const UserChangePassword = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmPassword] = useState('');

    //retrieving user email
    useEffect(()=>{
        axios.get('http://localhost:3000/users/get-user-email')
            .then((res)=>{
               console.log('User Email'+res.data);
               setEmail(res.data);
            });
    },[])

    //Updating Password
    function updatePassword() {
        let formdata = new FormData();

        formdata.append('oldPassword', oldPassword);
        formdata.append('newPassword', newPassword);
        formdata.append('confirmNewPassword', confirmNewPassword);

        axios.post('http://localhost:3000/users/user-change-password', formdata)
            .then((res)=>{
                console.log(res.data);
                if(res.data==='oldNoMatch'){
                    let timerInterval
                    Swal.fire({
                        icon: "warning",
                        title: 'Old Password is incorrect',
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
                else if(res.data==='noMatch'){
                    let timerInterval
                    Swal.fire({
                        icon: "warning",
                        title: 'Password and Confirm Password do not match!',
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
                else{
                    let timerInterval
                    Swal.fire({
                        icon: "success",
                        title: 'Password Changed!',
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
                        navigate('/user-home')
                    })
                }
            })
    }


    return(
        <>
            <UserNavbar/>
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
                                                <form>
                                                    <div className="form-outline mb-4">
                                                        <input readOnly={true} type="text" id="form3Example1cg"
                                                               className="form-control form-control-lg" defaultValue={email}/>
                                                        <label className="form-label" htmlFor="form3Example1cg">Email</label>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setOldPassword(e.target.value)} type="email" id="form3Example3cg"
                                                               className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example3cg">Old Password</label>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setNewPassword(e.target.value)} type="password" id="form3Example4cg"
                                                               className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example4cg">New Password</label>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => setConfirmPassword(e.target.value)} type="password"
                                                               id="form3Example4cdg" className="form-control form-control-lg"/>
                                                        <label className="form-label" htmlFor="form3Example4cdg">Confirm password</label>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <button type="button" onClick={updatePassword}
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
}