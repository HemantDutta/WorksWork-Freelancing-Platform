import {UserNavbar} from "./UserNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useEffect} from "react";
import axios from "axios";
import {useState} from "react";
import Swal from "sweetalert2";

export const ViewBids = () => {


    const [bidInfo, setBidInfo] = useState([]);
    const [bidID, setBidID] = useState('');


    function getBids() {
        axios.get(`http://localhost:3000/users/get-bid-info`)
            .then((res) => {
                console.log(res.data);
                setBidInfo(res.data);
            })
    }

    useEffect(() => {
        getBids()
    }, [])

    function userAction(action, id) {
        let formdata = new FormData();

        formdata.append('action', action)
        formdata.append('bidID', id)
        axios.post(`http://localhost:3000/users/set-status`, formdata)
            .then((res) => {
                console.log(res.data);
                if (res.data === 'BidApproved') {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Bid Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    getBids();
                } else if (res.data === 'BidRejected') {
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'Bid Rejected',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    getBids();
                }
            })
    }

    return (
        <>
            <UserNavbar/>
            <BreadCrumb pageName={'View Bids'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        {/*Bids Table*/}
                        <table className="table table-dark">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Work Name</th>
                                <th scope="col">Freelancer Name</th>
                                <th scope="col">Budget Offered</th>
                                <th scope="col">Bid Offered</th>
                                <th scope="col">Message From Freelancer</th>
                                <th scope="col">Status</th>
                                <th scope="col" colSpan={2}>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {bidInfo.map(((value, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}
                                        </th>
                                        <td>{value.title}</td>
                                        <td>{value.first_name + " " +value.last_name}</td>
                                        <td>${value.budget_per_hour}</td>
                                        <td>${value.bid_amount}</td>
                                        <td>{value.message}</td>
                                        <td>{value.status}</td>
                                        {
                                            value.status === 'Active' &&
                                            <td>
                                                <button onClick={() => userAction('Declined', value.id)} className={'btn btn-outline-light btn-sm'}>Reject</button>
                                            </td>

                                        }
                                        {
                                            value.status === 'Pending' &&
                                            <>
                                                <td>
                                                    <button onClick={() => userAction('Active', value.id)} className={'btn btn-outline-success btn-sm'}>Approve</button>
                                                </td>
                                                <td>
                                                    <button onClick={() => userAction('Declined', value.id)} className={'btn btn-outline-danger btn-sm'}>Reject</button>
                                                </td>
                                            </>
                                        }
                                        {
                                            value.status === 'Declined' &&
                                            <td>
                                                <button onClick={() => userAction('Active', value.id)} className={'btn btn-outline-light btn-sm'}>Approve</button>
                                            </td>
                                        }

                                    </tr>
                                )
                            }))}
                            </tbody>
                        </table>
                        {/*Bids Table End*/}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}