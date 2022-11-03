import {FreelanceNavbar} from "./FreelanceNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useEffect, useState} from "react";
import {RenderWorkPage} from "./RenderWorkPage";
import axios from "axios";
import {RenderActiveJobs} from "./RenderActiveJobs";

export const SellerActiveJobs = () => {

    const [jobsInfo, setJobsInfo] = useState([]);

    function getActiveJobs() {
        axios.get('http://localhost:3000/users/get-active-jobs')
            .then((res)=>{
                console.log(res.data);
                setJobsInfo(res.data);
            })
    }

    useEffect(()=>{
        getActiveJobs();
    },[])

    return(
        <>
            <FreelanceNavbar/>
            <BreadCrumb pageName={'Active Jobs'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div>
                            <h1 className={'text-center'}>ACTIVE JOBS</h1>
                            <h6 className={'text-center'}>All your jobs that are currently active...</h6>
                        </div>
                        <br/><br/><br/>
                        <div>
                            <div className={'row'}>
                                {jobsInfo.map((value) => {
                                    return(
                                        <RenderActiveJobs img={value.work_photos} title={value.work_title} category={value.work_category}
                                                          description={value.work_description} originalBudget={value.budget_per_hour} bid={value.bid_amount} business={value.user_title}/>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}