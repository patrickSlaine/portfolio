import React from "react";
import { ReactSVG } from "react-svg";
import "./style.css";
export default function EducationTitles(props){

    return(
        <div className="education-main">
            <div className="education-hat">
                <ReactSVG src={require(`../../assets/images/graduationHat.svg`)}/>
            </div>
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
        </div>
    )
}