import React from "react";
import "./style.css";
import { experience } from "../../portfolio";
import ExperienceCard from "../../components/Experience/ExperienceCard";
import Fade from "react-reveal";

export default function JobHistory(props){

    return(
        <div>
            <div className="experience-main">
                <Fade left duration={3000} >
                    <img 
                        alt=""
                        className="experience-image"
                        src={require(`../../assets/images/experience.svg`)}
                    />
                </Fade>
                <Fade right duration={3000}>
                    <div className="experience-text">
                        <h1>
                            {experience["title"]}
                        </h1>
                        <p>
                            {experience["description"]}
                        </p>
                    </div>
                </Fade>
            </div>
            <div className="experience-jobs">
                    {experience["sections"]["experiences"].map((job,index)=>{
                        return <ExperienceCard key={index} theme={props.theme} job={job}/>
                    })}
                </div>
        </div>
    )
}