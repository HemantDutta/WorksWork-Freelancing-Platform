import {UserNavbar} from "./UserNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {RenderWorkPage} from "./RenderWorkPage";

export const UserJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/users/getJobs')
            .then((res)=>{
                console.log(res.data);
                setJobs(res.data);
            })
    },[]);


    return (
        <>
            <UserNavbar/>
            <BreadCrumb pageName={'Jobs'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div>
                            <h1 className={'text-center'}>Your Jobs</h1>
                            <h6 className={'text-center'}>All the jobs that you have posted</h6>
                        </div>
                        <br/><br/><br/>
                        <div>
                            <div className={'row'}>
                                {jobs.map((value)=>{
                                    return(
                                        <RenderWorkPage id={value.id} img={value.cover_photos} title={value.worktitle} category={value.work_category} description={value.description} business={value.title}/>
                                    )
                                })

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}