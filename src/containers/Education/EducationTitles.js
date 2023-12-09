import React from "react";
import "./style.css";
import Fade from "react-reveal";

export default function EducationTitles(props){

    return(
        <div className="education-main">
            <Fade left duration={3000}>
                <div className="education-image-div">
                    <img className="education-image" alt="" src={require(`../../assets/images/graduation.svg`).default}/>
                </div>
            </Fade>
            <Fade right duration={3000}>
                <div className="education-text">
                    <h1>
                        Education
                    </h1>
                    <h2>
                        Qualifications and Certificates
                    </h2>
                    <p>
                        Below you can find information about my Degree and Certificates that I have achieved.
                    </p>    
                </div>
            </Fade>
        </div>
    )
}