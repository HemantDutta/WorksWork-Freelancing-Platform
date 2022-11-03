import {FreelanceNavbar} from "./FreelanceNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";

export const FreelancerHome = () => {
    return(
        <>
            <FreelanceNavbar/>
            <BreadCrumb/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}