
import React from "react";

export const BlogsTable = (props) => {

    const hendleModal = () => {
        if (window.innerWidth < 1100) {
            props.setToggleModal(true)
        }
    }
    return (
        <>

            {
               props.blog.map((item, index) => {
                return (
                        <div key={index} className="blog_table">
                            <div className="blog_cols ">
                                <div className="blogs_images">
                                    <img src={item.image} width='100%' />
                                </div>
                            </div>

                            <div className="blog_cols ">
                                <div className="blogs_con">
                                    <h4>{item.blog_heading}</h4>
                                    <p> <span className="d-block">{item.time}</span> </p>
                                    <p> <button onClick={() => { props.setNum(index); hendleModal() }}>View More...</button></p>
                                </div>
                            </div>
                        </div>
                )
            })
            }
        </>
    )
}