import {AdminNavbar} from "./AdminNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import axios from "axios";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";

export const ViewSellerApp = () => {

    const [sellerInfo, setSellerInfo] = useState([]);
    const [sellerID, setSellerID] = useState('');

    function fetchSeller() {
        axios.get('http://localhost:3000/admin/admin-seller-info')
            .then((res) => {
                console.log(res.data);
                setSellerInfo(res.data);
            });
    }

    useEffect(() => {
        fetchSeller()
    }, []);

    function sellerStatus(status, id){


        let formdata = new FormData();
        formdata.append('sellerID', id)
        formdata.append('sellerStat', status)

        axios.post('http://localhost:3000/admin/set-seller-status', formdata)
            .then((res)=>{
                console.log(res.data);
                if (res.data === 'sellerApproved') {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Seller Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchSeller();
                } else if (res.data === 'sellerBlocked') {
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'Seller Blocked',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchSeller();
                }
            })
    }


    return (
        <>
            <AdminNavbar/>
            <BreadCrumb pageName={'Seller Applications'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        {/*Seller Applications Table*/}
                        <table className="table table-dark">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Qualification</th>
                                <th scope="col">Description</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Verification</th>
                                <th scope="col" colSpan={2}>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {sellerInfo.map(((value, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}
                                        </th>
                                        <td>{value.first_name + " " +value.last_name}</td>
                                        <td>{value.category}</td>
                                        <td>{value.qualification}</td>
                                        <td>{value.description}</td>
                                        <td><img src={`http://localhost:3000/${value.cover_photo}`} width={150}/></td>
                                        <td><img src={`http://localhost:3000/${value.verification}`} width={150}/></td>
                                        <td>{value.status}</td>
                                        {
                                            value.status === 'Approved' &&
                                            <td>
                                                <button onClick={() => sellerStatus('Blocked', value.id)} className={'btn btn-outline-light btn-sm'}>Reject</button>
                                            </td>

                                        }
                                        {
                                            value.status === 'Pending' &&
                                            <>
                                                <td>
                                                    <button onClick={() => sellerStatus('Approved', value.id)} className={'btn btn-outline-success btn-sm'}>Approve</button>
                                                </td>
                                                <td>
                                                    <button onClick={() => sellerStatus('Blocked', value.id)} className={'btn btn-outline-danger btn-sm'}>Reject</button>
                                                </td>
                                            </>
                                        }
                                        {
                                            value.status === 'Blocked' &&
                                            <td>
                                                <button onClick={() => sellerStatus('Approved', value.id)} className={'btn btn-outline-light btn-sm'}>Approve</button>
                                            </td>
                                        }

                                    </tr>
                                )
                            }))}
                            </tbody>
                        </table>
                        {/*Seller Applications Table End*/}
                    </div>
                </div>
            </section>
            <Footer/>

        </>
    )
}