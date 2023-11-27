
import React from "react";
import { Link } from "react-router-dom";

export const Bennar = (props) => {
    console.log(props);
    return (
        <>
            <div className="container"  style={{height: '88%', display: 'flex'}}>
                <dic className="bennar_title">
                    <div className="bennar_con">
                        <h1>{props.banner_content.banner_heading}</h1>
                        <p className="banner_disc">{props.banner_content.banner_title}</p>
                        <strong>{props.banner_content.banner_impt}</strong>
                        <Link className="btn">Contact Us</Link>
                    </div>
                </dic>
            </div>
        </>
    )
}