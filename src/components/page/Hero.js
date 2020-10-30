import React from "react"
import {Link} from "react-router-dom"
const Hero = () => {
    return (
        <div className="hero">
        <div className="hero-box">
            <h1 className="heading-1">Welcome on Foody!</h1>
            <p className="p-hero"> Here you can see <br/>the best food recipes</p>
            <Link className="link link-hero" to="/article">Read more!</Link>
        </div>
    </div>
    )
}

export default Hero;