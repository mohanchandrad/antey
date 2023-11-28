
import React from "react";
import Header from "../layout/Header";
import { InnerBennar } from "../component/InnerBanner";
import { Blogs } from "../layout/Blogs";
import Footer from "../layout/Footer";

export const Blog = () => {

    const dis =  {
        heading : 'Blog',
        title  : 'Avast Antivirus: Safeguarding Your Computer from Viral Threats with Advanced Security Measures, Real-time Detection, and Enhanced Protection for a Secure Digital Experience You Can Trust.',
        btn : 'Contact',
        banner_image : 'https://img.freepik.com/premium-photo/businessman-hold-low-poly-polygon-shield-with-tick-iconsecure-access-system-conceptbusiness-financial-warranty-investmentantivirus-concepttechnology-securityprotection-networksafe-data_150455-20138.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais'
    }

    return(
        <>
          <Header black = 'black' />
          <InnerBennar banner_con = {dis} />
          <Blogs />
          <Footer />
        </>
    )
}