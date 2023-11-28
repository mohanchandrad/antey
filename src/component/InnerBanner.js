
import React from "react"
import { Link } from "react-router-dom"

export const InnerBennar = (props) => {

    return (
        <>
            <div className="innerBenar" style={{ backgroundImage: `url(${props.banner_con.banner_image})` }}>
                <div className="container" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1> {props.banner_con.heading} </h1>
                    <p className={`banner_disc d-${props.banner_con.title.length < 0} && 'none' `}> {props.banner_con.title} </p>
                    <Link to='' className={`${props.banner_con.btn <= 0 && 'd-none'} btn`}>{props.banner_con.btn}</Link>
                </div>
            </div>
        </>
    )
}

