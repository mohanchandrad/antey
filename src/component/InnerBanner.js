
import React from "react"
import { Link } from "react-router-dom"

export const InnerBennar = (props) => {
    return (
        <>
            <div className="innerBenar" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/businessman-hand-holding-pressing-icon-phone-mail-telephone-message-post-person-user-customer-service-call-center-contact-us-concept-banner-copy-space-contact-methods_150455-16939.jpg?w=900)' }}>
                <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1> {props.banner_con.heading} </h1>
                    {/* <p className="banner_disc"> {props.banner_con.title} </p> */}
                    <Link to='' className={`${props.banner_con.btn <= 0 && 'd-none'}`}>{props.banner_con.btn}</Link>
                </div>
            </div>
        </>
    )
}

