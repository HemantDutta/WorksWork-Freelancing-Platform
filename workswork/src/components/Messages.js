import {AdminNavbar} from "./AdminNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useEffect, useState} from "react";
import axios from "axios";

export const Messages = () => {

    const [messages, setMessages] = useState([]);

    function getMessages(){
        axios.get('http://localhost:3000/admin/get-messages')
            .then((res)=>{
                console.log(res.data);
                setMessages(res.data)
            })
    }

    useEffect(()=>{
        getMessages()
    },[])
    return(
        <>
            <AdminNavbar/>
            <BreadCrumb pageName={'Messages'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        {/*Bids Table*/}
                        <table className="table table-dark">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Message</th>
                            </tr>
                            </thead>
                            <tbody>
                            {messages.map(((value, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}
                                        </th>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.subject}</td>
                                        <td>{value.message}</td>
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