import React from "react"

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="f-row d-flex" style={{ justifyContent: 'space-between', paddingBottom: '20px' }}>
                        <div className="f-col">
                            <h2>Avast</h2>

                            <h3>Follow  Us</h3>
                            <ul className="d-flex social_link" style={{ gap: '20px', listStyle: 'none' }}>
                                <li><a href=""> < FaInstagram /></a></li>
                                <li><a href=""> <FaFacebookF /></a></li>
                                <li><a href=""> <IoLogoTwitter /></a></li>
                                <li><a href=""> <FaLinkedinIn /></a></li>
                            </ul>
                        </div>

                        <div className="f-col">
                            <h3>Quick Link</h3>
                            <ul className="quick_link f-link" style={{ listStyle: 'none' }}>
                                <li><a href=""> Home </a></li>
                                <li><a href=""> About Us</a></li>
                                <li><a href=""> Service </a></li>
                                <li><a href=""> Blog </a></li>
                            </ul>
                        </div>

                        <div className="f-col">
                            <h3>Leagal</h3>
                            <ul className="legals f-link" style={{ listStyle: 'none' }}>
                                <li><a href=""> privacy policy </a></li>
                                <li><a href=""> terms & conditions</a></li>
                                <li><a href=""> terms & conditions </a></li>
                            </ul>
                        </div>

                        <div className="f-col">
                            <h3>Contact</h3>
                            <ul className="f-add" style={{ gap: '20px', listStyle: 'none' }}>
                                <li><a href=""> < FaPhoneAlt /> +91 0987654321</a></li>
                                <li><a href=""> <IoMail /> demo@gmail.com</a></li>
                                <li><a href=""> <FaLocationDot /> Lorem ipsum dolor sit amet, consectetur adipisicing elit</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyRight" style={{ textAlign: 'center', padding: '30px 0px 0px', borderTop: '1px solid #566685' }}>
                        <a href="#" style={{ textDecoration: 'none', color: '#ffff' }}>@copy right by 2023</a>
                    </div>
                </div>
            </footer>
        </>
    )
}



export default Footer