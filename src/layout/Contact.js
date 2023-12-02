import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const ContactBody = () => {

    return (
        <>
            <div className="contact_">
                <div className="container">
                    <div className="section_title">
                        <h2>Follow Us</h2>
                        <p>Avast Antivirus: Unleashing Powerful Protection Against Viruses Your Shield for Digital Security with Advanced Features,</p>
                    </div>

                    <div className="con_row d-flex" style={{ justifyContent: "center" }}>
                        <div className="con_col">
                            <div className="foolw"> <a href="www.instagram.com"> < FaInstagram /> Instagram</a> </div>
                        </div>

                        <div className="con_col">
                            <div className="foolw"> <a href="www.facebook.com"> < FaFacebookF /> Facebook</a> </div>
                        </div>

                        <div className="con_col">
                            <div className="foolw"> <a href="www.twitter.com"> < IoLogoTwitter /> Twitter</a> </div>
                        </div>

                        <div className="con_col">
                            <div className="foolw"> <a href="www.linkedinIn.com"> < FaLinkedinIn /> LinkedinIn</a> </div>
                        </div>

                        <div className="con_col">
                            <div className="foolw"> <a href="tel:9087654321"> < FaPhoneAlt /> Contact</a> </div>
                        </div>

                        <div className="con_col">
                            <div className="foolw"> <a href="mailto:demo@gmail.com"> < IoMail /> Send Mail</a> </div>
                        </div>
                    </div>

                    <form style={{ display: 'block', width: '70%' }}>
                        <h3>Get The Contact</h3>
                        <div className="form_row d-flex" style={{ rowGap: '10px' }}>
                            <div className="form_row_col">
                                <input type="text" className="" placeholder="Enter Name..." />
                            </div>

                            <div className="form_row_col">
                                <input type="text" className="" placeholder="Email Id..." />

                            </div>
                        </div>
                        <input type="text" className="" placeholder="Subject" />
                        <textarea placeholder="Message..."></textarea>
                        <button type="button">Send The Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}