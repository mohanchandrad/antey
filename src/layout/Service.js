
import React from "react";
import { Cart } from "../component/Cart";

import ser_1 from '../images/ser_1.jpg'
import ser_2 from '../images/ser_2.jpg'
import ser_3 from '../images/ser_3.jpg'
import ser_4 from '../images/ser_4.jpg'

export const Service = () => {

    const services = [
        {
            service_title: 'Online Support Center',
            service_dis: 'Avast Support: FAQs, guides, and tickets for prompt issue resolution.',
            image : ser_1,
            btn : 'Read More',
            navigate : '/service',
            servise: 'service'
        },

        {
            service_title: 'Online Support Center',
            service_dis: 'Avast Support: FAQs, guides, and tickets for prompt issue resolution.',
            image : ser_2,
            btn : 'Read More',
            navigate : '/service',
            servise: 'service'
        },

        {
            service_title: 'Online Support Center',
            service_dis: 'Avast Support: FAQs, guides, and tickets for prompt issue resolution.',
            image : ser_3,
            btn : 'Read More',
            navigate : '/service',
            servise: 'service'
        },

        // {
        //     service_title: 'Online Support Center',
        //     service_dis: 'Avast Support: FAQs, guides, and tickets for prompt issue resolution.',
        //     btn : 'Read More',
        //     navigate : '/',
        //     image : ser_4,
        //     servise: 'service'
        // }
    ]
    return (
        <>
            <div id="service">
                <div className="container">
                    <div className="section_title">
                        <h2>Our Service</h2>
                        <p>Avast Antivirus: Unleashing Powerful Protection Against Viruses Your Shield for Digital Security with Advanced Features, Real-time Threat Defense, and Peace of Mind in Every Click</p>
                    </div>
                    <div className="service_row d-flex" style={{marginTop: '40px', justifyContent: 'center'}}>
                        <Cart services={services} />
                    </div>

                   
                </div>
            </div>
        </>
    )
}