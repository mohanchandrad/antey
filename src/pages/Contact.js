
import React from "react";

import Header from "../layout/Header";
import { InnerBennar } from "../component/InnerBanner";
import { ContactBody } from "../layout/Contact";

export const Contact = () => {

    const dis =  {
        heading : 'Contact',
        title  : 'Avast Antivirus: Safeguarding Your Computer from Viral Threats with Advanced Security Measures, Real-time Detection, and Enhanced Protection for a Secure Digital Experience You Can Trust.',
        btn : ''
    }

    return (
        <>
                <Header black={'black'} />
                <InnerBennar banner_con = {dis} />
                <ContactBody />
        </>
    )
}