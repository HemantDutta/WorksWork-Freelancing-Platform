import {Link} from "react-router-dom";

export const BreadCrumb = (props) => {
    return(
        <>
            {/*/breadcrumb-bg*/}
            <div className="breadcrumb-bg py-5  w3l-inner-page-breadcrumb">
                <div className="container pt-lg-5 pt-md-3 p-lg-4 pb-md-3 my-lg-3">
                    <ul className="breadcrumbs-custom-path mt-3 text-center pt-5">
                        <li><Link to={'/'}>Home</Link></li>
                        <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true" /> {props.pageName} </li>
                    </ul>
                </div>
            </div>
            {/*//breadcrumb-bg*/}
        </>
    )
}