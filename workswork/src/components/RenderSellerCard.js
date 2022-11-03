import {useNavigate} from "react-router-dom";

export const RenderSellerCard = (props) => {

    const navigate = useNavigate();
    function sendSellerInfo(id){
        navigate(`/seller-view-page/${id}`);
    }

    console.log(props.id,props.img, props.title, props.category, props.description);
    return (
        <>
            <div className="col-lg-4">
                <div className="card card-cascade mb-5">
                    <div className="view view-cascade overlay">
                        <img className="card-img-top" src={`http://localhost:3000/${props.img}`} alt="Card image cap" height={'200px'} width={'200px'}/>
                    </div>
                    {/* Card content */}
                    <div className="card-body card-body-cascade text-center" style={{height:"265px"}}>
                        {/* Title */}
                        <h4 className="card-title"><strong>{props.title}</strong></h4>
                        {/* Subtitle */}
                        <h6 className="font-weight-bold text-success py-2">{props.category}</h6>
                        {/* Text */}
                        <p className="card-text">{props.description}
                        </p><br/>
                        <button onClick={()=>sendSellerInfo(props.id)} className={'btn btn-outline-success'}>View Seller</button>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer text-muted text-center">
                        Last Active: <span className={'text-success'}>2 days ago</span>
                    </div>
                </div>
            </div>
        </>
    )
}