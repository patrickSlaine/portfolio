import React from "react";
import "./style.css";
import { experience } from "../../portfolio";
import ExperienceCard from "../../components/Experience/ExperienceCard";

export default function JobHistory(props){

    return(
        <div>
            <div className="experience-main">
                <img 
                    alt=""
                    className="experience-image"
                    src={require(`../../assets/images/experience.svg`)}
                />
                <div className="experience-text">
                    <h1>
                        {experience["title"]}
                    </h1>
                    <p>
                        {experience["description"]}
                    </p>
                </div>
            </div>
            <div className="experience-jobs">
                    {experience["sections"]["experiences"].map((job,index)=>{
                        return <ExperienceCard key={index} theme={props.theme} job={job}/>
                    })}
                </div>
        </div>
    )
}