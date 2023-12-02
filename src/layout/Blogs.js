
import React, { useState } from "react";
import { Blogs_view } from "../component/Blog_view";
import { BlogsTable } from "../component/BlogsTable";
import { IoClose } from "react-icons/io5";


import blog_1 from '../images/blog_4.jpg'
import blog_2 from '../images/blog_2.jpg'
import blog_3 from '../images/blog_4.jpg'

export const Blogs = () => {
    const [num, setNum] = useState(0)
    const [toggleModal, setToggleModal] = useState(false)

    const blog = [
        {
            image: blog_1,
            time: '28 Nov 2023 / 9 : 30 Pm',
            blog_heading: 'How do I install Avast Antivirus?',
            blog_title: 'Visit the official Avast website, download the installer, run the setup, and follow the on-screen instructions for installation.Visit the official Avast website, download the installer, run the setup, and follow the on-screen instructions for installation.Visit the official Avast website, download the installer, run the setup, and follow the on-screen instructions for installation.'
        },
        {
            image: blog_2,
            time: '28 Nov 2023 / 9 : 30 Pm',
            blog_heading: 'How do I install Avast Antivirus?',
            blog_title: 'Visit the official Avast website, download the installer, run the setup, and follow the on-screen instructions for installation.Visit the official Avast website, download the installer, run the setup, and follow the on-screen '
        },
        {
            image: blog_3,
            time: '28 Nov 2023 / 9 : 30 Pm',
            blog_heading: 'How do I install Avast Antivirus?',
            blog_title: 'Visit the official Avast website, download the installer, run the setup, and follow the on-screen instructions for installation.Visit the official Avast website, download the installer, run the setup, and follow the on-screen '
        }
    ]

 

    const view_Blog = blog.filter((item, index) => {
        if (index === num) {
            return item
        }
    })

    return (
        <>

            <div className="blog">
                <div className="container">
                    <div className="blog_row">

                        <div className="blog_col blog_views" style={{
                            display: toggleModal === true && 'flex'
                        }}>
                            <div className="close_modale" onClick={() => setToggleModal(false)}>
                                Close <IoClose />
                            </div>
                            <Blogs_view toggleModal={toggleModal} setToggleModal={setToggleModal} view_Blog={view_Blog} />
                        </div>
                        <div className="blog_col ">
                            <BlogsTable blog={blog} toggleModal={toggleModal} setToggleModal={setToggleModal} setNum={setNum} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}