import React from "react"
import AboutBox from "../AboutBox"

const AboutSection = () => {
    return (
        <div className="about" id="about">
        <h3 className="heading-3">About us</h3>
        <AboutBox title="We create food recipes" content="If you want to get fit but dread the thought of running on a treadmill or sweating it out at an aerobics class, then perhaps you may find Zuu fitness more appealing" iCl="fas fa-project-diagram"/>
        <AboutBox title="Health 10/10" content="Zuu fitness was first developed in Australia but has quickly spread all over the world, offering people a different and less structured way to keep fit." iCl="fas fa-heart"/>
        <AboutBox title="100% punctuality" content="There are several nice aspects to Zuu fitness, perhaps the most significant being that it is fun! If you can overcome your inhibitions and throw yourself into various movements, it can help you unleash the inner animal inside you" iCl="fas fa-clock"/>
    </div>
    )
}

export default AboutSection;