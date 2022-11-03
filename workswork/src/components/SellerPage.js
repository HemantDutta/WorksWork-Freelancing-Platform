import {NavbarPublic} from "./NavbarPublic";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useEffect, useState, useTransition} from "react";
import axios from "axios";
import {RenderSellerCard} from "./RenderSellerCard";

export const SellerPage = () => {

    const [seller, setSeller] = useState([]);

    function fetchSeller() {
        axios.get('http://localhost:3000/users/fetch-sellers')
            .then((res) => {
                console.log(res.data);
                setSeller(res.data);
            });
    }

    useEffect(() => {
        fetchSeller()
    }, [])
    

    return (
        <>

            <NavbarPublic/>
            <BreadCrumb pageName={'Find Sellers'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div>
                            <h1 className={'text-center'}>FIND SELLERS</h1>
                            <h6 className={'text-center'}>That suit your needs..</h6>
                        </div>
                        <br/><br/><br/>
                        <div>
                            <div className={'row'}>
                                {seller.map((value) => {
                                    return(
                                    <RenderSellerCard id={value.id} img={value.cover_photo} title={value.first_name} category={value.category}
                                                      description={value.description}/>
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