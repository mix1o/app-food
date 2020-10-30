import React from "react"
import User from "./User"

const Title = ({userId,title}) => {
    return (
        <div className="box-review title">
        <User userId={userId}/>
        <p className="review-title">{title}</p>
    </div>
    )
}

export default Title;