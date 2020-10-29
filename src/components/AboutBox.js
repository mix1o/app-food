import React from "react"

const AboutBox = ({title,content,iCl}) => {
    return (
        <div className="about-box">
            <p className="about-title">{title}</p>
    <p className="about-content">{content}</p>
    <i className={iCl}></i>
        </div>
    )
}

export default AboutBox;