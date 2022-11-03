import {NavbarPublic} from "./NavbarPublic";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {RenderWorkPage} from "./RenderWorkPage";

export const WorkPage = () => {

    const [work, setWork] = useState([]);
    const [business, setBusiness] = useState('');
    const [category, setCategory] = useState('');
    const [buisnessID, setBusinessID] = useState('');

   useEffect(()=>{
       axios.get(`http://localhost:3000/get-work-info`)
           .then((res)=>{
              console.log(res.data);
              setWork(res.data);
           });

   },[])

    return (
        <>
            <NavbarPublic/>
            <BreadCrumb pageName={'Work'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div>
                            <h1 className={'text-center'}>FIND WORK</h1>
                            <h6 className={'text-center'}>from all around the globe...</h6>
                        </div>
                        <br/><br/><br/>
                        <div>
                            <div className={'row'}>
                                {work.map((value)=>{
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