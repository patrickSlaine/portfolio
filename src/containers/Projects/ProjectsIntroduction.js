import React from "react";
import "./style.css";

export default function ProjectsIntroduction(props){
    
    return(
        <div className="projects-main">
            <img
                alt=""
                className="projects-image"
                src={require(`../../assets/images/projectsImage.svg`)}
            />
            <div className="projects-text">
                <h1>
                    Projects
                </h1>
                <p>
                    My curiosity to continue learning about new technologies has driven me to take on new challenges. My primary focus is too continue to upskill as a Full-Stack Developer. The projects listed I have finished and I am currently working on are listed below. However not all of the projects are currently available on my GitHub.
                </p>
            </div>
        </div>
    )
}