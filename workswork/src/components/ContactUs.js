import {NavbarPublic} from "./NavbarPublic";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import load from "load-script";

export const ContactUs = () => {

    load('../script.js', function (err, script) {
        if (err) {
            // print useful message
        } else {
            console.log(script.src);// Prints 'foo'.js'
            // use script
            // note that in IE8 and below loading error wouldn't be reported
        }
    });


    const [senderName, setSenderName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [userMessage, setUserMessage] = useState('');


    function sendMessage(){
        let formdata = new FormData();
        formdata.append('name', senderName)
        formdata.append('email',email)
        formdata.append('subject', subject)
        formdata.append('message', userMessage)

        axios.post('http://localhost:3000/admin/send-message', formdata)
            .then((res)=>{
                console.log(res.data);
                if(res.data==='sent'){}
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Message Sent',
                    showConfirmButton: false,
                    timer: 1500
                })
                document.getElementById('messageForm').reset();
            })
    }
    return(
        <>
            <NavbarPublic/>
            <BreadCrumb pageName={'Contact Us'}/>
            {/* contacts */}
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="title-content text-left">
                            <h6 className="title-subhny">Send a Message</h6>
                            <h3 className="title-w3l">Have a Question?</h3>
                            <p className="mb-4">Please let us know if you have a question want to leave a comment</p>
                        </div>
                        <div className="row map-content-9 mt-5 pt-lg-3">
                            <div className="col-lg-5 cont-details pr-lg-5 mb-lg-0 mb-sm-5 mb-4">
                                <address>
                                    <div className="ad-info-gd mb-4">
                                        <div classs="w3ad-icon text-center">
                                            <span className="fa fa-map-o" />
                                        </div>
                                        <div classs="w3ad-infin">
                                            <h5 className="mb-2">Our Location</h5>
                                            <p>Amritsar, Punjab</p>
                                        </div>
                                    </div>
                                    <div className="ad-info-gd mb-4">
                                        <div classs="col-3 w3ad-icon text-center">
                                            <span className="fa fa-envelope-o" />
                                        </div>
                                        <div classs="col-9 w3ad-infin">
                                            <h5 className="mb-2">Mail Us</h5>
                                            <p> <a href="#">wsw.nodemailer@gmail.com</a></p>
                                            <p> <a href="#">wsw.test.email@gmail.com</a></p>
                                        </div>
                                    </div>
                                    <div className="ad-info-gd mb-4">
                                        <div classs="w3ad-icon text-center">
                                            <span className="fa fa-volume-control-phone" />
                                        </div>
                                        <div classs="w3ad-infin">
                                            <h5 className="mb-2">Call Us</h5>
                                            <p><a href="#"> +91 987XXXXXX0</a></p>
                                            <p><a href="#"> +91 987XXXXXX0</a></p>
                                        </div>
                                    </div>
                                </address>
                            </div>
                            <div className="col-lg-7">
                                <form onSubmit={sendMessage} id="messageForm" method="post" className="text-right">
                                    <div className="form-grid mb-3">
                                        <input onChange={(e)=>setSenderName(e.target.value)} type="text" name="w3lName" id="w3lName" placeholder="Name*" data-rule-required="true" />
                                        <input onChange={(e)=>setEmail(e.target.value)} type="email" name="w3lSender" id="w3lSender" placeholder="Email*" data-rule-required="true" />
                                    </div>
                                    <input onChange={(e)=>setSubject(e.target.value)} type="text" name="w3lSubject" id="w3lSubject" placeholder="Subject" data-rule-required="true"/>
                                    <textarea onChange={(e)=>setUserMessage(e.target.value)} name="w3lMessage" id="w3lMessage" placeholder="Message" defaultValue={""} data-rule-required="true"/>
                                    <button type="submit"  className="btn btn-primary btn-style mt-3">Submit Message <span className="fa fa-paper-plane ml-3" aria-hidden="true" /></button>
                                </form>
                            </div>
                        </div>
                        <div className="map mt-lg-5 mt-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54352.139038624446!2d74.83510087532797!3d31.633612449909762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0xeea2605bee84ef7d!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1653680694854!5m2!1sen!2sin" width={1600} height={600} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                </div>
            </section>
            {/* //contacts */}
            <Footer/>
        </>
    )
}