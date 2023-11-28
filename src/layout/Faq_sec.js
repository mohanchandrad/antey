
import React from "react";

export const Faq_sec = () => {

    const faq_qustion = [
        {
            qustion: 'What is Avast Antivirus?',
            ans: 'Avast Antivirus is a cybersecurity solution designed to protect your computer from viruses, malware, and other online threats.'
        },

        {
            qustion: 'How do I update Avast Antivirus?',
            ans: 'Avast updates automatically in the background. You can also manually check for updates in the settings.'
        },

        {
            qustion: 'How do I contact Avast support?',
            ans: 'You can typically reach Avast support through their Online Support Center, which may include chat, email, or ticket submission options.'
        },

        {
            qustion: 'Can I use Avast on multiple devices?',
            ans: 'Avast offers multi-device subscriptions, allowing you to protect multiple devices under a single license.'
        }
    ]

    return (
        <>
            <div className="faq">
                <div className='container'>
                    <div className="section_title">
                        <h2>F.A.Q</h2>
                        <p>Avast Antivirus: Unleashing Powerful Protection Against Viruses Your Shield for Digital Security with Advanced Features, </p>
                    </div>
                    {
                        faq_qustion.map(item => {
                            return (
                                <>
                                    <div className="faq_qus">
                                        <h3>{item.qustion}</h3>
                                        <p>{item.ans}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}