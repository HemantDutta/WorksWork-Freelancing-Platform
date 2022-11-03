import {NavbarPublic} from "./NavbarPublic";
import {BreadCrumb} from "./BreadCrumb";
import {searchContext} from "../App";
import {useContext} from "react";
import {RenderWorkPage} from "./RenderWorkPage";
import {Footer} from "./Footer";

export const SearchPage = () => {

    const {searchData, setSearchData} = useContext(searchContext);

    console.log(searchData);
    return (
        <>
            <NavbarPublic/>
            <BreadCrumb pageName={'Search'}/>
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
                                {searchData.map((value)=>{
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