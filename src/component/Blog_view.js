

import React from "react";

export const Blogs_view = (props) => {

    return (
        <>
            <div className="blog_view">
                {
                    props.view_Blog.map((item, index) => {
                        return (
                            <div key={index} className="blog_view_col">
                                <img src={item.image} />
                                <span>{item.time}</span>
                                <h3>{item.blog_heading}</h3>
                                <p>{item.blog_title}</p>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}