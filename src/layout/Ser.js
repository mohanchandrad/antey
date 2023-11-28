
import React from "react";
import { ServiceCart } from "../component/ServiceCart";

export const Ser = () => {

  

    return(
        <>
        <div className="ser">
            <div className="container">
                <div className="ser_row d-flex" style={{ margin: '130px auto', flexWrap: 'wrap', justifyContent : 'center'}}>
                    <ServiceCart />
                </div>
            </div>
        </div>
        </>
    )
}