import React from "react"
import {Link} from "react-router-dom" 

const LiHamburger = () => {
    return (
        <>
        <li><Link className="link" to="/">Home</Link><i className="fas fa-home"></i></li>
        <li><Link className="link" to="/search-recipe">Search recipes</Link><i className="fas fa-search"></i></li>
        <li><Link className="link" to="/review">See review</Link><i className="fas fa-thumbtack"></i></li>
        <li><a className="link" href="/app-food/#about">About us</a><i className="fas fa-question-circle"></i></li>
        <li><a className="link" href="/app-food/#gallery">Gallery</a><i className="fas fa-camera"></i></li>
        <li><Link className="link" to="/article">Read more!<i className="fas fa-file"></i></Link></li>
        </>
    )
}

export default LiHamburger;