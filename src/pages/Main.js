import React from "react"
import Header from "../components/page/Header";
import Hero from "../components/page/Hero";
import AboutSection from "../components/page/AboutSection";
import Footer from "../components/page/Footer";
import Gallery from "../components/page/Gallery";

const Main = () => {
    return (
        <>
           <Header/>
            <Hero/>
            <AboutSection/>
            <Gallery/>
            <Footer/>
        </>
    )
}

export default Main;