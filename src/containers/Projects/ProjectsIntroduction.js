import React from "react";
import "./style.css";
import Fade from "react-reveal";

export default function ProjectsIntroduction(props){
    
    return(
        <div className="projects-main">
            <Fade left duration={3000}>
                <img
                    alt=""
                    className="projects-image"
                    src={require(`../../assets/images/projectsImage.svg`).default}
                />
            </Fade>
            <Fade right duration={3000}>
                <div className="projects-text">
                    <h1>
                        Projects
                    </h1>
                    <p>
                    I am striving to create a portfolio of projects that demonstrate my competency with a wide range of technologies. My long-term vision is to become an experienced Full-Stack Developer and I endeavour share my experience with others through my projects and my Blog. The listed projects are the ones which I am currently working on. Feel free to reach out if they interest you.
                    </p>
                </div>
            </Fade>
        </div>
    )
}