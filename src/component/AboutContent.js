
import React from "react";

import cardImg from '../images/aboutCard.png'
import cardImg2 from '../images/aboutCard2.png'

import { Link } from "react-router-dom";

export const AboutContent = () => {
    return (
        <>
            <div className="container">
                <div className="aboutRow">
                    <div className="aboutCol">
                        <img src={cardImg} />
                    </div>
                    <div className="aboutCol">
                        <h3>Real-time Threat Detection</h3>
                        <p>Avast Antivirus employs Real-time Threat Detection, a cutting-edge feature that actively monitors and responds to potential security risks. Utilizing heuristic analysis, behavioral monitoring, and cloud-based threat intelligence, Avast goes beyond traditional methods, swiftly identifying and neutralizing emerging threats in real time. Operating seamlessly in the background without compromising system performance, this proactive approach ensures immediate response to suspicious activities, preventing potential damage and providing users with a secure digital environment.</p>
                        <Link className="main_btn">Contact Us</Link>
                    </div>
                </div>

                <div className="aboutRow innerRow">
                    <div className="aboutCol">
                        <h3>Real-time Threat Detection</h3>
                        <p>Avast Antivirus employs Real-time Threat Detection, a cutting-edge feature that actively monitors and responds to potential security risks. Utilizing heuristic analysis, behavioral monitoring, and cloud-based threat intelligence, Avast goes beyond traditional methods, swiftly identifying and neutralizing emerging threats in real time. Operating seamlessly in the background without compromising system performance, this proactive approach ensures immediate response to suspicious activities, preventing potential damage and providing users with a secure digital environment.</p>
                        <Link className="main_btn">Contact Us</Link>
                    </div>
                    <div className="aboutCol">
                        <img src={cardImg2} />
                    </div>
                </div>
            </div>
        </>
        // User-Friendly Interface
    )
}

