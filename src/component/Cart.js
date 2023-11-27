
import React from "react";
import { Link } from "react-router-dom";


export const Cart = (props) => {

    return (
        <>

            {
                props.services.map(item => {
                    return (
                        <div className="cart home_ser_cart">
                            <div className="card_image">
                                <img src={item.image} />
                            </div>
                            <div className="card_body">
                                <h3>{item.service_title}</h3>
                                <p>{item.service_dis}</p>
                                <Link to={item.navigate} className={`${item.btn.length > 0 ? 'main_btn' : 'd-none'}`} style={{padding: '8px 20px', margin: '15px auto 0px'}}>{item.btn}</Link>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}