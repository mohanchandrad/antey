
import React, { useState } from "react";
import { Blogs_view } from "../component/Blog_view";
import { BlogsTable } from "../component/BlogsTable";

import blog_1 from '../images/blog_4.jpg'
import blog_2 from '../images/blog_2.jpg'
import blog_3 from '../images/blog_4.jpg'

export const Blogs = () => {
    const [num, setNum] = useState(0)

    const blog = [
        {
            image : blog_1,
            time : '28 Nov 2023 / 9 : 30 Pm',
            blog_heading : 'How do I install Avast Antivirus?',
            blog_title : 'Visit the official Avast website, download the installer, run the setup, and follow the on-screen instructions for installation.Visit the official Avast website, download the installer, run the setup, and follow the on-screen instructions for installation.Visit the official Avast website, download the installer, run the setup, and follow the on-screen instructions for installation.'
        },
        {
            image : blog_2,
            time : '28 Nov 2023 / 9 : 30 Pm',
            blog_heading : 'How do I install Avast Antivirus?',
            blog_title : 'Visit the official Avast website, download the installer, run the setup, and follow the on-screen instructions for installation.Visit the official Avast website, download the installer, run the setup, and follow the on-screen '
        },
        {
            image : blog_3,
            time : '28 Nov 2023 / 9 : 30 Pm',
            blog_heading : 'How do I install Avast Antivirus?',
            blog_title : 'Visit the official Avast website, download the installer, run the setup, and follow the on-screen instructions for installation.Visit the official Avast website, download the installer, run the setup, and follow the on-screen '
        }
    ]

    const view_Blog = blog.filter((item, index) => {
        if(index === num) {
            return item
        }
    })

    console.log(num);

    return (
        <>

            <div className="blog">
                <div className="container">
                    <div className="blog_row">
                        <div className="blog_col blog_views">
                            <Blogs_view view_Blog={view_Blog} />
                        </div>
                        <div className="blog_col ">
                            <BlogsTable blog={blog} setNum={setNum} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}