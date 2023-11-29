
import React from "react";
import { Bennar } from "../component/Bennar";
import Header from '../layout/Header'
import { About } from "../layout/About";
import Footer from "../layout/Footer";
import { AboutContent } from "../component/AboutContent";
import { Service } from "../layout/Service";

export const Home = () => {

    const banner_con = {
        banner_heading: 'Run a Full System Scan',
        banner_title: 'Avast Antivirus: Safeguarding Your Computer from Viral Threats with Advanced Security Measures, Real-time Detection, and Enhanced Protection for a Secure Digital Experience You Can Trust.',
        banner_impt: 'Also available for Mac, Android, and iOS'
    }

    return (
        <>

            <Header black='black' />
            <div className="bennar">
                <Bennar banner_content={banner_con} />
                <div id="about" style={{marginTop: '120px'}}>
                    <About />
                    <AboutContent />
                </div>
                <Service />
                <Footer />
            </div>

        </>
    )
}