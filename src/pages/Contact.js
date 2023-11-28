
import React from "react";

import Header from "../layout/Header";
import { InnerBennar } from "../component/InnerBanner";
import { ContactBody } from "../layout/Contact";
import Footer from "../layout/Footer";

import con_banner from '../images/cont.jpg'

export const Contact = () => {

    const dis =  {
        heading : 'Contact',
        title  : '',
        btn : '',
        banner_image : con_banner
    }

    return (
        <>
                <Header black={'black'} />
                <InnerBennar banner_con = {dis} />
                <ContactBody />
                <Footer />
        </>
    )
}