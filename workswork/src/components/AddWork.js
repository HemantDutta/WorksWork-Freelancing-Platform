import {UserNavbar} from "./UserNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const AddWork = () => {

    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState(null);
    const [description, setDescription] = useState('');
    const [workingHour, setWorkingHour] = useState('');
    const [budgetPerHour, setBudgetPerHour] = useState('');
    const [lastDateApply, setLastDateApply] = useState('');
    const [workProviderId, setWorkProviderId] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:3000/users/get-user-id')
            .then((res)=>{
                console.log('Work Provider Id: '+res.data[0].id);
                setWorkProviderId(res.data[0].id);
            })
    })

    function WorkSubmit() {
        let formdata = new FormData();

        formdata.append('title', title);
        formdata.append('photo', photo);
        formdata.append('description', description);
        formdata.append('workingHour', workingHour);
        formdata.append('budgetPerHour', budgetPerHour);
        formdata.append('lastDateApply', lastDateApply);
        formdata.append('workProviderId', workProviderId);

        axios.post('http://localhost:3000/users/add-work', formdata)
            .then((res)=>{
                console.log(res.data);

                if(res.data==='added'){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Work Added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    document.getElementById('addWork').reset();
                }
            })

    }
    return (
        <>
            <UserNavbar/>
            <BreadCrumb pageName={'Add Work'}/>
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
                                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Work</h3>
                                                <form id={'addWork'}>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setTitle(e.target.value)} type="text" id="title"
                                                                       className="form-control form-control-lg"/>
                                                                <label className="form-label" htmlFor="title">Title</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setPhoto(e.target.files[0])} type="file" id="photo"
                                                                       className="form-control-lg"/>
                                                                <label className="form-label" htmlFor="photo">Photo</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setBudgetPerHour(e.target.value)} type="text" id="budgetperhour"
                                                                       className="form-control form-control-lg"/>
                                                                <label className="form-label" htmlFor="budgetperhour">Budget/hour</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setWorkingHour(e.target.value)} type="text" id="workingHour"
                                                                       className="form-control-lg"/>
                                                                <label className="form-label" htmlFor="workingHour">Working Hour</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 mb-4">
                                                            <div className="form-outline">
                                                                <input onChange={(e) => setLastDateApply(e.target.value)} type="date" id="lastDateApply"
                                                                       className="form-control form-control-lg"/>
                                                                <label className="form-label" htmlFor="lastDateApply">Last Date To Apply</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <textarea onChange={(e) => setDescription(e.target.value)}
                                                                      id="description" className="form-control form-control-lg"
                                                                      placeholder="Describe the jobs and your needs here..."/>
                                                            <label className="form-label"></label>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 pt-2">
                                                        <input onClick={WorkSubmit} className="btn btn-outline-success btn-lg" type="button"
                                                               defaultValue="Add"/>
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