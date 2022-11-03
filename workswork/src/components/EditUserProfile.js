import {UserNavbar} from "./UserNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";


export const EditUserProfile = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [firstname, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [category, setCategory] = useState('');
    const [cat, setCat] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/users/get-user-profile')
            .then((res)=>{
                console.log(res.data);
                setTitle(res.data[0].title);
                setfirstName(res.data[0].first_name);
                setlastName(res.data[0].last_name);
                setMobile(res.data[0].mobile);
                setEmail(res.data[0].email);
                setCategory(res.data[0].work_category);
            })
    },[])

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

    function editProfile() {

        let formdata = new FormData();

        formdata.append('title', title);
        formdata.append('firstname', firstname);
        formdata.append('lastName', lastName);
        formdata.append('mobile', mobile);
        formdata.append('category', category);

        axios.post('http://localhost:3000/users/edit-profile', formdata)
            .then((res)=>{
                console.log(res.data);
                    if(res.data==='updated'){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Profile Updated!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/user-dashboard');
                    }
            })
    }

    return(
        <>
            <UserNavbar/>
            <BreadCrumb pageName={'Edit Profile'}/>
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
                                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Edit Profile</h3>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setTitle(e.target.value)} type="text" id="title"
                                                                       className="form-control form-control-lg" defaultValue={title}/>
                                                                <label className="form-label" htmlFor="title">Title</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setfirstName(e.target.value)} type="text" id="firstName"
                                                                       className="form-control form-control-lg" defaultValue={firstname}/>
                                                                <label className="form-label" htmlFor="firstName">First Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setlastName(e.target.value)} type="text" id="lastName"
                                                                       className="form-control form-control-lg" defaultValue={lastName}/>
                                                                <label className="form-label" htmlFor="lastName">Last Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input readOnly={true} type="email" id="emailAddress"
                                                                       className="form-control form-control-lg" defaultValue={email}/>
                                                                <label className="form-label" htmlFor="emailAddress">Email</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setMobile(e.target.value)} type="tel" id="phoneNumber"
                                                                       className="form-control form-control-lg" defaultValue={mobile}/>
                                                                <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <label className="form-label select-label">Choose option</label>
                                                            <select onChange={(e) => setCategory(e.target.value)}
                                                                    className="custom-select form-control-lg">
                                                                <option value="">Choose Category</option>
                                                                <option value={category} selected={true}>{category}</option>
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
                                                        <input onClick={editProfile} className="btn btn-outline-success btn-lg" type="button"
                                                               defaultValue="Save Changes"/>
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