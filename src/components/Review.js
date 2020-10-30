import React from "react"
import {Link} from "react-router-dom"
import User from "./User";

const Review = ({title,userId,id}) => {
    return (
        <div className="box-review">
            <User userId={userId}/>
            <p className="review-title">{title}</p>
            <Link to={`/app-food/posts/${id}`} className="link review-a">Comments <i className="fas fa-arrow-right"></i></Link>
        </div>
    )
}

export default Review;