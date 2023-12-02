
import React from "react";
import { Link } from "react-router-dom";

export const ServiceCart = () => {

    const service = [
        {
            heading: 'Antivirus Protection',
            title: 'Core service providing real-time protection against viruses, malware, and other online threats. Core service providing real-time protection against viruses, malware, and other online threats.',
            image: ''
        },

        {
            heading: 'Secure Browsing',
            title: 'Core service providing real-time protection against viruses, malware, and other online threats. Core service providing real-time protection against viruses, malware, and other online threats.',
            image: ''
        },

        {
            heading: 'Multi-Platform Support',
            title: 'Core service providing real-time protection against viruses, malware, and other online threats. Core service providing real-time protection against viruses, malware, and other online threats.',
            image: ''
        },

        {
            heading: 'Additional Features',
            title: 'Core service providing real-time protection against viruses, malware, and other online threats. Core service providing real-time protection against viruses, malware, and other online threats.',
            image: ''
        },

        {
            heading: 'Customer Support',
            title: 'Core service providing real-time protection against viruses, malware, and other online threats. Core service providing real-time protection against viruses, malware, and other online threats.',
            image: ''
        },

        {
            heading: 'Antivirus Protection',
            title: 'Avast Antivirus delivers top-notch protection, utilizing advanced technologies to detect and neutralize viruses and malware. With real-time monitoring and continuous updates, it offers a proactive defense, ensuring a secure digital environment against evolving cyber threats.',
            image: ''
        }
    ]

    return (
        <>

                {
                    service.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="serviceCart">
                                    <div className="cart_image">
                                        <img src="https://img.freepik.com/premium-photo/cloud-data-storage-with-binary-code-cyber-security-concept-3d-rendering_34478-1219.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" />
                                    </div>
                                    <div className="cartDetails">
                                        <h3>{item.heading}</h3>
                                        <p>{item.title}</p>
                                        <Link to="" className="main_btn">Contact</Link>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

                {/* <div className="serviceCart">
                    <div className="cart_image">
                        <img src="https://img.freepik.com/premium-photo/cloud-data-storage-with-binary-code-cyber-security-concept-3d-rendering_34478-1219.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" />
                    </div>
                    <div className="cartDetails">
                        <h3>Antivirus Protection</h3>
                        <p> Core service providing real-time protection against viruses, malware, and other online threats. Core service providing real-time protection against viruses, malware, and other online threats.</p>
                        <Link to="" className="main_btn">Contact</Link>
                    </div>
                </div>

                <div className="serviceCart">
                    <div className="cart_image">
                        <img src="https://img.freepik.com/premium-photo/cloud-data-storage-with-binary-code-cyber-security-concept-3d-rendering_34478-1219.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" />
                    </div>
                    <div className="cartDetails">
                        <h3>Antivirus Protection</h3>
                        <p> Core service providing real-time protection against viruses, malware, and other online threats. Core service providing real-time protection against viruses, malware, and other online threats.</p>
                        <Link to="/contact" className="main_btn">Contact</Link>
                    </div>
                </div> */}
        </>
    )
}