
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = (props) => {
    const [toggle, SetToggle] = useState(false)

    console.log(props.black.length);

    return (
        <>
            <div className='container '>
                <header >
                    <nav>
                        <div className="logo">
                            <h4 className="mb-0" style={{ color: props.black.length > 0 ? 'black' : '#ffff' }}>Epson</h4>
                        </div>
                        <div className="nav-link" id="menu" style={{ right: toggle === true ? '0' : '-100%' }}>
                            <div className="mid-logo p-3">
                                <IoClose style={{ width: '45px', height: '46px', fill: '#3b3b3b ' }} onClick={() => SetToggle(false)} />
                            </div>
                            <ul className="mb-0">
                                <li><Link to="/" className="links"  style={{ color: props.black.length > 0 && 'black'}}  onClick={() => SetToggle(false)}>Home</Link></li>
                                <li><a href="#about" className="links"  style={{ color: props.black.length > 0 && 'black'}}  >About us </a></li>
                                <li><Link to="/service" className="links"  style={{ color: props.black.length > 0 && 'black'}}  onClick={() => SetToggle(false)}>Service</Link></li>
                                <li><Link to="/blog" className="links"  style={{ color: props.black.length > 0 && 'black'}}  onClick={() => SetToggle(false)}>Blog</Link></li>
                                <li><Link to="/contact" className="links"  style={{ color: props.black.length > 0 && 'black'}}  onClick={() => SetToggle(false)}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="toggle-btn">
                            <IoMdMenu style={{ width: '47px', height: '47px', fill: 'fill: #3b3b3b' }} onClick={() => SetToggle(true)} />
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Header