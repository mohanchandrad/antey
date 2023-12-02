
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = (props) => {
    const [toggle, SetToggle] = useState(false)
    const [toggleNav, SetToggleNav] = useState(false)

    window.addEventListener('scroll', () => {
        if(window.scrollY > 550 ) {
           document.getElementById('header').classList.add('sticky')
        } else{
            document.getElementById('header').classList.remove('sticky')
        }
    })

    return (
        <>
          
          <header id="header" >
          <nav className="container">
            <div className="logo">
              <h4 className="mb-0">Eset</h4>
            </div>
            <div className="nav-link" id="menu" style={{ transform: !toggleNav ? 'translate(-120%)' : 'translate(0%)' }}>
              <div className="mid-logo p-3">
              Eset
              </div>
              <ul className="mb-0">
                <li><Link to="/" className="links" onClick={() => SetToggleNav(false)}>Home</Link></li>
                <li><a href="#about" className="links" onClick={() => SetToggleNav(false)}>About us </a></li>
                <li><Link to="/service" className="links" onClick={() => SetToggleNav(false)}>Service</Link></li>
                <li><Link to="/blog" className="links" onClick={() => SetToggleNav(false)}>Blog</Link></li>
                <li><Link to="/contact" className="links" onClick={() => SetToggleNav(false)}>Contact</Link></li>
              </ul>
            </div>
            <div className="toggle-btn" onClick={() => SetToggleNav(!toggleNav)}>
              <span className={`${toggleNav === true && 'span_ro_fs'}`}></span>
              <span style={{ display: toggleNav === true && 'none' }}></span>
              <span className={`${toggleNav === true && 'span_ro_ls'}`}></span>
            </div>
          </nav>
        </header>
        </>
    )
}



export default Header