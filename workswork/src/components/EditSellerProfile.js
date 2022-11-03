import {FreelanceNavbar} from "./FreelanceNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

export const EditSellerProfile = () => {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [qualification, setQualification] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [photo, setPhoto] = useState('');
    const [cat, setCat] = useState([]);

    function editSellerProfile() {
        let formdata = new FormData();
        formdata.append('firstName', firstName)
        formdata.append('lastName', lastName)
        formdata.append('mobile', mobile)
        formdata.append('qualification', qualification)
        formdata.append('description', description)
        formdata.append('category', category)
        formdata.append('photo', photo)

        axios.post('http://localhost:3000/users/edit-seller-profile', formdata)
            .then((res)=>{
                console.log(res.data);
                if(res.data==='updated!'){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Profile Updated!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/seller-dashboard');
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

    function fetchSeller() {
        axios.get('http://localhost:3000/users/fetch-seller-info')
            .then((res) => {
                console.log(res.data);
                setFirstName(res.data[0].first_name);
                setLastName(res.data[0].last_name);
                setCategory(res.data[0].category);
                setDescription(res.data[0].description);
                setPhoto(res.data[0].cover_photo)
                setQualification(res.data[0].qualification);
                setMobile(res.data[0].mobile);
                setEmail(res.data[0].email);
            });
    }

    useEffect(() => {
        fetchCat()
        fetchSeller()
    }, []);



    return(
        <>
            <FreelanceNavbar/>
            <BreadCrumb pageName={'Edit Profile'}/>
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
                                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Edit Profile</h3>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName"
                                                                       className="form-control form-control-lg" defaultValue={firstName}/>
                                                                <label className="form-label" htmlFor="firstName">First Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setLastName(e.target.value)} type="text" id="lastName"
                                                                       className="form-control form-control-lg" defaultValue={lastName}/>
                                                                <label className="form-label" htmlFor="lastName">Last Name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setMobile(e.target.value)} type="text" id="Mobile"
                                                                       className="form-control form-control-lg" defaultValue={mobile}/>
                                                                <label className="form-label" htmlFor="Mobile">Mobile</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setEmail(e.target.value)} type="email" id="emailAddress"
                                                                       className="form-control form-control-lg" defaultValue={email}/>
                                                                <label className="form-label" htmlFor="emailAddress">Email</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setQualification(e.target.value)} type="text"
                                                                       id="qualification"
                                                                       className="form-control form-control-lg" defaultValue={qualification}/>
                                                                <label className="form-label" htmlFor="qualification">Qualification</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setPhoto(e.target.files[0])} type="file" id="photo"
                                                                       className="form-control-lg" defaultValue={photo}/>
                                                                <label className="form-label" htmlFor="photo">Photo</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <textarea onChange={(e) => setDescription(e.target.value)}
                                                                      id="description" className="form-control form-control-lg"
                                                                      placeholder="Describe yourself here.." defaultValue={description}/>
                                                            <label className="form-label">Description</label>
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
                                                        <input onClick={editSellerProfile} className="btn btn-outline-success btn-lg" type="button"
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